<template>
  <div style="margin: 10px 0px">
    <table class="orderTop">
      <tr>
        <td style="position: absolute; left: 28px">2024-08-31 14:45</td>
        <td style="position: absolute; left: 279px">订单号:</td>
        <td style="position: absolute; left: 340px">202408311445</td>
      </tr>
    </table>

    <table class="orderBottom">
      <tbody>
        <tr>
          <td>
            <img
              src="../../foodPictures/燕麦拿铁.jpg"
              alt="产品图片"
              width="100"
            />
          </td>
          <td>燕麦拿铁</td>
          <td style="color: #bfbfbf">*2</td>
          <td>奇异果</td>
          <td>￥100</td>
          <td>已完成</td>
          <td>删除</td>
          <td>收藏</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.orderTop {
  width: 1160px;
  height: 34px;
  background: #eaecef;
  color: #bfbfbf;
  display: flex;
}
.orderBottom {
  width: 1160px;
  height: 154px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 0 37px;
}
</style>