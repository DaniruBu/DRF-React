import { $api } from '../http'

export default class AuthService {
    static async register(email, password, username) {
        const response = await $api.post('auth/users/', { email, password, username })
        return response
    }

    static async login(username, password) {
        const response = await $api.post('auth/jwt/create/', { username, password })
        localStorage.setItem('accessToken', response.data.access)
        localStorage.setItem('refreshToken', response.data.refresh)
        return response
    }

    static async refresh() {
        const refreshToken = localStorage.getItem('refreshToken')
        if (!refreshToken) {
            throw new Error('No refresh token found')
        }
        const response = await $api.post('auth/jwt/refresh/', { refresh: refreshToken })
        localStorage.setItem('accessToken', response.data.access)
        return response
    }

    static async logout() {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    }

    static async activateAccount(uid, token) {
        const response = await $api.post('auth/users/activation/', { uid, token })
        return response
    }
}