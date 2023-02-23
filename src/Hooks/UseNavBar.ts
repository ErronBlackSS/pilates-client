import { useContext, useState } from 'react'

export const useNavbar = () => {
  const [isToggled, setToggled] = useState(false)

  const toggle = () => {
    setToggled(!isToggled)
  }

  return {
    toggle,
    isToggled
  }
  
}