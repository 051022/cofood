<script setup>
import { ref } from "vue";

//点赞，点击点赞数+1，图标改变，再次点击点赞数-1，图标恢复
const countUpvote = ref(5888);
//初始为假
let upvoted = false;

const changeUpvote = () => {
  if (!upvoted) {
    countUpvote.value++;
    // 点击一次后为真
    upvoted = true;
  } else {
    countUpvote.value--;
    //再点击为假
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
//评论，待补充
const countComment = ref(4484);

//发布动态
const newComment = ref("");
const comments = ref([]);

//点击addComment按钮触发函数
const addComment = () => {
  // .trim() 用于移除 newComment.value 字符串两端的空白字符，
  // 然后检查结果是否等于空字符串 ""。
  if (newComment.value.trim() === "") {
    alert("评论内容不能为空");
    return;
  }
  // 向名为 comments 的数组或类数组对象中添加一个新的对象。
  // 这个新对象有一个键为 text 的属性，其值为 newComment.value。
  comments.value.push({ text: newComment.value });
  newComment.value = ""; // 清空输入框
};

const deleteComment = (index) => {
  comments.value.splice(index, 1);
};
</script>

<template>
  <div class="container">
    <Navigation></Navigation>

    <div class="banner">
      <div class="comment">
        <div class="headPortrait"></div>
        <div class="information">
          <div class="name">火龙果十级爱好者</div>
          <div class="time">2小时前</div>
        </div>
        <div class="attention">
          <div class="symbolPlus"></div>
          <div class="attentionText"></div>
        </div>
        <div class="blank"></div>
        <div class="content">
          #健身打卡day15
          <br />
          今天也是女大坚持健康饮食作息的一天！
          <br />
          早餐：豆浆+三明治+小番茄(多吃水果补充维C!)
          <br />
          午餐：（外卖了一份轻食）紫薯+水煮西兰花+烟熏 鸭胸肉
          <br />
          晚餐：杂粮饭+白灼生菜+炒蘑菇+饭后来点橙子继续 补充维C
        </div>
        <div class="commentImgs">
          <div class="Img1"></div>
        </div>
        <div class="function">
          <div class="upvote">
            <div
              class="smallImg1"
              :class="{ redHeart: upvoted }"
              @click="changeUpvote"
            ></div>
            <div class="data">{{ countUpvote }}</div>
          </div>
          <div class="collect">
            <div
              class="smallImg2"
              :class="{ yellowStar: collected }"
              @click="changeCollect"
            ></div>
            <div class="data">{{ countCollect }}</div>
          </div>
          <div class="addComment">
            <div class="smallImg3"></div>
            <div class="data">4484</div>
          </div>
        </div>
      </div>

      <div class="personnal">
        <div class="headPortrait"></div>
        <div class="information">
          <div class="name">一颗奇异果</div>
          <div class="identity">暂无身份</div>
        </div>
        <textarea
          class="content"
          v-model="newComment"
          placeholder="发布一条动态"
        ></textarea>
        <button @click="addComment">发布动态</button>
      </div>

      <div class="newComments">
        <div v-for="(comment, index) in comments" :key="index" class="comment1">
          <div class="headPortrait hp1"></div>
          <div class="information">
            <div class="name">一颗奇异果</div>
            <div class="time">刚刚</div>
          </div>
          <div class="attention">
            <div class="symbolPlus"></div>
            <div class="attentionText"></div>
          </div>
          <div class="blank"></div>
          <p>{{ comment.text }}</p>

          <div class="function1">
            <div class="upvote">
              <div class="smallImg1"></div>
              <div class="data">0</div>
            </div>
            <div class="collect">
              <div class="smallImg2"></div>
              <div class="data">0</div>
            </div>
            <div class="addComment">
              <div class="smallImg3"></div>
              <div class="data">0</div>
            </div>
          </div>
          <span class="delete-btn" @click="deleteComment(index)">删除</span>
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
  height: 483px;
  background: #ffffff;
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.comment .headPortrait {
  width: 46px;
  height: 46px;
  background-image: url("../../image/蒙版组\ 1@2x\ \(1\).png");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  margin: 24px 0px 0 30px;
  float: left;
}
.comment .information {
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
  width: 51px;
  height: 19px;
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
  width: 372px;
  height: 147px;
  float: left;
  position: absolute;
  top: 90px;
  left: 30px;
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
  width: 700px;
  position: absolute;
  top: 420px;
  display: flex;
  align-items: center;
  justify-self: center;
  margin: 0 30px;
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
  height: 330px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.personnal .headPortrait {
  width: 60px;
  height: 60px;
  margin: 20px 24px;
  background-image: url("../../image/头像@2x\ \(1\).png");
  background-size: cover; /* 设置背景图覆盖整个容器 */
  background-position: center; /* 设置背景图位置居中 */
  float: left;
}
.personnal .information {
  float: left;
  margin: 24px 0;
}
.personnal .content {
  display: block;
  width: 290px;
  height: 180px;
  background: #ffffff;
  border: 1px solid;
  border-color: #707070;
  border-radius: 8px;
  margin-top: 100px;
  margin-left: 23px;
  padding: 18px;
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
  background-image: url("../../image/头像@2x\ \(1\).png");
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
  top: 70px;
  left: -317px;
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
  margin-left: 20px;
  float: right;
}
</style>