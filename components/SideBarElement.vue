<template>
  <div class="side_item" @click="toUrl" @mouseenter="ChangeIconSize('big')" @mouseleave="ChangeIconSize('small')">
    <div ref="iconRef" class="icon">
      <slot name="icon" />
    </div>
    <span>
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const props = defineProps({
  forword: {
    type: String,
    default: "/",
  },
});

// Element 
const iconRef = ref<HTMLElement | null>(null);

const ChangeIconSize = (size : "big"|"small") => {
  if(iconRef.value === null) return;
  if(size === "small") {
    iconRef.value.style.fontSize = "1.5em"
    iconRef.value.style.width = "35px"
    iconRef.value.style.height = "35px"
  }
  else if(size === "big") {
    iconRef.value.style.fontSize = "2em"
    iconRef.value.style.width = "40px"
    iconRef.value.style.height = "40px"
  }
};

onMounted(() => {});

const toUrl = () => {
  const url = props.forword[0] === "/" ? props.forword : `/${props.forword}`;
  router.push(`/dashboard${url}`);
};
</script>

<style scoped>
.side_item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 10px;
  border-bottom: 1px solid #70707080;
}

.side_item > span {
  font-size: 1.2em;
  width: 60%;
}

.light-theme .side_item {
  border-bottom: 1px solid #63505080;
}

.side_item:hover {
  background-color: #2f2f2f;
  border-bottom: 1px solid #111111;
  border-radius: 15px;
  box-shadow: 0px 0px 5px inset #7c7c7c;
}

.light-theme .side_item:hover {
  background-color: #f0d1d1;
  border-bottom: 1px solid #e7dbdb;
  box-shadow: 0px 0px 3px #9e4c4c;
}

.icon {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  font-size: 1.5em;
}

</style>
