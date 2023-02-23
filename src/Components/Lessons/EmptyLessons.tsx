import { Link } from 'react-router-dom'
import { ENV } from '../../Utils/environment'

const EmptyLessons = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
      <div className="w-[144px] h-[144px] flex justify-center items-center">
        <img src={`${ENV.REACT_APP_FILE_PATH}/girl.png'`} alt="mainImage" />
      </div>
      <div>
        <p>
          Список занятий пуст
        </p>
      </div>
      <div className="mobile-below:px-[16px] mobile-below:mt-[26px]">
        <Link
          to="/#rules"
          className="w-[293px] h-[56px] px-[20px] py-[10px] bg-bordo text-[#FEFAFA] text-[20px] cursor-pointer rounded-[10px] mobile-below:w-[220px] mobile-below:h-[40px] mobile-below:text-[16px]"
        >
          Записаться на занятие
        </Link>
      </div>
    </div>
  )
}

export default EmptyLessons