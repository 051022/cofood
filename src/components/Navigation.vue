<script>
export default {
  data() {
    return {
      currentPath: "/home", // 初始默认为首页
    };
  },
  // methods 对象包含一个名为 setActivePath 的方法，用于设置 currentPath 的值为传入的路径。
  methods: {
    setActivePath(path) {
      this.currentPath = path;
    },
  },
  // watch 对象用于监听 $route 对象的变化。$route 包含了当前路由信息。
  // 当路由发生变化时，会调用 setActivePath 方法来更新 currentPath
  watch: {
    $route(to, from) {
      this.setActivePath(to.path);
    },
  },
  mounted() {
    // 在组件挂载时，设置初始 active 路径
    this.setActivePath(this.$route.path);
  },
};
</script>
<template>
  <div class="navigation">
    <div class="logo"></div>
    <router-link to="/home">
      <div class="subfield" :class="{ active: currentPath === '/home' }">
        首页
      </div>
    </router-link>
    <router-link to="/recommand">
      <div class="subfield" :class="{ active: currentPath === '/recommand' }">
        推荐
      </div>
    </router-link>
    <router-link to="/community">
      <div class="subfield" :class="{ active: currentPath === '/community' }">
        社区
      </div>
    </router-link>
    <router-link to="/shopping">
      <div class="subfield" :class="{ active: currentPath === '/shopping' }">
        购物
      </div>
    </router-link>
    <div class="search">
      <div class="img"><img src="../../image/消息@2x.png" alt="" /></div>
      <input type="text" />
    </div>
    <div class="account">
      <router-link to="/user">
        <img src="../../image/头像@2x.png" alt="" />
      </router-link>
    </div>
    <router-link to="/"><button>点击登录</button></router-link>
  </div>
</template>



<style>
a {
  text-decoration: none; /* 取消下划线 */
}
.navigation {
  height: 80px;
  width: 1440px;
  background: #ffffff;
  position: sticky;
  display: flex;
  align-items: center;
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
.search {
  width: 474px;
  height: 40px;
  background: #f4f8fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 69px;
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
}
input {
  height: 35px;
  width: 400px;
  border-style: none;
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
</style>