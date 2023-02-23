import { ChangeEventHandler, FC } from 'react'
import DefaultUserAvatar from '../../Common/DefaultUserAvatar'

interface IEditPhoto {
  onEditPhoto: ChangeEventHandler<HTMLInputElement>
  userPhoto: string
}

const EditPhoto: FC<IEditPhoto> = ({onEditPhoto, userPhoto}) => {
  return (
    <div
      className="flex flex-row justify-start gap-[10px] items-center rounded-[50px] bg-[#F2F2F3] w-full relative"
    >
      {userPhoto ? 
        <img className="rounded-[50px] w-[40px] h-[40px] border border-bordo object-cover" src={userPhoto} alt="" />
        :
        <DefaultUserAvatar />}
      <p className="cursor-pointer">Изменить фото профиля</p>
      <input onChange={onEditPhoto} className="left-[60px] opacity-0 cursor-pointer absolute" type="file" />
    </div>
  )
}

export default EditPhoto