<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Qs from "qs";

const router = useRouter();

// 定义 ref
const email = ref("");
const password = ref("");
const repassword = ref("");
const verifyCode = ref("");
const countdown = ref(0); // 添加倒计时计数器

// 发送邮箱验证码
const sendVerificationCode = async () => {
  if (!email.value) {
    alert("邮箱不能为空");
    return;
  }
  try {
    const res = await axios({
      method: "post",
      url: `http://www.femto.fun/verify-email?email=${email.value}&action=0`,
    });

    // 检查请求是否成功
    if (res.data.code === 409) {
      alert("账号已注册！");
    } else if (res.data.code === 200) {
      alert("验证码发送成功");

      // 开始倒计时
      countdown.value = 60;
      const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
          clearInterval(timer);
        }
      }, 1000);
    } else {
      // 如果请求失败，弹出错误提示
      alert("验证码发送失败");
    }
  } catch (error) {
    // 如果发生错误，打印错误信息并弹出错误提示
    console.error("Error:", error);
    alert("验证码发送失败");
  }
};

//注册
const RegisterUser = async () => {
  if (!email.value) {
    alert("用户名不能为空");
    return;
  }
  if (!password.value) {
    alert("密码不能为空");
    return;
  }
  if (repassword.value !== password.value) {
    alert("两次输入密码不一致！");
    return;
  }
  if (!verifyCode.value) {
    alert("请输入验证码");
    return;
  }
  try {
    // 定义要传递的数据对象
    const data = {
      email: email.value, // 修正获取输入框的值
      password: password.value, // 修正获取输入框的值
      verifyCode: verifyCode.value,
    };

    // 发送 POST 请求
    axios
      .post(
        "http://127.0.0.1:4523/m1/4260973-0-default/user-register-email",
        Qs.stringify(data)
      )
      .then((response) => {
        const Res = response.data; // 获取响应数据
        if (response.status === 200) {
          if (Res.code === 201) {
            console.log(loginRes);
            alert("注册成功");
            router.push("/home");
          } else if (Res.code === 401) {
            console.log(Res);
            alert("验证码错误");
          } else {
            console.log(Res);
            alert("注册失败");
          }
        } else {
          console.error("注册请求失败:", response);
          alert("注册失败");
        }
      })
      .catch((error) => {
        console.error("注册请求失败:", error);
        alert("注册失败");
      });
  } catch (error) {
    console.error(error);
    alert("注册失败");
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
          <div class="title"></div>
          <div class="loginInput">
            <div class="inputField account">
              <div class="img"></div>
              <input type="text" v-model="email" placeholder="请输入邮箱号" />
            </div>
            <div class="inputField password">
              <div class="img"></div>
              <input
                type="password"
                v-model="password"
                placeholder="请输入密码"
              />
            </div>
            <div class="inputField password">
              <div class="img"></div>
              <input
                type="password"
                v-model="repassword"
                placeholder="请再次输入密码"
              />
            </div>
            <div class="inputField checkCode">
              <div class="img"></div>
              <input
                type="text"
                v-model="verifyCode"
                placeholder="请输入验证码"
              />
              <button @click="sendVerificationCode" :disabled="countdown > 0">
                {{ countdown > 0 ? `重新获取(${countdown})` : "获取验证码" }}
              </button>
            </div>
          </div>
          <div class="else">
            <router-link to="/" style="float: right"
              >已有账号？立即登录</router-link
            >
          </div>
          <button class="regigsterButton" @click="RegisterUser">注册</button>
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
  background-image: url(../../image/《食卡Cofood》logo@2x.png);
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
  background-image: url(../../image/账号注册@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.loginInput {
  margin: 73px 0 0 0;
}
.inputField {
  position: relative;
  width: 355px;
  height: 48px;
  background: #ffffff;
  margin: 0 0 20px 0;
}
.account {
  width: 400px;
  height: 48px;
  background: #ffffff;
  margin: 73px 0 20px 0;
  position: relative;
  /* border-style: dotted; */
}
.inputField .img {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-size: cover;
}

.inputField input {
  width: 355px; /* 调整输入框的宽度，减去图标宽度和左内边距 */
  height: 48px;
  background: #ffffff;
  padding-left: 42px;
  border-style: dotted;
}

.inputField input::placeholder {
  opacity: 0.5;
}

.checkCode .img {
  background-image: url(../../image/验证码@2x.png);
}

.account .img {
  background-image: url(../../image/我的@2x.png);
}

.password .img {
  background-image: url(../../image/密码@2x.png);
}

.checkCode button {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 0;
  background: none;
  border: none;
  margin: 0 0px 0 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #bfbfbf;
}

.else {
  margin: 16px 0 0 0;
  text-align: right;
}

a {
  text-decoration: none; /* 取消下划线 */
  color: #808080;
}
.regigsterButton {
  width: 400px;
  height: 58px;
  background: #32db5a;
  border-radius: 50px;
  margin: 41px 0;
  color: #ffffff;
  font-size: 18px;
  border-style: none;
}
</style>