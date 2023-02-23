import { useContext, useState } from 'react'
import { Context } from '../..'
import { useInput } from '../../Hooks/UseInput'
import { RESPONSE_STATUSES } from '../../Utils/error_statuses'
import InputItemProfile from './Components/InputItemProfile'

const EditPasswordForm = () => {

  const { user } = useContext(Context)

  const oldPassword = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } }) 
  const newPassord = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } })
  const newPasswordConfirm = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 }})
  const [errorMessage, setErrorMessage] = useState('')
  const [complete, setComplete] = useState(false)

  const formDisabled =
    !oldPassword.validations.inputValid?.status ||
    !newPassord.validations.inputValid?.status || 
    !newPasswordConfirm.validations.inputValid?.status ||
    newPasswordConfirm.value !== newPassord.value

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const response = await user.changePassword(user.user.id, oldPassword.value, newPassord.value)
    if (response.status === RESPONSE_STATUSES.SUCCESS) {
      oldPassword.value = ''
      newPassord.value = ''
      newPasswordConfirm.value = ''
      setErrorMessage('')
      setComplete(true)
    } else {
      setErrorMessage(response.message)
    }
  }

  return (
    <div className="flex justify-center text-center w-full mobile-below:mx-[5px]">
      <div className="w-full">
        <div className="text-left mobile-above:w-[500px] mobile-below:w-full">
          <form
            onSubmit={onSubmit}>
            <div className="mt-4">
              <InputItemProfile
                label="Предыдущий пароль"
                type="password"
                name="name"
                defaultValue={oldPassword.value}
                validations={oldPassword.validations}
                dirty={oldPassword.isDirty}
                placeholder="Старый пароль"
                onBlur={oldPassword.onBlur}
                onChange={oldPassword.onChange}
              />
              <InputItemProfile
                label="Новый пароль"
                type="password"
                name="lastname"
                defaultValue={newPassord.value}
                validations={newPassord.validations}
                dirty={newPassord.isDirty}
                placeholder="Новый пароль"
                onBlur={newPassord.onBlur}
                onChange={newPassord.onChange}
              />
              <InputItemProfile
                label="Повторите новый пароль"
                type="password"
                name="phone"
                defaultValue={newPasswordConfirm.value}
                validations={newPasswordConfirm.validations}
                dirty={newPasswordConfirm.isDirty}
                placeholder="Подтвердите новый пароль"
                onBlur={newPasswordConfirm.onBlur}
                onChange={newPasswordConfirm.onChange}
              />
              {newPasswordConfirm.value !== newPassord.value && 
                <div
                  className="text-red text-[12px]"
                >
                  Введенные пароли не совпадают
                </div>
              }
              {complete && <div className="text-[#50C878] text-[12px]">Пароль успешно изменен!</div>}
              {errorMessage && <div className="text-red text-[12px]">{errorMessage}</div>}

              <button
                disabled={formDisabled}
                className={ 'w-full px-6 py-2 my-4 text-[#fff] cursor-pointer rounded-[10px] bg-bordo' + (formDisabled ? ' opacity-40' : '')}
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

export default EditPasswordForm