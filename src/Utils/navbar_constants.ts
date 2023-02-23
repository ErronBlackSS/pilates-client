import IconLessonTypes from '../Components/Common/Icons/IconLessonTypes'
import IconUser from '../Components/Common/Icons/IconUser'
import IconTrainers from '../Components/Common/Icons/IconTrainers'
import IconTrainings from '../Components/Common/Icons/IconTrainings'

export const SIDEBAR_ITEMS = {
  USER: [
    {
      title: 'Мои уроки',
      path: '/account/lessons',
      icon: IconTrainings
    },
  ],
  COACH: [
    {
      title: 'Мои уроки',
      path: '/account/lessons',
      icon: IconTrainings
    },
  ],
  ADMIN: [
    {
      title: 'Типы занятий',
      path: '/account/lessonstypes',
      icon: IconLessonTypes
    },
    {
      title: 'Пользователи',
      path: '/account/users',
      icon: IconUser
    },
    {
      title: 'Список занятий',
      path: '/account/lessons/control',
      icon: IconTrainings
    },
    {
      title: 'Тренеры',
      path: '/account/trainers',
      icon: IconTrainers
    }
  ]
}
