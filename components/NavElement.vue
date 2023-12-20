<template>
  <div class="navEl" @click="toUrl">
    <h3>
      <slot></slot>
    </h3>
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

const toUrl = () => {
  const url = props.forword[0] === "/" ? props.forword : `/${props.forword}`;
  router.push(`${url}`);
};
</script>

<style scoped>
.navEl {
  border: 1px solid #fff;
  height: calc(100% - 10px);
  min-width: 10%;
  font-size: 1.2em;
  margin: 5px;
  padding: 0px 10px;
}
.navEl:hover {
  cursor: pointer;
}
</style>
