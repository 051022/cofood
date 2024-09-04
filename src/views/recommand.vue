<script setup>
</script>

<template>
  <div class="container">
    <Navigation></Navigation>

    <div class="carousel">
      <carousel></carousel>
    </div>
    <div class="threeMeals">
      <div class="title">
        <div class="string"></div>
        <div class="word">三餐推荐</div>
      </div>
      <router-link to="/breakfast" class="meal breakfast"></router-link>
      <router-link to="/lunch" class="meal lunch"></router-link>
      <router-link to="/dinner" class="meal dinner"></router-link>
    </div>

    <div class="recipe">
      <div class="title">
        <div class="string"></div>
        <div class="word">食谱推荐</div>
      </div>
      <router-link to="/recipe">
        <div class="rc1"></div>
      </router-link>

      <div class="rc2"></div>
      <div class="rc3"></div>
      <div class="rc4"></div>
      <div class="rc5"></div>
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
  height: auto;
  margin: 0;
  position: relative;
}
a {
  text-decoration: none; /* 取消下划线 */
}
.threeMeals {
  height: 290px;
  width: 880px;
  position: absolute;
  top: 600px;
  left: 50%; /* 将盒子左侧定位在水平居中位置 */
  transform: translate(-50%, -50%);
}
.title {
  height: 35px;
  width: 200px;
  display: flex;
  align-items: center;
  margin: 17px;
}
.string {
  width: 6px;
  height: 32px;
  background: #32db5a;
  border-radius: 50px;
  float: left;
}
.word {
  width: 134px;
  height: 32px;
  float: left;
  margin-left: 6px;
  font-size: 24px;
}
.meal {
  width: 272px;
  height: 236px;
  float: left;
}
.breakfast {
  background: url("../../image/早餐推荐@2x.png");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.lunch {
  margin: 0 24px;
  background: url("../../image/早餐推荐@2x\ \(1\).png");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.dinner {
  background: url("../../image/早餐推荐@2x\ \(2\).png");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.recipe {
  height: 290px;
  width: 880px;
  position: absolute;
  top: 950px;
  left: 50%; /* 将盒子左侧定位在水平居中位置 */
  transform: translate(-50%, -50%);
}
.rc1 {
  width: 570px;
  height: 320px;
  background: url("../../image/食谱推荐@2x.png");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
  margin-right: 18px;
  margin-bottom: 31px;
}
.rc2 {
  width: 276px;
  height: 320px;
  background: url("../../image/食谱推荐@2x\ \(1\).png");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
  margin-bottom: 31px;
}
.rc3 {
  width: 276px;
  height: 158px;
  background: url("../../image/食谱推荐@2x\ \(2\).png");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
}
.rc4 {
  width: 276px;
  height: 158px;
  background: url("../../image/食谱推荐@2x\ \(3\).png");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
  margin: 0 18px;
}
.rc5 {
  width: 276px;
  height: 158px;
  background: url("../../image/食谱推荐@2x\ \(4\).png");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
}

.carousel {
  width: 1240px;
  height: 486px;
  position: absolute;
  top: 104px;
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  border-radius: 10px;
}
</style>