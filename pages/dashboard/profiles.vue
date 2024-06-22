<template>
    <div class="profiles-container">
        <ElForm >
            <div class="form-title">
                <h1>個人資料</h1>
            </div>
            <div class="form-content">
                <div class="form-left">
                    <el-form-item label="暱稱">
                        <el-input v-model="formdata.username"></el-input>
                    </el-form-item>
                    <el-form-item label="Email">
                        <el-input v-model="formdata.email"></el-input>
                    </el-form-item>
                </div>
                <div class="form-right">
                    <el-form-item>
                        <div class="avatar-content">
                            <el-avatar :size="120" :src="formdata.avatar"/>
                            <el-button>Change</el-button>
                        </div>
                    </el-form-item>
                </div>
            </div>
            <div class="from-footer">
                <el-button type="danger">Cancel</el-button>
                <el-button type="success">Save</el-button>
            </div>
        </ElForm>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '~/assets/store/user';
import UserData from '~/assets/dataObject/userData';

const userStore = useUserStore()
const formdata = reactive(new UserData())


onMounted(async() => {
    formdata.update(await userStore.getInfo())
})

</script>
<style scoped lang="sass">

    .profiles-container
        padding: 1em
        width: calc( 100% - 2em )
        .el-form
            width: 100%
            display: flex
            flex-wrap: wrap
            min-height: calc(100vh - 120px - 2em)
            .form-title
                display: flex
                justify-content: center
                width: 100%
            .form-content
                display: flex
                width: 100%
                min-height: calc(100vh - 320px - 2em)
                justify-content: space-around
                .form-left
                    display: inline-block
                    padding: 1em
                    width: calc( 70% - 250px - 2em )
                    .el-form-item
                        margin: 1em
                        :deep(.el-form-item__label)
                            width: 100px
                .form-right
                    display: inline-block
                    width: 200px
                    .avatar-content
                        display: flex
                        flex-direction: column
                        flex-wrap: wrap
                        align-items: center
                        .el-avatar
                            margin-bottom: 1em
                        .el-button
                            width: 90px
            .from-footer
                display: flex
                justify-content: center
                width: 100%
                margin-top: 1em
                .el-button
                    margin: 0em 1em
                    width: 100px


</style>