<script setup>
import { defineProps, computed } from "vue";
const prop = defineProps(["item", "isPrice"]);

// 生成随机数
const salePrice = computed(() => {
  return Math.floor(Math.random() * (100 - 30 + 1)) + 30;
});
const saleCount = computed(() => {
  return Math.floor(Math.random() * (500 - 100 + 1)) + 100;
});

// 点击商品，跳转至详情页
import { useRouter } from "vue-router";
const router = useRouter();
const goDetails = (id) => {
  router.push(`detailProducts/${id}`);
};
</script>

<template>
  <div @click="goDetails(item.product_id)" class="foodItem">
    <!-- 食物封面 -->
    <div class="foodImage">
      <img :src="item.image ? item.image : '../images/pic4.png'" alt="" />
    </div>
    <!-- 食品价格 -->
    <div v-if="isPrice === 1" class="foodPrice">
      <span class="foodName">鸡胸肉</span>
      <span class="price">209</span>千卡/份
    </div>
    <!-- 食品销量 -->
    <div v-else class="foodSale">
      <div class="foodsName">{{ item.product_name }}</div>
      <div class="foodsDetails">
        <span class="price">¥{{ salePrice }}</span>
        <span class="sale">已售 {{ saleCount }}件</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.foodItem {
  margin-bottom: 10px;
  margin-right: 8px;
  width: 180px;
  cursor: pointer;
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