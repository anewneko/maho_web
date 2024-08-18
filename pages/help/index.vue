<template>
    <div>index</div>
</template>
<script lang="ts" setup>
const router = useRouter()
onMounted(() => {
    router.push('/help/homepage')
})

</script>