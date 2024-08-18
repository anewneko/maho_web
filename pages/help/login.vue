<template>
    <div>
        <h1>Login</h1>
        <h2 id="getspeedkey" class="hash-tag" @click="ToHash('getspeedkey')">how to get speed key ?</h2>
        <div class="detail-container">
            <h3>Step 1 : 邀請真步機器人加入共同伺服器</h3>
            <div class="show-link">
                <span>
                    邀請連結 : 
                </span>
                <el-input class="inv-input"  v-model="inviteUrl" >
                    <template #suffix>
                        <el-button icon="CopyDocument" @click="Copy(inviteUrl)"  />
                    </template>
                </el-input>
            </div>
            <h3>Step 2 : 輸入指令</h3>
            <el-image style="width: 500px;" src="/getkeycmd.png" fit="cover" :preview-src-list="['/getkeycmd.png']" />
            <h3>Step 3 : 取得Speed Key</h3>
            <el-image style="width: 500px;" src="/spKey.png" fit="cover" :preview-src-list="['/spKey.png']" />
            <h3>Step 4 : 輸入Speed Key</h3>
            <el-image style="width: 500px;" src="/keyin.png" fit="cover" :preview-src-list="['/keyin.png']" />
            <h3>Step 5 : 確認登入訊息</h3>
            <el-image style="width: 500px;" src="/check.png" fit="cover" :preview-src-list="['/check.png']"  />
        </div>
    </div>
</template>
<script setup lang="ts">
const ToHash = inject<Function>('ToHash') ?? (() => {})
const route = useRoute()
const inviteUrl = 'https://discord.com/oauth2/authorize?client_id=652821589070446592&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fserv.mahorobo.org%2FmahoBotServer%2Fredirect%2Fmahoweb%2Fhomepage&integration_type=0&scope=bot'


const Copy = (str : string) => {
    navigator.clipboard.writeText(str)
    ElMessage({
    message: 'Copy !!',
    type: 'success',
  })
}

onMounted(() => {
    route?.query?.id &&
        setTimeout(() => ToHash(route.query.id as string), 700)
})
</script>

<style scoped lang="sass">

h2
    margin-top: 15px
    margin-bottom: 15px
    font-size: 2.3em
    font-weight: 500
    cursor: pointer

.detail-container
    display: flex
    flex-direction: column
    flex-wrap: wrap
    margin-left: 2em
    .show-link
        display: flex
        align-items: center
        margin-top: 1em
        margin-bottom: 1em
        span
            display: flex
            font-size: 1.2em
            margin-right: 1em
            height: 100%
        .inv-input
            width: 300px
            :deep(.el-input__wrapper)
                padding-right: 1px
            .el-button
                border: none
                margin-left: .5em
                height: 100%
.hash-tag
    display: flex
    position: relative
    cursor: pointer

.hash-tag::before
    content: '#'
    width: 23px
    font-size: 1.1em
    opacity: 0 
    color: var(--el-color-primary)
.hash-tag:hover::before
    opacity: 1
</style>