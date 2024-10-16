<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Qs from "qs";
import { useStore } from "vuex";

const username = ref("");
const password = ref("");

const router = useRouter();
const store = useStore();

const loginUser = () => {
  // 检查邮箱是否为空
  if (!username.value) {
    alert("邮箱不能为空");
    return;
  }
  // 检查邮箱格式是否正确
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(username.value)) {
    alert("邮箱格式不正确");
    return false; // 阻止表单提交
  }
  //检查密码是否为空
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
      .post("https://www.femto.fun/user-login", Qs.stringify(data))
      .then((response) => {
        const loginRes = response.data; // 获取响应数据

        if (response.status === 200 && loginRes.code === 200) {
          if (loginRes.data.token) {
            // 使用新的 Vuex action 保存 token
            store.dispatch("saveToken", loginRes.data.token);
            // 登录成功后立即获取用户信息
            store.dispatch("user/fetchUserInfo");
            store.dispatch("user/fetchBodyData");
            console.log("Token 成功保存到 Vuex!");
            console.log(loginRes.data.token);
          }

          router.push("/home");
          alert("登录成功");
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

const fetchBodyData = async () => {
  try {
    console.log("Fetching body data with token:", token.value);
    const response = await axios.get("https://www.femto.fun/user/data", {
      headers: { Authorization: `Bearer ${token.value}` },
    });
    console.log("API response:", response.data);
    const { code, data } = response.data;
    if (code === 200 && data) {
      bodyData.value = {
        height: data.height === -1 ? null : data.height,
        weight: data.weight === -1 ? null : data.weight,
        blood_pressure: data.bloodPressure || "",
        blood_sugar: data.bloodSugar || "",
        basal_metabolism:
          data.basalMetabolism === -1 ? null : data.basalMetabolism,
        heart_rate: data.heartRate === -1 ? null : data.heartRate,
        step_count: data.stepCount === -1 ? null : data.stepCount,
        water_intake: data.waterIntake === -1 ? null : data.waterIntake,
        age: data.age === -1 ? null : data.age,
        gender: data.gender === -1 ? null : data.gender,
      };
      console.log("Updated body data:", bodyData.value);
    } else {
      console.error("未能获取到有效的身体数据");
      ElMessage.warning("未能获取到有效的身体数据，请稍后重试");
    }
  } catch (error) {
    console.error("获取身体数据失败:", error);
    if (error.response) {
      console.error("Error response:", error.response.data);
      console.error("Error status:", error.response.status);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    ElMessage.error(error.response?.data?.msg || "获取身体数据失败，请重试");
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
  background-image: url(../../image/《食卡Cofood》logo@2x.png);
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  margin: 151px 240px 235px 240px;
}
.coreBusiness {
  width: 400px;
  height: 650px;
  background: #ffffff;
  border-radius: 20px 20px 20px 20px;
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
