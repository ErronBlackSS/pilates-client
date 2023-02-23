import { FC, useState } from 'react'
import { ENV } from '../../Utils/environment'
import { ButtonColors } from '../../Utils/constance'
import Button from '../Common/Button'
import Modal from '../Common/Modal'

interface ITrainerItem {
  name: string
  lastname: string
  image_url: string
  education: string
  certificates: string
  personal_achievements: string
  work_experience: string
  directions: string
}

const TrainerItem: FC<ITrainerItem> = ({name, lastname, image_url, education, certificates, personal_achievements, work_experience, directions}) => {

  const [showModalInfo, setShowModalInfo] = useState(false)

  const imageLink = image_url? image_url : ENV.REACT_APP_FILE_PATH + '/user_photos/sss.png'

  const isBoss = (name === 'Екатерина' && lastname === 'Федоровская') ? true : false 

  return (
    <>
      {showModalInfo && <Modal
        title={name + ' ' + lastname}
        setShowModal={setShowModalInfo}
      >
        <div className="relative flex flex-col w-[600px] gap-[25px] px-[36px] pb-[20px] text-[14px] mobile-below:w-[288px] mobile-below:text-[12px] mobile-below:px-[0px]">
          {(education !== null) &&
            <div className="flex flex-col gap-[8px]">
              <span className="text-bordo">Образование: </span>
              <span>{education}</span>
            </div>
          }
          {(certificates !== null) &&
            <div className="flex flex-col gap-[8px]">
              <span className="text-bordo">Сертификаты: </span>
              <span>{certificates}</span>
            </div>
          }
          {(personal_achievements !== null) &&
            <div className="flex flex-col gap-[8px]">
              <span className="text-bordo">Личные достижения: </span>
              <span>{personal_achievements}</span>
            </div>
          }
          {(work_experience !== null) &&
            <div>
              <span className="text-bordo">Опыт работы: </span>
              <span>{work_experience}</span>
            </div>
          }
          {(directions !== null) &&
           <div className="flex flex-col gap-[8px]">
             <span className="text-bordo">Направления: </span>
             <span>{directions}</span>
           </div>
          }
        </div>
      </Modal>}

      <div className="flex flex-col bg-[#FFFEFE] rounded-[10px] shadow-md pb-[12px] mobile-below:pb-[10px]">
        <div className="relative mobile-below:w-[216px]">
          <img className="w-[284px] h-[284px] rounded-t-[10px] object-cover mobile-below:w-[216px] mobile-below:h-[204px]" src={imageLink} alt="trainerImage"/>
          {isBoss &&
            <div className="flex justify-center items-center w-full h-[44px] rounded-t-[10px] absolute bg-[#464646]/70 top-0 mobile-below:h-[34px]">
              <div className="text-[#F2F2F3] text-[20px] mobile-below:text-[16px]">Руководитель студии</div>
            </div>
          }
          <div className="w-full absolute bottom-0 triangle-top"></div>
        </div>
        <div className="px-[9px]">
          <h1 className="text-center text-[#1B1B1B] text-[20px] mt-[24px] mb-[12px] mobile-below:text-[16px] mobile-below:mt-[14px] mobile-below:mb-[10px]">{name + ' ' + lastname}</h1>
          <div className="w-[82%] h-[3px] bg-bordo m-auto mb-[24px] mobile-below:mb-[16px]"></div>    
          <h2 className="text-[#1B1B1B] text-[16px] mobile-below:text-[12px]">Инструктор групповых программ</h2>          
          <h3 className="text-[#1B1B1B] text-[16px] mobile-below:text-[12px]">Персональный тренер</h3>
        </div>
        
        <Button
          className="w-[94%] h-[40px] text-[#fff] text-[16px] mx-auto mt-[6px] bottom-0 cursor-pointer rounded-[10px] bg-bordo mobile-below:text-[14px] mobile-below:h-[28px] mobile-below:rounded-[8px]"
          color={ButtonColors.bordo_direcitons}
          handler={() => {
            setShowModalInfo(true)
          }}
        >
          Подробнее
        </Button>  
      </div>
    </>
  )
}

export default TrainerItem