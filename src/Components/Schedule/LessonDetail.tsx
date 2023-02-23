import { FC } from 'react'

interface ILessonDetail {
  description: string
  trainer: string
  freePlaces: number
  time: string
  date: string
  book: (id: number) => void
  id: number
}

const LessonDetail: FC<ILessonDetail> = ({ description, trainer, freePlaces, date, time, book, id }) => {

  const pastLesson = new Date(date) < new Date()

  return (
    <div className="flex flex-col justify-center text-left gap-[20px]">
      <span className="text-[14px] font-[400] leading-[24px]">
        <span className="text-bordo">Время: </span>
        <span>{time}</span>
      </span>
      <span className="text-[14px] font-[400] leading-[24px]">
        <span className="text-bordo">Тренер: </span>
        <span>{trainer}</span>
      </span>
      <span className="text-[14px] max-w-[600px] font-[400] leading-[24px]">
        <span className="text-bordo">Описание: </span>
        <span>{description}</span>
      </span>
      <div className="flex justify-center">
        <button
          onClick={() => { book(id) }}
          className={ 'max-w-[109px] px-[8px] py-[4px] cursor-pointer rounded-[10px] bg-white ' + (pastLesson && ' opacity-40') }
          style={{border: '1px solid #1B1B1B'}}
          disabled={pastLesson}
        >
          Записаться
        </button>
      </div>
      <div className="flex justify-center mt-[-10px] mb-[-5px]">
        <span className="text-[14px] max-w-[600px] font-[400] leading-[24px]">
          <span>Осталось мест: </span>
          <span>{freePlaces}</span>
        </span>
      </div>
    </div>
  )
}

export default LessonDetail