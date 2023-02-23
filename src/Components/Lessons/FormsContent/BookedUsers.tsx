import React, { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import LessonService from '../../../Services/LessonService'

interface IBookedUsers {
  lessonId: number
}

const BookedUsers: FC<IBookedUsers> = ({ lessonId }) => {

  const [bookedUsers, setBookedUsers] = useState([])
  
  const getBookedUsers = async () => {    
    const resp = await LessonService.getListBookedUsers(lessonId)
    setBookedUsers(resp.data)
  }
  
  useEffect(() => {
    getBookedUsers()
  }, [])

  return (
    <div
      className="flex text-left max-w-[600px]"
    >
      <div className="flex flex-col">
        {bookedUsers.map((user, index) => (
          <div key={index}>
            {user.name + ' ' + user.lastname}
          </div>
        ))}
      </div>
    </div>
  )
}

export default observer(BookedUsers)