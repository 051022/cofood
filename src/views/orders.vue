<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="banner">
      <div class="secondBanner">
        <div class="title">
          <table class="ordersTitle">
            <tr>
              <td style="position: absolute; left: 37px; top: 16px">
                近三个月订单
              </td>
              <td style="position: absolute; left: 310px; top: 16px">
                订单详情
              </td>
              <td style="position: absolute; left: 545px; top: 16px">收货人</td>
              <td style="position: absolute; left: 688px; top: 16px">金额</td>
              <td style="position: absolute; left: 790px; top: 10px">
                <el-select
                  v-model="value"
                  placeholder="选择状态"
                  style="width: 100px"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </td>
              <td style="position: absolute; right: -170px; top: 16px">操作</td>
            </tr>
          </table>
        </div>
        <div class="orders">
          <order></order>
          <order></order>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
const options = [
  {
    value: "Option1",
    label: "已完成",
  },
  {
    value: "Option2",
    label: "待评价",
  },
  {
    value: "Option3",
    label: "待支付",
  },
  {
    value: "Option4",
    label: "待发货",
  },
];
</script>

<style>
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
.secondBanner {
  width: 842px;
  position: absolute;
  top: 36px;
  margin-right: 16px;
  float: left;
}
.ordersTitle {
  width: 1160px;
  height: 55px;
  background: #eaecef;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  color: #404040;
  font-size: 16px;
}
</style>