import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../..'

const DefaultUserAvatar = () => {

  const { user } = useContext(Context)
  
  const nameFirstLetter = user.user.name[0].toUpperCase()
  const lastnameFirstLetter = user.user.lastname[0].toUpperCase()

  return (
    <div className="h-[40px] w-[40px] text-center border-[2px] border-bordo rounded-[20px]">
      <p className="mt-[5px]">{nameFirstLetter + lastnameFirstLetter}</p>
    </div>
  )
}

export default observer(DefaultUserAvatar)