<template>
  <div class="container_sidebar">
    <div class="sideArea">
      <div class="side_top"></div>
      <div class="side_bar">
        <SideBarElement>1232</SideBarElement>
        <SideBarElement>121233</SideBarElement>
        <SideBarElement>123</SideBarElement>
        <SideBarElement>1223</SideBarElement>
        <SideBarElement>123</SideBarElement>
        <SideBarElement>12133</SideBarElement>
      </div>
      <div class="side_buttom"></div>
    </div>
    <slot> </slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="sass">
.container_sidebar
  margin-top: 50px
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  height: calc(100vh - 50px)
  width: 100%
  background-color: #010101

  .sideArea
    width: 18%
    height: 100%
    display: flex
    flex-direction: column
    .side_top
      width: 100%
      height: calc(10vh + 15px)
      background-image: linear-gradient(to top, #111111, #000000)

    .side_bar
      display: flex
      flex-wrap: wrap
      color: #fff
      justify-content: center
      align-content: flex-start
      border-right: 2px solid #525252a2
      background-color: #111111
      width: 100%
      height: calc(80vh - 30px)

    .side_buttom
      width: 100%
      height: calc(10vh + 15px)
      background-image: linear-gradient(to bottom, #111111, #000000)



.light-theme
  .container_sidebar
    background-color: #f0e8e8
    .sideArea
      .side_top
        background-image: linear-gradient(to top, #e7dbdb, #f0e8e8)
      .side_bar
        background-color: #e7dbdb
        color: #000000
        border-right: 2px solid #756565a2
      .side_buttom
        background-image: linear-gradient(to bottom, #e7dbdb, #f0e8e8)
</style>
