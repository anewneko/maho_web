<template>
    <div class="content-container">
        <div class="stat-info">
            <div class="hyper-stat">
                <h4>Hyper Stat</h4>
                <HyperStatEl v-model="count.str" :label="'STR'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.dex" :label="'DEX'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.int" :label="'INT'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.luk" :label="'LUK'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.hp" :label="'HP'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.mp" :label="'MP'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.df" :label="'DF/TP/PP/靈力'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.cp" :label="'爆擊機率'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.cd" :label="'爆擊傷害'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.idf" :label="'無視防禦率'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.dmg" :label="'傷害'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.bd" :label="'BOSS傷害'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.nd" :label="'一般傷害'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.ar" :label="'狀態異常耐性'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.att" :label="'攻擊力'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.exp" :label="'獲得經驗值'" :disabled="lockHyperStat"/>
                <HyperStatEl v-model="count.arc" :label="'神秘力量'" :disabled="lockHyperStat"/>
                <div class="btn-area">
                    <el-button type="danger" class="btn" :disabled="lockHyperStat" @click="ResetHyperStat">Reset</el-button>
                    <el-button type="primary" class="btn" @click="LockHyperStat" >Lock</el-button>
                </div>
            </div>
            <div class="main-item">
                <h4>Item</h4>
                <div class="building-block">
                    <div class="totem">
                        <h5>Totem</h5>
                        <div class="item-box">圖騰</div>
                        <div class="item-box">圖騰</div>
                        <div class="item-box">圖騰</div>
                    </div>
                    <div class="main">
                        <h5>Main</h5>
                        <div class="main-container">
                            <div>
                                <div class="item-box">戒指</div>
                                <div class="blank-box"></div>
                                <div class="item-box">帽子</div>
                                <div class="blank-box"></div>
                                <div class="item-box">能源</div>
                            </div>
                            <div>
                                <div class="item-box">戒指</div>
                                <div class="item-box">墜飾</div>
                                <div class="item-box">臉飾</div>
                                <div class="blank-box"></div>
                                <div class="item-box">胸章</div>
                            </div>
                            <div>
                                <div class="item-box">戒指</div>
                                <div class="item-box">墜飾</div>
                                <div class="item-box">眼飾</div>
                                <div class="item-box">耳飾</div>
                                <div class="item-box">勳章</div>
                            </div>
                            <div>
                                <div class="item-box">戒指</div>
                                <div class="item-box">武器</div>
                                <div class="item-box">衣服</div>
                                <div class="item-box">肩飾</div>
                                <div class="item-box">副手</div>
                            </div>
                            <div>
                                <div class="item-box">口袋</div>
                                <div class="item-box">腰帶</div>
                                <div class="item-box">褲子</div>
                                <div class="item-box">手套</div>
                                <div class="item-box">披風</div>
                            </div>
                            <div>
                                <div class="blank-box"></div>
                                <div class="blank-box"></div>
                                <div class="item-box">鞋子</div>
                                <div class="blank-box"></div>
                                <div class="item-box">心臟</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="extra-item">
                <div class="pet-item">
                    <h5>Pet</h5>
                    <div class="item-box">寵物<br>飾品</div>
                    <div class="item-box">寵物<br>飾品</div>
                    <div class="item-box">寵物<br>飾品</div>
                </div>
                <div class="arc">
                    <h5>ARC</h5>
                    <div>
                        <ArcAutEl :type="'arc'" />
                        <ArcAutEl :type="'arc'" />
                        <ArcAutEl :type="'arc'" />
                    </div>
                    <div>
                        <ArcAutEl :type="'arc'" />
                        <ArcAutEl :type="'arc'" />
                        <ArcAutEl :type="'arc'" />
                    </div>
                </div>
                <div class="aut">
                    <h5>AUT</h5>
                    <div>
                        <ArcAutEl :type="'aut'" />
                        <ArcAutEl :type="'aut'" />
                        <ArcAutEl :type="'aut'" />
                    </div>
                    <div>
                        <ArcAutEl :type="'aut'" />
                        <ArcAutEl :type="'aut'" />
                        <ArcAutEl :type="'aut'" />
                    </div>
                </div>
            </div>
        </div>
        <div @click="Ping">Ping</div>
    </div>
</template>

<script lang="ts" setup>

// Class

