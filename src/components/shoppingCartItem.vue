<template>
  <div class="cart-item">
    <input
      type="checkbox"
      class="checkbox"
      v-model="localSelected"
      id="myCheckbox"
      @change="handleSelectionChange"
    />
    <label for="myCheckbox" class="checkbox-label"></label>

    <img src="../../foodPictures/拿铁.webp" class="product-image" />

    <span class="product-name">拿铁</span>
    <span class="product-price">{{ formatPrice(product.price) }}</span>

    <div class="quantity-control">
      <button @click="decrement">-</button>
      <span class="quantity">{{ quantity }}</span>
      <button @click="increment">+</button>
    </div>

    <span class="subtotal">{{ formatPrice(subtotal) }}</span>

    <div class="delete" @click="removeItem">删除</div>
    <div class="add" @click="toggleFavorite">收藏</div>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  product: {
    type: Object,
    default: () => ({ image: "", name: "", price: 30 }),
  },
  selected: {
    type: Boolean,
    default: false,
  },
});

const quantity = ref(1);
const isSelected = ref(props.selected);
const isFavorite = ref(false);

const subtotal = computed(() => props.product.price * quantity.value);

const formatPrice = (price) => `￥${price.toFixed(2)}`;

const increment = () => quantity.value++;
const decrement = () => {
  if (quantity.value > 1) quantity.value--;
};

const emit = defineEmits(["remove", "updateSelection"]);

const handleSelectionChange = (event) => {
  emit("updateSelection", event.target.checked);
};

const removeItem = () => {
  emit("remove");
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};
watch(
  () => props.selected,
  (newVal) => {
    isSelected.value = newVal;
  }
);
</script>

<style scoped>
.cart-item {
  width: 1178px;
  height: 154px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  position: relative;
  margin: 10px 0;
}

.checkbox {
  display: none;
}

.checkbox-label {
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
  line-height: 18px;
}

.checkbox:checked + .checkbox-label {
  background-color: #27c24b;
}

.checkbox:checked + .checkbox-label::after {
  content: "\2714";
  color: white;
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.product-image {
  width: 102.78px;
  height: 102.78px;
  position: absolute;
  top: 23px;
  left: 54px;
}

.product-name {
  width: 48px;
  height: 21px;
  position: absolute;
  top: 22px;
  left: 173px;
}

.product-price {
  width: 70px;
  height: 21px;
  position: absolute;
  top: 64px;
  left: 659px;
}

.subtotal {
  width: 70px;
  height: 21px;
  font-weight: bold;
  position: absolute;
  top: 67px;
  left: 977px;
}

.quantity {
  width: 68px;
  height: 26.5px;
  background: #ffffff;
  border: 1px solid #707070;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-control {
  display: flex;
  align-items: center;
}

.delete,
.add {
  position: absolute;
  top: 120px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}

.delete {
  left: 1050px;
}

.add {
  left: 1100px;
}
</style>



<style scoped>
.cart-item {
  width: 1178px;
  height: 154px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  position: relative;
  margin: 10px 0;
}
/* 隐藏原始复选框 */
.checkbox {
  display: none;
}

/* 自定义复选框样式 */
.checkbox-label {
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
.checkbox:checked + .checkbox-label {
  background-color: #27c24b; /* 选中时背景颜色 */
}

/* 复选框被选中时的小勾 */
.checkbox:checked + .checkbox-label::after {
  content: "\2714"; /* Unicode 勾选符号 */
  color: white; /* 勾选符号颜色 */
  font-size: 14px; /* 勾选符号大小 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.product-image {
  width: 102.78px;
  height: 102.78px;
  position: absolute;
  top: 23px;
  left: 54px;
}

.product-name {
  width: 48px;
  height: 21px;
  position: absolute;
  top: 22px;
  left: 173px;
}

.product-price {
  width: 70px;
  height: 21px;
  position: absolute;
  top: 64px;
  left: 659px;
}
.subtotal {
  width: 70px;
  height: 21px;
  font-weight: Bold;
  position: absolute;
  top: 67px;
  left: 977px;
}
.quantity {
  width: 68px;
  height: 26.5px;
  background: #ffffff;
  border: 1px solid;
  border-color: #707070;
  display: flex;
  align-content: center;
  justify-content: center;
}
.quantity-control {
  display: flex;
  align-items: center;
  position: absolute;
  top: 63px;
  left: 791px;
}

button {
  width: 28px;
  height: 28px;
  background: #eaecef;
  border: 1px solid;
  border-color: #707070;
}
.delete {
  width: 32px;
  height: 21px;
  position: absolute;
  top: 50px;
  left: 1079px;
}
.add {
  width: 32px;
  height: 21px;
  position: absolute;
  top: 77px;
  left: 1079px;
}
</style>
