<template>
    <el-container class="help-page-layout">
        <el-aside width="300px">
            <el-scrollbar max-height="calc(100vh - 50px)">
                <el-menu>
                    <el-menu-item index="0">
                        <el-icon>
                            <House />
                        </el-icon>
                        <span class="first-layer-span">Home Page</span>
                    </el-menu-item>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <User />
                            </el-icon>
                            <el-link @click="ToUrl('/help/login')">Login</el-link>
                        </template>
                        <el-menu-item index="1-1" @click="ToUrl('/help/login',ToHash,'getspeedkey')" ><el-icon>
                                <Key />
                            </el-icon> how to get speed key</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-main>
            <el-page-header @back="Back">
                <template #content>
                    <el-breadcrumb separator-icon="ArrowRight">
                        <el-breadcrumb-item v-for="(path, index) in layers" :to="GetLink(index + 1)">{{
                            path.charAt(0).toUpperCase() + path.slice(1) }}</el-breadcrumb-item>
                    </el-breadcrumb>
                </template>
            </el-page-header>
            <el-divider border-style="dotted" />
            <div>
                <el-scrollbar ref="scrollbar" max-height="calc(100vh - 170px)">
                    <NuxtPage />
                </el-scrollbar>
            </div>
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
const layers = ref<Array<any>>([])
const route = useRoute()
const router = useRouter()
const scrollbar = ref<any>()


watchEffect(() => {
    layers.value = []
    route.path.split('/').filter(el => el).forEach(layer => layers.value.push(layer))
})
// Event

const Back = () => router.push(GetLink(layers.value.length - 1))

// Function

const GetLink = (num: number) => '/' + layers.value.slice(0, num).join('/')

const ToHash = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
        const scrollbarwrap = scrollbar.value.$el.querySelector('.el-scrollbar__wrap');
        const offsetTop = element.offsetTop;
        scrollbarwrap.scrollTop = offsetTop;
    }
}

const ToUrl = (url: string , callback ?: any , para?: any) => {
    router.push(url)
    setTimeout(() => callback && callback(para), url === route.path ? 0 : 700)
}

onMounted(() => {
    const alwayShowNav = inject<Ref<boolean>>("alwayShowNav");
    if (alwayShowNav) {
        alwayShowNav.value = true;
    }
});
provide('ToHash', ToHash)
provide('ToUrl', ToUrl)

</script>
<style lang="sass" scoped>
.help-page-layout
    margin-top: 50px
    min-height: calc( 100vh - 50px )
    .el-aside
        display: flex
        flex-direction: column
        .el-link
            width: 80%
            font-size: 1.2em
            display: flex
            justify-content: flex-start
            :deep(.el-link__inner)
                display: flex
                padding-left: 10px
        .first-layer-span
            width: 80%
            font-size: 1.2em
            padding-left: 10px
            display: flex
            justify-content: flex-start
        .el-scrollbar
            .el-menu
                height: 100%
                min-height: calc( 100vh - 50px )
                .is-active
                    color: var(--el-menu-text-color)
</style>