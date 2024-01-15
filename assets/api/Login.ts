import { post, setCookie } from "./Base"
import type { LoginImf } from "../type/LoginImf"

export async function login(data: LoginImf) {
    const token = await post(data, '/login');
    if (token) {
        setCookie('token', token, 123);
    }
    return !!token;
}
