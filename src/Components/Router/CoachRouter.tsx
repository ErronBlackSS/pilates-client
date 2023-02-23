import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import { COACH_ROUTES, PUBLIC_ROUTES, SIGN_IN_ROUTES } from '../../routes'
import AccountLayout from '../Layouts/AccountLayout'
import AuthLayout from '../Layouts/NavBars/AuthLayout'
import MainNavBar from '../Layouts/NavBars/MainLayout'

const UserRouter = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route element={<AccountLayout />}>  
          {COACH_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
        <Route element={<MainNavBar />}>
          {PUBLIC_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
          <Route path="*" element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          {SIGN_IN_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default UserRouter