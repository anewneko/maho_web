export default class UserData {
    id: string;
    username: string;
    avatar: string;
    email: string;
    constructor(data?: any) {
        this.id = data?.id ?? '';
        this.username = data?.username ?? '';
        this.avatar = data?.avatar ?? '';
        this.email = data?.email ?? '';
    }

    update(data: any) {
        this.id = data?.id ?? '';
        this.username = data?.username ?? '';
        this.avatar = data?.avatar ?? '';
        this.email = data?.email ?? '';
    }

    reset() {
        return this.update({});
    }
}
