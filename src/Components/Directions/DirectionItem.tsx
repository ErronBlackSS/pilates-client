import { FC, useState } from 'react'
import { ButtonColors } from '../../Utils/constance'
import Button from '../Common/Button'
import Modal from '../Common/Modal'
import { REACT_APP_FILE_PATH } from '../..'
interface IDirectionItem {
  title: string
  description: string
  duration: number
  image_url: string
}

const DirectionItem: FC<IDirectionItem> = ({ title, description, duration, image_url }) => {


  const [showModalInfo, setShowModalInfo] = useState(false)

  const imageLink = image_url ? image_url : REACT_APP_FILE_PATH + '/test_yoga.png'

  return (
    <>
      {showModalInfo && <Modal
        title="Направление"
        setShowModal={setShowModalInfo}
      >
        <div className="relative flex flex-col w-[600px] gap-[25px] px-[36px] pb-[20px] text-[14px] mobile-below:w-[288px] mobile-below:text-[12px] mobile-below:px-[0px]">
          <div>
            <span className="text-bordo">Название: </span>
            <span>{title}</span>
          </div>
          <div>
            <span className="text-bordo">Длительность: </span>
            <span>{duration} минут</span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="text-bordo">Описание: </span>
            <span>{description}</span>
          </div>
        </div>
      </Modal>}
      <div>
        <div className="flex flex-row justify-between text-[16px] mobile-below:text-[12px]">
          <div>{title}</div>
          <div>{duration} минут</div>
        </div>
        <div>
          <div className="relative w-[389px] h-[178px] mobile-below:w-[231px] mobile-below:h-[125px]">  
            <div className="absolute bottom-0">
              <img src={imageLink} alt="directionImage" className="rounded-[10px] w-[389px] h-[178px] object-cover mobile-below:w-[231px] mobile-below:h-[125px]"></img>    
            </div>
            <div className="absolute right-0 bottom-0 m-[5px]">
              <Button
                className="w-[128px] h-[36px] text-[16px] rounded-[10px] mobile-below:w-[109px] mobile-below:h-[28px] mobile-below:rounded-[7px] mobile-below:text-[14px]"
                color={ButtonColors.bordo_direcitons}
                handler={() => {
                  setShowModalInfo(true)
                }}
              >
                Подробнее
              </Button>                           
            </div>
          </div>            
        </div>
      </div>  
    </>
  )
}

export default DirectionItem