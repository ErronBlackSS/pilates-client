import { FC } from 'react'
import useWindowWidth from '../../Hooks/UseScreenWidth'
import MobileSideBar from '../MobileSideBar'
import SideBar from '../SideBar'

const AccountLayout: FC = () => {

  const windowWidth = useWindowWidth()

  return (
    <>
      {windowWidth > 768 ? 
        <SideBar /> :
        <MobileSideBar />
      }
    </>
  )
}

export default AccountLayout