import React, { FC, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Button from '../Common/Button'
import { useNavigate } from 'react-router-dom'
import { ButtonColors } from '../../Utils/constance'
import { Context } from '../..'

interface ILogoutForm {
    setShowModal: (val: boolean) => void
  } 

const LogoutForm: FC<ILogoutForm> = ({setShowModal}) => {
  
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const onLogout = () => {
    user.logout()
    navigate('/')
    setShowModal(false)
  }

  return (
    <div
      className="flex justify-center text-left"
    >
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div>
              Вы уверены, что хотите выйти из аккаунта?
        </div>
        <Button
          color={ButtonColors.red}
          className="py-[2px] px-[14px]"
          handler={onLogout}
        >
              Выйти
        </Button>
      </div>
    </div>
  )
}

export default observer(LogoutForm)