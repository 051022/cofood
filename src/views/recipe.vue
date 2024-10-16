<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 定义 ref
const Data = ref([]);

// 函数：生成1到7之间的随机整数，代表星期一到星期日
function getRandomWeekDay() {
  return Math.floor(Math.random() * 7) + 1;
}

// 初始化星期值
let weekDay = getRandomWeekDay();
console.log("初始星期值:", 2);

// 更新星期值的函数
function updateWeekDay() {
  weekDay = getRandomWeekDay();
  console.log("新的星期值:", weekDay);
}

// 每天晚上12点自动更新星期值
function updateAtMidnight() {
  // 获取当前时间
  const now = new Date();
  // 计算距离明天零点的时间差
  const timeUntilMidnight =
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) -
    now;
  // 设置定时器，在距离明天零点的时间后执行更新
  setTimeout(function () {
    updateWeekDay();
    // 每次更新完后，再次设置定时器，保证在接下来的每天晚上12点再次更新
    setInterval(updateAtMidnight, 24 * 60 * 60 * 1000);
  }, timeUntilMidnight);
}

// 初始更新
updateAtMidnight();

// 发起 Axios 请求
axios
  .get("https://www.femto.fun/daily-recommend", {
    params: {
      week_day: weekDay,
    },
  })
  .then((response) => {
    if (response.data.code === 200) {
      Data.value = response.data.data;
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
    <navigation></navigation>
    <div class="topTitle">
      <h2>今日推荐</h2>
      <div class="back">
        <router-link to="./recommand">点击返回推荐页</router-link>
      </div>
    </div>
    <div class="recipes">
      <div class="breakfast re">
        <h3>早餐</h3>
        <div v-for="(Array, index) in Data" :key="index">
          <div v-if="index === 0">
            <div v-for="food in Array" :key="food.foodName" class="dailyFood">
              <img
                :src="'https://www.femto.fun/' + food.picture"
                alt="Food Image"
                class="foodImg"
              />
              <div class="foodInformations">
                <div class="foodName">{{ food.foodName }}</div>
                <div class="foodCalories">{{ food.calories }}卡路里</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lunch re">
        <h3>午餐</h3>
        <div v-for="(Array, index) in Data" :key="index">
          <div v-if="index === 1">
            <div v-for="food in Array" :key="food.foodName" class="dailyFood">
              <img
                :src="'https://www.femto.fun/' + food.picture"
                alt="Food Image"
                class="foodImg"
              />
              <div class="foodInformations">
                <div class="foodName">{{ food.foodName }}</div>
                <div class="foodCalories">{{ food.calories }}卡路里</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dinner re">
        <h3>晚餐</h3>
        <div v-for="(Array, index) in Data" :key="index">
          <div v-if="index === 2">
            <div v-for="food in Array" :key="food.foodName" class="dailyFood">
              <img
                :src="'https://www.femto.fun/' + food.picture"
                alt="Food Image"
                class="foodImg"
              />
              <div class="foodInformations">
                <div class="foodName">{{ food.foodName }}</div>
                <div class="foodCalories">{{ food.calories }}卡路里</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.topTitle {
  position: absolute;
  top: 10px;
  width: 1400px;
  display: flex;
}
.back {
  position: absolute;
  top: 90px;
  left: 1200px;
}
.recipes {
  position: absolute;
  top: 150px;
  display: flex;
}
.recipes .re {
  width: 300px;
  height: auto;
  margin: 50px;
  border-radius: 10px;
  border-color: #32db5a;
  border-style: solid;
  display: flex;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
}
.dailyFood {
  width: 280px;
  height: 120px;
  border-color: #32db5a;
  border-style: solid;
  margin: 10px;
  display: flex;
  align-items: center;
}
.foodImg {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-size: cover;
  /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat;
  /* 禁止背景图片重复 */
  background-position: center;
  /* 设置背景图位置居中 */
}
.foodInformations {
  width: 160px;
  height: 120px;
  display: flex;
  flex-direction: column; /* 确保内容垂直排列 */
  background-color: #ffffff;
}
.foodName {
  width: 135px;
  height: 40px;
  margin: 10px;
  float: left;
  box-sizing: border-box; /* 确保边框宽度不增加元素宽度 */
  display: flex;
  align-items: center;
}
.foodCalories {
  width: 135px;
  height: 40px;
  margin: 10px;
  float: left;
  box-sizing: border-box; /* 确保边框宽度不增加元素宽度 */
}
</style>