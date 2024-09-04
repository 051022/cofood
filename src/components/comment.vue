<template>
  <div>
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
      <div class="commentFunction">
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
  </div>
</template>

<script lang="ts" setup>
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
let collected = true;

const changeCollect = () => {
  if (!collected) {
    countCollect.value++;
    collected = true;
  } else {
    countCollect.value--;
    collected = false;
  }
};
</script>

<style>
.comment {
  width: 784px;
  height: 483px;
  background: #ffffff;
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex-wrap: wrap; /* 允许换行，确保内容始终在容器内部 */
  overflow: hidden; /* 确保容器不会因内容溢出而滚动 */
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
  width: 784px;
  height: 147px;
  margin-left: 40px;
}
.commentImgs {
  width: 784px;
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
.commentFunction {
  width: 700px;
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
</style>