export interface UserInterface {
  email: string
  role: string
  id: number
  isActivated: boolean
  name: string
  phone: string
  lastname: string
  image_url: string
}

export type UpdateUserDto = {
  email: string
  name: string
  phone: string
  lastname: string
}

export interface LoginInterface {
  email: string
  password: string
}

export interface UserState {
  user: UserInterface
  isAuth: boolean
  isLoading: boolean
  error: null | string
}
