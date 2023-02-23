import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import LessonsStore from '../../Store/LessonsStore'
import Modal from '../Common/Modal'
import Select from '../Common/Select'
import { UseLessonTypesAndTrainers } from '../../Hooks/UseLessonTypesAndTrainers'

const LessonsFilter = () => {

  const { trainers, lessonTypes } = UseLessonTypesAndTrainers()

  const [showFilterModal, setShowFilterModal] = useState(false)

  const [selectedTrainer, setSelectedTrainer] = useState({ value: 0, label: '' })
  const [selectedLessonType, setSelectedLessonType] = useState({ value: 0, label: '' })

  const formDisabled = !selectedTrainer && !selectedLessonType

  const onFilter = () => {
    LessonsStore.filterCalendar(selectedTrainer.label, selectedLessonType.label)
    setShowFilterModal(false)
  }

  const onClear = () => {
    LessonsStore.clearFilter()
    setShowFilterModal(false)
  }

  return (
    <>
      <button
        className="px-[16px] py-[4px] cursor-pointer rounded-[10px] bg-white"
        style={{border: '1px solid #1B1B1B'}}
        onClick={() => setShowFilterModal(true)}
      >
        Фильтры
      </button>
      {
        showFilterModal &&
          <Modal
            title={'Фильтры'}
            setShowModal={setShowFilterModal}
          >
            <div className="flex flex-col justify-center items-center gap-[20px]">
              <Select options={trainers} label="Тренер" onSelect={setSelectedTrainer}/>
              <Select options={lessonTypes} label="Тип занятия" onSelect={setSelectedLessonType}/>
              <div className="flex flex-row justify-between w-full">
                <button
                  className={ 'px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] bg-bordo' }
                  onClick={onClear}
                >
                  Очистить
                </button>
                <button
                  disabled={formDisabled}
                  onClick={onFilter}
                  className={ 'px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
                >
                  Применить
                </button>
              </div>
            </div>
          </Modal>
      }
    </>
  )
}

export default observer(LessonsFilter)