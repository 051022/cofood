<template>
  <div class="container">
    <navigation></navigation>
    <div class="userCenterBanner">
      <div class="menu">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              :default-active="activeIndex"
              @select="handleSelect"
              active-text-color="#32db5a"
              background-color="#eaecef"
              class="el-menu-vertical-demo"
              text-color="#808080"
            >
              <el-menu-item index="0">
                <el-icon><UserFilled /></el-icon>
                <span>个人中心</span>
              </el-menu-item>
              <el-menu-item index="1">
                <el-icon><Edit /></el-icon>
                <span>用户信息</span>
              </el-menu-item>
              <el-menu-item index="2">
                <el-icon><Location /></el-icon>
                <span>收货地址</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><Lock /></el-icon>
                <span>隐私管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><QuestionFilled /></el-icon>
                <span>帮助与反馈</span>
              </el-menu-item>
              <el-menu-item index="5">
                <el-icon><Warning /></el-icon>
                <span>关于</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  Edit,
  Location,
  Lock,
  QuestionFilled,
  UserFilled,
  Warning,
} from "@element-plus/icons";

const router = useRouter();
const route = useRoute();
const activeIndex = ref("0");

watchEffect(() => {
  switch (route.path) {
    case "/userCenter":
      activeIndex.value = "0";
      break;
    case "/userInformation":
      activeIndex.value = "1";
      break;
    case "/userAddress":
      activeIndex.value = "2";
      break;
    default:
      activeIndex.value = "0";
  }
});

const handleSelect = (index) => {
  switch (index) {
    case "0":
      router.push("/userCenter");
      break;
    case "1":
      router.push("/userInformation");
      break;
    case "2":
      router.push("/userAddress");
      break;
    default:
      break;
  }
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
.el-menu-vertical-demo {
  width: 198px;
}
.userCenterBanner {
  position: absolute;
  top: 100px;
  width: 1040px;
  height: 600px;
  background: #ffffff;
  border-radius: 0px 10px 10px 0px;
}
.tac {
  width: 198px;
  height: 600px;
  background: #eaecef;
  border-radius: 10px 0px 0px 10px;
}
</style>
