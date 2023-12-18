<template>
  <NuxtLayout :name="'sidebar'">
    <div class="dashboard_container">
      <h1>Welcome to the Dashboard!</h1>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { onMounted, inject } from "vue";
onMounted(() => {
  const alwayShowNav = inject<Ref<boolean>>("alwayShowNav");
  if (alwayShowNav) {
    alwayShowNav.value = true;
  }
});
</script>
<style scoped>
.dashboard_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: calc(100% - 18% - 4px);
}
</style>
