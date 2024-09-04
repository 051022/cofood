<template>
  <el-carousel :interval="5000" type="card" arrow="hover" class="my-carousel">
    <el-carousel-item v-for="item in items" :key="item.id">
      <img :src="item.image" alt="" class="carousel-image" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { ElCarousel, ElCarouselItem } from "element-plus";

const items = [
  { id: 1, image: "../../image/食谱推荐@2x (3).png" },
  { id: 2, image: "../../foodPictures/黑芝麻.jpg" },
  { id: 3, image: "../../foodPictures/豆浆.jpg" },
  { id: 4, image: "../../foodPictures/拿铁.webp" },
  { id: 5, image: "../../foodPictures/燕麦奶.jpeg" },
  { id: 6, image: "../../foodPictures/小米粥.png" },
];
</script>

<style>
.my-carousel {
  width: 100%;
  height: 300px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

