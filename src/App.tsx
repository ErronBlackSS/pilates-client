import { FC, useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import AppRouter from './Components/Router/AppRouter'
import { Context } from './index'

const App: FC = () => {

  const { user } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      user.checkAuth()
    }
  }, [user])

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default observer(App)