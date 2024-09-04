<template>
  <div class="container">
    <userCenterNavigation></userCenterNavigation>
    <div class="banner">
      <div class="leftBanner">
        <div class="add">新增收货地址</div>
        <Address></Address>
        <Address></Address>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
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
  height: 600px; /* 可以根据需要调整高度 */
  position: absolute;
  top: 10px;
  left: 280px;
  margin-right: 16px;
  overflow-y: auto; /* 允许在垂直方向上滚动 */
  float: left;
}
.add {
  width: 142px;
  height: 40px;
  background: #8dfda7;
  border: 2px solid;
  border-color: #32db5a;
  border-radius: 10px;
  background-color: #8dfda7;
  position: relative;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>