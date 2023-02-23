import { useState, FC } from 'react'
import UserService from '../../Services/UserService'
import { ButtonColors } from '../../Utils/constance'
import Button from '../Common/Button'
import Modal from '../Common/Modal'
import { observer } from 'mobx-react-lite'
import { ENV } from '../../Utils/environment'

interface IUserCard {
  id: number
  name: string
  lastname: string
  image_url: string
  phone: string
  email: string
  onChangeUserRole: (id: number) => void
}

const UserCard: FC<IUserCard> = ({ id, name, lastname, image_url, phone, email, onChangeUserRole }) => {
  
  const [showUserProperties, setShowUserProperties] = useState(false)

  const onSetCoach = async () => {
    await UserService.setCoach(id)
    setShowUserProperties(false)
    onChangeUserRole(id)
  }

  const imageLink = image_url? image_url : `'${ENV.REACT_APP_FILE_PATH}/user_photos/sss.png'`
  return (
    <>
      {showUserProperties &&
        <Modal
          title="Свойства"
          setShowModal={setShowUserProperties}
        >
          <Button
            className="w-[300px]"
            color={ButtonColors.white}
            handler={onSetCoach}
          >
            Сделать тренером
          </Button>
        </Modal>}
      <div className="flex flex-col w-[320px] max-h-[220px] bg-[#FFFEFE] shadow-md rounded-[10px] gap-[20px] px-[20px] py-[16px]">
        <div className="flex flex-row justify-between items-center">
          <div className="flex justify-start items-center gap-[10px]">
            <img className="rounded-[50px] w-[52px] h-[52px] border border-bordo object-cover" src={imageLink} alt="" />
            <span>{name + ' ' + lastname}</span>
          </div>
          <div
            onClick={() =>setShowUserProperties(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
          </div>
        </div>
        <div className="">
          <span className="inline-block border-b-[1px] border-bordo mb-[6px]">{phone}</span>
          <br/> 
          <span className="inline-block border-b-[1px] border-bordo">{email}</span>
        </div>
      </div>
    </>
  )    
}

export default observer(UserCard)