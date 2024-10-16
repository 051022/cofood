<script setup>
console.log("Script setup started");

import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Navigation from "../components/Navigation.vue"; // 确保这个路径是正确的

console.log("Imports completed");

const store = useStore();

// 计算属性: 返回正确的头像URL
const getAvatarUrl = computed(() => {
  return (type) => {
    if (type === "robot") {
      return new URL("../images/ai/pic2.png", import.meta.url).href;
    } else {
      const userAvatar = store.state.user.userInfo.avatar;
      if (userAvatar && userAvatar.startsWith("http")) {
        return userAvatar;
      } else if (userAvatar) {
        return `https://www.femto.fun${userAvatar}`;
      } else {
        return new URL("../images/ai/pic3.png", import.meta.url).href;
      }
    }
  };
});

// 绑定问答区域的变量
const dialogArea = ref(null);
// 存储历史搜索历史的数组
const searchHistory = ref([
  "减脂期做什么运动?",
  "减脂期吃什么蛋白质比较好?",
  "发烧了能吃鸡蛋吗?",
  "发烧了能吃鱼肉吗?",
]);
// 记录用户提问的变量
const question = ref("");
// 存储对话历史
const dialogHistory = ref([
  { type: "robot", content: "你好, 我是你的智能健康管家!" },
]);

// 发起问题的请求
const sendQuestion = async (ques) => {
  if (!ques.trim()) return;

  // 将用户提问添加到对话历史
  dialogHistory.value.push({ type: "user", content: ques });

  try {
    // 调用store中的askQuestion action
    const response = await store.dispatch("askQuestion", {
      question: ques,
      password: "cofood2024",
    });

    // 将AI回答添加到对话历史
    dialogHistory.value.push({ type: "robot", content: response.answer });

    // 清空输入框
    question.value = "";
  } catch (error) {
    console.error("发送问题失败:", error);
    dialogHistory.value.push({
      type: "robot",
      content: "抱歉,我现在无法回答您的问题。请稍后再试。",
    });
  }
};

// 在组件挂载时获取用户信息
onMounted(async () => {
  if (store.state.token && !store.state.user.userInfo.avatar) {
    await store.dispatch("fetchUserInfo");
  }
});

console.log("Script setup completed");
</script>

<template>
  <div class="aiRobotContainer">
    <!-- 顶部导航栏 -->
    <div class="naviContainer">
      <Navigation></Navigation>
    </div>
    <!-- 智能管家对话系统 -->
    <div class="dialogSystemContainer">
      <!-- 左侧边栏 -->
      <div class="leftSidebarContainer">
        <!-- 新建对话模块 -->
        <div class="newSessionContainer">
          <div class="newBtn">
            <span class="addIcon"></span>
            <span class="addText">新建对话</span>
          </div>
        </div>
        <!-- 历史搜索模块 -->
        <div class="searchHistoryContainer">
          <!-- 标题 -->
          <div class="searchHistoryTitle">历史搜索</div>
          <!-- 历史记录 -->
          <div class="historyRecord">
            <div v-for="item in searchHistory" :key="item" class="recordItem">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧对话区域 -->
      <div class="rightDialogContainer">
        <!-- 标题模块 -->
        <div class="systemName">食卡Cofood健康智能管家对话系统</div>

        <!-- 问答区域 -->
        <div ref="dialogArea" class="dialogArea">
          <div
            v-for="(item, index) in dialogHistory"
            :key="index"
            :class="[
              'dialogItem',
              item.type === 'robot' ? 'robotItem' : 'userItem',
            ]"
          >
            <div class="avatar">
              <img :src="getAvatarUrl(item.type)" alt="Avatar" />
            </div>
            <div class="content">{{ item.content }}</div>
          </div>
        </div>
        <!-- 提问区域 -->
        <div class="askArea">
          <input
            v-model="question"
            @keyup.enter="sendQuestion(question)"
            placeholder="在此输入你的问题,按Enter键发送,Ctrl+Enter键换行"
            class="inputQestion"
            type="text"
          />
          <div @click="sendQuestion(question)" class="askBtn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.aiRobotContainer {
  margin: 0 auto;
  width: 1440px;
  .naviContainer {
    margin-bottom: 30px;
  }
  .dialogSystemContainer {
    display: flex;
    justify-content: space-between;
    // 左侧边栏
    .leftSidebarContainer {
      width: 260px;
      padding: 0px 10px;
      border-right: 1px solid #b2b2b2;
      // 新建对话模块
      .newSessionContainer {
        margin-bottom: 30px;
        width: 239px;
        height: 46px;
        .newBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 46px;
          border-radius: 10px;
          background-color: #a9efb9;
          .addIcon {
            margin-right: 10px;
            width: 30px;
            height: 30px;
            background-image: url(../images/ai/pic1.png);
            background-size: 30px 30px;
          }
          .addText {
            font-size: 22px;
            color: #707070;
          }
        }
      }
      // 历史搜索模块
      .searchHistoryContainer {
        width: 239px;
        .searchHistoryTitle {
          margin-bottom: 20px;
          font-size: 20px;
          color: #b2b2b2;
        }
        .historyRecord {
          width: 239px;
          .recordItem {
            margin-bottom: 10px;
            padding: 10px 0px;
            width: 239px;
            text-align: center;
            font-size: 20px;
            color: #9c9b9b;
            border-bottom: 1px solid #9c9b9b;
            box-sizing: border-box;
            // 文字过多就显示省略号
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
          }
        }
      }
    }
    // 右侧对话区域
    .rightDialogContainer {
      width: 1150px;
      .systemName {
        margin-bottom: 30px;
        height: 50px;
        font-size: 24px;
        text-align: center;
        line-height: 50px;
        color: #b7beb8;
        border-radius: 20px;
        background-color: #e0f9e6;
      }
      .dialogArea {
        margin-bottom: 30px;
        height: 700px;
        box-sizing: border-box;
        overflow: auto;
        .dialogItem {
          margin-bottom: 20px;
          display: flex;
          align-items: flex-start;
          .avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            flex-shrink: 0;
            overflow: hidden;
            img,
            :deep(img) {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .content {
            padding: 10px 20px;
            max-width: 700px;
            background-color: #e7e7e7;
            border-radius: 30px;
            box-sizing: border-box;
            margin: 0 20px;
          }
          &.robotItem {
            .avatar {
              order: 1;
            }
            .content {
              order: 2;
            }
          }
          &.userItem {
            flex-direction: row-reverse;
            .content {
              background-color: #a9efb9;
            }
          }
        }
      }
      .askArea {
        padding: 0px 20px;
        display: flex;
        align-items: center;
        height: 70px;
        border: 1px solid #707070;
        border-radius: 30px;
        .inputQestion {
          flex: 1;
          font-size: 20px;
          outline: none;
          border: none;
          background-color: transparent;
        }
        .askBtn {
          width: 50px;
          height: 50px;
          cursor: pointer;
          background-image: url(../images/ai/pic4.png);
          background-size: 50px 50px;
        }
      }
    }
  }
}
</style>
