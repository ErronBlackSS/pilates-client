import { FC, useContext } from 'react'
import ListRowBlock from '../Common/List/ListRowBlock'
import { Context } from '../../index'
import { ROLES } from '../../Utils/constance'
import AdminRowButtonGroup from './AdminRowButtonGroup'
import UserRowButtonGroup from './UserRowButtonGroup'

interface ILessonRow {
  title: string
  trainer: string
  date: string
  start_time: string
  end_time: string
  lesson_id: number
}

const LessonsRow: FC<ILessonRow> = ({lesson_id, title, trainer, date, start_time, end_time}) => {

  const { user } = useContext(Context)

  const formattedDate = new Date(date).toLocaleString('ru', {
    month: 'long',
    day: 'numeric'
  })

  return (
    <div
      className="border-t border-[#D9D9DA] flex flex-row justify-between items-center p-[10px]"
    >
      <div className="flex flex-row justifty-between items-center gap-[20px]">
        <ListRowBlock
          label="Название:"
          value={title}
        />
        <ListRowBlock
          label="Тренер:"
          value={trainer}
        />
        <ListRowBlock
          label="Дата:"
          value={formattedDate}
        />
        <ListRowBlock
          label="Время начала:"
          value={start_time?.slice(0, 5)}
        />
        <ListRowBlock
          label="Время окончания:"
          value={end_time?.slice(0, 5)}
        />
      </div>
      <div className="flex flex-row justifty-center items-center gap-[30px]">
        {user.user.role === ROLES.ADMIN ? <AdminRowButtonGroup lessonId={lesson_id} /> : <UserRowButtonGroup lessonId={lesson_id} />}
      </div>
    </div>
  )
}

export default LessonsRow