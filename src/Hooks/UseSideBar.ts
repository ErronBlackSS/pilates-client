import { MutableRefObject, useEffect, useState } from 'react'
import { ROLES } from '../Utils/constance'
import { SIDEBAR_ITEMS } from '../Utils/navbar_constants'

export const useSideBar = (bodyRef: MutableRefObject<any>, role: string) => {
    
  const [isToggled, setToggled] = useState(false)
  const [menuItems, setMenuItems] = useState([])

  const toggle = (val: boolean) => {
    setToggled(val)
    if (!isToggled) {
      bodyRef?.current?.classList?.add('!w-[250px]')
    } else {
      bodyRef?.current?.classList?.remove('!w-[250px]')
    }
  }

  useEffect(() => {
    switch (role) {
    case ROLES.USER:
      setMenuItems(SIDEBAR_ITEMS.USER)
      break
    case ROLES.COACH:
      setMenuItems(SIDEBAR_ITEMS.COACH)
      break
    case ROLES.ADMIN:
      setMenuItems(SIDEBAR_ITEMS.ADMIN)
      break
    default:
      setMenuItems([])
    }
  }, [role])

  return {
    toggle,
    isToggled,
    menuItems
  }
}
