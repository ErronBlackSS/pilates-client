export type LessonType = {
  id: number
  title: string
  description: string
  duration: number
  type: string
  image_url: string
}

export type LessonTypeGroup = {
  [key: string]: LessonType[] 
}