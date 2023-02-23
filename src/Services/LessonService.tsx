import { AxiosResponse } from 'axios'
import $api from '../Api'
import { Lesson } from '../Types/LessonsTypes/LessonsTypes'

export default class AuthService {
  static async createLesson(lesson: any): Promise<AxiosResponse> {
    return await $api.post('/lessons', { ...lesson })
  }

  static async updateLesson(lesson: Lesson): Promise<AxiosResponse> {
    return await $api.patch('/lessons', { ...lesson })
  }

  static async deleteLesson(lesson_id: number): Promise<AxiosResponse> {
    return await $api.delete('/lessons', { params: { lesson_id } })
  }

  static async getAll(): Promise<AxiosResponse> {
    return await $api.get('/lessons')
  }

  static async getByWeek(week: any): Promise<AxiosResponse> {
    return await $api.get('/lessons/week', { params: { week } })
  }

  static async book(lesson_id: number, user_id: number): Promise<AxiosResponse> {
    return await $api.post('/lessons/book', { lesson_id, user_id })
  }

  static async getLessonsCurrentWeek(week: any): Promise<AxiosResponse> {
    return await $api.get('/lessons/week/list', { params: { week } })
  }

  static async getAdminPlannedLessons(): Promise<AxiosResponse> {
    return await $api.get('/lessons/admin/planned')
  }

  static async getAdminHistoryLessons(): Promise<AxiosResponse> {
    return await $api.get('/lessons/admin/history')
  }

  static async getUserPlannedLessons(user_id: number): Promise<AxiosResponse> {
    return await $api.get('/lessons/user/planned', { params: { user_id } })
  }

  static async getUserBookedLessons(user_id: number, week: any): Promise<AxiosResponse> {
    return await $api.get('/lessons/user', { params: { user_id, week } })
  }

  static async getUserHistoryLessons(user_id: number): Promise<AxiosResponse> {
    return await $api.get('/lessons/user/history', { params: { user_id } })
  }

  static async getListBookedUsers(lesson_id: number): Promise<AxiosResponse> {
    return await $api.get('/lessons/booked', { params: { lesson_id } })
  }

  static async cancelLesson(lesson_id: number, user_id: number): Promise<AxiosResponse> {
    return await $api.delete('/lessons/book', { params: { lesson_id, user_id } })
  }
}