<script setup>
import { ref, onMounted } from "vue";
// 种类列表
const categoryList = [
  "主食",
  "奶类制品",
  "蔬菜",
  "肉类",
  "海鲜类",
  "谷物",
  "水果",
  "豆类坚果",
  "零食饮料",
];
// 绑定种类导航栏对象
const categoryNav = ref(null);
// 点击种类切换的方法
const changeCategory = (index) => {
  console.log(index);
  // console.log(categoryNav.value.children);
  // 获取categoryNav的所有子元素在children数组
  const children = categoryNav.value.children;
  // 对children数组进行遍历，移除active类
  for (let i = 0; i < children.length; i++) {
    // console.log(children[i]);
    children[i].classList.remove("active");
  }
  // 给点击的对应分类进行高亮
  children[index].classList.add("active");
};
// 初始化界面时，默认选中 主食 高亮
onMounted(() => {
  console.log(categoryNav.value);
  categoryNav.value.children[0].classList.add("active");
});
</script>

<template>
  <div class="searchContainer">
    <!-- 顶部导航栏 -->
    <div class="naviContainer">
      <!-- 顶部导航栏 -->
      <Navigation></Navigation>
    </div>
    <!-- 背景图片栏 -->
    <div class="bgcContainer">
      <div class="bgcImage">
        <div class="bgcCalorie"></div>
        <div class="bgcMeal"></div>
        <div class="bgcHealth"></div>
      </div>
    </div>
    <!-- 搜索栏 -->
    <div class="searchBarContainer">
      <div class="searchBar">
        <input placeholder="搜索食物" class="searchInput" type="text" />
        <span class="searchBtn"></span>
      </div>
    </div>
    <!-- 食物推荐 -->
    <div class="foodIntroContainer">
      <div class="foodInto">
        <!-- 种类导航栏 -->
        <div ref="categoryNav" class="categoryNavContainer">
          <div
            @click="changeCategory(index)"
            v-for="(item, index) in categoryList"
            :key="index"
            class="categoryItem"
          >
            {{ item }}
          </div>
        </div>
        <!-- 食物详情 -->
        <div class="foodDetailsContainer">
          <div v-for="item in 10" :key="item" class="foodItem">
            <!-- 食物封面 -->
            <div class="foodImage">
              <img src="../images/pic6.png" alt="" />
            </div>
            <!-- 食品价格 -->
            <div class="foodPrice">
              <span class="foodName">白米饭</span>
              <span class="price">209</span>千卡/份
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.searchContainer {
  margin: 0 auto;
  width: 1440px;
  .bgcContainer {
    margin-bottom: 30px;
    width: 1440px;
    height: 120px;
    .bgcImage {
      display: flex;
      width: 1440px;
      height: 120px;
      background-image: url(../images/pic1.png);
      .bgcCalorie {
        margin-top: 21.5px;
        margin-left: 504px;
        width: 44px;
        height: 68px;
        background-image: url(../images/pic2.png);
        background-size: 44px 68px;
      }
      .bgcMeal {
        margin-left: 42.5px;
        margin-top: 42.05px;
        width: 156px;
        height: 44px;
        background-image: url(../images/pic3.png);
        background-size: 156px 44px;
      }
      .bgcHealth {
        margin-left: 35.5px;
        margin-top: 42.05px;
        width: 156px;
        height: 44px;
        background-image: url(../images/pic4.png);
        background-size: 156px 44px;
      }
    }
  }
  .searchBarContainer {
    margin-bottom: 30px;
    height: 48px;
    // background-color: pink;
    .searchBar {
      padding: 0px 20px;
      display: flex;
      align-items: center;
      margin: 0 auto;
      width: 600px;
      height: 48px;
      border: 1px solid #707070;
      border-radius: 8px;
      background-color: #fff;
      box-sizing: border-box;
      .searchInput {
        flex: 1;
        font-size: 18px;
        text-decoration: none;
        border: none;
        outline: none;
        background-color: transparent;
      }
      .searchBtn {
        width: 22px;
        height: 22px;
        background-image: url(../images/pic5.png);
        background-size: 22px 22px;
        cursor: pointer;
      }
    }
  }
  .foodIntroContainer {
    .foodInto {
      margin: 0 auto;
      width: 940px;
      .categoryNavContainer {
        margin-bottom: 30px;
        padding: 0px 55px;
        display: flex;
        width: 940px;
        height: 40px;
        box-sizing: border-box;
        border-bottom: 1px dotted #707070;
        .categoryItem {
          margin-right: 40px;
          padding: 0px 6px;
          cursor: pointer;
          &:last-child {
            margin-right: 0px;
          }
        }
        .active {
          color: #32db5a;
          font-weight: 700;
          border-bottom: 3px solid #32db5a;
        }
      }
      .foodDetailsContainer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .foodItem {
          margin-bottom: 10px;
          width: 180px;
          height: 222px;
          border: 1px dotted #707070;
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
            .foodName {
              margin-right: 34px;
              font-size: 16px;
            }
            .price {
              font-weight: 700;
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>