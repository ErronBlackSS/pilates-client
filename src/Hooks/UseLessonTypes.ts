import { useEffect, useState } from 'react'
import LessonTypesService from '../Services/LessonTypesService'
import { LessonType } from '../Types/LessonTypes'

export const useLessonTypes = () => {
  const [lessonTypes, setLessonTypes] = useState<LessonType[]>([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const pushLessonType = (lessonType: LessonType) => {
    setLessonTypes([...lessonTypes, lessonType])
    setShowAddModal(false)
  }

  const getLessonTypes = async () => {
    const resp = await LessonTypesService.getAll()
    setLessonTypes(resp.data)
  }

  const deleteLessonType = async (id: number) => {
    await LessonTypesService.delete(id)
    setLessonTypes(lessonTypes.filter(lessonType => lessonType.id !== id))
  }

  const editLessonType = async (id: number, title: string, description: string, type: string, duration: number, image_url: string | FormData) => {
    const lessonType = await LessonTypesService.update(id, title, description, type, duration)

    let newImageUrl: string | FormData = image_url

    if (newImageUrl instanceof FormData) {
      const lessonTypeImage = await LessonTypesService.saveLessonTypeImage(newImageUrl, id)
      newImageUrl = lessonTypeImage.data
      const newLessonType = {...lessonType.data, image_url: lessonTypeImage.data}
      setLessonTypes(lessonTypes.map(lType => lType.id === newLessonType.id ? newLessonType : lType))
      return
    }
    
    const newLessonType = {...lessonType.data, image_url: newImageUrl}
    setLessonTypes(lessonTypes.map(lType => lType.id === newLessonType.id ? newLessonType : lType))
  }

  useEffect(() => {
    getLessonTypes()
  }, [])

  return {
    lessonTypes,
    getLessonTypes,
    showAddModal,
    setShowAddModal,
    showEditModal,
    setShowEditModal,
    pushLessonType,
    editLessonType,
    deleteLessonType
  }
}