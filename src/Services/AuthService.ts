import { AxiosResponse } from 'axios'
import { AuthResponse, ResetResponse } from '../Types/ResponseTypes/AuthResponse'
import $api from '../Api'

export default class AuthService {

  static async login (email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await $api.post<AuthResponse>('/login', {email, password})
  }

  static async registration (name: string, lastname: string, phone: string, email: string, password: string) {
    return $api.post('/registration', {name, lastname, phone, email, password})
  }

  static async logout (): Promise<void> {
    return await $api.post('/logout')
  }

  static async check (): Promise<AxiosResponse<AuthResponse>> {
    return await $api.get<AuthResponse>('/refresh')
  }

  static async resetSendMail (email: string): Promise<AxiosResponse<AuthResponse>> {
    return await $api.post('/reset', { email })
  }

  static async resetSend (user_id: Number, password: string): Promise<AxiosResponse<ResetResponse>> {
    return await $api.post<ResetResponse>('/reset/password', { user_id, password })
  }
}