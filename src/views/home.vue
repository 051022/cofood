<script setup>
</script>


<template>
  <div class="container">
    <Navigation></Navigation>

    <div class="poster">
      <div class="word1"></div>
      <div class="word2"></div>
      <div class="word3"></div>
      <div class="word4"></div>
    </div>

    <div class="aboutUs">
      <div class="title1">ABOUT US</div>
      <div class="title2">关于我们</div>
      <div class="text">
        我们是专注于健康饮食习惯搭建的平台，
        在这里，根据你的活动我们会提供不同的营养健康的饮食建议，
        在这里，你的生活会变得更健康，更多彩！
      </div>
      <div class="postImg1"></div>
      <div class="postImg2"></div>
    </div>

    <div class="understand">
      <div class="title3">UNDERSTAND</div>
      <div class="title4">更懂你的饮食</div>
      <div class="udImg"></div>
    </div>

    <div class="bottom">
      <div class="ios">
        <div class="text1">ios版 <br />苹果下载</div>
        <div class="logo1"></div>
      </div>
      <div class="Android">
        <div class="text1">Android版 安卓下载</div>
        <div class="logo2"></div>
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
  height: auto;
  margin: 0;
  position: relative;
}
a {
  text-decoration: none; /* 取消下划线 */
}
.navigation {
  height: 80px;
  width: 1440px;
  background: #ffffff;
  position: sticky;
  display: flex;
  align-items: center;
}

.logo {
  width: 221px;
  height: 80px;
  line-height: normal;
  font-family: Microsoft YaHei;
  font-weight: 700;
  background-color: #32db5a;
  font-size: 54px;
  margin: 0 0 0 0px;
  background-image: url(./image/顶部LOGO@2x.png);
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
}

.subfield {
  position: relative;
  width: 36px;
  height: 41px;
  line-height: normal;
  font-family: Microsoft YaHei;
  font-weight: 700;
  color: #404040;
  font-size: 18px;
  margin: 28px 31px 0 31px;
  cursor: pointer;
}

.subfield::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #6b6b6b;
  display: none;
}

.subfield.active::after {
  display: block;
}

.subfield.active {
  color: black;
}
.search {
  width: 474px;
  height: 40px;
  background: #f4f8fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 69px;
}
.account {
  width: 44px;
  height: 44px;
  background: #9f9d9d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 57px;
  margin-top: 20px;
}
img {
  width: 44px;
  height: 44px;
  margin: 5px;
}
input {
  height: 35px;
  width: 400px;
  border-style: none;
}
button {
  width: 120px;
  height: 40px;
  background: #32db5a;
  border-radius: 8px;
  line-height: normal;
  font-family: Microsoft YaHei;
  font-weight: 700;
  color: #ffffff;
  font-size: 18px;
  border-style: none;
  margin-top: 20px;
  margin-left: 20px;
}
.poster {
  width: 1440px;
  height: 600px;
  background: #000000;
  position: absolute;
  margin-top: 80px;
  background-image: url(./image/蒙版组\ 2@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.word1 {
  width: 95px;
  height: 288px;
  margin-top: 86px;
  margin-left: 140px;
  float: left;
  background-image: url(./image/日日三餐@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.word2 {
  width: 95px;
  height: 288px;
  margin-top: 224px;
  margin-left: 0px;
  float: left;
  background-image: url(./image/满满健康@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.word3 {
  width: 186px;
  height: 409px;
  margin-top: 85px;
  margin-left: 665px;
  float: left;
  background-image: url(./image/《食卡Cofood》logo带文字版@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.word4 {
  width: 528px;
  height: 64px;
  margin-top: 0px;
  margin-left: 862px;
  float: left;
  background-image: url(./image/十种早餐鸡蛋卷的做法！@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.aboutUs {
  width: 1440px;
  height: 531px;
  background: #f4f8fa;
  position: absolute;
  top: 683px;
  background-color: #f4f8fa;
}
.title1 {
  width: 154px;
  height: 33px;
  background: #f4f8fa;
  float: left;
  position: relative;
  top: 87px;
  left: 139px;
  color: #32db5a;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
.title2 {
  width: 111px;
  height: 31px;
  background: #f4f8fa;
  float: left;
  position: absolute;
  top: 128px;
  left: 139px;
  font-weight: bold;
  color: #000000;
  font-size: 24px;
}
.text {
  width: 553px;
  height: 96px;
  position: absolute;
  top: 253px;
  left: 140px;
  font-weight: Bold;
  font-size: 18px;
  color: #404040;
  line-height: 36px;
}
.postImg1 {
  width: 450px;
  height: 253px;
  position: absolute;
  top: 139px;
  left: 810px;
  background-image: url(./image/蒙版组\ 27@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  z-index: 1;
}
.postImg2 {
  width: 450px;
  height: 253px;
  border: 8px solid;
  border-color: #32db5a;
  position: absolute;
  top: 110px;
  left: 832px;
}

.understand {
  width: 1440px;
  height: 990px;
  background: #ffffff;
  position: absolute;
  top: 1222px;
}
.title3 {
  width: 207px;
  height: 33px;
  color: #32db5a;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 68px;
  left: 617px;
}
.title4 {
  width: 168px;
  height: 31px;
  float: left;
  position: absolute;
  top: 113px;
  left: 636px;
  font-weight: bold;
  color: #000000;
  font-size: 24px;
}
.udImg {
  width: 965px;
  height: 632px;
  position: absolute;
  top: 224px;
  left: 238px;
  background-image: url(./image/组\ 34@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.bottom {
  width: 1440px;
  height: 300px;
  background: #f4f8fa;
  position: absolute;
  top: 2280px;
}
.ios {
  width: 300px;
  height: 120px;
  border: 4px solid;
  border-color: #32db5a;
  border-radius: 10px;
  position: absolute;
  top: 90px;
  left: 301px;
}
.text1 {
  width: 104px;
  height: 52px;
  font-size: 20px;
  font-weight: Bold;
  position: absolute;
  top: 34px;
  left: 47px;
  color: #32db5a;
}
.ios .logo1 {
  width: 76px;
  height: 76px;
  position: absolute;
  top: 19px;
  left: 192px;
  background-image: url(./image/苹果@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.Android {
  width: 300px;
  height: 120px;
  border: 4px solid;
  border-color: #32db5a;
  border-radius: 10px;
  position: absolute;
  top: 90px;
  left: 840px;
}
.logo2 {
  width: 76px;
  height: 76px;
  position: absolute;
  top: 19px;
  left: 192px;
  background-image: url(./image/安卓@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
</style>