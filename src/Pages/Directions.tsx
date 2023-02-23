import { useEffect, useState } from 'react'
import LessonTypesService from '../Services/LessonTypesService'
import { ILessonType } from '../Types/ResponseTypes/LessonTypesResponse'

const Lessons = () => {

  const [lessons, setLessons] = useState<ILessonType[]>()

  useEffect(() => {
    LessonTypesService.getAll()
      .then(res => {
        setLessons(res.data)
      })
  }, [])

  return (
    <div className="items-center flex flex-col justify-center h-screen w-full bg-[#ea8df7]">
      <div className="flex flex-col items-center justify-center w-[80%] text-[#008080]">
        <div>
          Уроки
          {lessons?.map(lesson => (
            <div className="flex flex-col items-center justify-center">
              <div>{lesson.title}</div>
              <div>{lesson.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lessons