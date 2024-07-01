<template>
    <div class="Page-box">
      <slot />
    </div>
  </template>
  
  <script lang="ts" setup>
  const prop = defineProps({
    pageDp: {
      type: Number,
      default: 0
    }
  })
  const emit = defineEmits(["change"])

  watch(
    () => prop.pageDp as number,
    (newVal, oldVal) => {
      if (newVal !== oldVal) {
        emit("change", newVal, oldVal)
      }
    }
  )
  
  </script>
  
  <style scoped lang="scss">
  .mapPage-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  </style>
  