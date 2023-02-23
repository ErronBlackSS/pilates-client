import { FC } from 'react'
import { ButtonColors } from '../../Utils/constance'
import Button from '../Common/Button'

interface IDeleteLessonTypeForm {
  lesson_id: number
  lesson_title: string
  onDeleteLessonType: (lessonId: number) => void
}

const DeleteLessonTypeForm: FC<IDeleteLessonTypeForm> = ({ lesson_id, lesson_title, onDeleteLessonType }) => {

  return (
    <div
      className="flex justify-center text-left"
    >
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <div>
              Вы уверены, что хотите удалить тип занятия "{lesson_title}"?
        </div>
        <Button
          color={ButtonColors.red}
          className="py-[2px] px-[14px]"
          handler={() => onDeleteLessonType(lesson_id)}
        >
          Удалить
        </Button>
      </div>
    </div>
  )
}

export default DeleteLessonTypeForm