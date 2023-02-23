import React, { FC } from 'react'
import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'
import { observer } from 'mobx-react-lite'
import LessonsStore from '../../Store/LessonsStore'

interface IDeleteLessonForm {
  lessonId: number
  setShowModal: (val: boolean) => void
} 

const DeleteLessonForm: FC<IDeleteLessonForm> = ({ lessonId, setShowModal }) => {

  const onDeleteLesson = () => {
    LessonsStore.deleteLesson(lessonId)
    setShowModal(false)
  }

  return (
    <div
      className="flex justify-center text-left"
    >
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div>
          Вы уверены, что хотите удалить занятие?
        </div>
        <Button
          color={ButtonColors.red}
          className="py-[2px] px-[14px]"
          handler={onDeleteLesson}
        >
          Удалить
        </Button>
      </div>
    </div>
  )
}

export default observer(DeleteLessonForm)