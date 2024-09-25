<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="banner">
      <div class="leftBanner">
        <div class="address">
          <span style="margin: 0 10px">配送至</span>
          <div class="choice">
            <el-cascader
              v-model="selected"
              :options="filteredOptions"
              :props="cascaderProps"
              filterable
              placeholder="请选择"
              clearable
            ></el-cascader>
          </div>
        </div>
        <div class="top">
          <input
            type="checkbox"
            class="checkbox1"
            v-model="isAllSelected"
            id="myCheckbox1"
            @change="toggleAllSelection"
          />
          <label for="myCheckbox1" class="checkbox-label1"></label>
          <div style="position: absolute; top: 30px; left: 53px">全选</div>
          <div style="position: absolute; top: 30px; left: 173px">商品</div>
          <div style="position: absolute; top: 30px; left: 673px">单价</div>
          <div
            style="
              position: absolute;
              top: 30px;
              left: 836px;
              width: 32px;
              height: 21px;
            "
          >
            数量
          </div>
          <div
            style="
              position: absolute;
              top: 30px;
              left: 987px;
              width: 32px;
              height: 21px;
            "
          >
            小计
          </div>
          <div
            style="
              position: absolute;
              top: 30px;
              left: 1079px;
              width: 32px;
              height: 21px;
            "
          >
            操作
          </div>
        </div>
        <div class="item">
          <shoppingCartItem
            v-for="(item, index) in cartItems"
            :key="index"
            :item="item"
            :is-selected="item.isSelected"
            @remove="removeItem(index)"
            @updateSelection="updateItemSelection(index, $event)"
          ></shoppingCartItem>
        </div>
      </div>
    </div>
    <div class="bottom">
      <input
        type="checkbox"
        class="checkbox1"
        v-model="isAllSelected"
        id="myCheckbox2"
        @change="toggleAllSelection"
      />
      <label
        for="myCheckbox2"
        class="checkbox-label1"
        style="position: absolute; top: 30px; left: 154px"
      ></label>
      <div style="position: absolute; top: 30px; left: 184px">全选</div>
      <div style="position: absolute; top: 30px; left: 236px">
        <button @click="clearCart">清空购物车</button>
      </div>
      <div style="position: absolute; top: 30px; left: 860px">
        已选 {{ selectedCount }} 件商品
      </div>
      <div style="position: absolute; top: 30px; left: 1017px">
        总价: {{ totalPrice.toFixed(2) }} 元
      </div>
      <div style="position: absolute; top: 30px; left: 1180px">
        <button @click="checkout">去结算</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import shoppingCartItem from "../components/shoppingCartItem.vue";

const cartItems = ref([
  { name: "商品1", price: 30, quantity: 1, isSelected: false },
  { name: "商品2", price: 30, quantity: 1, isSelected: false },
  { name: "商品3", price: 30, quantity: 1, isSelected: false },
  // 其他购物车项...
]);

const value = ref("");
const props = { multiple: true };
const selected = ref([]);
const options = ref([
  {
    value: "guangzhou",
    label: "广州",
    children: [
      { value: "panyu", label: "番禺区" },
      { value: "tianhe", label: "天河区" },
    ],
  },
  {
    value: "shanghai",
    label: "上海",
    children: [
      { value: "pudong", label: "浦东新区" },
      { value: "puxi", label: "浦西" },
    ],
  },
  {
    value: "beijing",
    label: "北京",
    children: [
      { value: "dongcheng", label: "东城区" },
      { value: "xicheng", label: "西城区" },
    ],
  },
  // 更多选项...
]);

const cascaderProps = {
  value: "value",
  label: "label",
  children: "children",
};

const filteredOptions = computed(() => {
  // 可以在这里添加动态过滤逻辑
  return options.value;
});

const isAllSelected = ref(false);

//全选框逻辑
const toggleAllSelection = () => {
  cartItems.value.forEach((item) => {
    item.isSelected = isAllSelected.value;
  });
};

const updateItemSelection = (index, isSelected) => {
  cartItems.value[index].isSelected = isSelected;
  updateAllSelectedState();
};

const updateAllSelectedState = () => {
  isAllSelected.value = cartItems.value.every((item) => item.isSelected);
};

const removeItem = (index) => {
  cartItems.value.splice(index, 1);
};

const clearCart = () => {
  if (confirm("确定清空购物车吗？")) {
    cartItems.value = [];
  }
};

const selectedCount = computed(() => {
  return cartItems.value.filter((item) => item.isSelected).length;
});

const totalPrice = computed(() => {
  return cartItems.value
    .filter((item) => item.isSelected)
    .reduce((total, item) => total + item.price * item.quantity, 0);
});

const checkout = () => {
  alert(`去结算，金额为：${totalPrice.value}元`);
};
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
  position: absolute;
  top: 36px;
  margin-right: 16px;
  float: left;
}
.top {
  width: 1178px;
  height: 55px;
  background: #eaecef;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin: 10px 0;
}
/* 隐藏原始复选框 */
.checkbox1 {
  display: none;
}

/* 自定义复选框样式 */
.checkbox-label1 {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 4px;
  position: absolute;
  top: 30px;
  left: 23px;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  line-height: 18px; /* 垂直居中 */
}

/* 复选框被选中时的样式 */
.checkbox1:checked + .checkbox-label1 {
  background-color: #27c24b; /* 选中时背景颜色 */
}

/* 复选框被选中时的小勾 */
.checkbox1:checked + .checkbox-label1::after {
  content: "\2714"; /* Unicode 勾选符号 */
  color: white; /* 勾选符号颜色 */
  font-size: 14px; /* 勾选符号大小 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.item {
  width: 842px;
}
.bottom {
  width: 1440px;
  height: 64px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.address {
  width: 350px;
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 850px;
  top: -30px;
  align-items: center;
}
</style>我的shoppingCartItem中的img的路径不想写死，而是从后端获取