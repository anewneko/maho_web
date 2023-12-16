<template>
  <ElDialog v-model="visible" width="30%">
    <template #header>
      <h1>ログイン</h1>
      <div class="logo">
        <el-image
          style="width: 200px; height: 150px"
          :src="imgHandler()"
          fit="cover"
        />
      </div>
    </template>
    <div class="loginDailog">
      <div class="loginDailog_content">
        <div class="loginDailog_content_item">
          <el-form ref="formRef" label-width="auto">
            <el-form-item>
              <h3>FirstKey</h3>
              <ElInput
                v-model="inputKeys.firstKey"
                :show-password="true"
                placeholder="Your first key"
                :validate-event="true"
              ></ElInput
            ></el-form-item>
            <el-form-item>
              <h3>SecondKey</h3>
              <ElInput
                v-model="inputKeys.secondKey"
                :show-password="true"
                placeholder="Your second key"
                :validate-event="true"
              ></ElInput
            ></el-form-item>
          </el-form>
        </div>
      </div>
      <div class="loginDailog_footer">
        <ElButton type="danger" ref="cancelBtn" @click="hide" plain
          >Cancel</ElButton
        >
        <ElButton type="primary" @click="commit" plain>OK</ElButton>
      </div>
    </div>
  </ElDialog>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 0;
  font-size: 3em;
}

h3 {
  margin: 5px;
}

.light-theme h1 {
  color: #5865f2;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
}

.loginDailog_content_item_title {
  font-size: 1.5em;
  padding: 5px;
  margin-top: 15px;
}

.loginDailog_footer {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding: 0px 20px;
}

.loginDailog_footer button {
  width: 150px;
}
</style>

<script lang="ts" setup>
import { ElDialog, ElInput, ElButton } from "element-plus";
const cancelBtn = ref<InstanceType<typeof ElButton> | null>(null);
const visible = ref(false);

const inputKeys = reactive({
  firstKey: "",
  secondKey: "",
  reset: () => {
    inputKeys.firstKey = "";
    inputKeys.secondKey = "";
  },
});
const show = () => {
  inputKeys.reset();
  visible.value = true;
};

const hide = () => {
  visible.value = false;
};

const imgHandler = () => {
  return localStorage.getItem("isdark") === "true"
    ? "/DiscordLogo.png"
    : "/blueLogo.png";
};

const commit = () => {
  if (inputKeys.firstKey === "" || inputKeys.secondKey === "") {
    return;
  }
  if (inputKeys.firstKey === inputKeys.secondKey) {
    localStorage.setItem("firstKey", inputKeys.firstKey);
    localStorage.setItem("secondKey", inputKeys.secondKey);
    hide();
  } else {
    // cancelBtn.value?.nativeElement.click();
  }
};

defineExpose({
  show,
});
</script>
