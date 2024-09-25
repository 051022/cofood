<template>
  <div class="informations">
    <el-descriptions :column="1">
      <el-descriptions-item label="收货人:">{{
        formData.recipient
      }}</el-descriptions-item>
      <el-descriptions-item label="所在地区:">{{
        formData.region
      }}</el-descriptions-item>
      <el-descriptions-item label="地址:">{{
        formData.address
      }}</el-descriptions-item>
      <el-descriptions-item label="标签:"
        ><el-tag size="small">{{ formData.tag }}</el-tag></el-descriptions-item
      >
      <el-descriptions-item label="手机:">{{
        formData.phone
      }}</el-descriptions-item>
      <el-descriptions-item label="固定电话:">{{
        formData.stickPhone
      }}</el-descriptions-item>
      <el-descriptions-item label="电子邮箱:">{{
        formData.email
      }}</el-descriptions-item>
    </el-descriptions>

    <div class="bottom-buttons">
      <el-button class="el-button" @click="handleSetDefault"
        >设为默认</el-button
      >
      <el-button class="el-button" @click="handleEdit">编辑</el-button>
      <el-button class="el-button close-btn" @click="handleClose">×</el-button>
    </div>

    <!-- 编辑表单 -->
    <el-dialog
      title="编辑信息"
      v-model="dialogVisible"
      @close="handleDialogClose"
      style="border-radius: 10px"
    >
      <el-form :model="editData">
        <el-form-item label="收货人:">
          <el-input v-model="editData.recipient"></el-input>
        </el-form-item>
        <el-form-item label="所在地区:">
          <el-input v-model="editData.region"></el-input>
        </el-form-item>
        <el-form-item label="地址:">
          <el-input v-model="editData.address"></el-input>
        </el-form-item>
        <el-form-item label="标签:">
          <el-input v-model="editData.tag"></el-input>
        </el-form-item>
        <el-form-item label="手机:">
          <el-input v-model="editData.phone"></el-input>
        </el-form-item>
        <el-form-item label="固定电话:">
          <el-input v-model="editData.stickPhone"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱:">
          <el-input v-model="editData.email"></el-input>
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false" style="margin: 10px"
            >取消</el-button
          >
          <el-button type="primary" @click="handleSave">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dialogVisible = ref(false);
const formData = ref({
  recipient: "奇异果",
  region: "广东省广州市番禺区",
  address: "小谷围岛228号",
  tag: "学校",
  phone: "12133445566",
  stickPhone: "",
});
const editData = ref({
  recipient: "",
  region: "",
  address: "",
  tag: "",
  phone: "",
  stickPhone: "",
});

function handleClose() {
  console.log("关闭按钮点击");
}

function handleSetDefault() {
  console.log("设为默认按钮点击");
}

function handleEdit() {
  editData.value = { ...formData.value };
  dialogVisible.value = true;
}

function handleDialogClose() {
  dialogVisible.value = false;
}

function handleSave() {
  formData.value = { ...editData.value };
  dialogVisible.value = false;
}
</script>  
  

<style scoped>
.informations {
  position: relative; /* 使绝对定位的按钮相对于此容器定位 */
  width: 774px;
  height: 300px;
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}

/* 右上角关闭按钮样式 */
.close-btn {
  position: absolute;
  top: -260px;
  right: 10px;
  border: none;
  color: #707070;
  width: 36.77px;
  height: 36.77px;
  font-size: 20px;
  cursor: pointer;
  background-color: #ffffff;
}

/* 右下角按钮区域 */
.bottom-buttons {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px; /* 按钮之间的间距 */
}

/* 按钮样式调整 */
.el-button {
  margin: 0; /* 去掉默认的外边距 */
}
</style>
