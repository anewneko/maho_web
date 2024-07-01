<template>
  <transition :name="prop.anime">
    <slot v-if="prop.page == pageDp" />
  </transition>
</template>
<script lang="ts" setup>
const anime = ref<string>("slide")
const prop = defineProps({
page: {
    type: Number,
    default: 0
},
anime: {
    type: String as PropType<"slide" | "inverse">,
    default: "slide"
}
})
const pageDp = inject<Number>('pageDp')
const emit = defineEmits(["changed"])

watch(() => prop.anime, (newVal, oldVal) => {
  if (newVal !== oldVal) 
      anime.value = newVal
})


</script>
<style scoped lang="scss">

  .slide-enter-active {
    animation: slide-in 0.5s;
  }
  .slide-leave-active {
    display: none;
  }
  @keyframes slide-in {
    0% {
      display: none;
    }
    5% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .inverse-enter-active {
    animation: inverse-in 0.5s;
  }
  .inverse-leave-active {
    display: none;
  }
  @keyframes inverse-in {
    0% {
      display: none;
    }
    5% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

</style>