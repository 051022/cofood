<script setup>
</script>

<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="banner">
      <div class="leftBanner">
        <div class="userIformation">
          <router-link to="/userInformation">
            <div class="userHeadportrait"></div>
            <div class="userNameIdenty">
              <div class="userName">一颗奇异果</div>
              <div class="userIdenty">暂无身份</div>
            </div>
          </router-link>
          <div class="elseInformation">
            <div class="attetion">
              <div class="amount">0</div>
              <div class="text">关注</div>
            </div>
            <div class="fans">
              <div class="amount">0</div>
              <div class="text">粉丝</div>
            </div>
            <div class="praise">
              <div class="amount">0</div>
              <div class="text">点赞</div>
            </div>
          </div>
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
        <textarea
          class="note"
          placeholder="发布一篇动态来记录一下吧"
        ></textarea>
        <button>发布</button>
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
  top: 36px;
  margin-right: 16px;
  float: left;
}
.userIformation {
  width: 842px;
  height: 130px;
  background: #ffffff;
  border-radius: 10px;
}
.userHeadportrait {
  width: 64px;
  height: 64px;
  position: relative;
  float: left;
  top: 33px;
  margin: 0 28px 33px 42px;
  background-image: url(../../image/蒙版组\ 44@2x.png);
  background-size: contain; /* 设置背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 设置背景图位置居中 */
}
.userNameIdenty {
  width: 110px;
  height: 70px;
  position: relative;
  top: 36px;
  float: left;
}
.userName {
  width: 110px;
  height: 29px;
  font-weight: bold;
  font-size: 22px;
  color: #000000;
  position: relative;
  float: left;
}
.userIdenty {
  width: 72px;
  height: 24px;
  color: #808080;
  font-size: 18px;
  position: relative;
  float: left;
  margin: 6px;
}
.elseInformation {
  width: 160px;
  position: absolute;
  top: 57px;
  left: 589px;
  float: left;
}
.amount {
  color: #808080;
  font-weight: bold;
  font-size: 20px;
  float: left;
}
.elseInformation .text {
  color: #808080;
  font-size: 12px;
  float: left;
  margin: 5px 10px 5px 5px;
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
  width: 798px;
  height: 502px;
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 296px;
  padding: 22px;
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
  margin-right: 16px;
  float: left;
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
  background-image: url(./image/会员@2x.png);
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
  background-image: url(./image/客服@2x.png);
}
.i2 {
  background-image: url(./image/设置@2x.png);
}
.i3 {
  background-image: url(./image/隐私@2x.png);
}
.i4 {
  background-image: url(./image/问号@2x.png);
}
.i5 {
  background-image: url(./image/提醒-1@2x.png);
}
button {
  position: relative;
  right: 70px;
  bottom: 20px;
}
</style>