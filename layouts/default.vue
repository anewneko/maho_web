<template>
  <div class="radiate" @mousewheel="handleWheel">
    <transition name="fade">
      <nav v-show="showNav" :style="{ zIndex: navZIndex }" ref="navElement">
        <div class="ball" v-if="animate1"></div>
        <div class="ball2" v-if="animate2"></div>
        <div class="nav_layout">
          <div class="nav_logo" @click="goHome">
            <span class="logoText"> マホロボ </span>
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
                @change="doChangeAnimate(doChange)"
                :loading="switchLoading"
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
              <el-popover v-if="!isLogin" trigger="click">
                <template #reference>
                  <div class="menuArea">
                    <span class="menuIcon">
                      <el-icon><Menu /></el-icon>
                    </span>
                    Menu
                  </div>
                </template>
                <template #default> 123123123 </template>
              </el-popover>
            </div>
          </div>
        </div>
      </nav>
    </transition>
    <slot>
      <NuxtPage />
    </slot>
    <LoginDailog ref="loginDailog" />
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { ref } from "vue";
import { ElIcon, ElButton } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();
// var
const isdark = ref<boolean>(false);
const showNav = ref(true);
const isLogin = ref(true);
const user = ref<any>(null);
const animate1 = ref(false);
const animate2 = ref(false);
const navZIndex = ref(200);
const alwayShowNav = ref(false);
const switchLoading = ref(false);
provide("user", user);
provide("alwayShowNav", alwayShowNav);

// element
const navElement = ref<any>(null);
const loginDailog = ref<any>(null);

// function
const handleWheel = (e: WheelEvent) => {
  if (alwayShowNav.value) return;

  if (e.deltaY > 0) showNav.value = false;
  else showNav.value = true;
};

const doChange = async () => {
  toggleTheme();
  useDark().value = isdark.value;
  localStorage.setItem("isdark", isdark.value.toString());
};

const toggleTheme = () => {
  const root = document.documentElement;
  if (isdark.value) root.classList.remove("light-theme");
  else root.classList.add("light-theme");
};

const LoginDiaHandle = () => {
  loginDailog.value.show();
};

const goHome = () => {
  router.push("/");
};

const doChangeAnimate = (callBack: Function) => {
  switchLoading.value = true;
  if (isdark.value) {
    animate2.value = true;
    callBack();
    navZIndex.value = 100;
    setTimeout(() => {
      animate2.value = false;
      navZIndex.value = 200;
      switchLoading.value = false;
    }, 800);
  } else {
    animate1.value = true;
    navZIndex.value = 100;
    setTimeout(() => {
      animate1.value = false;
      callBack();
      navZIndex.value = 200;
      switchLoading.value = false;
    }, 800);
  }
};

// lifecycle
onBeforeMount(() => {
  useDark();
});
onMounted(() => {
  isdark.value = localStorage.getItem("isdark") === "true";
  toggleTheme();
});
</script>
<style>
/*黑暗模式*/
@import "element-plus/theme-chalk/dark/css-vars.css";

.ball {
  position: fixed;
  top: 3vh;
  right: 13.3%;
  width: 1vh;
  height: 1vh;
  border-radius: 50%;
  animation: scaleUp 0.8s;
  z-index: 105;
  backdrop-filter: invert(1);
}

.ball2 {
  position: fixed;
  top: 3vh;
  right: 13.3%;
  width: 1vh;
  height: 1vh;
  border-radius: 50%;
  animation: scaleUp2 0.8s;
  z-index: 105;
  backdrop-filter: invert(1);
}

@keyframes scaleUp {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(30);
  }
  100% {
    transform: scale(600);
  }
}

@keyframes scaleUp2 {
  0% {
    transform: scale(600);
  }
  75% {
    transform: scale(200);
  }
  100% {
    transform: scale(0);
  }
}

.modeswitch > .el-switch {
  --el-switch-on-color: #20486d;
  --el-switch-off-color: #feffee;
  --el-switch-border-color: #000000;
  position: fixed;
  z-index: 300;
  isolation: isolate;
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
  z-index: 200;
  transition: top 0.2s ease-in-out;
  isolation: isolate;
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
  align-items: center;
}

nav .nav_layout .nav_item {
  display: flex;
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

nav .nav_layout .nav_item > div {
  display: inline-block;
  width: 20%;
  height: 50%;
  font-size: 0.8em;
  font-weight: 300;
  margin: 0px 5px;
}

nav .nav_layout .nav_logo {
  position: relative;
  width: 130px;
  height: 70%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  opacity: 0.8;
  border: 2px solid #ffffff80;
  isolation: isolate;
  z-index: 300;
}

.light-theme nav .nav_layout .nav_logo {
  border: 2px solid #505050;
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

.logoText {
  position: absolute;
  top: -1px;
  left: 9px;
  z-index: 200;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.6em;
  text-shadow: 1px 1px 3px #000000;
  font-family: "Trebuchet MS";
}

.menuArea {
  display: flex;
  width: 80%;
  height: 80%;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border-radius: 20px;
}

.menuArea:hover {
  background-color: #414447;
  font-weight: 900;
}

.light-theme .menuArea:hover {
  background-color: #dbdbdb;
}

.menuArea .menuIcon {
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-right: 10px;
  font-size: 1.3em;
}

.menuArea .menuIcon:hover {
  background: #ffffff;
  color: #000000;
}
</style>
