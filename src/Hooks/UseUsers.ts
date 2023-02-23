import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import UserService from '../Services/UserService'

const PATHNAMES = {
  TRAINERS: '/account/trainers',
  USERS: '/account/users'
}

export const useUsers = () => {
  const location = useLocation()

  const [users, setUsers] = useState([])
  
  const setTrainers = async () => {
    UserService.getTrainers()
      .then(res => {
        setUsers(res.data)
      })
  }

  const setDefaultUsers = async () => {
    UserService.fetchUsers()
      .then(res => {
        setUsers(res.data)
      })
  }

  const onChangeUserRole = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }

  useEffect(() => {
    switch(location.pathname) {
    case PATHNAMES.TRAINERS:
      setTrainers()
      break
    case PATHNAMES.USERS:
      setDefaultUsers()
      break
    default:
      setDefaultUsers()
      break
    }
  }, [location])

  return {
    users,
    onChangeUserRole
  }
}