<template>
  <main>
    <ElHeader>
      <template #default>
        <!-- <nav>
          <div class="navbg">nav</div>
          <div class="nav_layout">
            <div class="nav_logo">logo</div>
            <div class="nav_item">
              <div>Dashboard</div>
              <div>Doc</div>
              <div>Help</div>
              <div>About Maho</div>
            </div>
            <div class="nav_login">login</div>
          </div>
        </nav> -->
      </template>
    </ElHeader>
    <div class="MainArea">
      <div class="Mainbg">Main</div>
      <div class="carouselContainer">
        <ElCarousel ref="carousel" :interval="4000" type="card" height="360px">
          <ElCarouselItem v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </ElCarouselItem>
        </ElCarousel>
      </div>
      <div class="FirstFunc">First Function</div>
    </div>
    <footer>footer</footer>
  </main>
</template>

<style scoped>
main {
  display: inline-block;
  width: calc(100% - 8px);
  min-height: calc(100vh - 10px);
  margin: 3px;
  border: 1px solid #afafaf7a;
  color: #ffffff;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
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

nav .navbg {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #ffffff70;
  font-size: 24pt;
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
  border-bottom: 1px solid #afafaf7a;
  margin-top: 80px;
}

.MainArea .Mainbg {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #ffffff70;
}

.MainArea .carouselContainer {
  margin-top: 15px;
  display: inline-block;
  width: calc(100% - 30px);
}

footer {
  display: inline-block;
  width: 100%;
  height: 150px;
  /* background-color: #000000; */
  border-bottom: 1px solid #afafaf7a;
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
  margin: 30px 0px;
}
</style>

<script lang="ts" setup>
import { ref } from "vue";
import { ElCarousel } from "element-plus";
const carousel = ref<InstanceType<typeof ElCarousel> | null>(null);
</script>
