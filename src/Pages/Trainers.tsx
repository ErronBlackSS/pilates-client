import { useUsers } from '../Hooks/UseUsers'
import TrainerCard from '../Components/Trainers/TrainerCard'

const Trainers = () => {
  const title = 'Тренеры'
  
  const { users, onChangeUserRole } = useUsers()
  
  return (
    <>
      <div className="w-full flex-col mobile-above:pt-[50px] mobile-above:pr-[60px]">
        <div className="flex flex-row mobile-below:justify-center items-center">      
          <span className="text-[36px] leading-[56px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
            {title}
          </span>
        </div>
          
        <div className="flex flex-wrap gap-[32px] my-[25px] mobile-below:items-center mobile-below:justify-center">
          {users.map((user) => {
            return (
              <TrainerCard
                onChangeUserRole={onChangeUserRole}
                key={user.id}
                id={user.id}
                name={user.name}
                lastname={user.lastname}
                image_url={user.image_url}
                phone={user.phone}
                email={user.email}
              />
            )
          })
          }
        </div>
      </div>
    </>
  )
}

export default Trainers