class HyperStat{
    str: number
    dex: number
    int: number
    luk: number
    hp: number
    mp: number
    df: number
    cp: number
    cd: number
    idf: number
    dmg: number
    bd: number
    nd: number
    ar: number
    att: number
    exp: number
    arc: number
    constructor(data?:any){
        this.str = data?.str ?? 0
        this.dex = data?.dex ?? 0
        this.int = data?.int ?? 0
        this.luk = data?.luk ?? 0
        this.hp = data?.hp ?? 0
        this.mp = data?.mp ?? 0
        this.df = data?.df ?? 0
        this.cp = data?.cp ?? 0
        this.cd = data?.cd ?? 0
        this.idf = data?.idf ?? 0
        this.dmg = data?.dmg ?? 0
        this.bd = data?.bd ?? 0
        this.nd = data?.nd ?? 0
        this.ar = data?.ar ?? 0
        this.att = data?.att ?? 0
        this.exp = data?.exp ?? 0
        this.arc = data?.arc ?? 0
    }

    Reset(){
        this.str = 0
        this.dex = 0
        this.int = 0
        this.luk = 0
        this.hp = 0
        this.mp = 0
        this.df = 0
        this.cp = 0
        this.cd = 0
        this.idf = 0
        this.dmg = 0
        this.bd = 0
        this.nd = 0
        this.ar = 0
        this.att = 0
        this.exp = 0
        this.arc = 0
    }

}

import { get } from '~/assets/api/Base';
import { useUserStore } from '~/assets/store/user';
console.log(useUserStore().accessToken);


const Ping = () => {
    get('/ping').then(res => {
        console.log(res)
    })
}
// Variables

const count = ref(new HyperStat())
const lockHyperStat = ref<boolean>(false)


// Events

// Functions

const ResetHyperStat = () => count.value.Reset()

const LockHyperStat = () => lockHyperStat.value = !lockHyperStat.value

</script>

<style scoped lang="sass">

.content-container
    $stat-info-height: calc(100vh - 126px)
    .stat-info
        font-size: 2em
        font-weight: bold
        text-align: center
        width: 100%
        min-height: $stat-info-height
        display: flex
        justify-content: space-between
        background-color: #010101
        border-radius: 10px
        box-shadow: 0 0 10px 5px #000000
        background-image: linear-gradient(to top, #111111, #000000)
        border: 2px solid #525252a2
        border-radius: 10px
        h4
            font-size: .8em
            margin: .3em
        h5
            font-size: .6em
            margin: .3em
        .item-box
            display: inline-block
            width: 54px
            height: 54px
            border: 2px solid #525252a2
            border-radius: 5px
            margin: 5px
            font-size: .6em
            font-weight: 200
            text-align: left
            color: #8f8f8f
            user-select: none
            box-sizing: border-box
            padding-left: 3px
            &:hover
                cursor: pointer
        .blank-box
            display: inline-block
            width: 54px
            height: 54px
            margin: 5px
        .hyper-stat
            width: 25%
            display: flex
            flex-direction: column
            align-items: center
            margin-bottom: 1em
            .btn-area
                margin-bottom: .5   em
                .btn
                    font-size: .5em
                    width: 50px
                    margin-top: 1em 
                    height: 1.2em
                    border-radius: 5px
        .main-item
            border: 1px solid #525252a2
            width: 50%
            min-height: $stat-info-height
            .building-block
                display: flex
                justify-content: space-between
                .totem
                    width: 15%
                    border: 1px solid #525252a2
                    display: flex
                    flex-direction: column
                    align-items: center
                .main
                    width: 85%
                    border: 1px solid #525252a2
                    .main-container
                        display: flex
                        flex-direction: column
                        align-items: center
                        margin-bottom: 1em
                        div
                            display: flex

        .extra-item
            width: 25%
            min-height: calc($stat-info-height)
            display: flex
            flex-direction: column
            .pet-item
                display: inline-block
                min-height: calc($stat-info-height * .20)
                border: 1px solid #525252a2
            .arc
                display: inline-block
                min-height: calc($stat-info-height * .4)
                border: 1px solid #525252a2
            .aut
                display: inline-block
                min-height: calc($stat-info-height * .4)
                border: 1px solid #525252a2



.light-theme 
    .content-container
        .stat-info
            background-image: linear-gradient(to top, #f0f0f0, #e0e0e0)
            border-radius: 10px
            box-shadow: 0 0 10px 5px #FFFFFF
            .item-box
                border: 2px solid #52525260

</style>