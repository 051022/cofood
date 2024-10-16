<script setup>
// 导入products组件
import products from "../components/products.vue";
import { ref, onMounted } from "vue";
// 食物种类数组
const foodList = [
  "主食",
  "奶类制品",
  "蔬菜",
  "肉类",
  "海鲜类",
  "谷类",
  "水果",
  "豆类坚果",
  "零食饮料",
];
// 使用ref绑定categoriesContainer类
const categories = ref(null);
// 使用ref绑定ulContainer类
const ulContainer = ref(null);
// 使用ref绑定轮播图中的img
const bannerImg = ref(null);
// 页面进行渲染时, 默认选中categoriesContainer类的第一个子元素高亮
onMounted(() => {
  categories.value.children[0].classList.add("active");
  ulContainer.value.children[0].classList.add("liActive");
});
const getFood = (index) => {
  // console.log(index);
  const cateList = categories.value.children;
  for (let index = 0; index < cateList.length; index++) {
    // console.log(cateList[index]);
    cateList[index].classList.remove("active");
  }
  cateList[index].classList.add("active");
};
// 记录当前图片的索引
const index = ref(0);
const img = ref("../../images/shopping/pic1.png");
// 存储轮播图图片的数组
const bannerList = ref([
  "/src/images/shopping/pic1.png",
  "/src/images/shopping/pic2.png",
  "/src/images/shopping/pic3.png",
]);
// 点击切换轮播图的方法
const toPrevImg = () => {
  index.value--; // 先递减
  if (index.value < 0) {
    index.value = bannerList.value.length - 1; // 重置为最后一个元素的索引
  }
  bannerImg.value.src = bannerList.value[index.value]; // 更新图片源
  console.log(bannerImg.value.src); // 打印当前索引值
  //
  const ulDotList = ulContainer.value.children;
  for (let i = 0; i < ulDotList.length; i++) {
    ulDotList[i].classList.remove("liActive");
  }
  ulDotList[index.value].classList.add("liActive");
};

const toNextImg = () => {
  index.value++; // 先递增
  if (index.value >= bannerList.value.length) {
    // 检查是否超出界限
    index.value = 0; // 重置为第一个元素的索引
  }
  bannerImg.value.src = bannerList.value[index.value]; // 更新图片源
  console.log(bannerImg.value.src); // 打印当前索引值
  //
  const ulDotList = ulContainer.value.children;
  for (let i = 0; i < ulDotList.length; i++) {
    ulDotList[i].classList.remove("liActive");
  }
  ulDotList[index.value].classList.add("liActive");
};
</script>

<template>
  <div class="shoppingContainer">
    <!-- 顶部导航栏 -->
    <div class="navContainer">
      <Navigation></Navigation>
    </div>
    <!-- header区域 -->
    <div class="headerContainer">
      <div ref="categories" class="categoriesContainer">
        <div
          @click="getFood(index)"
          v-for="(ele, index) in foodList"
          :key="ele"
          class="cateItem"
        >
          {{ ele }}
        </div>
      </div>
      <!-- 轮播图区域 -->
      <div class="bannerContainer">
        <img ref="bannerImg" src="/src/images/shopping/pic1.png" alt="" />
        <div @click="toPrevImg" class="prevBtnBox moveBtnBox">
          <div class="prevBtn"></div>
        </div>
        <div @click="toNextImg" class="nextBtnBox moveBtnBox">
          <div class="nextBtn"></div>
        </div>
        <ul ref="ulContainer" class="ulContainer">
          <li v-for="ele in bannerList.length" :key="ele"></li>
        </ul>
      </div>
      <!-- 广告图区域 -->
      <div class="advertisementContainer">
        <div class="slogan1"></div>
        <div class="slogan2"></div>
      </div>
    </div>
    <!-- 推荐区域 -->
    <div class="introContainer">
      <!-- 标题区域 -->
      <div class="titleContainer">
        为你推荐
        <div class="decoration"></div>
        <div class="decoration"></div>
        <div class="decoration"></div>
        <div class="decoration"></div>
      </div>
      <!-- 内容区域 -->
      <div class="productContainer">
        <ProductPage v-for="item in 15" :key="item"></ProductPage>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.shoppingContainer {
  margin: 0 auto;
  width: 1440px;
  .navContainer {
    margin-bottom: 30px;
  }
  .headerContainer {
    display: flex;
    width: 940px;
    margin: 0 auto;
    .categoriesContainer {
      margin-right: 24px;
      padding: 7px 0px 6px 34px;
      width: 120px;
      height: 400px;
      border-radius: 10px;
      background-color: #fff;
      box-sizing: border-box;
      .cateItem {
        padding: 12px 0px;
        color: #808080;
        font-size: 14px;
        cursor: pointer;
      }
      .active {
        color: #32db5a;
        font-weight: 700;
      }
    }
    .bannerContainer {
      margin-right: 24px;
      position: relative;
      width: 600px;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
      }
      .moveBtnBox {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 170px;
        width: 60px;
        height: 60px;
        background-color: #141212;
        opacity: 20%;
        cursor: pointer;
      }
      .prevBtnBox {
        left: 0;
        .prevBtn {
          width: 32px;
          height: 32px;
          background-image: url(../images/shopping/arrowLeft.png);
          background-size: 32px 32px;
        }
      }
      .nextBtnBox {
        right: 0;
        .nextBtn {
          width: 32px;
          height: 32px;
          background-image: url(../images/shopping/arrowRight.png);
          background-size: 32px 32px;
          opacity: 100%;
        }
      }
      .ulContainer {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        position: absolute;
        left: 17px;
        bottom: 14px;
        li {
          margin-right: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ffffff;
          opacity: 30%;
        }
        .liActive {
          background-color: #32db5a;
          opacity: 100%;
        }
      }
    }
    .advertisementContainer {
      position: relative;
      height: 400px;
      width: 172px;
      background-image: url(../images/shopping/pic4.png);
      background-size: 172px 400px;
      .slogan1 {
        position: absolute;
        top: 148px;
        left: 12px;
        width: 46px;
        height: 140px;
        background-image: url(../images/shopping/pic5.png);
        background-size: 46px 140px;
      }
      .slogan2 {
        position: absolute;
        top: 244px;
        left: 58px;
        width: 46px;
        height: 140px;
        background-image: url(../images/shopping/pic6.png);
        background-size: 46px 140px;
      }
    }
  }
  .introContainer {
    margin: 60px auto;
    width: 940px;
    .titleContainer {
      position: relative;
      margin: 0 auto;
      text-align: center;
      color: #bfbfbf;
      font-size: 24px;
      font-weight: 700;
      .decoration {
        position: absolute;
        width: 8px;
        height: 24px;
        background-image: url(../images/shopping/pic7.png);
        background-size: 8px 24px;
        &:nth-child(1) {
          left: 384px;
          top: 5px;
        }
        &:nth-child(2) {
          left: 400px;
          top: -3px;
        }
        &:nth-child(3) {
          left: 532px;
          bottom: -3px;
        }
        &:nth-child(4) {
          left: 548px;
          top: 5px;
        }
      }
    }
    .productContainer {
      margin-top: 27px;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>