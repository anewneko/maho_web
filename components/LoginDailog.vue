<template>
  <div v-if="isClient" class="login-dialog-container">
    <ElDialog v-model="visible" width="350px" :show-close="false">
      <template #header>
        <h1>ログイン</h1>
        <div class="logo">
          <el-avatar :size="250" src="/mahotaki.png"/>
        </div>
      </template>
      <template #default>
        <div class="loginDailog">
          <SlidePage :page-dp="pageDp" @change="UpdatePageDp">
            <SlidePageElement :page="0" :anime="anime">
              <div class="loginDailog_content">
              <ThirdPartyLoginBtn @click="UseSpeedKey" >
                <template #icon>
                  <el-icon><Present /></el-icon>
                </template>
                Login by your speed key
              </ThirdPartyLoginBtn>
              <ThirdPartyLoginBtn @click="DisocrdLoginHandler">
                <template #icon>
                  <DiscordIcon></DiscordIcon>
                </template>
                Login by your discord account
              </ThirdPartyLoginBtn>
            </div>
            </SlidePageElement>
            <SlidePageElement :page="1" :anime="anime">
              <div class="loginDailog_content">
                <ElInput
                    v-model="speedKey"
                    :show-password="true"
                    placeholder="Your Speed Key"
                    :validate-event="true"
                    @keyup.enter="Commit"
                  />
                  <div class="speed-key-btn-area">
                    <el-button type="danger" @click="Cancel" plain>Cancel</el-button>
                    <el-button  type="primary" @click="Commit" plain>Commit</el-button>
                  </div>
              </div>
            </SlidePageElement>
          </SlidePage>
        </div>
      </template>
    </ElDialog>
  </div>
</template>

<style scoped lang="sass">

.login-dialog-container
  h1
    text-align: center
    margin: 0
    font-size: 3em
    color: #e8e8e8
  .logo
    display: flex
    justify-content: center
    align-items: center
    margin-top: 35px
    .el-avatar
      margin-bottom: 1em
      border: 1px solid #777777
      box-shadow: 0px 0px 10px 0px #fff
  .loginDailog
    .loginDailog_content
      display: flex
      flex-direction: column
      justify-content: space-between
      width: calc(100% - 40px)
      margin-top: 60px
      margin-bottom: 20px
      padding: 0px 20px
      .speed-key-btn-area
        display: flex
        justify-content: space-around
        margin-top: 20px
        padding: 0px 20px
        .el-button
          width: 80px
          height: 35px
          font-size: 1em
          border-radius: 5px

.light-theme
  .login-dialog-container
    h1
      color: #777777
    .logo
      .el-avatar
        box-shadow: 0px 0px 10px 0px #777777
</style>

<script lang="ts" setup>

// Varibles

const visible = ref(false);
const isClient = ref(false);
const runTimeConfig = useRuntimeConfig();
const pageDp = ref<number>(0)
const anime = ref<'slide' |'inverse'>("slide")
provide('pageDp', pageDp)

// Watch
watch(
  () => pageDp.value,
  (newVal, oldVal) => {
    if (newVal > oldVal) 
      anime.value = "inverse";
    else 
      anime.value = "slide";
  }
)

// Data
const speedKey = ref('')

// Element


// LifeCycle

onMounted(() => {
  isClient.value = true;
});

// Events

const emit = defineEmits(["login"]);

const Cancel = () => {
  pageDp.value = 0;
};

const Commit = async() => {
  console.log('call api')
};

const UseSpeedKey = () => {
  speedKey.value = '';
  pageDp.value = 1;
};

const DisocrdLoginHandler = () => {
    window.location.href = runTimeConfig.public.runType === 'dev' ? 
      runTimeConfig.public.discordLogin4dev : runTimeConfig.public.discordLogin4prod
};

// Functions

const show = () => {
  pageDp.value = 0;
  visible.value = true;
};

const hide = () => {
  visible.value = false;
};

const imgHandler = () => {
  return localStorage.getItem("isdark") === "true"
    ? "/DiscordLogo.png"
    : "/blueLogo.png";
};

const UpdatePageDp = (newVal: number, oldVal: number) => {
  // provide('pageDp', newVal)
};

defineExpose({
  show,
  hide,
});
</script>
