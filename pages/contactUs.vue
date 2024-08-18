<template>
    <el-container class="contact-us-container">
        <el-card>
            <div class="contactUs">
                <div class="contactUs_content">
                    <div class="contactUs_title">聯絡我們</div>
                    <div class="contactUs_form">
                        <el-form :model="content" ref="form" label-width="80px">
                            <el-form-item label="您的姓名" :rules="common" prop="name">
                                <el-input v-model="content.name" />
                            </el-form-item>
                            <el-form-item label="電子信箱" :rules="[common, email]" prop="email">
                                <el-input v-model="content.email" />
                            </el-form-item>
                            <el-form-item label="相關建議" :rules="common" prop="content">
                                <el-input v-model="content.content" type="textarea" rows="10" resize="none" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="Send">送信</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </el-card>
    </el-container>
</template>
<script setup lang="ts">
import { post } from '~/assets/api/Base';
import type { FormRules } from 'element-plus'

const form = ref<any>();
const content = reactive({
    name: "",
    email: "",
    content: ""
});

const common = { required: true, message: '請填寫此欄位'}
const email = { type: 'email', message: '請填寫正確e-mail格式', trigger: 'blur'} as FormRules 

const Send = () => {
    form.value.validate().then(() => 
        post(content ,"/contactUs").then(() => {
            ElMessage.success("感謝您的建議，我們會盡快回覆您")
            content.name = ""
            content.email = ""
            content.content = ""
        }).catch(() => ElMessage.error("發生錯誤，請稍後再試")))
}

onMounted(() => {
    const alwayShowNav = inject<Ref<boolean>>("alwayShowNav")
    if (alwayShowNav) {
        alwayShowNav.value = true;
    }
});

</script>
<style scoped lang="sass">
.contact-us-container
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    .el-card
        width: 60%
        .contactUs
            display: flex
            justify-content: center
            align-items: center
            height: 100%
            width: 100%
            border-radius: 10px
            .contactUs_content
                width: 80%
                .contactUs_title
                    font-size: 2em
                    margin-bottom: 20px
                .contactUs_form
                    .el-form
                        width: 100%
                        .el-form-item
                            margin-bottom: 20px
                        .el-button
                            width: 100%
</style>