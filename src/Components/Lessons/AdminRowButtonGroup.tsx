import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'
import DeleteLessonForm from '../Forms/DeleteLessonForm'
import Modal from '../Common/Modal'
import { FC, useState } from 'react'
import EditLessonForm from '../Forms/EditLessonForm'
import BookedUsers from './FormsContent/BookedUsers'

interface IAdminRowButtonGroup {
  lessonId: number
}

const AdminRowButtonGroup: FC<IAdminRowButtonGroup> = ({ lessonId }) => {
  const [showModalBooked, setShowModalBooked] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  return (
    <>
      <Button
        color={ButtonColors.white}
        className="py-[2px] px-[14px]"
        handler={() => { 
          setShowModalBooked(true) 
        }}
      >
        Записи
      </Button>
      <Button
        color={ButtonColors.white}
        className="py-[2px] px-[14px]"
        handler={() => {
          setShowModalEdit(true)
        }}
      >
        Изменить
      </Button>
      <Button
        color={ButtonColors.red}
        className="py-[2px] px-[14px]"
        handler={() => {
          setShowModalDelete(true)
        }}
      >
        Удалить
      </Button>
      {showModalBooked && <Modal
        title="Записи"
        setShowModal={setShowModalBooked}
      >
        <BookedUsers lessonId={lessonId}/>
      </Modal>}
      {showModalEdit && <Modal
        title="Изменить"
        setShowModal={setShowModalEdit}
      >
        <EditLessonForm lessonId={lessonId} setShowModal={setShowModalEdit}/>
      </Modal>}
      {showModalDelete && <Modal
        title="Удалить"
        setShowModal={setShowModalDelete}
      >
        <DeleteLessonForm lessonId={lessonId} setShowModal={setShowModalDelete}/>
      </Modal>}
    </>
  )
}

export default AdminRowButtonGroup