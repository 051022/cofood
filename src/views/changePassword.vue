<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Qs from "qs";

const email = ref("");
const password = ref("");
const verificationCode = ref("");
const countdown = ref(0); // 添加倒计时计数器
const router = useRouter();

// 发送邮箱验证码
const sendVerificationCode = async () => {
  if (!email.value) {
    alert("邮箱不能为空");
    return;
  }
  try {
    const res = await axios({
      method: "post",
      url: `https://www.femto.fun/verify-email?email=${email.value}&action=1`,
    });

    // 检查请求是否成功
    if (res.data.code === 409) {
      alert("请求有误");
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
//更改密码
const loginUser = () => {
  if (!email.value) {
    alert("邮箱不能为空");
    return;
  }
  if (!password.value) {
    alert("密码不能为空");
    return;
  }
  if (!verificationCode.value) {
    alert("请输入验证码");
    return;
  }
  try {
    // 定义要传递的数据对象
    const data = {
      email: email.value, // 修正获取输入框的值
      password: password.value, // 修正获取输入框的值
      verifyCode: verificationCode.value,
    };

    // 发送 POST 请求
    axios
      .post("https://www.femto.fun/password-email", Qs.stringify(data))
      .then((response) => {
        const loginRes = response.data; // 获取响应数据
        if (response.status === 200) {
          if (loginRes.code === 200) {
            console.log(loginRes);
            alert("修改成功");
            router.push("/");
          } else if (loginRes.code === 401) {
            console.log(loginRes);
            alert("验证码错误");
          } else {
            console.log(loginRes);
            alert("修改失败");
          }
        } else {
          console.error("修改请求失败:", response);
          alert("修改失败");
        }
      })
      .catch((error) => {
        console.error("修改请求失败:", error);
        alert("修改失败");
      });
  } catch (error) {
    console.error(error);
    alert("修改失败");
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
          <div class="title">更改密码</div>
          <div class="loginInput">
            <div class="account">
              <div class="img"></div>
              <input type="text" v-model="email" placeholder="请输入邮箱" />
            </div>
            <div class="password">
              <div class="img"></div>
              <input
                type="password"
                v-model="password"
                placeholder="请输入密码"
              />
            </div>
            <div class="checkCode">
              <div class="img"></div>
              <input
                type="text"
                v-model="verificationCode"
                placeholder="请输入验证码"
              />
              <button @click="sendVerificationCode" :disabled="countdown > 0">
                {{ countdown > 0 ? `重新获取(${countdown})` : "获取验证码" }}
              </button>
            </div>
            <div class="else" style="margin: 84px 0">
              <router-link to="/" class="banckLogin" style="float: right">
                点击返回登录
              </router-link>
            </div>
            <button @click="loginUser">更改密码</button>
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
  color: #000;
  font-size: 24px;
  font-weight: bold;
}

.loginInput .account .img {
  width: 22px;
  height: 22px;
  background-image: url(../../image/我的@2x.png);
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
  background-image: url(../../image/密码@2x.png);
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

.checkCode .img {
  width: 22px;
  height: 22px;
  background-image: url(../../image/验证码@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  position: absolute;
  top: 50%;
  left: 10px; /* 调整图标的左边距 */
  transform: translateY(-50%); /* 垂直居中 */
}

.checkCode button {
  position: absolute;
  top: 0;
  right: 30px;
  height: 100%;
  width: 100px;
  padding: 0;
  background: none;
  border: none;
  margin: 0 0px 0 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #bfbfbf;
}
.checkCode {
  margin: 20px 0;
  position: absolute;
}
</style>