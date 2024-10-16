<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import {
  getNotes,
  addNote as addNoteAPI,
  deleteNote as deleteNoteAPI,
  // 删除 getNote 的导入
} from "../api/comment";
import axios from "axios";

const store = useStore();

// 点赞，点击点赞数+1，图标改变，再次点击点赞数-1，图标恢复
const countUpvote = ref(5888);
let upvoted = false;

const changeUpvote = () => {
  if (!upvoted) {
    countUpvote.value++;
    upvoted = true;
  } else {
    countUpvote.value--;
    upvoted = false;
  }
};

// 收藏，同上
const countCollect = ref(1588);
let collected = false;

const changeCollect = () => {
  if (!collected) {
    countCollect.value++;
    collected = true;
  } else {
    countCollect.value--;
    collected = false;
  }
};

// 评论，待补充
const countComment = ref(4484);

// 发布动态
const newNote = ref({
  title: "",
  content: "",
  images: [],
});

// 添加这个新的 ref 来存储所有笔记
const allNotes = ref([]);

// 使用计算属性从 Vuex store 获取 token
const token = computed(() => store.getters.token);

const previewImages = ref([]);

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

const removeImage = (index) => {
  newNote.value.images.splice(index, 1);
  previewImages.value.splice(index, 1);
};

// 获取笔记列表
onMounted(async () => {
  try {
    const response = await getNotes();
    console.log("API 响应:", response); // 添加这行来查看完整的响应

    if (response && response.data && Array.isArray(response.data.notes)) {
      allNotes.value = response.data.notes.map((note) => ({
        ...note,
        upvoteCount: note.upvoteCount || 0,
        collectCount: note.collectCount || 0,
        commentCount: note.commentCount || 0,
        upvoted: false,
        collected: false,
        isOwnNote: note.UserID === store.state.user.userInfo.id,
      }));
      console.log("处理后的笔记:", allNotes.value);
    } else {
      console.error("API 返回的数据结构不符合预期:", response);
      allNotes.value = []; // 设置为空数组以避免进一步的错误
    }
  } catch (error) {
    console.error("获取笔记失败:", error);
    if (error.response) {
      console.error("错误响应:", error.response.data);
      console.error("状态码:", error.response.status);
    }
    allNotes.value = []; // 出错时设置为空数组
  }
});

// 添加这些计算属性来获取用户信息
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

// 修改 addNewNote 函数
const addNewNote = async () => {
  if (!token.value) {
    console.error("没有找到token, 请先登录");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("title", newNote.value.title);
    formData.append("content", newNote.value.content);

    newNote.value.images.forEach((image) => {
      formData.append(`image`, image);
    });

    const response = await addNoteAPI(formData, token.value);

    console.log("完整的服务器响应:", response);

    if (response && response.data) {
      console.log("服务器返回的数据:", response.data);

      const newNoteData = {
        NoteID: response.data.NoteID,
        UserID: store.state.user.userInfo.id,
        Title: newNote.value.title,
        Content: newNote.value.content,
        CreatedAt: new Date().toISOString(),
        UpdatedAt: new Date().toISOString(),
        NotesImages: Array.isArray(response.data.NotesImages)
          ? response.data.NotesImages.map((image) => ({
              ImageID: image.ImageID,
              NoteID: response.data.NoteID,
              URL: image.URL,
              CreatedAt: new Date().toISOString(),
              UpdatedAt: new Date().toISOString(),
            }))
          : [],
        upvoteCount: 0,
        collectCount: 0,
        commentCount: 0,
        upvoted: false,
        collected: false,
        isOwnNote: true,
      };

      allNotes.value.unshift(newNoteData);
      newNote.value = { title: "", content: "", images: [] };
      previewImages.value = [];
      console.log("上传成功");
    } else {
      console.error("服务器响应数据结构不符合预期");
    }
  } catch (error) {
    console.error("添加笔记失败:", error);
    if (error.response) {
      console.error("错误响应:", error.response.data);
      console.error("状态码:", error.response.status);
    } else if (error.request) {
      console.error("未收到响应:", error.request);
    } else {
      console.error("错误信息:", error.message);
    }
  }
};

// 删除笔记
const handleDeleteNote = async (noteId) => {
  try {
    await deleteNoteAPI(noteId);
    allNotes.value = allNotes.value.filter((note) => note.NoteID !== noteId);
  } catch (error) {
    console.error("删除笔记失败:", error);
  }
};

