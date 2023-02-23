import { FC } from 'react'
import { IButton } from '../../Types/Common/Button'

const Button: FC<IButton> = ({ handler, className, children, color, fullWidth, disabled }) => {

  const buttonStyles = 
    'cursor-pointer rounded-[9px]' +
    (fullWidth ? ' w-full' : '') +
    (disabled ? ' opacity-40' : '') +
    (color ? color : '') +
    (className ? ' ' + className : '')

  return (
    <button
      onClick={handler}
      className={buttonStyles}
    >
      {children}
    </button>
  )
}

export default Button