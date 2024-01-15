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
            <slot />
          </div>
          <div class="nav_item">
            <NavElement forword="/dashboard">Dashboard</NavElement>
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
    <slot name="body" />
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
    transform: scale(0);
  }
  25% {
    transform: scale(50);
  }
  100% {
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

div.el-switch.is-disabled .el-switch__core,
div.el-switch.is-disabled .el-switch__label {
  cursor: default;
}
</style>
