<template>
  <div>
    <NuxtLayout :name="'sidebar'">
      <div class="dashboard_container">
        <h1>Welcome to the Dashboard!</h1>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, inject } from "vue";
const route = useRoute();
onMounted(() => {
  const alwayShowNav = inject<Ref<boolean>>("alwayShowNav");
  if (alwayShowNav) {
    alwayShowNav.value = true;
  }
});

onBeforeUnmount(() => {});
definePageMeta({
  key: (route) => route.fullPath,
});
</script>
<style scoped lang="sass">
.dashboard_container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 100%
  width: calc(100% - 18% - 4px)
</style>
