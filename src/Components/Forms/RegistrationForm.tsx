import { FC } from 'react'
import React from 'react'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import InputItem from './Components/InputItem'
import { useInput } from '../../Hooks/UseInput'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { RESPONSE_STATUSES } from '../../Utils/error_statuses'

const RegistationForm: FC = () => {
  
  const { user } = useContext(Context)
  
  const name = useInput({initialvalue: '', validations: { isEmpty: true, isName: true, maxLength: 30} }) 
  const email = useInput({initialvalue: '', validations: { isEmpty: true, isEmail: true } })
  const password = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } })
  const lastname = useInput({initialvalue: '', validations: { isEmpty: true, isLastName: true, maxLength: 30}})
  const phone = useInput({initialvalue: '', validations: { isEmpty: true, isPhone: true } })
  const passwordConfirm = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } })
  const [errorMessage, setErrorMessage] = useState('')

  const [formSended, setFormSended] = useState(false)
  const [activateLink, setActivateLink] = useState('')
  const passwordIdentity = password.value === passwordConfirm.value

  const formDisabled = 
    !name.validations.inputValid?.status ||
    !email.validations.inputValid?.status || 
    !password.validations.inputValid?.status || 
    !lastname.validations.inputValid?.status || 
    !phone.validations.inputValid?.status || 
    !passwordConfirm.validations.inputValid?.status || 
    !passwordIdentity

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const response = await user.registration(name.value, lastname.value, phone.value, email.value, password.value)
    if (response.status === RESPONSE_STATUSES.SUCCESS) {
      setFormSended(true)
      setActivateLink(response.activate_link)
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
            Для активации аккаунта перейдите по ссылке - <a href={activateLink}> Активировать </a>
          </div>
          :
          <div className="text-left min-w-[300px]">
            <form
              onSubmit={onSubmit}
            >
              <div className="mt-4 flex-col md:gap-1 xl:gap-3 align-baseline">
                <div className="flex form-flex gap-[10px]">
                  <InputItem
                    label="Имя"
                    type="text"
                    name="name"
                    validations={name.validations}
                    dirty={name.isDirty}
                    placeholder="Введите имя"
                    onBlur={name.onBlur}
                    onChange={name.onChange}
                  />
                  <InputItem
                    label="Фамилия"
                    type="text"
                    name="lastname"
                    validations={lastname.validations}
                    dirty={lastname.isDirty}
                    placeholder="Введите фамилию"
                    onBlur={lastname.onBlur}
                    onChange={lastname.onChange}
                  />
                </div>
                <div className="flex form-flex gap-[10px]">
                  <InputItem
                    label="Телефон"
                    type="text"
                    name="phone"
                    validations={phone.validations}
                    dirty={phone.isDirty}
                    placeholder="+7 000 000-00-00"
                    onBlur={phone.onBlur}
                    onChange={phone.onChange}
                  />
                  <InputItem
                    label="Email"
                    type="text"
                    name="email"
                    validations={email.validations}
                    dirty={email.isDirty}
                    placeholder="example@example.ru"
                    onBlur={email.onBlur}
                    onChange={email.onChange}
                  />
                </div>
                <div className="flex form-flex gap-[10px]">
                  <InputItem
                    label="Пароль"
                    type="password"
                    name="password"
                    validations={password.validations}
                    dirty={password.isDirty}
                    placeholder="Введите пароль"
                    onBlur={password.onBlur}
                    onChange={password.onChange}
                  />
                  <InputItem
                    label="Подтвердите пароль"
                    type="password"
                    name="passwordConfirm"
                    dirty={passwordConfirm.isDirty}
                    validations={passwordConfirm.validations}
                    placeholder="Подтвердите пароль"
                    onBlur={passwordConfirm.onBlur}
                    onChange={passwordConfirm.onChange}
                  />
                  {!passwordIdentity && password.isDirty && passwordConfirm.isDirty && <div style={{color: 'red'}}>Пароли не совпадают</div>}
                </div>
              </div>
              {errorMessage && <div className="text-red text-[12px]">{errorMessage}</div>}
              <button
                disabled={formDisabled}
                type="submit"
                className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
              >
                Зарегистрироваться
              </button>
              <div className="mt-3 text-center text-[16px] leading-[20px]">
                <span className="text-gray">
                  Уже есть аккаунт?
                </span>
              &nbsp;
                <Link
                  className="underline"
                  to="/login"
                >
                Войти
                </Link>
              </div>
            </form>
          </div>}
      </div>
    </div>
  )
}

export default observer(RegistationForm)