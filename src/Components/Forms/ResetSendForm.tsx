import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import InputItem from './Components/InputItem'
import { useInput } from '../../Hooks/UseInput'
import AuthService from '../../Services/AuthService'

interface IResetSendForm {
  user_id: number
}

const ResetSendForm: FC<IResetSendForm> = ({ user_id }) => {

  const password = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } })
  const passwordConfirm = useInput({initialvalue: '', validations: { firstPassword: password.value, isEmpty: true, minLength: 6 } })
  const passwordIdentity = password.value === passwordConfirm.value
  const formDisabled = !passwordIdentity || !password.validations.inputValid?.status || !passwordConfirm.validations.inputValid?.status

  const navigate = useNavigate()

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    AuthService.resetSend(user_id, password.value)
    navigate('/login')
  }

  return (
    <div className="flex justify-center text-center">
      <div>
        <div className="text-left min-w-[300px]">
          <form
            onSubmit={onSubmit}>
            <div className="mt-4">
              <InputItem
                label="Пароль"
                type="password"
                name="password"
                placeholder="Введите пароль"
                validations={password.validations}
                dirty={password.isDirty}
                onBlur={password.onBlur}
                onChange={password.onChange}
              />
              <InputItem
                label="Подтвердите пароль"
                type="password"
                name="passwordConfirm"
                validations={passwordConfirm.validations}
                dirty={passwordConfirm.isDirty}
                placeholder="Подтвердите пароль"
                onBlur={passwordConfirm.onBlur}
                onChange={passwordConfirm.onChange}
              />
              {!passwordIdentity && 
                <div
                  className="text-red text-[12px]"
                >
                  Пароли не совпадают
                </div>
              }
              <button
                disabled={formDisabled}
                className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
              >
                Восстановить пароль
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetSendForm