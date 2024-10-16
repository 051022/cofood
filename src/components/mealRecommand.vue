<script setup>
</script>

<template></template>


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
h2 {
  width: 1200px;
  position: absolute;
  top: 90px;
}

.foods {
  width: 1200px;
  position: absolute;
  top: 120px;
}

.food {
  width: 250px;
  height: 250px;
  margin: 50px 20px 50px 50px;
  float: left;
  border-radius: 10px;
  border-color: #32db5a;
  border-style: solid;
}
.food-info {
  background-color: #ffffff;
}

.back {
  position: absolute;
  top: 90px;
  left: 1200px;
}

.food .img1 {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-size: cover;
  /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat;
  /* 禁止背景图片重复 */
  background-position: center;
  /* 设置背景图位置居中 */
}
ul {
  padding: 0;
}

ul li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>