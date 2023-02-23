import { Outlet, useNavigate } from 'react-router-dom'
import MobileView from './MobileView'
import DesktopView from './DesktopView'
import { useState } from 'react'
import MobileNav from './MobileNav'

const MainNavBar = () => {

  const navigate = useNavigate()

  const redirectToMain = () => {
    navigate('/')
  }

  const [isOverlayOpened, setIsOverlayOpened] = useState(false)
  
  const toggleOverlay = () => {
    setIsOverlayOpened(!isOverlayOpened)
  }

  return (
    <>
      {isOverlayOpened && 
        <MobileNav toggleOverlay={toggleOverlay} redirectToMain={redirectToMain}/>
      }
      {!isOverlayOpened &&
        <>
          <DesktopView redirectToMain={redirectToMain}/>
          <MobileView toggleOverlay={toggleOverlay} redirectToMain={redirectToMain}/>
        </>
      }
      <Outlet />
    </>
  )
}

export default MainNavBar