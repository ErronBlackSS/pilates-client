import { useState, useEffect } from 'react'
import { option } from '../Components/Common/Select'
import LessonTypesService from '../Services/LessonTypesService'
import UserService from '../Services/UserService'

export const UseLessonTypesAndTrainers = (currentLesson?: any) => {
  const [trainers, setTrainers] = useState([])
  const [lessonTypes, setLessonTypes] = useState([])
  const [defaultTrainer, setTrainer] = useState<option>({} as option)
  const [defaultLessonType, setLessonType] = useState<option>({} as option)
  
  const getAndSetTrainers = async () => {
    const resp = await UserService.getTrainers()
    const trainersArr = resp.data.map((item) => {
      return {
        value: item.id,
        label: item.name
      }
    })
    setTrainers(trainersArr)
    const defaultTrainerR = trainersArr.find((item) => item.value === currentLesson?.coach_id)
    setTrainer(defaultTrainerR)
  }
  
  const getAndSetLessonTypes = async () => {
    const resp = await LessonTypesService.getAll()
    const lessonTypesArr = resp.data.map((item) => {
      return {
        value: item.id,
        label: item.title
      }
    })
    setLessonTypes(lessonTypesArr)
    const defaultLessonTypeR = lessonTypesArr.find((item) => item.label === currentLesson?.title)
    setLessonType(defaultLessonTypeR)
  }

  useEffect(() => {
    getAndSetTrainers()
    getAndSetLessonTypes()
  }, [])

  return {
    trainers,
    lessonTypes,
    defaultTrainer,
    defaultLessonType
  }
}