import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'

interface ISideBarItem {
  title: string
  path: string
  isToggled: boolean
  icon: any
  setSelected: (path: string) => void
}

const SideBarItem: FC<ISideBarItem> = ({ title, path, isToggled, icon, setSelected }) => {

  const location = useLocation()

  const isCurrentLocation = location.pathname === path

  const SideBarClasses = 'w-full flex flex-row gap-[10px] whitespace-nowrap '
    + (isToggled ? ' py-[8px] px-[20px] rounded-[6px] justify-start' : ' justify-center ')

  const buttonColor = 
    isToggled ? 
      (isCurrentLocation ? ButtonColors.bordo : ButtonColors.white) :
      ButtonColors.borderless

  const iconColor =
    isToggled ? 
      isCurrentLocation ? 'white' : '#1B1B1B' :
      isCurrentLocation ? '#D11655' : '#1B1B1B'

  return (
    <Link
      to={path}
      className="w-full"
      onClick={() => setSelected(path)}
    >
      <Button
        className={SideBarClasses}
        handler={() => { }}
        color={buttonColor}
        disabled={isCurrentLocation}
      >
        {icon(iconColor)}
        {isToggled && <span className="break-words">
          {title}
        </span>}
      </Button>
    </Link>      
  )
}

export default SideBarItem