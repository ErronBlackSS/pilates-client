import React, { FC } from 'react'
import ResetForm from '../Components/Forms/ResetForm'

const ResetSend: FC = () => {
  return (
    <div>
      <div className="md:mt-[20px] 2xl:mt-[100px] flex justify-center flex-col">
        <span className="text-[36px] text-center leading-[56px] text-[#000000]">Восстановление пароля</span>
        <ResetForm />
      </div>
    </div>
  )
}

export default ResetSend