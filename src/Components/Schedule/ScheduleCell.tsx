import { FC } from 'react'
import { Lesson } from '../../Types/LessonsTypes/LessonsTypes'

interface IScheduleCell {
  lesson: Lesson
  selectLesson: (lesson: Lesson) => void
}

const ScheduleCell: FC<IScheduleCell> = ({lesson, selectLesson}) => {
  return (
    <th className="border border-[#F2F2F3] w-[155px] h-[105px]">
      {
        lesson?.show && 
        <div className="flex flex-col justify-center items-center">
          <p className="text-bordo">{lesson.title}</p>
          <span className="text-[12px]">Осталось мест: {lesson.capacity}</span>
          <button
            onClick={() => { selectLesson(lesson) }}
            disabled={lesson.capacity === 0}
            className={ 'w-[109px] py-[4px] mt-[15px] text-[14px] text-[#FFF] font-[400] bg-bordo rounded-[6px]' + (lesson.capacity === 0 ? ' opacity-50 cursor-not-allowed' : '') }
          >
            Подробнее
          </button>
        </div>
      }
    </th>
  )
}

export default ScheduleCell