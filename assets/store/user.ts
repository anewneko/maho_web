import type { UserData } from '../type/UserData';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { post } from '../api/Base';

export const useUserStore = defineStore("user", () => {
    // save user data and define actions the user can perform

    const userData = ref<UserData>();
    const accessToken = ref<string>();

    const login = (data: any) => post(data, '/login')
        .then(res => {
            setToken(res.data.value?.data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            return true;
        });

    const logout = () => { };


    return {
        userData,
        accessToken,
        login,
        logout
    };

});
