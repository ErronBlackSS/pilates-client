import { makeAutoObservable } from 'mobx'
import LessonService from '../Services/LessonService'
import { Lesson } from '../Types/LessonsTypes/LessonsTypes'
import { getCurrentWeek } from '../Utils/functions'

class LessonsStore {
  lessons = [] as any[]
  weekDays = [] as any[]

  constructor() {
    makeAutoObservable(this)
  }
  
  setLessons(lessons: any[]) {
    this.lessons = lessons
  }

  setWeekDays(weekDays: any[]) {
    this.weekDays = weekDays
  }

  sortLessonsByTime() {
    if(this.lessons) {
      this.lessons.sort(function(a, b){
        if (a.start_time > b.start_time)
          return 1
        if (a.start_time < b.start_time)
          return -1
        return 0
      })
    }
  }

  addLesson(lesson: Lesson) {
    this.lessons.push(lesson)
  }

  async getAllLessons() {
    const resp = await LessonService.getAll()
    this.lessons = resp.data
  }

  async updateLesson(lesson: any) {
    const resp = await LessonService.updateLesson(lesson)
    this.setLessons(this.lessons.map((item) => {
      if (item.lesson_id === resp.data.lesson_id) {
        return resp.data
      }
      return item
    }))
  }

  filterCalendar(trainer: string, lesson: string) {
    if(trainer) {
      this.filterLessons('trainer_name', trainer)
    }
    if(lesson) {
      this.filterLessons('title', lesson)
    }
  }

  filterLessons(type: string, value: string) {
    this.lessons = this.lessons.map((item) => {
      Object.keys(item.lessons).forEach((key) => {
        if(item.lessons[key]) {
          item.lessons[key][type] === value ? item.lessons[key].show = true : item.lessons[key].show = false
        }
      })
      return item
    })
  }

  clearFilter() {
    this.lessons = this.lessons.map((item) => {
      Object.keys(item.lessons).forEach((key) => {
        if(item.lessons[key]) {
          item.lessons[key].show = true
        }
      })
      return item
    })
  }

  async deleteLesson(lessonId: number) {
    await LessonService.deleteLesson(lessonId)
    this.lessons = this.lessons.filter((item) => item.lesson_id !== lessonId)
  }

  async bookLesson(lessonId: number, userId: number) {
    const resp = await LessonService.book(lessonId, userId)
    if (resp.status === 202) {
      alert(resp.data.message)
      return
    }
    alert('Вы успешно записались на занятие')
  }

  async getLessonsByWeek(currentWeek: any) {
    const resp = await LessonService.getByWeek(currentWeek)
    this.setWeekDays(resp.data.weekDays)
    this.setLessons(resp.data.trainings)
  }

  async getAdminPlannedLessons() {
    const resp = await LessonService.getAdminPlannedLessons()
    this.setLessons(resp.data)
  }

  async getAdminHistoryLessons() {
    const resp = await LessonService.getAdminHistoryLessons()
    this.setLessons(resp.data)
  }

  async getLessonsCurrentWeek() {
    const week = getCurrentWeek()
    const resp = await LessonService.getLessonsCurrentWeek(week)
    this.setLessons(resp.data)
  }

  async getUserPlannedLessons(userId: number) {
    const resp = await LessonService.getUserPlannedLessons(userId)
    this.setLessons(resp.data)
  }

  async getUserHistoryLessons(userId: number) {
    const resp = await LessonService.getUserHistoryLessons(userId)
    this.setLessons(resp.data)
  }

  async cancelLesson(lessonId: number, userId: number) {
    const resp = await LessonService.cancelLesson(lessonId, userId)
    if (resp.status === 202) {
      alert(resp.data.message)
      return
    }
    this.lessons = this.lessons.filter((item) => item.id !== lessonId)
  }

  get trainings () {
    return this.lessons
  }

}

export default new LessonsStore()