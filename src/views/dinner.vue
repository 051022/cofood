<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const foods = ref([]);

const apiUrl = "http://8.134.144.65:8083/cofood";

onMounted(() => {
  axios
    .post(
      `${apiUrl}/recommend`,
      {
        age: "18",
        gender: "2",
        height: "170",
        weight: "60",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.data.code === 200) {
        foods.value = response.data.dinner;
      } else {
        console.error("Failed to fetch foods:", response.data);
      }
    })
    .catch((error) => {
      console.error("Error details:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    });
});
</script>

<template>
  <div class="container">
    <Navigation></Navigation>
    <mealRecommand></mealRecommand>
    <h2>晚餐推荐</h2>
    <div class="topTitle">
      <div class="back">
        <router-link to="./recommand">点击返回推荐页</router-link>
      </div>
    </div>
    <div class="foods">
      <ul>
        <li v-for="food in foods" :key="food.foodName" class="food">
          <img
            :src="`${apiUrl}/${food.picture}`"
            alt="Food Image"
            class="img1"
          />
          <div class="food-info">
            <div>{{ food.foodName }}</div>
            <div>{{ food.quality }} 卡路里</div>
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
