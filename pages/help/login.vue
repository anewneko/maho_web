<template>
    <div>
        <h1>Login</h1>
        <h2 id="getspeedkey" @click="ToHash('getspeedkey')">how to get speed key ?</h2>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
    </div>
</template>
<script setup lang="ts">
const ToHash = inject<Function>('ToHash') ?? (() => {})
</script>

<style scoped lang="sass">
#getspeedkey
    display: flex
    position: relative
    cursor: pointer

#getspeedkey::before
    content: '#'
    width: 20px
    font-size: 20px
    opacity: 0 
    color: var(--el-color-primary)
#getspeedkey:hover::before
    opacity: 1
</style>