import { sl } from "element-plus/es/locale/index.mjs"

export async function OpenLoading(callback?:Function , text?:string){

    return new Promise(async (resolve,reject)=>{
        const loading = ElLoading.service({
            lock: true,
            text: text ?? 'Loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
        try{
            callback && resolve(await callback())
        }catch(e){
            reject(e)
        }finally{
            loading.close()
        }
    })
}


function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}