import Cookies from 'js-cookie'

function tokenCookie() {
    return 'Maho_token'
}

export function getToken() {
    return Cookies.get(tokenCookie())

}

export function setToken(token: string | null) {
    Cookies.set(tokenCookie(), token ?? "")
}

export function removeToken() {
    Cookies.remove(tokenCookie())
} 
