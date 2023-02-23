import { useEffect, useState } from 'react'
import { MIN_LENGTH_ERROR, MAX_LENGTH_ERROR, NAME_ERROR, LASTNAME_ERROR, EMAIL_ERROR, PHONE_ERROR, EMPTY_ERROR, DEFAULT } from './Utils/ValidationActions'
import { IUseValidation, IValidator, IValidatorObject } from '../Types/FormTypes/InputItem'

export const useValidation = ({ value, validations }: IUseValidation ) => {
  const [isEmptyError, setEmptyError] = useState<IValidator>()
  const [minLengthError, setMinLengthError] = useState<IValidator>()
  const [maxLengthError, setMaxLengthError] = useState<IValidator>()
  const [nameError, setNameError] = useState<IValidator>()  
  const [lastNameError, setLastNameError] = useState<IValidator>()
  const [emailError, setEmailError] = useState<IValidator>()
  const [phoneError, setPhoneError] = useState<IValidator>()
  const [inputValid, setInputValid] = useState<IValidator>()

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
      case 'minLength':
        value.length < validations[validation] ? setMinLengthError(MIN_LENGTH_ERROR) : setMinLengthError(DEFAULT)
        break
      case 'isEmpty':
        value ? setEmptyError(DEFAULT) : setEmptyError(EMPTY_ERROR)
        break
      case 'maxLength':
        value.length > validations[validation] ? setMaxLengthError(MAX_LENGTH_ERROR) : setMaxLengthError(DEFAULT)
        break
      case 'isName':
        const nameRegExp = /^([ \u00c0-\u01ffа-яёА-ЯЁ'-]|[ \u00c0-\u01ffa-zA-Z'-])+$/
        nameRegExp.test(String(value)) ? setNameError(DEFAULT) : setNameError(NAME_ERROR)
        break
      case 'isLastName':
        const lastNameRegExp = /^([ \u00c0-\u01ffа-яёА-ЯЁ'-]|[ \u00c0-\u01ffa-zA-Z'-])+$/
        lastNameRegExp.test(String(value)) ? setLastNameError(DEFAULT) : setLastNameError(LASTNAME_ERROR)
        break
      case 'isEmail':
        const mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        mailRegExp.test(String(value).toLowerCase()) ? setEmailError(DEFAULT) : setEmailError(EMAIL_ERROR)
        break
      case 'isPhone':
        const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
        phoneRegExp.test(String(value).toLowerCase()) ? setPhoneError(DEFAULT) : setPhoneError(PHONE_ERROR)
        break
      default:
        break
      }
    }
  }, [validations, value])

  useEffect(() => {
    if (
      isEmptyError?.status ||
      minLengthError?.status ||
      maxLengthError?.status ||
      nameError?.status ||
      lastNameError?.status ||
      emailError?.status ||
      phoneError?.status
    ) {
      setInputValid({ status: false, message: 'Incorrect' })
    } else {
      setInputValid({ status: true, message: 'Correct' })
    }
  }, [isEmptyError, minLengthError, maxLengthError, nameError, lastNameError, emailError, phoneError])

  return {
    isEmptyError,
    minLengthError,
    maxLengthError,
    nameError,
    lastNameError,
    emailError,
    phoneError,
    inputValid
  } as IValidatorObject
}
