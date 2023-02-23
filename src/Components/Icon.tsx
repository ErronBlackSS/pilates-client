import { FC } from 'react'

interface IIcon {
  children: any
  onClick?: () => void
}

const Icon: FC<IIcon> = ({children, onClick}) => {
  return (
    <div
      onClick={onClick}
    >
      {children}   
    </div>
  )
}

export default Icon