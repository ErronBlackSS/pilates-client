export interface IUseValidation {
  value: string
  validations: IValidation
}

export interface IValidation {
  [validation: string]: string | boolean | number
}

export interface IValidator {
  status: boolean
  message: string
}

export interface IValidatorObject {
  [x: string]: IValidator
}

export interface InputItemProps {
  label: string
  type: string
  name: string
  placeholder: string
  validations: IValidatorObject
  dirty: boolean
  defaultValue?: any
  onBlur: () => void
  onChange: (e: React.FocusEvent<HTMLInputElement>) => void
}