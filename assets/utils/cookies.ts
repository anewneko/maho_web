import Cookies from 'js-cookie'

function tokenCookie() {
    return 'Maho_token'
}

export function getToken() {
    const token = Cookies.get(tokenCookie())
    return token ? `Bearer ${Cookies.get(tokenCookie())}` : ""

}

export function setToken(token: string | null) {
    Cookies.set(tokenCookie(), token ?? "")
}

export function removeToken() {
    Cookies.remove(tokenCookie())
} 