// 评论相关的状态
const activeCommentNoteId = ref(null);
const comments = ref({});
const newCommentContent = ref("");

// 二级评论相关的状态
const newSubCommentContent = ref({});
const activeSubCommentId = ref(null);

// 修改 sendComment 函数
const sendComment = async (noteId) => {
  try {
    console.log("正在发送评论，noteId:", noteId);

    const formData = new FormData();
    formData.append("note_id", String(noteId));
    formData.append("content", newCommentContent.value);

    const response = await axios.post(
      "https://www.femto.fun/comment",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("发送评论成功，服务器响应:", response.data);
    newCommentContent.value = "";
    if (!comments.value[noteId]) {
      comments.value[noteId] = [];
    }
    const newComment = {
      ...response.data,
      User: {
        userName: username,
        avatar: userAvatar,
      },
    };
    comments.value[noteId].unshift(newComment);
    const noteIndex = allNotes.value.findIndex(
      (note) => note.NoteID === noteId
    );
    if (noteIndex !== -1) {
      allNotes.value[noteIndex].commentCount++;
    }
    // 不需要重新获取评论，因为我们已经添加了新评论
    await fetchComments(noteId);
  } catch (error) {
    console.error("发送评论失败:", error);
    console.error(
      "错误详情:",
      error.response ? error.response.data : error.message
    );
  }
};

// 发送二级评论的函数
const sendSubComment = async (commentId) => {
  try {
    console.log("正在发送二级评论，commentId:", commentId);

    // 创建 FormData 对象
    const sub_formData = new FormData();
    sub_formData.append("comment_id", String(commentId)); // 确保 commentId 是字符串
    sub_formData.append("content", newSubCommentContent.value[commentId]);

    const response = await axios.post(
      "https://www.femto.fun/sub_comment",
      sub_formData,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("发送二级评论成功，服务器响应:", response.data);
    newSubCommentContent.value[commentId] = "";
    // 重新获取评论列表以包含新的二级评论
    await fetchComments(activeCommentNoteId.value);
  } catch (error) {
    console.error("发送二级评论失败:", error);
    console.error(
      "错误详情:",
      error.response ? error.response.data : error.message
    );
  }
};

// 获取评论的函数
const fetchComments = async (noteId) => {
  try {
    console.log("获取评论，noteId:", noteId); // 添加日志
    const response = await axios.get(
      `https://www.femto.fun/comment?note_id=${noteId}`,
      {
        headers: { Authorization: `Bearer ${token.value}` },
      }
    );
    console.log("获取评论成功，服务器响应:", response.data); // 添加日志
    comments.value[noteId] = response.data.data || [];
  } catch (error) {
    console.error("获取评论失败:", error);
    console.error(
      "错误详情:",
      error.response ? error.response.data : error.message
    ); // 添加详细错误日志
    comments.value[noteId] = [];
  }
};

// 添加评论功能函数
const likeComment = async (commentId) => {
  // 实现点赞逻辑
};

const collectComment = async (commentId) => {
  // 实现收藏逻辑
};

const toggleSubCommentForm = (commentId) => {
  activeSubCommentId.value =
    activeSubCommentId.value === commentId ? null : commentId;
};

// 删除评论
const deleteComment = async (commentId) => {
  try {
    await axios.delete(`https://www.femto.fun/comment?id=${commentId}`, {
      headers: { Authorization: `Bearer ${token.value}` },
    });
    fetchComments(activeCommentNoteId.value);
  } catch (error) {
    console.error("删除评论失败:", error);
  }
};

// 添加 toggleComments 函数
const toggleComments = async (noteId) => {
  if (activeCommentNoteId.value === noteId) {
    activeCommentNoteId.value = null;
  } else {
    activeCommentNoteId.value = noteId;
    if (!comments.value[noteId]) {
      await fetchComments(noteId);
    }
  }
};

// 添加日期格式化函数
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString(); // 或者使用更复杂的格式化逻辑
};

// 添加获取完整图片 URL 的函数
const getFullImageUrl = (url) => {
  if (!url) return "../../image/default-image.png"; // 默认图片
  if (url.startsWith("http")) {
    return url;
  }
  return `https://www.femto.fun${url}`;
};

// 删除 fetchSingleNote 函数
</script>

<template>
  <div class="container">
    <Navigation></Navigation>

    <div class="banner">
      <div class="note-list">
        <div v-for="note in allNotes" :key="note.NoteID" class="note">
          <div
            :class="['headPortrait', { 'own-avatar': note.isOwnNote }]"
            :style="
              note.isOwnNote ? { backgroundImage: `url(${userAvatar})` } : {}
            "
          ></div>
          <div class="information">
            <!-- <div class="name">{{ note.UserID }}</div> -->
            <div class="name">ntseil</div>
            <div class="time">{{ formatDate(note.CreatedAt) }}</div>
          </div>
          <div class="attention">
            <div class="symbolPlus"></div>
            <div class="attentionText"></div>
          </div>
          <div class="blank"></div>
          <div class="content">
            <h3 v-if="note.Title" class="note-title">{{ note.Title }}</h3>
            <p class="note-content">{{ note.Content }}</p>
            <div
              class="note-images"
              v-if="note.NotesImages && note.NotesImages.length"
            >
              <img
                v-for="image in note.NotesImages"
                :key="image.ImageID"
                :src="getFullImageUrl(image.URL)"
                :alt="note.Title || 'Note image'"
                class="note-image"
              />
            </div>
          </div>
          <div class="function">
            <div class="upvote">
              <div
                class="smallImg1"
                :class="{ redHeart: note.upvoted }"
                @click="changeUpvote(note)"
              ></div>
              <div class="data">{{ note.upvoteCount }}</div>
            </div>
            <div class="collect">
              <div
                class="smallImg2"
                :class="{ yellowStar: note.collected }"
                @click="changeCollect(note)"
              ></div>
              <div class="data">{{ note.collectCount }}</div>
            </div>
            <div class="addComment" @click="toggleComments(note.NoteID)">
              <div class="smallImg3"></div>
              <div class="data">{{ note.commentCount }}</div>
            </div>
          </div>

          <!-- 评论区 -->
          <div
            v-if="activeCommentNoteId === note.NoteID"
            class="comments-section"
          >
            <div
              v-for="comment in comments[note.NoteID] || []"
              :key="comment.CommentID"
              class="comment-item"
            >
              <img
                :src="comment.User?.avatar || userAvatar"
                alt="User Avatar"
                class="comment-avatar"
              />
              <div class="comment-content">
                <span class="comment-username">{{
                  comment.User?.userName || username
                }}</span>
                <p class="comment-text">{{ comment.Content }}</p>
                <div class="comment-functions">
                  <span
                    @click="likeComment(comment.CommentID)"
                    class="function-item"
                    >点赞</span
                  >
                  <span
                    @click="collectComment(comment.CommentID)"
                    class="function-item"
                    >收藏</span
                  >
                  <span
                    @click="toggleSubCommentForm(comment.CommentID)"
                    class="function-item"
                    >评论</span
                  >
                </div>
                <!-- 二级评论列表 -->
                <div
                  v-if="comment.SubComments && comment.SubComments.length > 0"
                  class="sub-comments"
                >
                  <div
                    v-for="subComment in comment.SubComments"
                    :key="subComment.SubCommentID"
                    class="sub-comment-item"
                  >
                    <img
                      :src="
                        subComment.User?.avatar ||
                        '../../image/头像@2x\ \(1\).png'
                      "
                      alt="User Avatar"
                      class="sub-comment-avatar"
                    />
                    <div class="sub-comment-content">
                      <span class="sub-comment-username">{{
                        subComment.User?.userName || "匿名用户"
                      }}</span>
                      <p class="sub-comment-text">{{ subComment.Content }}</p>
                    </div>
                  </div>
                </div>
                <!-- 二级评论输入框 -->
                <div
                  v-if="activeSubCommentId === comment.CommentID"
                  class="sub-comment-form"
                >
                  <input
                    v-model="newSubCommentContent[comment.CommentID]"
                    placeholder="写下你的评论..."
                  />
                  <button @click="sendSubComment(comment.CommentID)">
                    发送
                  </button>
                </div>
              </div>
            </div>
            <div class="new-comment">
              <input
                v-model="newCommentContent"
                placeholder="写下你的评论..."
              />
              <button @click="sendComment(note.NoteID)">发送</button>
            </div>
          </div>
          <!-- <button @click="handleDeleteNote(note.NoteID)">删除</button> -->
        </div>
      </div>

      <div class="personnal">
        <div class="headPortrait">
          <img :src="userAvatar" alt="用户头像" class="avatar" />
        </div>
        <div class="information">
          <div class="name">{{ username }}</div>
          <div class="identity">暂无身份</div>
        </div>
        <input v-model="newNote.title" placeholder="标题" class="title-input" />
        <textarea
          v-model="newNote.content"
          placeholder="发布一条动态"
          class="content fixed-textarea"
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
        <button @click="addNewNote">发布动态</button>
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
  background: #f4f8fa;
}
a {
  text-decoration: none; /* 取消下划线 */
}

