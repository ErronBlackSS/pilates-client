import { FC, useState } from 'react'
import LessonsFilter from './LessonsFilter'

interface ITopButtons {
  onPrev: () => void
  onNext: () => void
}

const TopButtons: FC<ITopButtons> = ({onPrev, onNext}) => {

  const [currentWeek, setCurrentWeek] = useState(true)

  const onPrevWeek = () => {
    setCurrentWeek(true)
    onPrev()
  }

  const onNextWeek = () => {
    setCurrentWeek(false)
    onNext()
  }

  return (
    <div className="flex w-full flex-row justify-between items-center ">
      <div className="flex flex-row justify-center items-center mx-[20px]">
        <LessonsFilter />
      </div>
      <div className="flex form-flex  justify-center items-center gap-[20px]">
        <button
          className={'px-[16px] py-[4px] cursor-pointer rounded-[10px] bg-white' + (currentWeek ? ' opacity-50' : '')}
          style={{border: '1px solid #1B1B1B'}}
          disabled={currentWeek}
          onClick={onPrevWeek}
        >
          Предыдущая неделя
        </button>  
        <button
          className={'px-[16px] py-[4px] cursor-pointer rounded-[10px] bg-white' + (!currentWeek ? ' opacity-50' : '')}
          style={{border: '1px solid #1B1B1B'}}
          disabled={!currentWeek}
          onClick={onNextWeek}
        >
          Следующая неделя
        </button>  
      </div>     
    </div>
  )
}

export default TopButtons