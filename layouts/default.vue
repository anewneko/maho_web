# layouts/default.vue
<template>
  <div class="radiate" @mousewheel="handleWheel">
    <transition name="fade">
      <nav v-show="showNav" ref="navElement">
        <div class="navbg">nav</div>
        <div class="nav_layout">
          <div class="nav_logo">logo</div>
          <div class="nav_item">
            <div>Dashboard</div>
            <div>Doc</div>
            <div>Help</div>
            <div>About Maho</div>
          </div>
          <div class="modeSwitch">
            <el-switch
              v-model="isdark"
              inline-prompt
              active-action-icon="Moon"
              inactive-action-icon="Sunny"
              size="large"
              @change="toggleTheme()"
            />
          </div>
          <div class="nav_login">login</div>
        </div>
      </nav>
    </transition>
    <NuxtPage />
    <LoginDailog />
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { ref } from "vue";

// var
const isdark = ref<boolean>(false);
const navElement = ref<any>(null);
const showNav = ref(true);

// lifecycle
onMounted(() => {
  useDark();
  isdark.value = localStorage.getItem("isdark") === "true";
});

// function
const handleWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) showNav.value = false;
  else showNav.value = true;
};

const doChange = async () => {
  useDark().value = isdark.value;
  localStorage.setItem("isdark", isdark.value.toString());
};

const toggleTheme = () => {
  doChange();
  const root = document.documentElement;
  if (isdark.value) {
    root.classList.remove("light-theme");
    root.classList.add("dark-theme");
  } else {
    root.classList.remove("dark-theme");
    root.classList.add("light-theme");
  }
};
</script>
<style>
/*黑暗模式*/
@import "element-plus/theme-chalk/dark/css-vars.css";

.modeSwitch {
  border: 1px solid #b04aa7;
}

.modeSwitch > .el-switch {
  --el-switch-on-color: #20486d;
  --el-switch-off-color: #feffee;
  --el-switch-border-color: #000000;
}

div.modeSwitch div.el-switch .el-switch__core .el-switch__action {
  background-color: #e6d25c;
}

div.modeSwitch div.el-switch .el-switch__core .el-switch__action svg {
  color: #ffffff;
}

div.modeSwitch div.is-checked .el-switch__core .el-switch__action {
  background-color: #528bc4;
}
div.modeSwitch div.is-checked .el-switch__core .el-switch__action svg {
  color: #e7d87f;
}

nav {
  left: 0px;
  top: 0px;
  position: fixed;
  display: inline-block;
  width: 100%;
  height: 50px;
  /* background-color: #000000; */
  border-bottom: 1px solid #afafaf7a;
  z-index: 100;
  transition: top 0.2s ease-in-out;
}

nav .navbg {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #ffffff70;
  font-size: 24pt;
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

nav .nav_layout .nav_logo,
nav .nav_layout .nav_login {
  width: 150px;
  height: 100%;
  border: 1px solid #da8686;
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
