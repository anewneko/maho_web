import { getToken } from "../utils/cookies"
import type { ApiResponse } from "../type/ApiRespose"
function apiBase() {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.apiBase
}

function header() {
    return {
        Authorization: getToken() ?? "",
    }

}



export function post(data: any, url: string) {
    return request(url, 'POST', data)
}

export function get(url: string) {
    return request(url)
}

export function put(data: any, url: string) {
    return request(url, 'PUT', data)
}

export function del(url: string) {
    return request(url, 'DELETE')
}


const request = (url: string, act: any = 'get', data: any = {}) => {
    url = url[0] === '/' ? url : '/' + url
    return useFetch<ApiResponse<any>>(apiBase() + url, {
        headers: header(),
        method: act,
        body: JSON.stringify(data),
    })
}


export function ping() {
    return get('/ping')
}
