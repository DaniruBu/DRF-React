import { makeAutoObservable, runInAction } from "mobx"
import AuthService from "../api/AuthService"

class AuthStore {
    isAuth = false;
    isAuthInProgress = false;
    
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setAuthState(isAuth, isInProgress = false) {
        runInAction(() => {
            this.isAuth = isAuth
            this.isAuthInProgress = isInProgress
        })
    }

    async register(email, password, username) {
        this.setAuthState(false, true)
        try {
            await AuthService.register(email, password, username)
            this.setAuthState(false, false)
        } catch (error) {
            console.log(error)
            this.setAuthState(false, false)
            throw error
        }
    }

    async login(username, password) {
        this.setAuthState(false, true)
        try {
            await AuthService.login(username, password)
            this.setAuthState(true, false)
        } catch (error) {
            console.log(error)
            this.setAuthState(false, false)
        }
    }

    async checkAuth() {
        this.setAuthState(false, true)
        try {
            await AuthService.refresh()
            this.setAuthState(true, false)
        } catch (error) {
            console.log(error)
            this.setAuthState(false, false)
        }
    }

    async logout() {
        this.setAuthState(false, true)
        try {
            await AuthService.logout()
            this.setAuthState(false, false)
        } catch (error) {
            console.log(error)
            this.setAuthState(false, false)
        }
    }
}

export default new AuthStore()
