import { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import { useParams } from 'react-router-dom'
import ResetSendForm from '../Components/Forms/ResetSendForm'
import { useNavigate } from 'react-router-dom'

const Reset = () => {

  const { token } = useParams()
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      return await UserService.fetchUserByResetToken(token)
    }
    fetchUser().then(resp => {
      if (resp.data) {
        setUser(resp.data)
      } else {
        navigate('/')
      }
    })
  }, [navigate, token])

  return (
    <div className="md:mt-[20px] 2xl:mt-[100px] flex justify-center flex-col">
      <span className="text-[36px] text-center leading-[56px] text-[#000000]">Восстановление пароля</span>
      {user ? <ResetSendForm user_id={user.user_id} /> : <div>Загрузка</div>}
    </div>
  )
}

export default Reset