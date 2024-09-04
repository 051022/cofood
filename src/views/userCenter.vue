<script setup>
</script>

<template>
  <div class="container">
    <userCenterNavigation></userCenterNavigation>
    <div class="banner">
      <div class="leftBanner">
        <h2>个人信息</h2>
        <div class="selfInformations">
          <div class="selfInformation">
            <div class="title">身高</div>
            <div class="content">----</div>
          </div>
          <div class="selfInformation">
            <div class="title">体重</div>
            <div class="content">----</div>
          </div>
          <div class="selfInformation">
            <div class="title">血压</div>
            <div class="content">----</div>
          </div>
          <div class="selfInformation">
            <div class="title">血糖</div>
            <div class="content">----</div>
          </div>
          <div class="selfInformation">
            <div class="title">基础代谢</div>
            <div class="content">----</div>
          </div>
          <div class="selfInformation">
            <div class="title">心率</div>
            <div class="content">----</div>
          </div>
          <div class="selfInformation">
            <div class="title">步数</div>
            <div class="content">----</div>
          </div>
          <div class="selfInformation">
            <div class="title">喝水记录</div>
            <div class="content">----</div>
          </div>
        </div>
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

.banner {
  width: 1160px;
  position: absolute;
  top: 90px;
}
.leftBanner {
  width: 842px;
  position: absolute;
  top: 10px;
  left: 280px;
  margin-right: 16px;
  float: left;
}
h2 {
  width: 480px;
  position: relative;
  top: 0;
  float: left;
}

.selfInformations {
  width: 780px;
  background-color: #ffffff;
  padding: 20px;
}
.selfInformation {
  width: 350px;
  height: 100px;
  background-color: #bfbfbf;
  margin: 15px;
  float: left;
  border-radius: 10px;
}

.selfInformation .title {
  font-weight: bold;
  background-color: #ccf6d6;
  width: 80px;
  height: 30px;
  text-align: center; /* 使标题文本水平居中 */
}
.selfInformation .content {
  font-size: 28px;
  font-weight: bold;
  color: #808080;
  text-align: center;
}
</style>