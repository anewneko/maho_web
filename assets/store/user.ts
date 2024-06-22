import type { UserData } from '../type/UserData';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { get, post } from '../api/Base';
import { getToken, removeToken, setToken } from '../utils/cookies';

export const useUserStore = defineStore("user", () => {
    // save user data and define actions the user can perform

    const userData = ref<any>()
    
    const accessToken = ref<string>(getToken() ?? '');

    const getInfo = async () =>{
        userData.value || 
            await get('/member/info').then((res: any) => {
                userData.value = res?.data;
            }).catch(err => {
                console.log(err);
                userData.value = null;
            });

        return userData.value;
    }

    const logout = (callback?:Function) => {
        removeToken();
        userData.value = null;
        callback && callback();
    };


    return {
        userData,
        accessToken,
        getInfo,
        logout
    };

});
