<template>
  <div class="radiate" @mousewheel="handleWheel">
    <transition name="fade">
      <nav v-show="showNav" :style="{ zIndex: navZIndex }" ref="navElement">
        <div
          class="ball"
          :style="{ animation: currentAnimation(switchLoading) }"
        ></div>
        <div class="nav_layout">
          <div class="nav_logo" @click="goHome">
            <div class="app-logo-layout">
              <el-image
                style="width: 100%; height: 100%"
                :src="imgHandler()"
                :fit="'contain'"
              />
            </div>
          </div>
          <div class="nav_item">
            <NavElement forword="/dashboard/home">Dashboard</NavElement>
            <NavElement>Doc</NavElement>
            <NavElement>Help</NavElement>
            <NavElement>About Maho</NavElement>
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
              <UserStat />
            </div>
          </div>
        </div>
      </nav>
    </transition>
    <slot />
    <LoginDailog ref="loginDailog" @login="LoginHandler" />
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { ref } from "vue";
import { ElIcon, ElButton } from "element-plus";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
// variable
const isdark = ref<boolean>(false);
const showNav = ref(true);
const isLogin = ref(true);
const user = ref<any>(null);
const navZIndex = ref(200);
const alwayShowNav = ref(false);
const switchLoading = ref(false);
provide("user", user);
provide("alwayShowNav", alwayShowNav);

// element
const navElement = ref<any>();
const loginDailog = ref<any>();

// function

const handleWheel = (e: WheelEvent) => {
  if (alwayShowNav.value) return;

  if (e.deltaY > 0) showNav.value = false;
  else showNav.value = true;
};

const doChange = () => {
  toggleTheme();
  useDark().value = isdark.value;
  localStorage.setItem("isdark", isdark.value.toString());
};

const toggleTheme = () => {
  const root = document.documentElement;
  if (!isdark.value) root.classList.add("light-theme");
  else root.classList.remove("light-theme");
};

const LoginDiaHandle = () => {
  window.location.href = "https://discord.com/oauth2/authorize?client_id=655407600325754908&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2FmahoBotServer%2Fredirect%2Fmahoweb%2Fhomepage&scope=identify+email+connections+guilds"
};

const goHome = () => {
  router.push("/");
};

const doChangeAnimate = (callBack: Function) => {
  switchLoading.value = true;
  if (isdark.value) {
    callBack();
    navZIndex.value = 100;
    setTimeout(() => {
      navZIndex.value = 200;
      switchLoading.value = false;
    }, 800);
  } else {
    navZIndex.value = 100;
    setTimeout(() => {
      callBack();
      navZIndex.value = 200;
      switchLoading.value = false;
    }, 800);
  }
};

const currentAnimation = (onchange: boolean) => {
  if (!onchange) return "";
  if (isdark.value) return "scaleUp .8s ease-in-out reverse";
  else return "scaleUp .8s ease-in-out";
};

const LoginHandler = (data: any) => {
  if (!data) {
    isLogin.value = data;
    loginDailog.value.hide();
  } else return;
};

const imgHandler = () => {
  return isdark.value == true ? "/mahoLogoDark.ico" : "/mahoLogo.ico";
};

// lifecycle
onBeforeMount(() => {
  useDark()
});
onMounted(() => {
  const theme = localStorage.getItem("isdark");
  isdark.value = !theme || theme === "true";
  toggleTheme();
});
</script>
<style>
/*黑暗模式*/
/* @import "element-plus/theme-chalk/dark/css-vars.css"; */


.ball {
  position: fixed;
  top: 20px;
  right: 180px;
  width: 0vh;
  height: 0vh;
  border-radius: 50%;
  z-index: 105;
  backdrop-filter: invert(1);
  /* animation: scaleUp 0.8s ease-in-out reverse; */
}

.theme-enter-active .inner,
.theme-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.theme-enter-from .inner,
.theme-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

@keyframes scaleUp {
  0% {
    width: 1vh;
    height: 1vh;
    transform: scale(0);
  }
  25% {
    width: 1vh;
    height: 1vh;
    transform: scale(50);
  }
  100% {
    width: 1vh;
    height: 1vh;
    transform: scale(600);
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
  justify-content: flex-start;
}

/* nav .nav_layout .nav_item > div {
  display: inline-block;
  width: 20%;
  height: 100%;
  font-size: 0.8em;
  font-weight: 300;
  margin: 0px 5px;
} */

nav .nav_layout .nav_logo {
  display: flex;
  justify-content: center;
  position: relative;
  width: calc(15% - 40px);
  height: 70%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  opacity: 0.8;
  /* border: 2px solid #ffffff80; */
  margin: 0px 20px;
  isolation: isolate;
  z-index: 300;
  /* background-color: #dedede; */
}

nav .nav_layout .nav_login {
  display: flex;
  min-width: 200px;
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

div.el-switch.is-disabled .el-switch__core,
div.el-switch.is-disabled .el-switch__label {
  cursor: default;
}

.app-logo-layout {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
