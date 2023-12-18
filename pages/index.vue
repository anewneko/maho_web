<template>
  <div class="appContainer">
    <div class="MainArea">
      <div class="carouselContainer">
        <ElCarousel
          ref="carousel"
          :interval="4000"
          type="card"
          height="380px"
          @change="CarouselHandler"
        >
          <ElCarouselItem v-for="item in 6" :key="item">
            <div class="imgMask" ref="imgMaskRef" />
            <el-image :src="`/image/banner${item}.jpg`" fit="" />
          </ElCarouselItem>
        </ElCarousel>
      </div>
      <div class="FirstFunc">First Function</div>
      <div class="SecondFunc">Second Function</div>
    </div>
    <footer>
      <div>本網站為個人網站，不會進行任何商業行為</div>
      <div>若影片及影像有任何侵權，請聯絡我下架</div>
    </footer>
  </div>
</template>

<style scoped>
.appContainer {
  display: inline-block;
  width: 100%;
  min-height: calc(100vh - 10px);
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin: 0px;
}

nav {
  left: 0px;
  top: 0px;
  position: fixed;
  display: inline-block;
  width: 100%;
  height: 80px;
  /* background-color: #000000; */
  border-bottom: 1px solid #afafaf7a;
  z-index: 100;
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

.MainArea {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 110px);
  /* background-color: #000000; */
  margin-top: 80px;
}

.MainArea .carouselContainer {
  display: inline-block;
  width: calc(100% - 30px);
}

footer {
  display: inline-block;
  width: 100%;
  height: 150px;
  background-color: #0e0c29;
  border-bottom: 1px solid #afafaf7a;
}

.light-theme footer {
  background-color: #9e99e4;
}

.el-carousel__container {
  display: inline-block;
  width: calc(100% - 6px);
}

.el-carousel {
  --el-carousel-arrow-background: rgba(31, 45, 61, 0.705);
  --el-carousel-arrow-hover-background: rgb(31, 45, 61);
  z-index: 150;
  isolation: isolate;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
  font-size: large;
  height: 100px;
  width: 100%;
}

.MainArea .FirstFunc {
  display: inline-block;
  width: 100%;
  height: 70vh;
  /* background-color: #0e0c29; */
  background-image: linear-gradient(to top, #0e0c29, #0e0c2942);
  margin-top: 30px;
  padding-top: 10px;
}

.MainArea .SecondFunc {
  display: inline-block;
  width: 100%;
  height: 70vh;
  /* background-color: #0e0c29; */
  background-image: linear-gradient(to top, #0e0c29, #0e0c29);
  margin: 0px;
  padding-top: 10px;
}

.light-theme .MainArea .FirstFunc {
  background-image: linear-gradient(to top, #b499e4, #fff1f1);
  color: rgb(30, 30, 85);
}

.light-theme .MainArea .SecondFunc {
  background-image: linear-gradient(to top, #9e99e4, #b499e4);
  color: rgb(30, 30, 85);
}

.el-carousel__item {
  overflow: hidden;
  border-radius: 5px;
  height: calc(100% - 4px);
  border: 1px solid #dce4ec;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.15);
}

.light-theme .el-carousel__item {
  border: 1px solid #132e49;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.15);
}

.imgMask {
  position: absolute;
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: #000000ac;
  z-index: 100;
}

.el-image {
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script lang="ts" setup>
import { ref } from "vue";
import { ElCarousel } from "element-plus";
const carousel = ref<InstanceType<typeof ElCarousel> | null>(null);
const imgMaskRef = ref<Array<HTMLElement>>([]);
const CarouselHandler = (newIndex: number, oldIndex: number) => {
  imgMaskRef.value[newIndex].style.display = "none";
  imgMaskRef.value[oldIndex].style.display = "block";
};

onMounted(() => {
  CarouselHandler(0, 1);
  const alwayShowNav = inject<Ref<boolean>>("alwayShowNav");
  if (alwayShowNav) {
    alwayShowNav.value = false;
  }
});
</script>
