import { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import TrainerItem from './Trainers/TrainerItem'

const TrainersSwipe = () => {

  const [trainers, setTrainers] = useState([])

  useEffect(() => {
    UserService.getTrainers()
      .then(res => {
        setTrainers(res.data)
      })
  }, [])

  return (
    <div className="flex w-full">
      <div className="flex flex-wrap gap-[32px] pb-[10px] mobile-below:px-[16px] mobile-below:flex-nowrap mobile-below:overflow-x-scroll scrollbar-hide mobile-below:justify-start">          
        {trainers.map((coach) => {
          return (
            <TrainerItem
              key={coach.id}
              name={coach.name}
              lastname={coach.lastname}
              image_url={coach.image_url}
              education={coach.education}
              certificates={coach.certificates}
              personal_achievements={coach.personal_achievements}
              work_experience={coach.work_experience}
              directions={coach.directions}                      
            />
          )
        })}
      </div>        
    </div>
  ) 
}

export default TrainersSwipe