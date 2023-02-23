import RegistrationForm from '../Components/Forms/RegistrationForm'

const Registration = () => {
  return (
    <div className="md:mt-[20px] 2xl:mt-[100px] flex justify-center flex-col">
      <span className="text-[36px] text-center leading-[56px] text-[#000000]">Регистрация</span>
      <RegistrationForm />
    </div>
  )
}

export default Registration