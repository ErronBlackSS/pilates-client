import { UserInterface } from '../UserTypes/UserTypes'

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: UserInterface
}

export interface ResetResponse {
  message: string
  user: UserInterface
}