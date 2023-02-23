import React, { FC, useContext, useState } from 'react'
import InputItem from './Components/InputItem'
import { Link } from 'react-router-dom'
import { useInput } from '../../Hooks/UseInput'
import { Context } from '../../index'
import { RESPONSE_STATUSES } from '../../Utils/error_statuses'

const ResetForm: FC = () => {

  const { user } = useContext(Context)

  const email = useInput({initialvalue: '', validations: {isEmpty: true, isEmail: true}})
  const formDisabled = !email.validations.inputValid?.status
  const [errorMessage, setErrorMessage] = useState('')
  const [formSended, setFormSended] = useState(false)

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const response = await user.resetSendMail(email.value)
    if (response.status === RESPONSE_STATUSES.SUCCESS) {
      setFormSended(true)
    } else {
      setErrorMessage(response.message)
    }
  }

  return (
    <div className="flex justify-center text-center">
      <div>
        {formSended ? 
          <div
            className="w-[300px] h-[300px] flex flex-col justify-center items-center"
          >
            Вам на почту отправленно письмо с подтверждением
          </div>
          :
          <div className="text-left min-w-[300px]">
            <form
              onSubmit={onSubmit}>
              <div className="mt-4">
                <InputItem
                  label="Почта"
                  type="email"
                  name="email"
                  validations={email.validations}
                  dirty={email.isDirty}
                  placeholder="Введите почту"
                  onBlur={email.onBlur}
                  onChange={email.onChange} 
                />
                <button
                  disabled={formDisabled}
                  className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
                >
                Продолжить
                </button>
                {errorMessage && <div className="text-red text-[12px]">{errorMessage}</div>}
                <div className="mt-3 text-center text-[16px] leading-[20px]">
                  <Link
                    className="underline"
                    to="/login"
                  >
                  Войти
                  </Link>
                &nbsp;
                  <Link
                    className="underline"
                    to="/registration"
                  >
                  Зарегистрироваться
                  </Link>
                </div>
              </div>
            </form>
          </div>}
      </div>
    </div>
  )
}

export default ResetForm