import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../index'
import { ROLES } from '../../Utils/constance'
import AdminRouter from './AdminRouter'
import CoachRouter from './CoachRouter'
import UserRouter from './UserRouter'
import PublicRouter from './PublicRouter'

const AppRouter = () => {

  const { user } = useContext(Context)

  switch (user?.user?.role) {
  case ROLES.USER:
    return (
      <UserRouter/>
    )
  case ROLES.ADMIN:
    return (
      <AdminRouter/>
    )
  case ROLES.COACH:
    return (
      <CoachRouter/>
    )
  default:
    return (
      <PublicRouter />
    )
  }
}

export default observer(AppRouter)
