import $api from '../Api'
import { AxiosResponse } from 'axios'
import { UpdateUserDto, UserInterface } from '../Types/UserTypes/UserTypes'

export default class UserService {
  static async fetchUsers (): Promise<AxiosResponse<UserInterface[]>> {
    return $api.get<UserInterface[]>('/users')
  }

  static async fetchUserByResetToken (token: string): Promise<AxiosResponse<UserInterface>> {
    return $api.get<UserInterface>(`/user/reset/${token}`)
  }

  static async getTrainers (): Promise<AxiosResponse<UserInterface[]>> {
    return $api.get<UserInterface[]>('/users/trainers')
  }

  static async saveUserPhoto (photo: FormData, id: number) {
    return $api.post('/users/photo?id=' + id, photo)
  }

  static async updateUserData(userId: number, userData: UpdateUserDto) {
    return await $api.patch('/users?id=' + userId, userData)
  }

  static async setCoach (userId: number) {
    return $api.patch('/users/set/coach', { id: userId })
  }

  static async deleteCoach (userId: number) {
    return $api.patch('/users/set/user', {id: userId})
  }

  static async getTrainerInfo (trainerId: number) {
    return await $api.get('/users/trainer/info?id=' + trainerId)
  }

  static async createTrainerInfo(
    trainerId: number,
    edication: string,
    certificates: string,
    achievements: string,
    experience: string,
    directions: string
  ) {
    return $api.post('/users/trainer/info?id=' + trainerId, {
      edication: edication,
      certificates: certificates,
      achievements: achievements,
      experience: experience,
      directions: directions
    })
  }

  static async updateTrainerInfo(
    trainerId: number,
    edication: string,
    certificates: string,
    achievements: string,
    experience: string,
    directions: string
  ) {
    return $api.patch('/users/trainer/info?id=' + trainerId, {
      edication: edication,
      certificates: certificates,
      achievements: achievements,
      experience: experience,
      directions: directions
    })
  }

  static async changeUserPassword(
    userId: number,
    oldPassword: string,
    newPassword: string,
  ) {
    return $api.patch('/users/changePassword?id=' + userId, {
      oldPassword,
      newPassword
    })
  }
}