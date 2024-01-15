import type { UserData } from '../type/UserData';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore("user", () => {
    // save user data and define actions the user can perform

    const userData = ref<UserData>();
    const accessToken = ref<string>();

    const login = () => { };

    const logout = () => { };


    return {
        userData,
        accessToken,
        login,
        logout
    };

});
