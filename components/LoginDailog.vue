<template>
  <ElDialog v-model="visible">
    <div class="loginDailog">
      <div class="loginDailog_title">Login</div>
      <div class="loginDailog_content">
        <div class="loginDailog_content_item">
          <div class="loginDailog_content_item_title">Username</div>
          <div class="loginDailog_content_item_input">
            <ElInput></ElInput>
          </div>
        </div>
        <div class="loginDailog_content_item">
          <div class="loginDailog_content_item_title">Password</div>
          <div class="loginDailog_content_item_input">
            <ElInput></ElInput>
          </div>
        </div>
      </div>
      <div class="loginDailog_footer">
        <ElButton ref="cancelBtn">Cancel</ElButton>
        <ElButton>OK</ElButton>
      </div>
    </div>
  </ElDialog>
</template>

<style scoped></style>

<script lang="ts" setup>
import { ElDialog, ElInput, ElButton } from "element-plus";
const cancelBtn = ref<InstanceType<typeof ElButton> | null>(null);
const visible = ref(false);
</script>
