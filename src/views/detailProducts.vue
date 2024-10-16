<script setup>
// 导入ref
import { onMounted, ref } from "vue";
// 绑定数字框的变量
const num = ref(1);
// 绑定ul
const scroll = ref(null);
onMounted(() => {
  getProDetails();
  // scroll.value.children[0].classList.add("choose");
});
// 用以轮播图片的数组
const bannerList = ref([
  "/src/images/shopping/pic1.png",
  "/src/images/shopping/pic2.png",
  "/src/images/shopping/pic3.png",
  "/src/images/pic6.png",
  "/src/images/shopping/pic3.png",
]);
// 记录当前轮播图片的下标索引
const index = ref(0);
// 增加商品数量
const addNum = () => {
  num.value++;
};
// 减少商品数量
const subNum = () => {
  if (num.value === 0) {
    return;
  }
  num.value--;
};

const nextImg = () => {
  const li_List = scroll.value.children;
  for (let i = 0; i < li_List.length; i++) {
    li_List[i].classList.remove("choose");
  }
  if (index.value === bannerList.value.length - 1) {
    index.value = 0;
    li_List[index.value].classList.add("choose");
    return;
  }
  index.value++;
  li_List[index.value].classList.add("choose");
};
const prevImg = () => {
  const li_List = scroll.value.children;
  for (let i = 0; i < li_List.length; i++) {
    li_List[i].classList.remove("choose");
  }
  if (index.value === 0) {
    index.value = bannerList.value.length - 1;
    li_List[index.value].classList.add("choose");
    return;
  }
  index.value--;
  li_List[index.value].classList.add("choose");
};

// 用以记录服务器返回的商品详细信息的变量
const proDetails = ref("");
// 用以记录服务器返回的商品的轮播图片
const proBannerList = ref("");

// 获取页面跳转携带的参数
import { useRoute } from "vue-router";
const route = useRoute();

// 发起获取商品详细信息的请求
import { getProDetailsService } from "../api/shopping";
const getProDetails = async () => {
  const res = await getProDetailsService(route.params.id, num.value);
  console.log(res);
  proDetails.value = res.product;
  console.log(proDetails.value.ProductID);
  proBannerList.value = res.images;
};

// 发起添加至购物车的请求
import { useStore } from "vuex";
const store = useStore();
import { addProductService } from "../api/shopping";
console.log(store.getters.token);
console.log(proDetails.value.ProductID);
console.log(Number(num.value));

const addProduct = async () => {
  console.log(proDetails.value.ProductID);

  console.log(Number(num.value));

  console.log("Bearer " + store.getters.token);

  const res = await addProductService(
    proDetails.value.ProductID,
    Number(num.value),
    "Bearer " + store.getters.token
  );
  console.log(res);
};
</script>

