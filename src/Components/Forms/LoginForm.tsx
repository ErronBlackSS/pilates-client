import React, { FC, useContext, useState } from 'react'
import InputItem from './Components/InputItem'
import { Context } from '../../index'
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../Hooks/UseInput'
import { Link } from 'react-router-dom'
import { RESPONSE_STATUSES } from '../../Utils/error_statuses'

const LoginForm: FC = () => {

  const { user } = useContext(Context)

  const email = useInput({initialvalue: '', validations: {isEmpty: true, isEmail: true}})
  const password = useInput({initialvalue: '', validations: {isEmpty: true, minLength: 6}})
  const [errorMessage, setErrorMessage] = useState('')
  const formDisabled = !email.validations.inputValid?.status || !password.validations.inputValid?.status
  const navigate = useNavigate()

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const response = await user.login(email.value, password.value)
    if (response.status === RESPONSE_STATUSES.SUCCESS) {
      navigate('/')
    } else {
      setErrorMessage(response.message)
    }
  }

  return (
    <div className="flex justify-center text-center">
      <div>
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
              <InputItem
                label="Пароль"
                type="password"
                name="password"
                dirty={password.isDirty}
                validations={password.validations}
                placeholder="Введите пароль"
                onBlur={password.onBlur}
                onChange={password.onChange}
              />
              {errorMessage && <div className="text-red text-[12px]">{errorMessage}</div>}
              <Link
                to="/reset"
              >
                Забыли пароль?
              </Link>
              <button
                disabled={formDisabled}
                className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
              >
                Войти
              </button>
              <div className="mt-3 text-center text-[16px] leading-[20px]">
                <span className="text-gray">
                  Ещё нет аккаунта?
                </span>
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
        </div>
      </div>
    </div>
  )
}

export default observer(LoginForm)