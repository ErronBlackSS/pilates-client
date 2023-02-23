import { ROUTES } from './Utils/constance'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Reset from './Pages/Reset'
import ResetSend from './Pages/ResetSend'
import Profile from './Pages/Profile'
import Lessons from './Pages/Lessons'
import Users from './Pages/Users'
import Trainers from './Pages/Trainers'
import Directions from './Pages/Directions'
import LessonTypes from './Pages/LessonTypes'

export const PUBLIC_ROUTES = [
  {
    PATH: ROUTES.MAIN,
    COMPONENT: Home
  }
]

export const ADMIN_ROUTES = [
  {
    PATH: ROUTES.PROFILE,
    COMPONENT: Profile
  },
  {
    PATH: ROUTES.LESSONS_CONTROL,
    COMPONENT: Lessons
  },
  {
    PATH: ROUTES.USERS,
    COMPONENT: Users
  },
  {
    PATH: ROUTES.DIRECTIONS,
    COMPONENT: Directions
  },
  {
    PATH: ROUTES.LESSON_TYPES,
    COMPONENT: LessonTypes
  },
  {
    PATH: ROUTES.TRAINERS,
    COMPONENT: Trainers
  }
]

export const COACH_ROUTES = [
  {
    PATH: ROUTES.PROFILE,
    COMPONENT: Profile
  },
  {
    PATH: ROUTES.MY_LESSONS,
    COMPONENT: Lessons
  },
]

export const USER_ACCOUNT_ROUTES = [
  {
    PATH: ROUTES.PROFILE,
    COMPONENT: Profile
  },
  {
    PATH: ROUTES.MY_LESSONS,
    COMPONENT: Lessons
  },
]

export const SIGN_IN_ROUTES = [
  {
    PATH: ROUTES.REGISTRATION,
    COMPONENT: Registration
  },
  {
    PATH: ROUTES.LOGIN,
    COMPONENT: Login
  },
  {
    PATH: ROUTES.RESET,
    COMPONENT: Reset
  },
  {
    PATH: ROUTES.RESET_PASSWORD,
    COMPONENT: ResetSend
  }
]