<template>
    <div class="third-party-login-btn-container">
        <ElButton>
            <div class="btn-icon">
                <slot name="icon"/>
            </div>
            <span class="btn-text">
                <slot></slot>
            </span>
        </ElButton>
    </div>
</template>
<script lang='ts' setup></script>
<style lang='sass' scoped>
    .third-party-login-btn-container
        display: flex
        width: 100%
        margin: .5em 0px
        .el-button
            width: 100%
            display: flex
            justify-content: flex-start
            .btn-icon
                display: flex
                justify-content: center
                align-items: center
                width: 25px
                height: 25px
                font-size: 1.5em
            .btn-text
                margin-left: 10px
                color: var(--el-color-info)


</style>