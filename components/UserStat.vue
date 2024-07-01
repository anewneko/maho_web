<template>
    <div class="user-stat-container">
        <el-button v-if="!isLogin"  @click="LoginDiaHandle" icon="StarFilled" :round="true">
            ログイン
        </el-button>
        <div v-else>
            <el-popover
                placement="bottom"
                :width="200"
                trigger="click"
            >
            <template #reference>
                <div class="login-info">
                    <el-avatar :size="35" :src="userInfo?.avatar" />
                    <span class="user-name">{{ userInfo?.username }}</span>
                </div>
            </template>
            <template #default>
                <div class="user-nav-val">
                    <el-button @click="Logout" icon="StarFilled" :round="true">
                        ログアウト
                    </el-button>
                </div>
            </template>
        </el-popover>
        </div>
        <LoginDailog ref="loginDailog" @login="LoginHandler" />
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '~/assets/store/user';
import { get } from "~/assets/api/Base";
import { getToken, setToken } from "~/assets/utils/cookies";
import { OpenLoading } from '~/assets/utils/loading';
// variable
const isLogin = ref<boolean>(false);
const userInfo = ref<any>(null);
const userStore = useUserStore();
const route = useRoute()
const runTimeConfig = useRuntimeConfig()

const loginDailog = ref<any>();

watchEffect(()=> (isLogin.value = userInfo.value !== null))

// Event
const LoginDiaHandle = () => {
    loginDailog.value.show();

//   window.location.href = runTimeConfig.public.runType === 'dev' ? 
//     runTimeConfig.public.discordLogin4dev : runTimeConfig.public.discordLogin4prod
};

const Logout = async() => userStore.logout(UpdateUserInfo)

const LoginHandler = (data: any) => {
  if (!data) {
    isLogin.value = data;
    loginDailog.value.hide();
  } else return;
};


// Function
const UpdateUserInfo = async() => {
    userInfo.value = await userStore.getInfo()
    useRouter().push({ path: '/' })
}

const UpdateByJwt = async() => getToken() && await UpdateUserInfo()

const UpdateById = async(id: string) => (id && await get(`/member/jwt/${id}`).then((res:any) => setToken(res.data))
                                                                            .then( async()=> await UpdateUserInfo()))


// LifeCycle
onMounted(async() => await OpenLoading( async () => await UpdateByJwt() || await UpdateById(route.query.id as string)) );
</script>
<style scoped lang="sass">

.user-stat-container
    margin-left: 1em
    .login-info
        min-width: 120px
        display: flex
        align-items: center
        justify-content: space-between
        font-size: 1.2em
        font-weight: 900
        margin-right: 1em
        padding: 0.2em
        border-radius: 5px
        &:hover
            cursor: pointer
            background-color: #414447
        .user-name
            margin: 0em 1em
        .el-avatar
            border-radius: 50%
            border: 1px solid #ffffff


.light-theme 
    .login-info
        &:hover
            background-color: #fff
        .el-avatar
            border: 1px solid #000

</style>