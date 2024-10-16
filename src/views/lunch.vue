<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Navigation from "../components/Navigation.vue";

const router = useRouter();
const store = useStore();

// 定义 ref
const foods = ref([]);
const isLoading = ref(true);
const error = ref(null);

const userInfo = computed(() => store.state.user.userInfo);
const bodyData = computed(() => store.state.user.bodyData);

// 修改 getImageUrl 函数
const getImageUrl = (filename) => {
  if (!filename) return "";
  // 假设后端返回的是完整的URL
  if (filename.startsWith("http")) {
    return filename;
  }
  // 如果不是完整URL，则构建完整路径
  return `http://8.134.144.65:8083/cofood/images/${filename}`;
};

// 添加一个处理图片加载错误的函数
const handleImageError = (food) => {
  console.error(`Error loading image for ${food.foodName}:`, food.picture);
  // 设置一个默认图片
  return "https://via.placeholder.com/100x100.png?text=No+Image";
};

onMounted(async () => {
  console.log("Body data:", bodyData.value);
  try {
    if (!userInfo.value || !bodyData.value) {
      error.value = "请先登录以获取个性化推荐";
      isLoading.value = false;
      return;
    }

    const requestData = new FormData();
    requestData.append("age", bodyData.value.age?.toString() || "");
    // 确保 gender 是字符串 "1" 或 "2"
    requestData.append("gender", bodyData.value.gender === 1 ? "1" : "2");
    requestData.append("height", bodyData.value.height?.toString() || "");
    requestData.append("weight", bodyData.value.weight?.toString() || "");

    const response = await axios.post(
      "http://8.134.144.65:8083/cofood/recommend",
      requestData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${store.state.token}`,
        },
      }
    );

    console.log("Response:", response.data);

    if (response.data && response.data.lunch) {
      foods.value = response.data.lunch;
      console.log("foods.value:", foods.value);
      foods.value.forEach((food, index) => {
        console.log(`Food ${index + 1}:`, food);
        console.log(`Original picture filename:`, food.picture);
        console.log(`Processed picture URL:`, getImageUrl(food.picture));
      });
    } else {
      error.value = "获取食物推荐失败: 未收到预期的数据";
    }
  } catch (err) {
    console.error("Error details:", err);
    error.value = "获取食物推荐时出错: " + err.message;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container">
    <Navigation></Navigation>
    <MealRecommand></MealRecommand>
    <h2>午餐推荐</h2>
    <div class="topTitle">
      <div class="back">
        <router-link to="/recommand">点击返回推荐页</router-link>
      </div>
    </div>

    <div v-if="isLoading">正在加载推荐...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-if="foods.length > 0" class="foods">
        <div v-for="food in foods" :key="food.foodId" class="food">
          <img
            :src="getImageUrl(food.picture)"
            :alt="food.foodName"
            class="img1"
            @error="$event.target.src = handleImageError(food)"
          />
          <div class="food-info">
            <div class="food-name">{{ food.foodName }}</div>
            <div>重量: {{ food.quality }}g</div>
            <div>卡路里: {{ food.calories }}</div>
          </div>
        </div>
      </div>
      <div v-else>暂无推荐食物</div>
    </div>
  </div>
</template>

<style scoped>
body {
  background: #f4f8fa;
}
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 根据子元素的最小高度调整容器的高度 */
  height: auto; /* 让容器的高度根据内容自动调整 */
  margin: 0;
  position: relative;
  background: #f4f8fa;
}

h2 {
  width: 1200px;
  position: absolute;
  top: 90px;
}

.img1 {
  width: 100px; /* 设置一个合适的宽度 */
  height: 100px; /* 设置一个合适的高度 */
  object-fit: cover; /* 确保图片填充整个容器 */
  border-radius: 8px; /* 可选：添加圆角 */
}

.food {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
}

.foods {
  position: absolute;
  top: 200px;
  left: 740px;
  width: 937px;
  display: flex;
}

.food-info {
  margin-left: 20px;
  flex-grow: 1;
  word-break: break-all;
}
</style>
