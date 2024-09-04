<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Qs from "qs";

const username = ref("");
const password = ref("");

const router = useRouter();

const loginUser = () => {
  if (!username.value) {
    alert("邮箱不能为空");
    return;
  }
  if (!password.value) {
    alert("密码不能为空");
    return;
  }
  try {
    // 定义要传递的数据对象
    const data = {
      user_signal: username.value, // 修正获取输入框的值
      password: password.value, // 修正获取输入框的值
    };

    // 发送 POST 请求
    axios
      .post("http://www.femto.fun/user-login", Qs.stringify(data))
      .then((response) => {
        const loginRes = response.data; // 获取响应数据

        if (response.status === 200) {
          if (loginRes.code === 200) {
            console.log(loginRes);
            alert("登录成功");

            //token存入vuex
            this.$store.commit("user/setUserInfo", loginRes.data);

            router.push("/home");
          } else if (loginRes.code === 401) {
            console.log(loginRes);
            alert("密码错误");
          } else {
            console.log(loginRes);
            alert("登录失败");
          }
        } else {
          console.error("登录请求失败:", response);
          alert("登录失败");
        }
      })
      .catch((error) => {
        console.error("登录请求失败:", error);
        alert("登录失败");
      });
  } catch (error) {
    console.error(error);
    alert("登录失败");
  }
};
</script>

<template>
  <div class="container">
    <div class="banner">
      <div class="secondBanner">
        <div class="allLogo">
          <img
            src="../../image/《食卡Cofood》logo@2x (1).png"
            alt=""
            style="width: 46px; height: 71px; border-radius: 34px"
          />
          <img
            src="../../image/《食卡Cofood》logo文字汉字@2x.png"
            alt=""
            style="width: 132px; height: 53px"
          />
          <img
            src="../../image/《食卡Cofood》logo 文字@2x.png"
            alt=""
            style="width: 130px; height: 63px"
          />
        </div>
        <div class="coreBusiness">
          <div class="title">邮箱登录</div>
          <div class="loginInput">
            <div class="account">
              <div class="img"></div>
              <input type="text" v-model="username" placeholder="请输入邮箱" />
            </div>
            <div class="password">
              <div class="img"></div>
              <input
                type="password"
                v-model="password"
                placeholder="请输入密码"
              />
            </div>
            <div class="else" style="margin: 14px 0">
              <router-link to="/changePassword" style="float: left"
                >忘记密码？</router-link
              >
              <router-link to="/register" style="float: right"
                >没有账号？注册一个</router-link
              >
            </div>
            <button @click="loginUser">登录</button>

            <div class="elseWay">
              <a href=""
                ><img
                  src="../../image/QQ@2x.png"
                  alt=""
                  style="
                    border-radius: 50%;
                    height: 48px;
                    width: 48px;
                    margin: 59px 40px 0 40px;
                  "
              /></a>
              <a href=""
                ><img
                  src="../../image/微信@2x.png"
                  alt=""
                  style="height: 48px; width: 48px; margin: 59px 40px 0 40px"
              /></a>
              <a href=""
                ><img
                  src="../../image/邮箱@2x.png"
                  alt=""
                  style="height: 48px; width: 48px; margin: 59px 40px 0 40px"
              /></a>
            </div>
            <div class="elseWayTitle">使用第三方账户登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background: #f4f8fa;
}
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 根据子元素的最小高度调整容器的高度 */
  height: auto; /* 让容器的高度根据内容自动调整 */
  margin: 0;
  position: relative;
  background: #f4f8fa;
}

.banner {
  width: 1440px;
  position: absolute;
}
.secondBanner {
  width: 1440px;
  height: 900px;
  background-image: url(../../image/图像\ 1@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.allLogo {
  position: absolute;
  top: 10px;
  left: 10px;
}
.image {
  width: 170px;
  height: 264px;
  background-image: url(./image/《食卡Cofood》logo@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  margin: 151px 240px 235px 240px;
}
.coreBusiness {
  width: 400px;
  height: 650px;
  background: #ffffff;
  border-radius: 0px 20px 20px 0px;
  margin: 120px 0;
  float: left;
  padding: 0 27px;
}
.title {
  width: 96px;
  height: 31px;
  margin: 40px 152px;
  color: #000;
  font-size: 24px;
  font-weight: bold;
}

.loginInput .account .img {
  width: 22px;
  height: 22px;
  background-image: url(./image/我的@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  position: absolute;
  top: 50%;
  left: 10px; /* 调整图标的左边距 */
  transform: translateY(-50%); /* 垂直居中 */
}
.loginInput .password .img {
  width: 22px;
  height: 22px;
  background-image: url(./image/密码@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  position: absolute;
  top: 50%;
  left: 10px; /* 调整图标的左边距 */
  transform: translateY(-50%); /* 垂直居中 */
}

.account {
  width: 400px;
  height: 48px;
  background: #ffffff;
  margin: 73px 0 20px 0;
  position: relative;
  /* border-style: dotted; */
}

.password {
  width: 346px;
  height: 48px;
  background: #ffffff;
  position: relative;
}

.loginInput input {
  width: 355px; /* 调整输入框的宽度，减去图标宽度和左内边距 */
  height: 48px;
  background: #ffffff;
  padding-left: 42px; /* 给图标和占位符留出空间 */
  border-style: dotted;
}

.loginInput input::placeholder {
  opacity: 0.5; /* 占位符透明度 */
}

a {
  text-decoration: none; /* 取消下划线 */
  color: #808080; /* 继承父元素的文本颜色 */
}
button {
  width: 400px;
  height: 58px;
  background: #32db5a;
  border-radius: 50px;
  margin: 41px 0;
  color: #ffffff;
  font-size: 18px;
  border-style: none;
}

.elseway img {
  border-radius: 50%;
}
.elseWayTitle {
  margin: 16px 0 0 144px;
  color: #c7c7c7;
}
.banckLogin {
  margin: -328px 0px 0 0px;
  color: #808080;
}
</style>