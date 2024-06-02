<template>
    <div class="hyper-stat-el-container">
        <div class="hyper-stat-label">
            {{ props.label }}
        </div>
        <el-input-number v-model="count" @change="CountChange" :disabled="props.disabled" size="small" />
    </div>
</template>

<script setup>

const props = defineProps({
    modelValue:  Number,
    disabled:  Boolean,
    label:  String
})
const count = ref(0)
const emit = defineEmits(['update:modelValue'])

watchEffect(() => {
    count.value = props.modelValue;
});

const CountChange = (val) => {
    val < 0 && (val = 0)
    val > 15 && (val = 15)
    count.value = val
    emit('update:modelValue', val)
}

</script>

<style lang="sass" scoped>

.hyper-stat-el-container
    font-size: 0.7em
    font-weight: 100
    width: 100%
    margin: 0.2em 0 0.2em 0
    padding-left: 15%
    display: flex
    justify-content: flex-start
    .hyper-stat-label
        display: inline-block
        min-width: 100px
        text-align: right
        padding-right: 1em
        font-size: .7em
    .el-input--small
        --el-input-height:18px
        .el-input__inner
            width: 3px
</style>