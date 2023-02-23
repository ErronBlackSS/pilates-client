import LessonsStore from '../../../Store/LessonsStore'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'

interface IWatchDescription {
  lessonId: number
}

const WatchDescription: FC<IWatchDescription> = ({ lessonId }) => {

  const currentLesson = LessonsStore.lessons.find(lesson => lesson.lesson_id === lessonId)
  console.log(LessonsStore.lessons)
  return (
    <div
      className="flex text-left max-w-[600px]"
    >
      <div className="flex flex-col gap-[30px]">
        <div>
          <span className="text-bordo">Тренер: </span>
          {currentLesson?.name + ' ' + currentLesson?.lastname}
        </div>
        <div>
          <span className="text-bordo">Описание: </span>
          {currentLesson.description}
        </div>
      </div>
    </div>
  )
}

export default observer(WatchDescription)