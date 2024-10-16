<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { getNotes, addNote, deleteNote } from "../api/comment";
import axios from "axios";
import Navigation from "../components/Navigation.vue";

const store = useStore();

// 用户笔记
const userNotes = ref([]);

// 新笔记
const newNote = ref({
  title: "",
  content: "",
  images: [],
});

// 预览图片
const previewImages = ref([]);

// 使用计算属性从 Vuex store 获取 token
const token = computed(() => store.getters.token);

// 获取笔记
onMounted(async () => {
  try {
    const response = await getNotes();
    userNotes.value = response.data.notes;
  } catch (error) {
    console.error("获取笔记失败:", error);
  }
});

// 处理图片上传
const handleImageUpload = (event) => {
  const files = event.target.files;
  if (files.length + newNote.value.images.length > 9) {
    alert("最多只能上传9张图片");
    return;
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    newNote.value.images.push(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImages.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  }
};

// 移除图片
const removeImage = (index) => {
  newNote.value.images.splice(index, 1);
  previewImages.value.splice(index, 1);
};

// 添加笔记
const addUserNote = async () => {
  try {
    const formData = new FormData();
    formData.append("title", newNote.value.title);
    formData.append("content", newNote.value.content);
    formData.append("note_id", String(11)); // 将 note_id 转换为字符串

    newNote.value.images.forEach((image, index) => {
      formData.append(`image`, image);
    });

    const response = await axios.post("https://www.femto.fun/note", formData, {
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "multipart/form-data",
      },
    });

    const newComment = {
      ...response.data,
      UserID: username.value, // 使用当前用户名
      UserAvatar: userAvatar.value, // 使用当前用户头像
      CreatedAt: new Date().toLocaleString(),
      Content: newNote.value.content,
      upvoteCount: 0,
      collectCount: 0,
      commentCount: 0,
      upvoted: false,
      collected: false,
      isOwnComment: true,
    };

    userNotes.value.unshift(newComment);
    newNote.value = { title: "", content: "", images: [] };
    previewImages.value = [];
    console.log("上传成功");
  } catch (error) {
    console.error("添加笔记失败:", error);
  }
};

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
</script>

