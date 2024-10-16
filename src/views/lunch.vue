<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

// 定义 ref
const foods = ref([]);
const isLoading = ref(true);
const error = ref(null);

const userInfo = computed(() => store.state.user.userInfo);
const bodyData = computed(() => store.state.user.bodyData);

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

    console.log("Request data:");
    for (let [key, value] of requestData.entries()) {
      console.log(key, value);
    }

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

    if (response.data.code === 200) {
      foods.value = response.data.lunch || response.data.data;
      // 添加日志来检查食物数据
      console.log("Foods data:", foods.value);
    } else {
      error.value =
        "获取食物推荐失败: " + (response.data.message || response.data.msg);
    }
  } catch (err) {
    console.error("Error details:", err);
    if (err.response) {
      console.error("Response data:", err.response.data);
      console.error("Response status:", err.response.status);
      console.error("Response headers:", err.response.headers);
    }
    error.value = "获取食物推荐时出错: " + err.message;
  } finally {
    isLoading.value = false;
  }
});

// 添加一个函数来处理图片 URL
const getImageUrl = (url) => {
  if (!url) return ""; // 如果 URL 为空，返回空字符串
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url; // 如果是完整的 URL，直接返回
  }
  // 如果是相对路径，添加基础 URL
  return `http://8.134.144.65:8083${url}`;
};
</script>

<template>
  <div class="container">
    <Navigation></Navigation>
    <mealRecommand></mealRecommand>
    <h2>午餐推荐</h2>
    <div class="topTitle">
      <div class="back">
        <router-link to="./recommand">点击返回推荐页</router-link>
      </div>
    </div>
    <div v-if="isLoading">正在加载推荐...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="foods">
      <ul>
        <li v-for="food in foods" :key="food.foodName" class="food">
          <img :src="food.picture" :alt="food.foodName" class="img1" />
          <div class="food-info">
            <div>{{ food.foodName }}</div>
            <div>{{ food.calories }} 卡路里</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<style>
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
}

.food-info {
  margin-left: 20px;
}
</style>
