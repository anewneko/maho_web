<script setup>
import { ElInput, ElForm, ElFormItem, ElButton } from "element-plus";
import { ref } from "vue";

const firstKey = ref("");
const secondKey = ref("");
</script>

<style scoped>
.el-card {
  display: flex;
  width: 450px;
  height: 600px;
  border: 1px solid #cccccc7a;
  background-color: #434343f0;
  border-radius: 15px;
  box-shadow: 0 0 10px #cdcccc7a;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.bg-element {
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("~/assets/image/LoginBg.jpg");
  background-size: cover;
  opacity: 0.4;
  z-index: -1;
}

h1 {
  font-size: 80px;
  color: #e7d7d3c9;
  margin: 30px;
  text-shadow: #60859cdc 0 0 10px;
  user-select: none;
}

.discordLogo {
  width: calc(100% - 60px);
  height: 120px;
  overflow: hidden;
  object-fit: contain;
  margin: 30px;
}

.inputBox {
  width: 80%;
}

span {
  display: inline-block;
  width: 80%;
  font-size: 1.2em;
  text-align: left;
  margin-top: 15px;
}

.el-input {
  display: inline-block;
  width: 100%;
}

.el-form-item {
  display: inline-block;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin: 10px 0px;
}

.buttonArea {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}

.el-button {
  width: 70%;
}
</style>
<template>
  <div class="container">
    <div class="bg-element"></div>
    <h1>マホロボのウェブ</h1>
    <div class="el-card">
      <img class="discordLogo" src="/DiscordLogo.png" />
      <div class="inputBox">
        <el-form :inline="true">
          <el-form-item label="FirstKey" label-width="100%">
            <el-input v-model="firstKey" :show-password="true"></el-input>
          </el-form-item>
          <el-form-item label="SecondKey" label-width="100%">
            <el-input v-model="secondKey" :show-password="true"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="buttonArea">
              <el-button type="primary">ログイン</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
