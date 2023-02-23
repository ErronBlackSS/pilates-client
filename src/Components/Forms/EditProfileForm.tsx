import { useInput } from '../../Hooks/UseInput'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import UserService from '../../Services/UserService'
import InputItemProfile from './Components/InputItemProfile'
import EditPhoto from './Components/EditPhoto'
import { FC, useContext } from 'react'

interface IEditProfilePhoto {
  curName: string
  curLastname: string
  curEmail: string
  curPhone: string
  showEditPassword: () => void
}

const EditProfileForm: FC<IEditProfilePhoto> = ({curName, curLastname, curEmail, curPhone, showEditPassword }) => {

  const { user } = useContext(Context)

  const name = useInput({initialvalue: curName, validations: { isEmpty: true, isName: true, maxLength: 30} }) 
  const email = useInput({initialvalue: curEmail, validations: { isEmpty: true, isEmail: true } })
  const lastname = useInput({initialvalue: curLastname, validations: { isEmpty: true, isLastName: true, maxLength: 30}})
  const phone = useInput({initialvalue: curPhone, validations: { isEmpty: true, isPhone: true } })

  const formDisabled = 
    !name.validations.inputValid?.status ||
    !email.validations.inputValid?.status || 
    !lastname.validations.inputValid?.status || 
    !phone.validations.inputValid?.status

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const userId = user.user.id
    const data = {
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value,
    }
    const newData = await user.updateUserData(userId, data)
    user.setUserData(newData)
  }

  const editPhoto = async (event: any) => {
    const formData = new FormData()
    const files = [...event.target.files]
    formData.append('file', files[0])
    const resp = await UserService.saveUserPhoto(formData, user.user.id)
    const photo = resp.data
    if (photo) {
      user.setUserPhoto(photo)
    }
  }

  return (
    <div className="flex  justify-start text-center mobile-below:justify-center">
      <div>
        <div className="text-left  mobile-below:overflow-x-scroll mobile-above:w-[500px]">
          <form
            onSubmit={onSubmit}>
            <div className="mt-4">
              <EditPhoto
                userPhoto={user.user.image_url}
                onEditPhoto={editPhoto}
              />
              <InputItemProfile
                label="Имя"
                type="text"
                name="name"
                defaultValue={name.value}
                validations={name.validations}
                dirty={name.isDirty}
                placeholder="Введите имя"
                onBlur={name.onBlur}
                onChange={name.onChange}
              />
              <InputItemProfile
                label="Фамилия"
                type="text"
                name="lastname"
                defaultValue={lastname.value}
                validations={lastname.validations}
                dirty={lastname.isDirty}
                placeholder="Введите фамилию"
                onBlur={lastname.onBlur}
                onChange={lastname.onChange}
              />
              <InputItemProfile
                label="Телефон"
                type="text"
                name="phone"
                defaultValue={phone.value}
                validations={phone.validations}
                dirty={phone.isDirty}
                placeholder="Введите телефон"
                onBlur={phone.onBlur}
                onChange={phone.onChange}
              />
              <InputItemProfile
                label="Почта"
                type="email"
                name="email"
                defaultValue={email.value}
                validations={email.validations}
                dirty={email.isDirty}
                placeholder="Введите почту"
                onBlur={email.onBlur}
                onChange={email.onChange} 
              />
              <button
                className="w-full px-6 py-2 mt-4 text-[#1B1B1B] cursor-pointer rounded-[10px] border border-[#8A8E97]"
                style={{borderStyle: 'solid'}}
                onClick={showEditPassword}
              >
                Сменить пароль
              </button>
              <button
                disabled={formDisabled}
                className={ 'w-full px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
              >
                Сохранить изменения
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default observer(EditProfileForm)