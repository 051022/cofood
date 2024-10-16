<script setup>
import { defineProps } from "vue";
const prop = defineProps(["num"]);
</script>

<template>
  <div class="countBox">
    <button class="sub">-</button>
    <input class="numInput" type="text" :value="num" />
    <button class="add">+</button>
  </div>
</template>

<style lang="less" scoped>
.countBox {
  margin-top: 64px;
  margin-left: 74px;
  height: 28px;
  button {
    width: 28px;
    height: 28px;
    background-color: #eaecef;
    outline: none;
    border: 1px solid #707070;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background-color: #cecfd1;
    }
  }
  .numInput {
    width: 68px;
    height: 26px;
    text-align: center;
    outline: none;
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
  }
}
</style>