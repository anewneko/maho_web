<template>
    <el-container class="contact-us-container">
        <el-card>
            <div class="contactUs">
                <div class="contactUs_content">
                    <div class="contactUs_title">聯絡我們</div>
                    <div class="contactUs_form">
                        <el-form ref="form" label-width="80px">
                            <el-form-item label="您的姓名" prop="name">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item label="電子信箱" prop="email">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item label="相關建議" prop="content">
                                <el-input type="textarea" rows="10" resize="none"  ></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" >送信</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </el-card>
    </el-container>
</template>
<script setup lang="ts">

onMounted(() => {
    const alwayShowNav = inject<Ref<boolean>>("alwayShowNav");
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