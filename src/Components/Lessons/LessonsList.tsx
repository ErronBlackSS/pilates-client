import { FC } from 'react'
import LessonsRow from './LessonsRow'
import { observer } from 'mobx-react-lite'
import LessonsStore from '../../Store/LessonsStore'
import EmptyLessons from './EmptyLessons'

const LessonsList: FC = () => {

  return (
    <div
      className="w-full flex flex-col bg-[#FEFAFA] py-[25px] mt-[14px] overflow-y-scroll scrollbar-hide"
    >
      {LessonsStore.lessons.length ? LessonsStore.lessons.map((lesson, index) => (
        <LessonsRow
          key={index}
          title={lesson.title}
          trainer={lesson.name + ' ' + lesson.lastname}
          date={lesson.date}
          start_time={lesson.start_time}
          end_time={lesson.end_time}
          lesson_id={lesson.lesson_id}
        />
      ))
        : <EmptyLessons />}
    </div>
  )
}

export default observer(LessonsList)