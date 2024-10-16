<template>
  <div class="container">
    <userCenterNavigation></userCenterNavigation>
    <div class="banner">
      <div class="leftBanner">
        <div class="add" @click="showAddAddressDialog">新增收货地址</div>
        <Address
          ref="addressComponent"
          @address-added="handleAddressAdded"
        ></Address>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const addressComponent = ref(null);

const showAddAddressDialog = () => {
  addressComponent.value.showAddDialog();
};

const handleAddressAdded = () => {
  addressComponent.value.fetchData();
};

onMounted(() => {
  if (addressComponent.value) {
    addressComponent.value.fetchData();
  }
});
</script>

<style scoped>
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
  height: 600px;
  position: absolute;
  top: 10px;
  left: 280px;
  margin-right: 16px;
  overflow-y: auto;
  float: left;
}
.add {
  width: 142px;
  height: 40px;
  background: #8dfda7;
  border: 2px solid #32db5a;
  border-radius: 10px;
  position: relative;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}
.add:hover {
  background-color: #32db5a;
  color: white;
}
</style>