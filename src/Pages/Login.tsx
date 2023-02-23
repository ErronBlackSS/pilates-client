import LoginForm from '../Components/Forms/LoginForm'

const Login = () => {
  return (
    <div className="md:mt-[20px] 2xl:mt-[100px] flex justify-center flex-col">
      <span className="text-[36px] text-center leading-[56px] text-[#000000]">Вход</span>
      <LoginForm /> 
    </div>
  )
}

export default Login