<template>
  <div class="detailsPage">
    <div class="navContainer">
      <Navigation></Navigation>
    </div>
    <!--  -->
    <div class="bgcContainer">
      <div class="bgc1"></div>
      <div class="bgc2"></div>
      <div class="bgc3"></div>
    </div>
    <!--  -->
    <div class="searchContainer">
      <div class="search">
        <input class="searchProduct" placeholder="搜索商品" type="text" />
        <div class="searchBtn"></div>
      </div>
    </div>
    <!--  -->
    <div class="detailsContainer">
      <div class="details">
        <div class="detailsImgBox">
          <div class="detailsImg">
            <img :src="proBannerList[index]" alt="" />
          </div>
          <!-- 滚动条 -->
          <div class="scrollBar">
            <div @click="prevImg" class="prevImg"></div>
            <div class="scrollImg">
              <ul ref="scroll">
                <li class="item choose">
                  <img :src="proBannerList[0]" alt="" />
                </li>
                <li
                  v-for="ele in proBannerList.slice(1, 5)"
                  :key="ele"
                  class="item"
                >
                  <img :src="ele" alt="" />
                </li>
              </ul>
            </div>
            <div @click="nextImg" class="nextImg"></div>
          </div>
        </div>
        <div class="detailsOptionsBox">
          <div class="proName">鸡胸肉</div>
          <!--  -->
          <div class="proSales">已售 100件</div>
          <!--  -->
          <div class="itemPrice">单品价: <span class="price">¥39.90</span></div>
          <!--  -->
          <div class="address">
            配送至:
            <select class="chooseAddress" name="" id="">
              <option value="">广东省广州市番禺区小谷围街道</option>
              <option value="">广东省广州市番禺区小谷围街道</option>
            </select>
          </div>
          <!--  -->
          <div class="options">
            <button @click="subNum" class="sub">-</button>
            <input v-model="num" type="text" />
            <button @click="addNum" class="add">+</button>

            <button @click="addProduct" class="addCart">加入购物车</button>
          </div>
        </div>
        <!--  -->
        <div class="rightBgcContainer">
          <div class="bgc1"></div>
          <div class="bgc2"></div>
          <div class="bgc3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.detailsPage {
  margin: 0 auto;
  width: 1440px;
  .bgcContainer {
    margin-bottom: 30px;
    position: relative;
    height: 120px;
    background-color: #000000;
    background-image: url(../images/pic1.png);
    background-size: 1440px 120px;
    .bgc1 {
      position: absolute;
      left: 504px;
      top: 22.5px;
      width: 44px;
      height: 68px;
      background-image: url(../images/pic2.png);
      background-size: contain;
    }
    .bgc2 {
      position: absolute;
      left: 590.5px;
      top: 42.05px;
      width: 156px;
      height: 44px;
      background-image: url(../images/pic3.png);
      background-size: contain;
    }
    .bgc3 {
      position: absolute;
      left: 782px;
      top: 42.05px;
      width: 156px;
      height: 44px;
      background-image: url(../images/pic4.png);
      background-size: contain;
    }
  }
  .searchContainer {
    margin-bottom: 22px;
    height: 48px;
    .search {
      margin-left: 420px;
      padding: 0px 20px;
      height: 48px;
      width: 600px;
      display: flex;
      align-items: center;
      border: 1px solid #707070;
      border-radius: 8px;
      background-color: #fff;
      box-sizing: border-box;
      .searchProduct {
        flex: 1;
        font-size: 18px;
        border: none;
        outline: none;
        background-color: transparent;
        &::placeholder {
          color: #bfbfbf;
        }
      }
    }
    .searchBtn {
      width: 22px;
      height: 22px;
      background-image: url(../images/pic7.png);
      background-size: contain;
    }
  }
  .detailsContainer {
    padding: 0 267.5px;
    .details {
      display: flex;
      .detailsImgBox {
        margin-right: 31px;
        .detailsImg {
          width: 330px;
          height: 330px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .scrollBar {
          margin-top: 8px;
          display: flex;
          align-items: center;
          .prevImg {
            margin-right: 8px;
            width: 24px;
            height: 24px;
            background-image: url(../images/pic12.png);
            background-size: cover;
            cursor: pointer;
          }
          .scrollImg {
            overflow: hidden;
            ul {
              display: flex;
              list-style: none;
              transition: all 1s;
              .item {
                margin-right: 6px;
                height: 50px;
                width: 50px;
                cursor: pointer;
                &:last-child {
                  margin-right: 0px;
                }
                img {
                  display: block;
                  width: 50px;
                  height: 50px;
                }
              }
              .choose {
                border: 2px solid #27c24b;
              }
            }
          }
          .nextImg {
            margin-left: 8px;
            width: 24px;
            height: 24px;
            background-image: url(../images/pic13.png);
            background-size: cover;
            cursor: pointer;
          }
        }
      }
      .detailsOptionsBox {
        margin-top: 15px;
        .proName {
          margin-bottom: 3px;
          font-size: 18px;
          font-weight: 400;
        }
        .proSales {
          margin-bottom: 56px;
          font-size: 10px;
          color: #bfbfbf;
        }
        .itemPrice {
          margin-bottom: 12px;
          color: #808080;
          .price {
            font-size: 28px;
            font-weight: 700;
            color: #f53636;
          }
        }
        .address {
          margin-bottom: 75px;
          color: #808080;
          .chooseAddress {
            width: 262px;
            height: 32px;
            color: #404040;
            text-align: center;
            border-radius: 8px;
            outline: none;
            option {
              height: 32px;
            }
          }
        }
        .options {
          button {
            cursor: pointer;
          }
          .add,
          .sub {
            width: 28px;
            height: 48px;
            background-color: #eaecef;
            border: 1px solid #707070;
            outline: none;
            transition: all 0.5s;
            &:hover {
              background-color: #c8c9c9;
            }
          }
          input {
            width: 68px;
            height: 46px;
            text-align: center;
            background-color: #fff;
            border-top: 1px solid #707070;
            border-bottom: 1px solid #707070;
            outline: none;
          }
          .addCart {
            margin-left: 20px;
            width: 135px;
            height: 48px;
            background-color: #27c24b;
            outline: none;
            border: none;
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            transition: all 0.5s;
            &:hover {
              background-color: #23ab43;
            }
          }
        }
      }
    }
  }
  .rightBgcContainer {
    margin-left: 50px;
    position: relative;
    width: 172px;
    height: 400px;
    background-color: #000000;
    background-size: contain;
    background-image: url(../images/pic8.png);
    border-radius: 10px;
    .bgc1 {
      position: absolute;
      right: 0px;
      top: 10px;
      width: 150px;
      height: 300px;
      background-image: url(../images/pic11.png);
      background-size: cover;
    }
    .bgc2 {
      position: absolute;
      left: 12px;
      top: 148px;
      height: 140px;
      width: 46px;
      background-image: url(../images/pic9.png);
      background-size: cover;
    }
    .bgc3 {
      position: absolute;
      left: 58px;
      top: 244px;
      height: 140px;
      width: 46px;
      background-image: url(../images/pic10.png);
      background-size: cover;
    }
  }
}
</style>