<script setup>
import { ref, computed } from "vue";

const slides = ref(["../../image/商品@2x.png", "../../image/商品@2x (1).png"]);

const currentSlideIndex = ref(0);

const currentSlide = computed(() => slides.value[currentSlideIndex.value]);

const prevSlide = () => {
  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length;
};

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
};

const items = [
  "主食",
  "奶类制品",
  "蔬菜",
  "肉类",
  "海鲜类",
  "谷类",
  "水果",
  "豆类坚果",
  "零食饮料",
];

const activeIndex = ref(0); // 初始默认第一个是绿色
const getColor = (index) =>
  index === activeIndex.value ? "#32db5a" : "#808080";
const changeColor = (index) => {
  activeIndex.value = index;
};
const changeTab = (index) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="banner">
      <div class="recommand">
        <div class="classification">
          <ul>
            <!-- 绑定点击事件，点击时调用 changeTab 方法 -->
            <li
              v-for="(item, index) in items"
              :key="index"
              @click="changeTab(index)"
              :style="{ color: getColor(index) }"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="carousel">
          <div class="slider-wrapper">
            <img
              :src="currentSlide"
              alt="Slide"
              style="width: 864px; height: 520px"
            />
            <div class="toggle">
              <button class="prev" @click="prevSlide"></button>
              <button class="next" @click="nextSlide"></button>
            </div>
            <ul class="slider-indicator">
              <li
                v-for="(slide, index) in slides"
                :key="index"
                :class="{ active: index === currentSlideIndex }"
              ></li>
            </ul>
          </div>
        </div>
        <div class="cofoodLogo"></div>
      </div>
      <div class="title">
        <div class="smallString"></div>
        <div class="text">为你推荐</div>
      </div>

      <div class="product">
        <!-- 根据 activeIndex 控制显示与隐藏 -->
        <div v-if="activeIndex === 0" class="item1">
          <div v-for="product in 6" :key="product">
            <products></products>
          </div>
        </div>

        <div v-if="activeIndex === 1" class="item2">内容2</div>
        <div v-if="activeIndex === 2" class="item3">内容3</div>
        <div v-if="activeIndex === 3" class="item4">内容4</div>
        <div v-if="activeIndex === 4" class="item3">内容5</div>
        <div v-if="activeIndex === 5" class="item2">内容6</div>
        <div v-if="activeIndex === 6" class="item1">内容7</div>
        <div v-if="activeIndex === 7" class="item2">内容8</div>
        <div v-if="activeIndex === 8" class="item3">内容9</div>
        <!-- 其他 item 类似 -->
      </div>
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
  height: 100vh;
  margin: 0;
  position: relative;
}
a {
  text-decoration: none; /* 取消下划线 */
}

.banner {
  width: 940px;
  position: absolute;
  top: 90px;
}
.recommand {
  width: 940px;
}
.classification {
  width: 120px;
  height: 400px;
  background: #ffffff;
  border-radius: 10px;
  float: left;
}
ul {
  list-style-type: none;
  position: absolute;
  left: -25px;
  top: -20px;
}
.classification li {
  width: 56px;
  height: 19px;
  margin: 24px;
  color: #808080;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  left: 30px;
}
.carousel {
  width: 600px;
  height: 400px;
  float: left;
  margin: 0 24px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.cofoodLogo {
  opacity: 86%;
  width: 172px;
  height: 400px;
  float: left;
  background-image: url("../../image/cofoodLogo.jpg");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
}
.title {
  position: absolute;
  top: 480px;
  left: 420px;
}
.title .text {
  color: #bfbfbf;
  font-weight: bold;
  font-size: 24px;
  float: left;
}
.smallString {
  width: 8px;
  height: 24px;
  background: #32db5a;
  border-radius: 50px;
  float: left;
  margin: 7px;
}
.product {
  width: 960px;
  position: absolute;
  top: 550px;
  display: flex;
  align-content: center;
  justify-self: center;
}
.item1 {
  width: 960px;
  display: flex;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
}

.item2 {
  width: 960px;
  display: flex;
  justify-content: space-around;
}
.item3 {
  width: 960px;
  display: flex;
  justify-content: space-around;
}
.item4 {
  width: 960px;
  display: flex;
  justify-content: space-around;
}
.item5 {
  width: 960px;
  display: flex;
  justify-content: space-around;
}

.slider-wrapper {
  position: relative; /* 设置为相对定位，以便绝对定位的子元素相对于它进行定位 */
  width: 600px;
  height: 400px;
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: top;
  overflow: hidden;
}

.toggle {
  position: absolute;
  top: 150px;
  left: 0;
  width: 600px;
  z-index: 1; /* 设置堆叠顺序，确保在上方显示 */
}

.slider-indicator {
  position: absolute;
  top: 350px;
  left: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}

.slider-indicator li {
  width: 8px;
  height: 8px;
  margin: 4px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.4;
  cursor: pointer;
}

.slider-indicator li.active {
  width: 12px;
  height: 12px;
  opacity: 1;
}

.slider-wrapper img {
  float: left;
}

.toggle button {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  border-style: none;
}
.prev {
  margin-left: 20px;
  background-image: url("../../image/向左箭头.svg");
  float: left;
}
.next {
  margin-right: 10px;
  background-image: url("../../image/向右箭头.svg");
  float: right;
}
</style>