.banner {
  display: flex;
  position: absolute;
  top: 90px;
}
.comment {
  width: 784px;
  height: auto;
  background-color: #f4f8fa;
  border: none;
}
.note {
  width: 784px;
  min-height: 200px; /* 设置最小高度 */
  height: auto; /* 高度自适应 */
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 0 30px 0;
  padding: 24px 30px; /* 添加内边距 */
  box-sizing: border-box; /* 确保padding不会增加整体宽度 */
}
.headPortrait {
  width: 46px;
  height: 46px;
  background-image: url("../../image/微信图片_20240815195529.jpg");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  margin: 24px 0px 0 30px;
  float: left;
  border-radius: 50%;
}
.information {
  width: 144px;
  height: 24px;
  float: left;
  margin: 24px 0 0 8px;
}
.name {
  width: 144px;
  height: 24px;
  font-weight: bold;
  font-size: 18px;
  float: left;
}
.time {
  width: 192px;
  font-size: 14px;
  color: #bfbfbf;
  float: left;
}
.attention {
  width: 64px;
  height: 30px;
  float: left;
  margin: 24px 0 0 54px;
  background-image: url("../../image/路径\ 4@2x.png");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  display: flex;
  position: relative;
  left: 320px;
}
.symbolPlus {
  width: 16px;
  height: 16px;
  margin: 7px 2px 0 9px;
  background-image: url("../../image/加@2x.png");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.attentionText {
  width: 24px;
  height: 16px;
  margin: 6px 0;
  background-image: url("../../image/关注@2x.png");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
}
.comment .content {
  width: 100%; /* 宽度占满 */
  min-height: 147px; /* 最小高度 */
  height: auto; /* 高度自适应 */
  position: relative; /* 改为相对定位 */
  margin: 20px 0; /* 添加上下边距 */
}
.commentImgs {
  width: 700px;
  display: flex;
  float: left;
  position: absolute;
  top: 270px;
  margin: 0 0 0 30px;
}

.Img1 {
  width: 118px;
  height: 118px;
  background-image: url("../../image/蒙版组\ 2@2x\ \(1\).png");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  margin: 5px;
}
.function {
  width: 100%; /* 宽度占满 */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 左对齐 */
  margin-top: auto; /* 将功能区推到底部 */
  position: relative; /* 改为相对定位 */
}

.smallImg1 {
  width: 20px;
  height: 20px;
  margin: 0 2px 0 0;
  background-image: url("../../image/like.png");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
}
.redHeart {
  background-image: url("../../image/like_filled.png"); /* 切换图片的路径 */
}
.smallImg2 {
  width: 20px;
  height: 20px;
  margin: 0 2px 0 0;
  background-image: url("../../image/标星.png");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
}
.yellowStar {
  background-image: url("../../image/标星-fill.png"); /* 切换图片的路径 */
}
.smallImg3 {
  width: 20px;
  height: 20px;
  margin: 0 2px 0 0;
  background-image: url("../../image/消息@2x\ \(3\).png");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
}
.data {
  width: 29px;
  height: 16px;
  color: #808080;
  font-size: 14px;
  float: left;
  margin: 0 2px 0 0;
}
.upvote {
  width: 60px;
  margin: 0 66px;
}
.collect {
  width: 60px;
  margin: 0px 146px 0 80px;
}

.personnal {
  width: 366px;
  height: auto; /* 改为自适应高度 */
  min-height: 330px; /* 设置最小高度 */
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding-bottom: 20px; /* 添加底部内边距 */
  margin-left: 20px;
}
.personnal .headPortrait {
  width: 60px;
  height: 60px;
  margin: 20px 24px;
  float: left;
  overflow: hidden;
  border-radius: 50%;
}

.personnal .headPortrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.personnal .information {
  float: left;
  margin: 24px 0;
}
.personnal .content {
  display: block;
  width: 290px;
  height: 100px; /* 将高度固定为100px */
  background: #ffffff;
  border: 1px solid;
  border-color: #707070;
  border-radius: 8px;
  margin-top: 10px;
  margin-left: 23px;
  padding: 18px;
  resize: none; /* 禁止用户调整大小 */
}
.newComments {
  position: absolute;
  top: 500px;
  display: flex;
  flex-direction: column-reverse; /* 新发布的动态在下方 */
}
.comment1 {
  width: 764px;
  height: 150px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  float: left;
  background-color: #ffffff;
}
.delete-btn {
  cursor: pointer;
  color: red;
  margin-left: 5px;
  float: right;
  margin: -100px 0;
}
.hp1 {
  width: 46px;
  height: 46px;
  background-image: url("../../image/微信图片_20240815195529.jpg");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  margin: 24px 0px 0 30px;
  float: left;
}
.comment1 .information {
  width: 144px;
  height: 24px;
  float: left;
  margin: 24px 0 0 8px;
}
.function1 {
  width: 600px;
  top: 130px;
  display: flex;
  align-items: center;
  justify-self: center;
  margin: 87px 30px;
}
p {
  width: 700px;
  position: relative;
  left: 80px;
  margin-bottom: 40px;
}
button {
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
  margin-right: 23px; /* 调整右边距 */
  float: right;
}
.title-input {
  width: 290px;
  margin: 10px 23px;
  padding: 5px;
  border: 1px solid #707070;
  border-radius: 8px;
}
.image-upload-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 23px;
}

