<template>
  <div class="productInformation">
    <div class="productImg">暂无数据</div>
    <div class="productPrice">
      <p>价格：30元</p>
    </div>
    <div class="bottom-right">
      <div class="counter">
        <button class="counter-btn" @click="decrement">-</button>
        <span>{{ count }}</span>
        <button class="counter-btn" @click="increment">+</button>
      </div>
      <div class="icons">
        <div
          class="icon favorite"
          @click="toggleFavorite"
          :style="{
            backgroundImage: `url(${
              isFavorite ? '../../image/标星-fill.png' : '../../image/标星.png'
            })`,
          }"
        ></div>

        <div
          class="icon cart"
          @click="addToCart"
          :style="{
            backgroundImage: `url(${
              isCart ? '../../image/购物车-fill.svg' : '../../image/购物车.svg'
            })`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import store from "../store/modules/user";

const count = ref(0);
const increment = () => {
  count.value += 1;
};
const decrement = () => {
  if (count.value > 0) {
    count.value -= 1;
  }
};

const isFavorite = ref(false);
const toggleFavorite = () => {
  //判断token是否存在
  const token = store.getters.token;
  if (!token) {
    //弹确认框
    ElMessageBox.confirm("温馨提示：需要先登录才可以加入收藏哦", "Warning", {
      confirmButtonText: "登录",
      cancelButtonText: "再看看",
    })
      .then(() => {
        //跳转登录页面
      })
      .catch(() => {
        ElMessage({
          message: "未登录",
        });
      });
  } else {
    isFavorite.value = !isFavorite.value;
    if (isFavorite.value === false) alert("已取消收藏");
    else alert("已收藏");
  }
};

const isCart = ref(false);
const addToCart = () => {
  //判断token是否存在
  const token = store.getters.token;
  if (!token) {
    //弹确认框
    ElMessageBox.confirm("温馨提示：需要先登录才可以加入购物车哦", "Warning", {
      confirmButtonText: "登录",
      cancelButtonText: "再看看",
    })
      .then(() => {
        //跳转登录页面
      })
      .catch(() => {
        ElMessage({
          message: "未登录",
        });
      });
  } else {
    alert("商品已经加入购物车");
    isCart.value = 1;
  }
};
</script>


<style>
.productInformation {
  width: 300px;
  height: 405px;
  margin: 10px 5px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative; /* 为了正确定位右下角的元素 */
}
.productInformation:hover {
  border: 2px solid #32db5a;
}

.productImg {
  width: 300px;
  height: 300px;
  background-color: #bfbfbf;
}

.productPrice {
  padding: 10px;
  width: 280px;
  height: 85px;
}

/* 右下角的布局 */
.bottom-right {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter {
  display: flex;
  align-items: center;
}

.counter-btn {
  background-color: #bfbfbf;
  border: none;
  color: white;
  font-size: 18px;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  margin: 5px;
}

.icons {
  display: flex;
  margin-top: 10px;
}

.icon {
  width: 24px;
  height: 24px;
  margin: 0 5px;
  cursor: pointer;
  background-size: cover;
}

.icon.favorite {
  background-image: url("../../image/标星.png");
}

.icon.cart {
  background-image: url("../../image/购物车.svg");
}

.icon-favorite {
  background-image: url("../../image/标星-fill.png");
}
.icon-cart {
  background-image: url("../../image/购物车-fill.svg");
}
</style>
