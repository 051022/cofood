<script setup>
import { defineProps } from "vue";
const prop = defineProps(["isPrice"]);
</script>

<template>
  <div class="foodItem">
    <!-- 食物封面 -->
    <div class="foodImage">
      <img src="../images/pic6.png" alt="" />
    </div>
    <!-- 食品价格 -->
    <div v-if="isPrice" class="foodPrice">
      <span class="foodName">白米饭</span>
      <span class="price">209</span>千卡/份
    </div>
    <!-- 食品销量 -->
    <div v-else class="foodSale">
      <div class="foodsName">鸡胸肉</div>
      <div class="foodsDetails">
        <span class="price">¥39.9</span>
        <span class="sale">已售 100件</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.foodItem {
  margin-bottom: 10px;
  margin-right: 8px;
  width: 180px;

  &:nth-child(5n) {
    margin-right: 0px;
  }
  .foodImage {
    width: 180px;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .foodPrice {
    padding-left: 16px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    border: 1px dotted #707070;
    .foodName {
      margin-right: 34px;
      font-size: 16px;
    }
    .price {
      font-weight: 700;
      color: red;
    }
  }
  .foodSale {
    padding: 9px 11px 6px 10px;
    height: 54px;
    box-sizing: border-box;
    border: 1px dotted #707070;
    .foodsName {
      margin-bottom: 4px;
      font-size: 12px;
    }
    .foodsDetails {
      display: flex;
      justify-content: space-between;
      .price {
        font-size: 14px;
        font-weight: 700;
        color: #f53636;
      }
      .sale {
        font-size: 10px;
        color: #bfbfbf;
      }
    }
  }
}
</style>