.image-preview {
  display: flex;
  flex-wrap: wrap;
  max-width: 290px; /* 限制预览区域宽度 */
}

.preview-item {
  position: relative;
  width: 50px;
  height: 50px;
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

.image-upload {
  margin-left: 10px;
}

.upload-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
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

.fixed-textarea {
  width: 290px;
  height: 100px;
  resize: none;
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 8px;
  margin-top: 10px;
  margin-left: 23px;
  padding: 18px;
  font-size: 14px;
  font-family: Microsoft YaHei;
}

.comments-section {
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
}

.comment-item {
  display: flex;
  margin-bottom: 15px;
}

.comment-avatar,
.sub-comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment-content,
.sub-comment-content {
  flex: 1;
  max-width: 600px; /* 设置最大宽度，可以根据需要调整 */
}

.comment-username,
.sub-comment-username {
  font-weight: bold;
  margin-right: 10px;
}

.comment-functions {
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
}

.function-item {
  margin-right: 15px;
  cursor: pointer;
  color: #666;
}

.function-item:hover {
  color: #32db5a;
}

.sub-comments {
  margin-left: 50px;
  margin-top: 10px;
}

.sub-comment-item {
  display: flex;
  margin-bottom: 10px;
}

.sub-comment-avatar {
  width: 30px;
  height: 30px;
}

.new-comment,
.sub-comment-form {
  display: flex;
  margin-top: 10px;
}

.new-comment input,
.sub-comment-form input {
  flex: 1;
  padding: 5px;
  margin-right: 10px;
  width: 600px;
  border-radius: 10px;
  border: 1px solid;
}

.new-comment button,
.sub-comment-form button {
  padding: 5px 10px;
  background-color: #32db5a;
  color: white;
  border: none;
  cursor: pointer;
}

.comment-text,
.sub-comment-text {
  word-wrap: break-word; /* 允许长单词或 URL 地址换行到下一行 */
  overflow-wrap: break-word; /* 在长单词或 URL 地址内部进行换行 */
  white-space: pre-wrap; /* 保留空白符序列，但是正常地进行换行 */
  width: 100%; /* 使用全宽 */
  max-width: 100%; /* 确保不会超出父元素 */
  position: relative;
  left: 0;
}

.note-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px 77px;
}

.note-content {
  margin-bottom: 15px;
}

.note-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 66px;
}

.note-image {
  max-width: 150px;
  height: auto;
  border-radius: 5px;
}
</style>