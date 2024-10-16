<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { ElMessage } from "element-plus";

const store = useStore();
const token = computed(() => store.getters.token);

// 使用 computed 来获取和设置 bodyData
const bodyData = computed({
  get: () => store.state.user.bodyData,
  set: (value) => store.commit("user/setBodyData", value),
});

const fetchBodyData = async () => {
  try {
    await store.dispatch("user/fetchBodyData");
    console.log("Updated bodyData in Vuex:", store.state.user.bodyData);
  } catch (error) {
    console.error("获取身体数据失败:", error);
    ElMessage.error(error.response?.data?.msg || "获取身体数据失败，请重试");
  }
};

const updateBodyData = async () => {
  const dataToSend = Object.fromEntries(
    Object.entries(bodyData.value).filter(([_, v]) => v != null && v !== "")
  );

  if (Object.keys(dataToSend).length === 0) {
    ElMessage.warning("请至少填写一项数据");
    return;
  }

  try {
    const response = await axios.post(
      "https://www.femto.fun/user/data",
      dataToSend,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("身体数据更新成功:", response.data);
    ElMessage.success(response.data.msg || "身体数据更新成功");
    await fetchBodyData(); // 重新获取数据以更新显示
  } catch (error) {
    console.error("更新身体数据失败:", error);
    ElMessage.error(error.response?.data?.msg || "更新身体数据失败，请重试");
  }
};

onMounted(fetchBodyData);
</script>

<template>
  <div class="container">
    <userCenterNavigation></userCenterNavigation>
    <div class="banner">
      <div class="leftBanner">
        <h2>个人信息</h2>
        <div class="selfInformations">
          <div class="selfInformation">
            <div class="title">身高</div>
            <div class="content">
              <input
                v-model="bodyData.height"
                type="number"
                placeholder="厘米"
              />
            </div>
          </div>
          <div class="selfInformation">
            <div class="title">体重</div>
            <div class="content">
              <input
                v-model="bodyData.weight"
                type="number"
                placeholder="千克"
              />
            </div>
          </div>
          <div class="selfInformation">
            <div class="title">血压</div>
            <div class="content">
              <input
                v-model="bodyData.blood_pressure"
                placeholder="如: 120/80"
              />
            </div>
          </div>
          <div class="selfInformation">
            <div class="title">血糖</div>
            <div class="content">
              <input v-model="bodyData.blood_sugar" placeholder="mmol/L" />
            </div>
          </div>
          <div class="selfInformation">
            <div class="title">基础代谢</div>
            <div class="content">
              <input
                v-model="bodyData.basal_metabolism"
                type="number"
                placeholder="kCal"
              />
            </div>
          </div>
          <div class="selfInformation">
            <div class="title">心率</div>
            <div class="content">
              <input
                v-model="bodyData.heart_rate"
                type="number"
                placeholder="次/分钟"
              />
            </div>
          </div>
          <div class="selfInformation">
            <div class="title">步数</div>
            <div class="content">
              <input
                v-model="bodyData.step_count"
                type="number"
                placeholder="步"
              />
            </div>
          </div>
          <div class="selfInformation">
            <div class="title">喝水记录</div>
            <div class="content">
              <input
                v-model="bodyData.water_intake"
                type="number"
                placeholder="毫升"
              />
            </div>
          </div>
          <div class="selfInformation">
            <div class="title">年龄</div>
            <div class="content">
              <input v-model="bodyData.age" type="number" placeholder="岁" />
            </div>
          </div>
          <div class="selfInformation">
            <div class="title">性别</div>
            <div class="content">
              <select v-model="bodyData.gender">
                <option value="0">女</option>
                <option value="1">男</option>
                <option value="2">保密</option>
              </select>
            </div>
          </div>
        </div>
        <button @click="updateBodyData">更新身体数据</button>
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
h2 {
  width: 480px;
  position: relative;
  top: 0;
  float: left;
}

.selfInformations {
  width: 780px;
  background-color: #ffffff;
  padding: 20px;
}
.selfInformation {
  width: 350px;
  height: 60px;
  background-color: #ffffff;
  margin: 15px;
  float: left;
  border-radius: 10px;
}

.selfInformation .title {
  font-weight: bold;
  background-color: #ccf6d6;
  width: 80px;
  height: 30px;
  text-align: center; /* 使标题文本水平居中 */
}
.selfInformation .content {
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
}

/* 添加以下样式以改善输入框的外观 */
input,
select {
  width: 97%;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #32db5a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2ac04e;
}
</style>
