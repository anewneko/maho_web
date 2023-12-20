<template>
  <div>
    <NuxtLayout>
      <NuxtPage :page-key="route.fullPath" />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const route = useRoute();
const nuxtApp = useNuxtApp();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component);
}
</script>

<style></style>
