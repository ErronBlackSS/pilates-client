import { FC, useEffect, useState } from 'react'
import Select, { option } from '../Common/Select'
import DatePicker from 'react-datepicker'
import TimePicker from 'rc-time-picker'
import moment from 'moment'
import LessonsStore from '../../Store/LessonsStore'
import { observer } from 'mobx-react-lite'
import { UseLessonTypesAndTrainers } from '../../Hooks/UseLessonTypesAndTrainers'
import 'rc-time-picker/assets/index.css'

interface IEditLessonForm {
  lessonId: number
  setShowModal: (val: boolean) => void
}

const EditLessonForm: FC<IEditLessonForm> = ({ lessonId, setShowModal }) => {
  
  const currentLesson = LessonsStore.lessons.find((item) => item.lesson_id === lessonId)

  const { trainers, lessonTypes, defaultTrainer, defaultLessonType } = UseLessonTypesAndTrainers(currentLesson)

  const [trainer, setTrainer] = useState<option>(defaultTrainer)
  const [lessonType, setLessonType] = useState<option>(defaultLessonType)
  const [startTime, setStartTime] = useState(currentLesson.start_time.slice(0, 5))
  const [endTime, setEndTime] = useState(currentLesson.end_time.slice(0, 5))
  const [startDate, setStartDate] = useState(new Date(currentLesson.date))
  const [capacity, setCapacity] = useState(currentLesson.capacity)
  
  const formDisabled = !trainer?.value || !lessonType?.value || !startTime || !endTime || !startDate

  const onSubmit = async (e: any) => {
    e.preventDefault()
    const data = {
      id: lessonId,
      coach_id: trainer.value,
      lesson_type_id: lessonType.value,
      capacity: capacity,
      date: new Date(new Date(startDate.setDate(startDate.getDate())).setHours(3)),
      start_time: startTime,
      end_time: endTime
    }
    setShowModal(false)
    LessonsStore.updateLesson(data)
  }

  useEffect(() => {
    setTrainer(defaultTrainer)
    setLessonType(defaultLessonType)
  }, [defaultLessonType, defaultTrainer])

  return (
    <div
      className="flex justify-center text-left"
    >
      <form
        onSubmit={onSubmit}
      >
        <div className="mt-4 flex-col md:gap-1 xl:gap-3 align-baseline">
          <div className="flex flex-col gap-[25px]">
            <div className="flex form-flex gap-[10px]">
              <Select
                defaultValue={trainer}
                options={trainers}
                label="Тренер"
                onSelect={setTrainer}
              />
              <Select
                defaultValue={lessonType}
                options={lessonTypes}
                label="Тип занятия"
                onSelect={setLessonType}/>
            </div>
            <div className="flex form-flex gap-[10px]">
              <div className="w-full flex flex-col gap-[7px]">
                <label
                  className="block ml-[10px] text-[12px] leading-[15px] text-[#000000]"
                >
                Время начала
                </label>
                <TimePicker
                  className="w-full"
                  defaultValue={moment(startTime, 'HH:mm')}
                  showSecond={false}
                  onChange={(val) => setStartTime(val.format('HH:mm'))}
                />
              </div>
              <div className="flex w-full flex-col gap-[7px]">
                <label
                  className="block ml-[10px] text-[12px] leading-[15px] text-[#000000]"
                >
                Время конца
                </label>
                <TimePicker
                  className="w-full"
                  defaultValue={moment(endTime, 'HH:mm')}
                  showSecond={false}
                  onChange={(val) => setEndTime(val.format('HH:mm'))}
                />
              </div>
            </div>
            <div className="flex form-flex gap-[10px]">
              <div className="flex w-full flex-col gap-[7px]">
                <label
                  className="block ml-[10px] text-[12px] leading-[15px] text-[#000000]"
                >
                  Количество мест
                </label>
                <input className="w-full custom-input" value={capacity} onChange={(e) => { setCapacity(+e.target.value) }} />
              </div>
              <div className="flex w-full flex-col gap-[7px]">
                <label
                  className="block ml-[10px] text-[12px] leading-[15px] text-[#000000]"
                >
                  Дата занятия
                </label>
                <DatePicker className="w-full" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={formDisabled}
          className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
        >
          Изменить
        </button>
      </form>
    </div>
  )
}

export default observer(EditLessonForm)