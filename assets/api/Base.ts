function apiBase() {
    const runtimeConfig = useRuntimeConfig()
    return runtimeConfig.public.apiBase
}



export function post(data: any, url: string) {
    console.log(apiBase());

    url = url[0] === '/' ? url : '/' + url
    return useFetch(apiBase() + url, {
        method: 'POST',
        body: JSON.stringify(data),
    })
}

export function get(url: string) {
    url = url[0] === '/' ? url : '/' + url
    return useFetch(apiBase() + url, {
        method: 'GET',
    })
}

export function put(data: any, url: string) {
    url = url[0] === '/' ? url : '/' + url
    return useFetch(apiBase() + url, {
        method: 'PUT',
        body: JSON.stringify(data),
    })
}

export function del(url: string) {
    url = url[0] === '/' ? url : '/' + url
    return useFetch(apiBase() + url, {
        method: 'DELETE',
    })
}

export function setCookie(name: string, value: any, expiresInMinutes: number) {
    let expires = "";
    if (expiresInMinutes) {
        const date = new Date();
        date.setTime(date.getTime() + (expiresInMinutes * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}