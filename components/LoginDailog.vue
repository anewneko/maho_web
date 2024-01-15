<template>
  <div class="login-dialog-container">
    <ElDialog v-model="visible" width="30%" :show-close="false">
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
                  v-model="LoginData.firstKey"
                  :show-password="true"
                  placeholder="Your first key"
                  :validate-event="true"
                  @keyup.enter="commit"
                ></ElInput
              ></el-form-item>
              <el-form-item>
                <h3>SecondKey</h3>
                <ElInput
                  v-model="LoginData.secondKey"
                  :show-password="true"
                  placeholder="Your second key"
                  :validate-event="true"
                  @keyup.enter="commit"
                ></ElInput
              ></el-form-item>
            </el-form>
          </div>
        </div>
        <div class="loginDailog_footer">
          <ElButton type="danger" ref="cancelBtn" @click="hide" plain
            >Cancel</ElButton
          >
          <ElButton type="primary" @click="commit" plain>Login</ElButton>
        </div>
      </div>
    </ElDialog>
  </div>
</template>

<style scoped lang="sass">

.login-dialog-container
  h1
    text-align: center
    margin: 0
    font-size: 3em
    color: #e8e8e8
  .logo
    display: flex
    justify-content: center
    align-items: center
    margin-top: 35px
  .loginDailog
    .loginDailog_content
      .loginDailog_content_item
        h3
          margin: 5px
    .loginDailog_footer
      display: flex
      justify-content: space-between
      margin-top: 60px
      padding: 0px 20px
      button
        width: 150px

.light-theme
  .login-dialog-container
    h1
      color: #5865f2
</style>

<script lang="ts" setup>
import { ElDialog, ElInput, ElButton } from "element-plus";
import { ping } from "@/assets/api/Base";
import { LoginImf } from "@/assets/type/LoginImf";
import { useUserStore } from "~/assets/store/user";

// Varibles

const visible = ref(false);
const userStore = useUserStore();

// Data

const LoginData = reactive<LoginImf>(new LoginImf());

// Element

const CancelBtn = ref<any>();
const LoginBtn = ref<any>();

// LifeCycle

// Events

const emit = defineEmits(["login"]);

const commit = async () => {
  // if (LoginData.firstKey === "" || LoginData.secondKey === "") return;
  // userStore.login(LoginData);
  const { data: res } = await ping();
  console.log(res);

  emit("login", false);
};

// Functions

const show = () => {
  LoginData.reset();
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

defineExpose({
  show,
  hide,
});
</script>
~/assets/type/LoginImf
