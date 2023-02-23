import { useEffect, useState } from 'react'
import UserService from '../Services/UserService'

const TrainersAdmin = () => {
  
  const [trainers, setTrainers] = useState([])
  
  const getTrainers = async () => {
    const resp = await UserService.getTrainers()
    setTrainers(resp.data)
  }

  useEffect(() => {
    getTrainers()
  }, [])

  return (
    <div className="items-center flex flex-col h-screen w-full bg-[#ea8df7]">
      {trainers && trainers.map(trainer => (
        <div key={trainer.id}>
          {trainer.name} {trainer.id}
        </div>
      ))}      
    </div>
  )
}

export default TrainersAdmin