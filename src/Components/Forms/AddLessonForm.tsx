import { FC, FormEvent, useState } from 'react'
import Select from '../Common/Select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import LessonService from '../../Services/LessonService'
import { option } from '../Common/Select'
import { Lesson } from '../../Types/LessonsTypes/LessonsTypes'
import moment from 'moment'
import TimePicker from 'rc-time-picker'

interface IAddLessonForm {
  trainers: option[]
  lessonTypes: option[]
  addLesson: (lesson: Lesson) => void
}

const AddLessonForm: FC<IAddLessonForm> = ({ trainers, lessonTypes, addLesson }) => {
  
  const [trainer, setTrainer] = useState({ value: 0, label: '' })
  const [lessonType, setLessonType] = useState({ value: 0, label: '' })
  const [startTime, setStartTime] = useState('10:00')
  const [endTime, setEndTime] = useState('10:00')
  const [startDate, setStartDate] = useState(new Date())
  const [capacity, setCapacity] = useState<null | number>(null)

  const formDisabled = !trainer.value || !lessonType.value || !startTime || !endTime || !startDate

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      coach_id: trainer.value,
      lesson_type_id: lessonType.value,
      capacity: capacity,
      date: new Date(startDate.setDate(startDate.getDate() + 1)),
      start_time: startTime,
      end_time: endTime
    }
    const resp = await LessonService.createLesson(data)
    addLesson(resp.data)
  }

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
              <Select options={trainers} label="Тренер" onSelect={setTrainer}/>
              <Select options={lessonTypes} label="Тип занятия" onSelect={setLessonType}/>
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
                <input className="w-full custom-input" type="number" value={capacity} onChange={(e) => { setCapacity(+e.target.value) }} />
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
          Создать
        </button>
      </form>
    </div>
  )
}

export default AddLessonForm