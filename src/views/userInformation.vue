<template>
  <div class="container">
    <userCenterNavigation></userCenterNavigation>
    <div class="banner">
      <div class="leftBanner">
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <el-form-item label="头像:">
            <div class="avatar-container">
              <div class="avatar-preview">
                <img
                  v-if="previewImage || form.avatar"
                  :src="previewImage || form.avatar"
                  alt="Avatar"
                  class="avatar"
                />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </div>
              <input
                type="file"
                accept="image/*"
                @change="handleAvatarUpload"
                style="display: none"
                ref="fileInput"
              />
              <el-button @click="$refs.fileInput.click()" type="primary"
                >选择头像</el-button
              >
              <el-button v-if="previewImage" @click="removeImage" type="danger"
                >删除头像</el-button
              >
            </div>
          </el-form-item>

          <el-form-item label="用户名:">
            <el-input v-model="form.username" />
          </el-form-item>

          <el-form-item label="简介:">
            <el-input
              type="textarea"
              :rows="5"
              v-model="form.introduction"
            ></el-input>
          </el-form-item>

          <el-form-item label="出生日期:">
            <el-date-picker
              v-model="form.birth"
              type="date"
              placeholder="请选择日期"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <div v-if="isDevelopment">
    <h3>调试信息：</h3>
    <pre>{{ JSON.stringify(form, null, 2) }}</pre>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

const store = useStore();
const token = computed(() => store.getters.token);

// 将form改为ref，并从store中获取初始值
const form = ref({ ...store.state.user.userInfo });

const previewImage = ref("");

// 添加这行来判断是否为开发环境
const isDevelopment = import.meta.env.MODE === "development";

const fetchUserInfo = async () => {
  try {
    console.log("Fetching user info with token:", token.value);
    const response = await axios.get("https://www.femto.fun/user/information", {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    console.log("API response:", response.data);
    const { code, data } = response.data;
    if (code === 200 && data) {
      const userInfo = {
        username: data.userName || "",
        introduction: data.introduction || "",
        birth: data.birth ? data.birth.split("T")[0] : "",
        avatar: data.avatar || "",
      };
      // 更新本地form
      form.value = { ...userInfo };
      // 将用户信息存储到Vuex
      store.commit("user/setUserInfo", userInfo);
      console.log("Updated user info in Vuex:", userInfo);
    } else {
      console.error("未能获取到有效的用户信息");
      ElMessage.warning("未能获取到有效的用户信息，请稍后重试");
    }
  } catch (error) {
    console.error("获取用户信息失败:", error);
    if (error.response) {
      console.error("Error response:", error.response.data);
      console.error("Error status:", error.response.status);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    ElMessage.error("获取用户信息失败，请重试");
  }
};

const handleAvatarUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.size / 1024 / 1024 > 2) {
      ElMessage.error("图片大小不能超过 2MB!");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = () => {
  previewImage.value = "";
  form.value.avatar = "";
};

const onSubmit = async () => {
  if (
    !form.value.username &&
    !form.value.introduction &&
    !form.value.birth &&
    !previewImage.value
  ) {
    ElMessage.warning("请至少填写一项信息");
    return;
  }

  const formData = new FormData();
  if (form.value.username) formData.append("username", form.value.username);
  if (form.value.introduction)
    formData.append("introduction", form.value.introduction);
  if (form.value.birth) formData.append("birth", form.value.birth);

  if (previewImage.value) {
    const response = await fetch(previewImage.value);
    const blob = await response.blob();
    formData.append("avatar", blob, "avatar.jpg");
  }

  try {
    const response = await axios.post(
      "https://www.femto.fun/user/information",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("个人信息更新成功:", response.data);
    ElMessage.success(response.data.msg || "个人信息更新成功");
    await fetchUserInfo(); // 重新获取用户信息以更新显示
  } catch (error) {
    console.error("更新个人信息失败:", error);
    ElMessage.error(error.response?.data?.msg || "更新个人信息失败，请重试");
  }
};

const resetForm = () => {
  form.value = {
    username: "",
    introduction: "",
    birth: "",
    avatar: "",
  };
  previewImage.value = "";
};

onMounted(() => {
  console.log("Token:", token.value);
  if (!token.value) {
    ElMessage.warning("未检测到登录状态，请先登录");
    // 可以在这里添加重定向到登录页面的逻辑
  } else {
    fetchUserInfo();
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
  top: 120px;
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

.avatar-container {
  display: flex;
  align-items: center;
}

.avatar-preview {
  width: 100px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 20px;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
}
</style>
