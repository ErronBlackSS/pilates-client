import { FC } from 'react'
import { InputItemProps } from '../../../Types/FormTypes/InputItem'

const InputItem: FC<InputItemProps> = ( { label, type, name, placeholder, validations, dirty, defaultValue, onBlur, onChange } ) => {
  
  const errors: any[] = []
  Object.keys(validations).forEach((key: string) => { 
    if(validations[key]?.status === true && dirty && key !== 'inputValid') errors.push(validations[key])
  })

  return (
    <div className="py-[10px]">
      <label
        className="block ml-[10px] text-[12px] leading-[15px] text-[#000000]"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        value={defaultValue}
        onBlur={onBlur}
        onChange={onChange}
        className="w-full px-4 py-2 mt-2 rounded-md"
        style={errors.length > 0 ? { border: '1px solid #FF0000' } : { border: '1px solid #8A8E97' }}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {errors && errors.map((error, index) => {
        return (
          <div
            key={index}
            className="text-red text-[12px]"
          >
            {error.message}
          </div>
        )
      })}
    </div>
  )
}

export default InputItem