<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="banner">
      <div class="leftBanner">
        <div class="userInfo">
          <img
            :src="userAvatar"
            alt="用户头像"
            class="avatar"
            @click="$router.push('/userInformation')"
          />
          <div class="username">{{ username }}</div>
        </div>
        <div class="functions">
          <div class="function">
            <div class="image f1"></div>
            <div class="text">优惠券</div>
          </div>
          <router-link to="/collection">
            <div class="function">
              <div class="image f2"></div>
              <div class="text">我的收藏</div>
            </div>
          </router-link>
          <router-link to="/shoppingCart">
            <div class="function">
              <div class="image f3"></div>
              <div class="text">购物车</div>
            </div>
          </router-link>
          <router-link to="/orders">
            <div class="function">
              <div class="image f4"></div>
              <div class="text">我的订单</div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="myNotes">
        <div class="title">我的动态</div>
        <div class="post-box">
          <input
            v-model="newNote.title"
            placeholder="标题"
            class="title-input"
          />
          <textarea
            v-model="newNote.content"
            class="note fixed-textarea"
            placeholder="发布一篇动态来记录一下吧"
          ></textarea>
          <div class="image-upload-container">
            <div class="image-preview">
              <div
                v-for="(image, index) in previewImages"
                :key="index"
                class="preview-item"
              >
                <img :src="image" alt="Preview" />
                <span class="remove-image" @click="removeImage(index)">×</span>
              </div>
            </div>
            <div class="image-upload">
              <label for="file-input" class="upload-icon">+</label>
              <input
                id="file-input"
                type="file"
                @change="handleImageUpload"
                multiple
                accept="image/*"
                style="display: none"
              />
            </div>
          </div>
          <button @click="addUserNote">发布</button>
        </div>

        <!-- 显示用户的笔记 -->
        <div class="user-notes">
          <div v-for="note in userNotes" :key="note.NoteID" class="user-note">
            <div class="note-header">
              <img :src="userAvatar" alt="User Avatar" class="user-avatar" />
              <div class="note-info">
                <span class="note-username">{{ username }}</span>
                <span class="note-time">{{ note.CreatedAt }}</span>
              </div>
            </div>
            <p class="note-content">{{ note.Content }}</p>
            <div class="note-actions">
              <span class="action-item">
                <i class="icon-like"></i>
                {{ note.upvoteCount }}
              </span>
              <span class="action-item">
                <i class="icon-collect"></i>
                {{ note.collectCount }}
              </span>
              <span class="action-item">
                <i class="icon-comment"></i>
                {{ note.commentCount }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBanner">
        <div class="member">
          <div class="information">
            <div class="image"></div>
            <div class="text">食卡会员</div>
          </div>
          <div class="advertising">
            <div class="text">
              私人健康管家制
              <br />高级饮食定制服务
            </div>
            <div class="transact">立即办理 ></div>
          </div>
          <div class="price">19.99/月 199.99/年</div>
        </div>
        <div class="more">
          <div class="title">更多服务</div>
          <div class="moreFunctions">
            <div class="moreFunction">
              <div class="image i1"></div>
              <div class="text">联系客服</div>
            </div>
            <div class="moreFunction">
              <div class="image i2"></div>
              <div class="text">设置</div>
            </div>
            <div class="moreFunction">
              <div class="image i3"></div>
              <div class="text">隐私管理</div>
            </div>
            <div class="moreFunction">
              <div class="image i4"></div>
              <div class="text">帮助与反馈</div>
            </div>
            <div class="moreFunction">
              <div class="image i5"></div>
              <div class="text">关于</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background: #f4f8fa;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  position: relative;
  background: #f4f8fa;
}

.banner {
  width: 1160px;
  position: absolute;
  top: 90px;
}

.leftBanner {
  width: 842px;
  position: absolute;
  top: 36px;
  margin-right: 16px;
}

.userInfo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 147px;
  background-color: #ffffff;
  padding: 0 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.username {
  font-size: 24px;
  font-weight: bold;
}

.functions {
  width: 842px;
  height: 82px;
  background: #ffffff;
  position: absolute;
  top: 160px;
  display: flex;
  justify-content: space-around;
}

