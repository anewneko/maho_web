<template>
  <div class="navCont">
    <div class="navEl" @click="toUrl">
      <h3>
        <slot />
      </h3>
    </div>
    <el-divider direction="vertical" />
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

<style scoped lang="sass">
.navCont
  height: 100%
  width: 18%
  display: flex
  justify-content: center
  align-items: center
  .navEl
    height: calc(100% - 15px)
    min-width: 10%
    width: calc(100% - 15px)
    font-size: 1.2em
    margin: 5px
    padding: 0px 10px
    display: flex
    justify-content: center
    align-items: center
    &:hover
      cursor: pointer
      background-color: #ffffff15
      box-shadow: 0px 0px 3px #ffffff
    h3
      margin: 0px
      padding: 0px

.light-theme
  .navEl
      &:hover
        background-color: #00000015
        box-shadow: 0px 0px 3px #000000
</style>
