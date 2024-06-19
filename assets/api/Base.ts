import { getToken } from "../utils/cookies"

export async function post(data: any, url: string) {
    return await request(url, 'POST', data)
}

export async function get(url: string) {
    return await request(url)
}

export async function put(data: any, url: string) {
    return await request(url, 'PUT', data)
}

export async function del(url: string) {
    return await request(url, 'DELETE')
}


const request = async (url: string, act: any = 'GET', data: any = {}) => {
    url = url[0] === '/' ? url : '/' + url
    return await $fetch(`/api/${url}`, requestBody(act, data))
}

const requestBody = (act: any, data: any) => {
    const body: any = {
        headers: { Authorization: getToken() ?? "" },
        method: act,
    }
    if (act == 'POST' || act == 'PUT')
        body.body = JSON.stringify(data)
    return body
}