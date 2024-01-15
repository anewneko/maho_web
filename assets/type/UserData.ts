export type UserData = {
    id: string
    nick: string
    account: string
    discordId: string
    email: string
    status: string
    createTime: string
    role: {
        id: string
        name: string
        functions: Array<{
            id: string
            value: string
        }>
    }
}