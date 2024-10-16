<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const isLoggedIn = computed(() => !!store.getters.token);
const username = computed(() => store.state.user.userInfo.username || "用户");

const userAvatar = computed(() => {
  const avatar = store.state.user.userInfo.avatar;
  if (avatar && avatar.startsWith("http")) {
    return avatar;
  } else if (avatar) {
    return `https://www.femto.fun${avatar}`;
  } else {
    return "../../image/头像@2x.png";
  }
});

const goToSearch = () => {
  router.push("/search");
};

const goToAIPage = () => {
  router.push("/AIPage");
};

const handleLoginLogout = () => {
  if (isLoggedIn.value) {
    store.dispatch("logout");
    alert("已退出登录");
    alert("重新登录需要刷新页面");
    setInterval(() => {
      router.push("/login");
    }, 1500);
  } else {
    router.push("/login");
  }
};

const userInfo = computed(() => store.state.user.userInfo);
const avatar = computed(() => userInfo.value.avatar || "默认头像URL");

onMounted(async () => {
  if (store.getters.token) {
    if (!store.state.user.userInfo.username) {
      await store.dispatch("fetchUserInfo");
    }
  }
});
</script>

<template>
  <div class="navigation">
    <div class="logo"></div>
    <router-link to="/home">
      <div class="subfield" :class="{ active: $route.path === '/home' }">
        首页
      </div>
    </router-link>
    <router-link to="/recommand">
      <div class="subfield" :class="{ active: $route.path === '/recommand' }">
        推荐
      </div>
    </router-link>
    <router-link to="/community">
      <div class="subfield" :class="{ active: $route.path === '/community' }">
        社区
      </div>
    </router-link>
    <router-link to="/shopping">
      <div class="subfield" :class="{ active: $route.path === '/shopping' }">
        购物
      </div>
    </router-link>
    <div class="search" @click="goToSearch">
      <div class="img"><img src="../../image/消息@2x.png" alt="" /></div>
      <input type="text" placeholder="点击搜索" readonly />
    </div>
    <div class="account">
      <router-link to="/user">
        <img :src="userAvatar" alt="用户头像" />
      </router-link>
    </div>
    <button @click="handleLoginLogout">
      {{ isLoggedIn ? "退出登录" : "点击登录" }}
    </button>
    <button v-if="isLoggedIn" @click="goToAIPage" class="ai-button">
      唤醒健康管家
    </button>
  </div>
</template>

<style scoped>
a {
  text-decoration: none; /* 取消下划线 */
}
.navigation {
  height: 80px;
  width: 1440px;
  background: #ffffff;
  position: sticky;
  display: flex;
  align-items: stretch;
}

.logo {
  width: 221px;
  height: 80px;
  line-height: normal;
  font-family: Microsoft YaHei;
  font-weight: 700;
  background-color: #32db5a;
  font-size: 54px;
  margin: 0 0 0 0px;
  background-image: url("../../image/微信图片_20240531224458.png");
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
}

.subfield {
  position: relative;
  width: 36px;
  height: 41px;
  line-height: normal;
  font-family: Microsoft YaHei;
  font-weight: 700;
  color: #404040;
  font-size: 18px;
  margin: 28px 31px 0 31px;
  cursor: pointer;
}

.subfield::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #6b6b6b;
  display: none;
}

.subfield.active::after {
  display: block;
}

.subfield.active {
  color: black;
}
.account {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 57px;
  margin-top: 20px;
}
.search img {
  width: 35px;
  height: 35px;
  margin: 5px;
}
.account img {
  width: 35px;
  height: 35px;
  margin: 5px;
  border-radius: 50%; /* 添加圆角,使头像呈圆形 */
  object-fit: cover; /* 确保图片填充整个空间 */
}
.search input {
  width: 250px;
  height: 35px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
}
.navigation button {
  width: 120px;
  height: 40px;
  background: #32db5a;
  border-radius: 8px;
  line-height: normal;
  font-family: Microsoft YaHei;
  font-weight: 700;
  color: #ffffff;
  font-size: 18px;
  border-style: none;
  margin-top: 20px;
  margin-left: 20px;
}

.search {
  width: 300px; /* 减小搜索框宽度 */
  height: 40px;
  background: #f4f8fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 69px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search:hover {
  background-color: #e8ecee;
}

.search input {
  width: 250px; /* 调整输入框宽度 */
  height: 35px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
}

.search input::placeholder {
  color: #999;
}

.ai-button {
  width: 120px;
  height: 40px;
  background: #32db5a;
  border-radius: 8px;
  line-height: normal;
  font-family: Microsoft YaHei;
  font-weight: 700;
  color: #ffffff;
  font-size: 14px;
  border-style: none;
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
