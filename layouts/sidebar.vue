<template>
  <div class="container_sidebar">
    <div class="sideArea">
      <div class="side_top"></div>
      <div class="side_bar">
        <div class="side_item">123</div>
        <div class="side_item">123</div>
        <div class="side_item">123</div>
        <div class="side_item">123</div>
        <div class="side_item">123</div>
        <div class="side_item">123</div>
        <div class="side_item">123</div>
      </div>
      <div class="side_buttom"></div>
    </div>
    <slot>
      <NuxtPage />
    </slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container_sidebar {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 50px);
  width: 100%;
  background-color: #010101;
}

.light-theme .container_sidebar {
  background-color: #f0e8e8;
}
.el-aside {
  margin-top: 50px;
  margin-left: 10px;
  overflow: auto;
}
.sideArea {
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.side_bar {
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  justify-content: center;
  align-content: flex-start;
  border-right: 2px solid #525252a2;
  background-color: #111111;
  width: 100%;
  height: calc(80vh - 30px);
}
.light-theme .side_bar {
  background-color: #e7dbdb;
  color: #000000;
  border-right: 2px solid #756565a2;
}

.side_top {
  width: 100%;
  height: calc(10vh + 15px);
  background-image: linear-gradient(to top, #111111, #000000);
}

.side_buttom {
  width: 100%;
  height: calc(10vh + 15px);
  background-image: linear-gradient(to bottom, #111111, #000000);
}

.light-theme .side_top {
  background-image: linear-gradient(to top, #e7dbdb, #f0e8e8);
}
.light-theme .side_buttom {
  background-image: linear-gradient(to bottom, #e7dbdb, #f0e8e8);
}

.side_item {
  width: 50%;
  height: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 25px;
  border-bottom: 1px solid #70707080;
  padding-left: 25px;
}

.light-theme .side_item {
  border-bottom: 1px solid #63505080;
}

.side_item:hover {
  background-color: #2f2f2f;
  border-bottom: 1px solid #111111;
}

.light-theme .side_item:hover {
  background-color: #c39f9f;
  border-bottom: 1px solid #e7dbdb;
}
</style>
