import { UpdateUserDto, UserInterface } from '../Types/UserTypes/UserTypes'
import { makeAutoObservable } from 'mobx'
import { RESPONSE_STATUSES } from '../Utils/error_statuses'
import AuthService from '../Services/AuthService'
import UserService from '../Services/UserService'

export default class UserStore {
  user = {} as UserInterface
  isAuth = false
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: UserInterface) {
    this.user = user
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  setUserPhoto(photo_url: string) {
    this.user.image_url = photo_url
  }

  async updateUserData(userId: number, userData: UpdateUserDto) {
    try {
      const resp = await UserService.updateUserData(userId, userData)
      return resp.data
    } catch (e) {
      return { status: RESPONSE_STATUSES.ERROR, message: e.response?.data?.message }
    }
  }

  async setUserData(userData: UpdateUserDto) {
    this.setUser({...this.user, ...userData})
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      return { status: RESPONSE_STATUSES.SUCCESS }
    } catch (e) {
      return { status: RESPONSE_STATUSES.ERROR, message: e.response?.data?.message }
    }
  }

  async changePassword(userId: number, oldPassword: string, newPassword: string) {
    try {
      await UserService.changeUserPassword(userId, oldPassword, newPassword)
      return { status: RESPONSE_STATUSES.SUCCESS }
    } catch (e) {
      return { status: RESPONSE_STATUSES.ERROR, message: e.response?.data?.message }
    }
  }

  async registration(name: string, lastname: string, phone: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(name, lastname, phone, email, password)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      return { status: RESPONSE_STATUSES.SUCCESS, activate_link: response.data.activate_link }
    } catch (e) {
      return { status: RESPONSE_STATUSES.ERROR, message: e.response?.data?.message }
    }
  }

  async resetSendMail(email: string) {
    try {
      await AuthService.resetSendMail(email)
      return { status: RESPONSE_STATUSES.SUCCESS }
    } catch (e) {
      return { status: RESPONSE_STATUSES.ERROR, message: e.response?.data?.message }
    }
  }

  async logout() {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({} as UserInterface)
    } catch (e) {
      console.log(e.response?.data?.message)
    } 
  }

  async checkAuth() {
    this.setLoading(true)
    try {
      const response = await AuthService.check()
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e) {
      console.log(e.response?.data?.message)
    } finally {
      this.setLoading(false)
    }
  }
}