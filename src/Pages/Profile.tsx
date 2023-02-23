import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import EditProfileForm from '../Components/Forms/EditProfileForm'
import EditPasswordForm from '../Components/Forms/EditPasswordForm'
import { Context } from '..'

const Profile = () => {

  const { user } = useContext(Context)
  const [showEditPassword, setShowEditPassword] = useState(false)

  const onShowEditPassword = () => {
    setShowEditPassword(!showEditPassword)
  }

  return (
    <div className="bg-[#FEFAFA]">
      <div className="flex flex-col">
        <div className="flex mobile-below:justify-center">
          <span className="text-[36px] leading-[56px] pt-[50px] text-[#1B1B1B] mobile-below:pt-[0px] mobile-below:text-[22px] mobile-below:leading-[34px]">
            Личные данные
          </span>
        </div>
        <div className="flex form-flex w-full justify-start">
          <div className="flex flex-col w-full">
            <EditProfileForm
              showEditPassword={onShowEditPassword}
              curName={user.user.name}
              curLastname={user.user.lastname}
              curEmail={user.user.email}
              curPhone={user.user.phone}
            />
          </div>
          {showEditPassword && <div className="flex flex-row w-full">
            <EditPasswordForm />
          </div>}
        </div>
      </div>  
    </div>
  )
}

export default observer(Profile)