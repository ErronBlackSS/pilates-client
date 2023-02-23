export interface Lessons {
  lessons: Lessons[]
}

export interface ILessonSchedule {
  time: string
  lessons: Lesson
}

export type Lesson = {
  lessons(lessons: any): unknown
  capacity: number
  date: string
  end_time: string
  id: number
  occupied: number
  start_time: string
  title: string
  trainer_id: number
  trainer_name: string
  description: string
  weekDay: number
  show: boolean
}

export interface ILessonTypesFields {
  id: number
  title: string
  description: string
  duration: number
  type: string
  image_url: string
}