.function {
  width: 42px;
  height: 80px;
  float: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0 0 0;
}
.function .image {
  width: 40px;
  height: 40px;
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
}
.function .text {
  width: 58px;
  height: 20px;
  margin: 8px 0;
  color: #779eff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.f1 {
  background-image: url(../../image/优惠券@2x.png);
}
.f2 {
  background-image: url(../../image/收藏3@2x.png);
}
.f3 {
  background-image: url(../../image/购物车@2x.png);
}
.f4 {
  background-image: url(../../image/订单@2x.png);
}
.myNotes {
  width: 842px;
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 296px;
  padding: 22px;
  box-sizing: border-box;
}
.myNotes .title {
  color: #000;
  font-size: 18px;
  font-weight: bold;
}
.note {
  width: 320px;
  height: 180px;
  background: #ffffff;
  border: 1px solid;
  border-color: #707070;
  border-radius: 8px;
  margin-top: 22px;
  padding: 22px;
  font-size: 14px;
  font-family: Microsoft YaHei;
}
.rightBanner {
  width: 302px;
  position: absolute;
  top: 36px;
  left: 878px;
}
.member {
  width: 262px;
  height: 114px;
  background: #ccf6d6;
  border-radius: 10px;
  position: absolute;
  padding: 8px 20px;
}
.member .information {
  width: 262px;
  height: 30px;
}
.member .image {
  width: 24px;
  height: 24px;
  background-image: url(../../image/会员@2x.png);
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
}
.information .text {
  width: 90px;
  height: 24px;
  color: #32db5a;
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
}
.advertising {
  height: 38px;
  margin: 5px 0;
}
.advertising .text {
  height: 38px;
  color: #bfbfbf;
  font-size: 14px;
  float: left;
}
.advertising .transact {
  color: #32db5a;
  font-size: 20px;
  font-weight: bold;
  float: right;
}
.price {
  width: 191px;
  height: 26px;
  color: #f53636;
  font-size: 20px;
}
.more {
  width: 258px;
  height: 608px;
  background: #ffffff;
  border-radius: 10px;
  position: absolute;
  top: 160px;
  padding: 18px 22px;
}
.more .title {
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 30px 0;
}
.moreFunction {
  width: 258px;
  height: 64px;
  background: #ffffff;
  display: flex;
  justify-self: center;
  align-items: center;
  cursor: pointer;
}
.moreFunction .text {
  color: #808080;
  width: 210px;
  font-size: 18px;
  float: left;
  margin-left: 8px;
}
.moreFunction .image {
  width: 34px;
  height: 34px;
  float: left;
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
}
.i1 {
  background-image: url(../../image/客服@2x.png);
}
.i2 {
  background-image: url(../../image/设置@2x.png);
}
.i3 {
  background-image: url(../../image/隐私@2x.png);
}
.i4 {
  background-image: url(../../image/问号@2x.png);
}
.i5 {
  background-image: url(../../image/提醒-1@2x.png);
}

/* 添加新的样式 */
.user-notes {
  margin-top: 20px;
}

.user-note {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}

.note-time {
  font-size: 12px;
  color: #888;
}

.title-input {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  height: 30px;
  border-radius: 10px;
}

.image-upload-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0;
}

.image-preview {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}

.preview-item {
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.remove-image {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 16px;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
}

.upload-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  font-size: 24px;
  background-color: #f0f0f0;
  border: 1px dashed #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.upload-icon:hover {
  background-color: #e0e0e0;
}

.user-note {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.note-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.note-info {
  display: flex;
  flex-direction: column;
}

.note-username {
  font-weight: bold;
}

.note-time {
  font-size: 12px;
  color: #888;
}

.note-content {
  margin-bottom: 30px;
  position: relative;
  left: 47px;
}

.note-actions {
  display: flex;
  justify-content: space-around;
}

.action-item {
  display: flex;
  align-items: center;
}

.icon-like,
.icon-collect,
.icon-comment {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-size: contain;
  background-repeat: no-repeat;
}

.icon-like {
  background-image: url("../../image/like.png");
}

.icon-collect {
  background-image: url("../../image/标星.png");
}

.icon-comment {
  background-image: url("../../image/消息@2x\ \(3\).png");
}

.fixed-textarea {
  width: 723px;
  height: 180px;
  resize: none;
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 8px;
  margin-top: 22px;
  padding: 22px;
  font-size: 14px;
  font-family: Microsoft YaHei;
}

.post-box {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
  background-color: #f9f9f9;
}

.title-input {
  width: calc(100% - 10px);
  margin-left: 0;
  margin-right: 0;
  border: 1px solid #e0e0e0;
}

button {
  position: static;
  margin-top: 10px;
  margin-left: 700px;
  width: 68px;
  background-color: #32db5a;
  height: 39px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
}

@media (max-width: 1200px) {
  .banner {
    width: 100%;
    position: relative;
    top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .leftBanner,
  .myNotes,
  .rightBanner {
    position: relative;
    top: 0;
    left: 0;
    width: 90%;
    max-width: 842px;
    margin: 20px 0;
  }

  .userInfo,
  .functions {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .userInfo,
  .functions,
  .myNotes,
  .member,
  .more {
    padding: 15px;
  }

  .function .text {
    font-size: 12px;
  }

  .moreFunction .text {
    font-size: 16px;
  }
}
</style>