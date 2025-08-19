import axios from "axios";

export const $api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Accept': 'application/json',
    }
})

// ToDO: !!!! надо потом сделать так чтобы refreshToken был а httpOnly cookie

// перехватчик запросов который к каждому запросу добавляет accessToken из localStorage
$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// перехватчик ответов который в случае невалидного accessToken попытается его обновить 
// и переотправить запрос с обновленным accessToken 
$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = {...error.config}
    originalRequest.__isRetry = true
    if (error.response.status === 401 && error.config && !error.config.__isRetry) {
        try {
            // запрос на обновление токенов
            const refreshToken = localStorage.getItem('refreshToken')
            if (!refreshToken) {
                throw new Error('No refresh token')
            }
            const resp = await $api.post('auth/jwt/refresh/', { 
                refresh: refreshToken 
            })
            localStorage.setItem('accessToken', resp.data.access)
            // переотправляем запрос с обновленным accessToken
            return $api.request(originalRequest)
        } catch (e) {
            console.log('Не авторизован')
        }
    }
    // другая ошибка
    throw error
})
