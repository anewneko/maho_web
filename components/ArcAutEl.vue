<template>
    <div class="arc-aut-container">
        <div class="item-box">
            <div class="text">
               LV : {{ count === max ? 'Max' : count}}
            </div>
            <slot />
        </div>
        <div class="up-down-btn">
            <el-button class="up" @mousedown="startAdding" @mouseup="stopAdding" @mouseleave="stopAdding" @click="AddCount" icon="ArrowUp" />
            <el-button class="down" @mousedown="startMinus" @mouseup="stopMinus" @mouseleave="stopMinus" @click="MinusCount" icon="ArrowDown" />
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    type: 'arc' | 'aut'
}>()
const count = ref(0)
const timer = ref()
const max = maxLv()

const MinusCount = () => count.value > 0 &&  count.value--
    
const AddCount = () => count.value < maxLv() && count.value++

const startAdding = () => timer.value = setInterval(AddCount, 100)

const stopAdding = () => {
    clearInterval(timer.value);
    timer.value = null;
}

const startMinus = () => timer.value = setInterval(MinusCount, 100)

const stopMinus = () => {
    clearInterval(timer.value);
    timer.value = null;
}

function maxLv(){
   return props.type == 'arc' ? 20 : 11
}

</script>

<style lang="sass" scoped>
.arc-aut-container
    font-size: .5em
    font-weight: 400
    display: inline-flex
    margin: 10px
    .item-box
        display: flex
        width: 50px
        height: 50px
        border: 2px solid #525252a2
        border-radius: 5px
        margin: 0px
        align-items: flex-end
        .text
            display: inline-block
            width: 100%
            font-size: .8em
            font-weight: 500
            text-align: center
            color: #8f8f8f
            user-select: none
    .up-down-btn
        display: flex
        flex-direction: column
        justify-content: center
        aling-items: center
        width: 10px
        margin: 0px
        .el-button
            font-size: .5em
            font-weight: 500
            width: 15px
            height: calc(50% - 4px)
            padding: 0px
            margin: 0px
        .up
            border-radius: 5px 5px 0px 0px
        .down
            border-radius: 0px 0px 5px 5px


.light-theme
    .arc-aut-container
        .item-box
            border: 2px solid #52525260
</style>
