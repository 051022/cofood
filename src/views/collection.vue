<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="banner">
      <div class="secondBanner">
        <div class="collectionTitle">
          <div class="tabs">
            <div
              class="tab"
              :class="{ active: currentTab === 'products' }"
              @click="currentTab = 'products'"
            >
              收藏的商品
            </div>
            <div
              class="tab"
              :class="{ active: currentTab === 'dynamics' }"
              @click="currentTab = 'dynamics'"
            >
              收藏的动态
            </div>
          </div>
          <div class="productsContent">
            <div v-if="currentTab === 'products'">
              <!-- 收藏的商品内容 -->
              <products></products>
              <products></products>
              <products></products>
              <products></products>
              <products></products>
            </div>
            <div v-if="currentTab === 'dynamics'">
              <!-- 收藏的动态内容 -->
              <comment></comment>
              <comment></comment>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createApp, ref } from "vue";
const currentTab = ref("products"); // 默认显示收藏的商品
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
.secondBanner {
  width: 842px;
  position: absolute;
  top: 36px;
  margin-right: 16px;
  float: left;
}
.collectionTitle {
  width: 1178px;
  height: 45px;
  background: #eaecef;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.tabs {
  display: flex;
  cursor: pointer;
  padding: 10px;
  background-color: #f4f4f4;
}
.tab {
  height: 25px;
  margin: 0 10px 0 30px;
}
.active {
  border-bottom: 2px solid #404040;
  font-weight: bold;
}
.productsContent {
  padding: 20px;
  border-top: none;
}
.productsContent > div {
  display: flex;
  flex-wrap: wrap; /* 允许换行，确保内容始终在容器内部 */
  gap: 10px; /* 可选：设置子项之间的间距 */
  overflow: hidden; /* 确保容器不会因内容溢出而滚动 */
}
</style>