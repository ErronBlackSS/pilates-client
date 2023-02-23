import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ROLES } from '../../Utils/constance'

const AuthLink = () => {

  const { user } = useContext(Context)

  const link = user.user.role === ROLES.USER || user.user.role === ROLES.COACH ? '/account/lessons' : '/account/lessons/control' 

  if (user.isAuth && user.user.isActivated) {
    return (
      <Link
        className="nav-link block lg:px-2 py-2 text-[20px] text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
        to={link} 
      >
        {user.user.name}
      </Link>
    )
  } else {
    return (
      <Link
        className="nav-link block lg:px-2 py-2 text-gray-600 text-[20px] hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
        to="/login" 
      >
        Вход
      </Link>
    )
  }
}

export default observer(AuthLink)