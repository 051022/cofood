<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 定义 ref
const foods = ref([]);

// 发起 Axios 请求
axios
  .get("http://www.femto.fun/food-recommend", {
    params: {
      type: 0,
    },
  })
  .then((response) => {
    if (response.data.code === 200) {
      foods.value = response.data.data;
    } else {
      console.error("Failed to fetch foods:", response.data);
    }
  })
  .catch((error) => {
    console.error("Error fetching foods:", error);
  });
</script>

<template>
  <div class="container">
    <Navigation></Navigation>
    <mealRecommand></mealRecommand>
    <h2>早餐推荐</h2>
    <div class="topTitle">
      <div class="back">
        <router-link to="./recommand">点击返回推荐页</router-link>
      </div>
    </div>
    <div class="foods">
      <ul>
        <li v-for="food in foods" :key="food.foodName" class="food">
          <img
            :src="'http://www.femto.fun/' + food.picture"
            alt="Food Image"
            class="img1"
          />

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
</style>