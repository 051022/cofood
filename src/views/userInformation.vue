<template>
  <div class="container">
    <userCenterNavigation></userCenterNavigation>
    <div class="banner">
      <div class="leftBanner">
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <!-- 行内表单 -->
          <el-form
            :inline="true"
            :model="form"
            label-width="auto"
            style="max-width: 600px; margin: 0 28px"
          >
            <el-form-item label="头像:">
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item>
              <el-button
                type="primary"
                @click="onSubmit"
                style="background-color: #32db5a"
                >更换头像</el-button
              >
            </el-form-item>
          </el-form>

          <!-- 用户名 -->
          <el-form-item label="用户名:">
            <el-col :span="11"> <el-input v-model="form.name" /></el-col>
          </el-form-item>
          <!-- 文本 -->
          <el-form-item label="简介:">
            <el-input
              type="textarea"
              resize="none"
              :rows="5"
              v-model="form.desc"
            ></el-input>
          </el-form-item>

          <!-- 单选 -->
          <el-form-item label="性别:">
            <el-radio-group v-model="form.resource">
              <el-radio value="man">男</el-radio>
              <el-radio value="woman">女</el-radio>
              <el-radio value="secret">保密</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 年龄 -->
          <el-form-item label="年龄:">
            <el-col :span="11">
              <el-text>{{ form.age }}</el-text>
            </el-col>
          </el-form-item>

          <!-- 时间 -->
          <el-form-item label="出生日期:">
            <el-col :span="11">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="请选择日期"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
              style="background-color: #32db5a"
              >提交</el-button
            >
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

import type { UploadProps } from "element-plus";

const imageUrl = ref("");

const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};

const form = reactive({
  name: "",
  date1: "",
  resource: "",
  desc: "",
  age: "",
});

const text = ref("");
const textarea = ref("");

const calculateAge = (birthDate: string) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

watch(
  () => form.date1,
  (newDate) => {
    form.age = newDate ? calculateAge(newDate).toString() : "";
  }
);

const onSubmit = () => {
  console.log("submit!");
};
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
  position: absolute;
  top: 10px;
  left: 280px;
  margin-right: 16px;
  float: left;
}
textarea {
  resize: none; /* 禁止用户手动拖动调整大小 */
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 88px;
  height: 88px;
  text-align: center;
}
</style>
