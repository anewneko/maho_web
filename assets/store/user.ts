import type { UserData } from '../type/UserData';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { get, post } from '../api/Base';
import { getToken, setToken } from '../utils/cookies';

export const useUserStore = defineStore("user", () => {
    // save user data and define actions the user can perform

    const userData = ref<any>({})
    
    const accessToken = ref<string>(getToken() ?? '');

    const getInfo = () => get('/member/info').then(res => {
        console.log(res);
        userData.value = res;
    }).catch(err => {
        console.log(err);
    });

    const logout = () => { };


    return {
        userData,
        accessToken,
        getInfo,
        logout
    };

});
