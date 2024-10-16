<template>
  <div>
    <div v-if="addresses.length === 0">暂无地址信息</div>
    <div
      v-else
      v-for="address in addresses"
      :key="address.ID"
      class="informations"
    >
      <el-descriptions :column="1">
        <el-descriptions-item label="收货人:">{{
          address.name
        }}</el-descriptions-item>
        <el-descriptions-item label="所在地区:">{{
          address.area
        }}</el-descriptions-item>
        <el-descriptions-item label="地址:">{{
          address.address
        }}</el-descriptions-item>
        <el-descriptions-item label="手机:">{{
          address.phone
        }}</el-descriptions-item>
      </el-descriptions>

      <div class="bottom-buttons">
        <el-button class="el-button" @click="handleSetDefault(address.ID)"
          >设为默认</el-button
        >
        <el-button class="el-button" @click="handleEdit(address)"
          >编辑</el-button
        >
        <el-button class="el-button close-btn" @click="handleDelete(address.ID)"
          >×</el-button
        >
      </div>
    </div>

    <!-- 编辑表单 -->
    <el-dialog
      title="编辑信息"
      v-model="dialogVisible"
      @close="handleDialogClose"
      style="border-radius: 10px"
    >
      <el-form :model="editData">
        <el-form-item label="收货人:">
          <el-input v-model="editData.name"></el-input>
        </el-form-item>
        <el-form-item label="所在地区:">
          <el-input v-model="editData.area"></el-input>
        </el-form-item>
        <el-form-item label="地址:">
          <el-input v-model="editData.address"></el-input>
        </el-form-item>
        <el-form-item label="标签:">
          <el-input v-model="editData.tag"></el-input>
        </el-form-item>
        <el-form-item label="手机:">
          <el-input v-model="editData.phone"></el-input>
        </el-form-item>
        <!-- <el-form-item label="固定电话:">
          <el-input v-model="editData.stickPhone"></el-input>
        </el-form-item> -->
        <el-form-item label="电子邮箱:">
          <el-input v-model="editData.email"></el-input>
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false" style="margin: 10px"
            >取消</el-button
          >
          <el-button type="primary" @click="handleSave">确定</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 新增地址对话框 -->
    <el-dialog
      title="新增收货地址"
      v-model="addDialogVisible"
      @close="handleAddDialogClose"
    >
      <el-form :model="newAddress" label-width="120px">
        <el-form-item label="收货人:">
          <el-input v-model="newAddress.name"></el-input>
        </el-form-item>
        <el-form-item label="所在地区:">
          <el-input v-model="newAddress.area"></el-input>
        </el-form-item>
        <el-form-item label="详细地址:">
          <el-input v-model="newAddress.address"></el-input>
        </el-form-item>
        <el-form-item label="标签:">
          <el-input v-model="newAddress.tag"></el-input>
        </el-form-item>
        <el-form-item label="手机:">
          <el-input v-model="newAddress.phone"></el-input>
        </el-form-item>
        <!-- <el-form-item label="固定电话:">
          <el-input v-model="newAddress.stickPhone"></el-input>
        </el-form-item> -->
        <el-form-item label="电子邮箱:">
          <el-input v-model="newAddress.email"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleAddAddress">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const emit = defineEmits(["address-added"]);

const token = computed(() => store.getters.token);
const addresses = ref([]);
const dialogVisible = ref(false);
const addDialogVisible = ref(false);
const editData = ref({});
const newAddress = ref({
  name: "",
  area: "",
  address: "",
  tag: "",
  phone: "",
  stickPhone: "",
  email: "",
});

onMounted(() => {
  fetchData();
});

const showAddDialog = () => {
  addDialogVisible.value = true;
};

const handleAddAddress = async () => {
  try {
    const formData = new FormData();
    for (const key in newAddress.value) {
      if (newAddress.value[key]) {
        formData.append(key, newAddress.value[key]);
      }
    }

    const response = await axios.post(
      "https://www.femto.fun/address",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("地址添加成功", response.data);
    addDialogVisible.value = false;
    emit("address-added");
    await fetchData(); // 重新获取所有地址
  } catch (error) {
    console.error("添加地址失败:", error);
  }
};

const handleAddDialogClose = () => {
  newAddress.value = {
    name: "",
    area: "",
    address: "",
    tag: "",
    phone: "",
    stickPhone: "",
    email: "",
  };
};

const fetchData = async () => {
  try {
    const response = await axios.get("https://www.femto.fun/address", {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    console.log("API 响应:", response.data);
    if (response.data.code === 200 && Array.isArray(response.data.addresses)) {
      addresses.value = response.data.addresses;
    } else {
      addresses.value = [];
    }
    console.log("获取到的地址:", addresses.value);
  } catch (error) {
    console.error("获取地址列表失败:", error);
    if (error.response && error.response.status === 401) {
      router.push("/login");
    }
  }
};

const handleSave = async () => {
  try {
    const formData = new FormData();
    for (const key in editData.value) {
      if (editData.value[key] !== null && editData.value[key] !== undefined) {
        formData.append(key, editData.value[key]);
      }
    }

    // 只有在修改现有地址时才包含 ID
    if (editData.value.ID) {
      formData.append("id", editData.value.ID);
    }

    const response = await axios.post(
      "https://www.femto.fun/address",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("地址更新成功", response.data);
    dialogVisible.value = false;
    await fetchData(); // 重新获取所有地址
  } catch (error) {
    console.error("更新地址失败:", error);
  }
};

const handleSetDefault = (id) => {
  console.log("设为默认按钮点击", id);
};

const handleEdit = (address) => {
  editData.value = { ...address };
  dialogVisible.value = true;
};

const handleDialogClose = () => {
  dialogVisible.value = false;
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`https://www.femto.fun/address?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    console.log("地址删除成功");
    fetchData();
  } catch (error) {
    console.error("删除地址失败:", error);
  }
};

defineExpose({
  showAddDialog,
  fetchData, // 暴露 fetchData 方法
});
</script>

<style scoped>
.informations {
  width: 774px;
  height: 180px;
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: -360px;
  right: 10px;
  border: none;
  color: #707070;
  width: 36.77px;
  height: 36.77px;
  font-size: 20px;
  cursor: pointer;
  background-color: #ffffff;
}

.bottom-buttons {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
}

.el-button {
  margin: 0;
}
</style>
