# layouts/default.vue
<template>
  <div class="radiate" @mousewheel="handleWheel">
    <transition name="fade">
      <nav v-show="showNav" ref="navElement">
        <div class="nav_layout">
          <div class="nav_logo" @click="goHome">
            <el-image
              style="width: 150px; height: 50px"
              :src="'/mahoIcon.ico'"
              :fit="'cover'"
            />
          </div>
          <div class="nav_item">
            <div>Dashboard</div>
            <div>Doc</div>
            <div>Help</div>
            <div>About Maho</div>
          </div>
          <div class="nav_login">
            <div class="modeswitch">
              <el-switch
                v-model="isdark"
                inline-prompt
                active-action-icon="Moon"
                inactive-action-icon="Sunny"
                size="large"
                @change="doChange()"
              />
            </div>
            <div class="loginImf">
              <el-button
                v-if="isLogin"
                @click="LoginDiaHandle"
                icon="StarFilled"
                :round="true"
              >
                ログイン
              </el-button>
              <!-- <el-dropdown size="large" split-button type="primary">
                Large
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown> -->
            </div>
          </div>
        </div>
      </nav>
    </transition>
    <NuxtPage />
    <LoginDailog ref="loginDailog" />
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { ref } from "vue";
import { ElIcon, ElButton } from "element-plus";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
// var
const isdark = ref<boolean>(false);
const showNav = ref(true);
const isLogin = ref(true);

// element
const navElement = ref<any>(null);
const loginDailog = ref<any>(null);

// lifecycle
onMounted(() => {
  useDark();
  isdark.value = localStorage.getItem("isdark") === "true";
  toggleTheme();
});

// function
const handleWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) showNav.value = false;
  else showNav.value = true;
};

const doChange = async () => {
  useDark().value = isdark.value;
  localStorage.setItem("isdark", isdark.value.toString());
  toggleTheme();
};

const toggleTheme = () => {
  const root = document.documentElement;
  if (isdark.value) {
    root.classList.remove("light-theme");
    root.classList.add("dark-theme");
  } else {
    root.classList.remove("dark-theme");
    root.classList.add("light-theme");
  }
};

const LoginDiaHandle = () => {
  loginDailog.value.show();
};

const goHome = () => {
  router.push("/");
};
</script>
<style>
/*黑暗模式*/
@import "element-plus/theme-chalk/dark/css-vars.css";

.modeswitch > .el-switch {
  --el-switch-on-color: #20486d;
  --el-switch-off-color: #feffee;
  --el-switch-border-color: #000000;
}

div.modeswitch div.el-switch .el-switch__core .el-switch__action {
  background-color: #e6d25c;
}

div.modeswitch div.el-switch .el-switch__core .el-switch__action svg {
  color: #ffffff;
}

div.modeswitch div.is-checked .el-switch__core .el-switch__action {
  background-color: #528bc4;
}
div.modeswitch div.is-checked .el-switch__core .el-switch__action svg {
  color: #e7d87f;
}

.modeswitch {
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginImf {
  width: calc(100% - 60px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav {
  left: 0px;
  top: 0px;
  position: fixed;
  display: inline-block;
  width: 100%;
  height: 50px;
  background-color: #2b2f33;
  border-bottom: 1px solid #afafaf7a;
  z-index: 100;
  transition: top 0.2s ease-in-out;
}

.light-theme nav {
  background-color: #fcf5fc;
  border-bottom: 1px solid #6e6e6e7a;
}

nav .nav_layout {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

nav .nav_layout .nav_item {
  display: flex;
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid #938cd6;
}

nav .nav_layout .nav_item > div {
  display: inline-block;
  width: 20%;
  height: 50%;
  border: 1px solid #ffffff80;
  font-size: 0.8em;
  font-weight: 300;
  margin: 0px 5px;
  box-shadow: 1px 1px 2px #ffffff;
}

nav .nav_layout .nav_logo {
  width: 150px;
  height: 100%;
  cursor: pointer;
}

nav .nav_layout .nav_login {
  display: flex;
  width: 200px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
