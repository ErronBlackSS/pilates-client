import { useEffect } from 'react'
import { useLessonTypes } from '../Hooks/UseLessonTypes'
import Modal from '../Components/Common/Modal'
import AddLessonTypeForm from '../Components/Forms/AddLessonTypeForm'
import LessonTypeRow from '../Components/LessonTypes/LessonTypeRow'
import Button from '../Components/Common/Button'
import { ButtonColors } from '../Utils/constance'

const LessonTypes = () => {
  
  const {
    lessonTypes,
    showAddModal,
    setShowAddModal,
    deleteLessonType,
    pushLessonType,
    editLessonType,
  } = useLessonTypes()

  return (
    <>
      {
        showAddModal &&
          <Modal
            title="Добавить тип занятия"
            setShowModal={setShowAddModal}
          >
            <AddLessonTypeForm
              onAddLessonType={pushLessonType}
              setShowAddModal={setShowAddModal}
            />
          </Modal>
      }
      <div className="mobile-below:px-[10px] pt-[50px] pr-[60px]">
        <div className="flex flex-row justify-between items-center gap-[40px] mobile-below:mx-[10px]">
          <span className="text-[36px] leading-[56px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
            Типы занятий
          </span>
          <Button
            handler={() => setShowAddModal(true)}
            color={ButtonColors.white}
            className="py-[2px] px-[14px]"
          >
            Добавить тип
          </Button>
        </div>
      </div>
      <div
        className="flex flex-col bg-[#FEFAFA] py-[25px] mt-[14px]"
      >
        {lessonTypes && lessonTypes.map((lessonType) => (
          <LessonTypeRow
            key={lessonType.id}
            lessonType={lessonType}
            onEditLessonType={editLessonType}
            onDeleteLessonType={deleteLessonType}
          />
        ))}
      </div>
    </>
  )
}

export default LessonTypes