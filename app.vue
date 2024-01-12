<template>
  <div>
    <NuxtLayout>
      <template>
        <div class="app-logo-layout">
          <el-image
            style="width: 100%; height: 100%"
            :src="imgHandler()"
            :fit="'contain'"
          />
        </div>
      </template>
      <template #body>
        <NuxtPage :page-key="route.fullPath" />
      </template>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { useDark } from "@vueuse/core";
const isDark = useDark();
const route = useRoute();
const nuxtApp = useNuxtApp();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component);
}

const imgHandler = () => {
  return isDark.value == true ? "/mahoLogoDark.ico" : "/mahoLogo.ico";
};
</script>

<style>
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

.app-logo-layout {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
