import Schedule from '../Components/Schedule'
import useWindowWidth from '../Hooks/UseScreenWidth'
import TrainersSwipe from '../Components/TrainersSwipe'
import Directions from '../Components/Directions'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ENV } from '../Utils/environment'

const Main = () => {
  const windowWidth = useWindowWidth()

  const price = useRef(null)
  const directions = useRef(null)
  const trainers = useRef(null)
  const schedule = useRef(null)
  const rules = useRef(null)

  const location = useLocation()
  
  useEffect(() => {
    if (location.hash === '#schedule') {
      schedule.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.hash === '#directions') {
      directions.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.hash === '#price') {
      price.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.hash === '#trainers') {
      trainers.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.hash === '#rules') {
      rules.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <>
      <div className="w-[1366px] flex flex-col m-auto mobile-below:w-full">
        <div className="flex mobile-below:flex-col mobile-above:flex-row justify-left">
          <div className="max-w-[500px]">
            <div className="flex flex-col mt-[52px] mobile-below:mt-[0px]">
              <div className="flex flex-row mobile-below:gap-[10px] mobile-below:px-[16px]">
                <div className="flex items-center mobile-below:w-[154px]">
                  <span className="text-[64px] leading-[88px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
              Студия Екатерины Федоровской
                  </span>
                </div>
                <div className="w-[144px] h-[144px] flex justify-center items-center mobile-above:hidden">
                  <img src={ENV.REACT_APP_FILE_PATH + '/girl.png'} alt="mainImage" />
                </div>
              </div>
              <div className="w-[434px] mt-[28px] mobile-below:w-[190px] mobile-below:h-[40px] mobile-below:ml-[16px] mobile-below:mt-[0px]">
                <span className="text-[24px] leading-[40px] font-[500] text-[#5C5C5C] mobile-below:text-[14px] mobile-below:leading-[20px]">
              Квалифицированный подход с заботой о Вашем здоровье
                </span>
              </div>
              
              <div className="mt-[52px] mobile-below:px-[16px] mobile-below:mt-[26px]">
                <a href="#schedule"  className="w-[293px] h-[56px] px-[20px] py-[10px] bg-bordo text-[#FEFAFA] text-[20px] cursor-pointer rounded-[10px] mobile-below:w-[220px] mobile-below:h-[40px] mobile-below:text-[16px]">
              Записаться на занятие
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-[16px]">
            <div className="flex bg-[#FFFEFE] shadow-md mt-[52px] pl-[52px] rounded-[28px] mobile-below:pl-[12px] mobile-below:mt-[27px] mobile-below:rounded-[10px]">
              <ul className="w-full list-none text-[20px] text-[#1B1B1B] mt-[52px] mobile-below:text-[14px] mobile-below:mt-[8px]">
                <li className="pb-[31px] mobile-below:pb-[8px]">Уникальные направления body&mind</li>
                <li className="py-[32px] mobile-below:py-[8px]">Занятия в формате мини-групп</li>
                <li className="py-[32px] mobile-below:py-[8px]">Чистота и свежий воздух</li>
                <li className="pt-[32px] pb-[32px] mobile-below:pt-[8px] mobile-below:pb-[8px]">Заботливые, опытные тренеры</li>
                <li className="pt-[32px] pb-[52px] mobile-below:pt-[8px] mobile-below:pb-[8px]">Абонементы без ограничения сроков</li>
              </ul>         
              <div className="w-full flex items-center mobile-below:hidden">
                <img src={ENV.REACT_APP_FILE_PATH + '/girl.png'} alt="mainImage" />
              </div>
            </div>
          </div>
        </div>
        <div id="trainers" ref={trainers} className="mt-[117px] mb-[65px] mobile-below:ml-[19px] mobile-below:mb-[30px] mobile-below:mt-[50px]">
          <h1 className="text-[44px] mobile-below:text-[24px]">Наши тренеры</h1>
        </div>
        
        <TrainersSwipe />
        <div id="price" ref={price} className="mt-[117px] mb-[69px] mobile-below:ml-[19px] mobile-below:mb-[30px] mobile-below:mt-[40px]">
          <h1 className="text-[44px] mobile-below:text-[24px]">Прайс-лист</h1>
        </div>
        <div className="form-flex gap-[32px] mobile-below:mx-[0px]">      
          <div className="flex flex-col w-full">
            <h2 className="text-[24px] mobile-below:text-[16px] mobile-below:ml-[19px]">Индивидуальные тренировки</h2>
            <div className="flex bg-[#FFFEFE] w-full shadow-md justify-between rounded-[7px] pl-[32px] mt-[25px] mobile-below:mb-[25px] mobile-below:mt-[15px]">    
              <div className="flex flex-col w-full relative text-[20px] my-[44px] mobile-below:my-[20px] mobile-below:text-[13px]">
                <div className="flex flex-row justify-between mb-[25px] mobile-below:mb-[10px]">
                  <div className="">Персональное занятие</div>
                  <div className="w-[105px] mobile-below:w-[79px] text-center">1300р</div>
                </div>
                <div className="flex flex-row justify-between my-[25px] mobile-below:my-[10px]">
                  <div className="">Блок на 5 персональных занятий</div>
                  <div className="w-[105px] mobile-below:w-[79px] text-center">6000р</div>
                </div>
                <div className="flex flex-row justify-between mt-[25px] mobile-below:mt-[10px]">
                  <div className="">Сплит (2 человека)</div>
                  <div className="w-[105px] mobile-below:w-[79px] text-center">1600р</div>
                </div>    
                <div className="w-[2px] h-full right-[121px] bg-bordo absolute mobile-below:right-[79px] mobile-below:w-[1px]"></div>          
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">      
            <h3 className="text-[24px] mobile-below:text-[16px] mobile-below:ml-[19px]">Групповые тренировки</h3>
            <div className="flex bg-[#FFFEFE] w-full shadow-md justify-between rounded-[7px] pl-[32px] mt-[25px] mobile-below:mb-[25px] mobile-below:mt-[15px]">    
              <div className="flex flex-col w-full relative my-[44px] text-[20px] mobile-below:my-[20px] mobile-below:text-[13px]">   
                <div className="flex flex-row justify-between mb-[20px] mobile-below:mb-[10px]">
                  <div className="">Разовое посещение</div>
                  <div className="w-[105px] mobile-below:w-[79px] text-center">600р</div>
                </div>
                <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                  <div className="">Абонемент на 4 занятия</div>
                  <div className="w-[105px] mobile-below:w-[79px] text-center">2200р</div>
                </div>
                <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                  <div className="">Абонемент на 8 занятия</div>
                  <div className="w-[105px] mobile-below:w-[79px] text-center">4000р</div>
                </div>
                <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                  <div className="">Абонемент на 4 занятия сайкл</div>
                  <div className="w-[105px] mobile-below:w-[79px] text-center">2400р</div>
                </div>
                <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                  <div className="">Сайкл тренировка разовое</div>
                  <div className="w-[105px] mobile-below:w-[79px] text-center">750р</div>
                </div>  
                <div className="flex flex-row justify-between items-center my-[20px] mobile-below:my-[10px]">
                  <div className="">Подарочные сертификаты</div>
                  <div className="w-[105px] mobile-below:w-[79px] text-center leading-[40px]">
                    3000р
                    5000р
                    10000р
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-[20px] mobile-below:mt-[10px]">
                  <div className="">Мини-группа (3-4 человека)</div>
                  <div className="text-center">
                    <p className="w-[105px] mobile-below:w-[79px] text-center">750р</p>
                    <p className="text-[16px] text-[#878787] w-[105px] mobile-below:w-[79px] text-center mobile-below:text-[10px]">(с человека)</p>
                  </div>
                </div>    
                <div className="w-[2px] h-full right-[121px] bg-bordo absolute mobile-below:right-[79px] mobile-below:w-[1px]"></div>                     
              </div>            
            </div>
          </div>
        </div>
        <div id="directions" ref={directions} className="mt-[117px] mobile-below:ml-[19px] mobile-below:mt-[50px]">
          <h1 className="text-[44px] mobile-below:text-[24px]">Направления</h1>
        </div>
        <Directions />
        <div id="schedule" ref={schedule} className="overflow-x-hidden mobile-below:px-[10px]">
          <Schedule />
        </div>

        <div id="rules" ref={rules} className="mt-[110px] mb-[50px] mobile-below:ml-[19px] mobile-below:mb-[30px] mobile-below:mt-[50px]">
          <h1 className="text-[44px] mobile-below:text-[24px]">Правила посещения</h1>
        </div>
        <div className="flex flex-row w-full">
          <div className="ml-[25px] mobile-below:ml-[32px] mobile-below:mr-[16px]">
            <ul className="w-[672px] list-disc list-bordo text-[19px] text-bordo mobile-below:w-full">
              <li> 
                <div className="text-[#1B1B1B] pb-[10px]">Групповые занятия имеют ограничения по количеству занимающихся.</div>                
              </li>
              <li>
                <div className="text-[#1B1B1B] py-[10px]">Предварительная запись на тренировки осуществляется на сайте студии или по телефону.</div> 
              </li>
              <li>
                <div className="text-[#1B1B1B] py-[10px]">Если Вы записаны и не сможете посетить урок, необходимо обязательно, минимум за 2 часа до начала занятия, выписаться с этого урока, в противном случае, занятие будет списано с вашего абонемента.</div>
              </li>
              <li>
                <div className="text-[#1B1B1B] py-[10px]">В случае опоздания на урок более, чем на 10 минут, инструктор имеет право не допустить клиента до тренировки.</div>
              </li>
              <li>
                <div className="text-[#1B1B1B] pt-[10px]">Во избежание травм настоятельно рекомендуется посещение уроков, соответствующих Вашему уровню подготовленности.</div>
              </li>
            </ul>
          </div>
          <div className="w-full mobile-below:hidden">
            <div >
              <img className="m-auto" src={ENV.REACT_APP_FILE_PATH + '/girl.png'} alt="mainImage" />
            </div>
          </div>
        </div>
        <div className="mt-[100px] mb-[44px] mobile-below:mt-[55px] mobile-below:mx-[16px]">
          <h1 className="text-[16px] text-[#464646] ml-[5px] mb-[10px] mobile-below:text-[13px]">улица Свердлова, 26, Ярославль</h1>          
          <iframe title="Карта" className="shadow-md" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad4ed878e0e7a2f1ce4ecff230377877f8cf25bc282569d380d2a761d1f7489d6&amp;source=constructor" width="100%" height="395" frameBorder="0"></iframe>
        </div>
        
      </div>
      <div className="w-full">
        {windowWidth > 768 ? 
          <footer className="bg-[#FFFEFE] md:p-5 dark:bg-gray-800">
            <div className="flex flex-row justify-between w-full px-[55px] cursor-pointer ">
              <a href="tel:+7905636060" className="text-bordo">+7 (905) 636-06-04</a>            
              <div className="text-[#1B1B1B]">© 2022 Copyright Студия Екатерины Федоровской</div>             
              <div>
                <div className="flex flex-row justify-between w-full gap-[30px]">
                  <a href="https://vk.com/bodyart_yar" target="_blank" rel="noreferrer">
                    <svg className="mt-[3px]"  width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22.9586 0.972222C23.1292 0.423889 22.9586 0.0252776 22.2039 0.0252776H19.6945C19.0615 0.0252776 18.7692 0.374305 18.5986 0.747639C18.5986 0.747639 17.3078 3.93653 15.5051 6.00396C14.9205 6.60187 14.6527 6.80118 14.336 6.80118C14.1654 6.80118 13.9459 6.60187 13.9459 6.05403V0.946458C13.9459 0.298958 13.7514 0 13.2152 0H9.26876C8.87872 0 8.6353 0.298958 8.6353 0.597917C8.6353 1.22063 9.53662 1.37035 9.63389 3.11403V6.90278C9.63389 7.72479 9.49014 7.875 9.17101 7.875C8.31857 7.875 6.24809 4.66132 5.00609 0.999444C4.76459 0.274167 4.51926 0 3.8858 0H1.35244C0.621709 0 0.5 0.348542 0.5 0.722361C0.5 1.39514 1.35244 4.78285 4.47038 9.26674C6.54086 12.3292 9.48822 13.9752 12.1433 13.9752C13.7514 13.9752 13.9459 13.6014 13.9459 12.9787V10.6619C13.9459 9.91472 14.0921 9.79028 14.6038 9.79028C14.9689 9.79028 15.6268 9.9891 17.1127 11.4591C18.8176 13.2028 19.1099 14 20.0601 14H22.569C23.2997 14 23.6409 13.6262 23.4459 12.9038C23.2269 12.1815 22.3984 11.1353 21.3265 9.88993C20.7419 9.19285 19.8651 8.42042 19.5972 8.0466C19.2321 7.54833 19.3294 7.34903 19.5972 6.90083C19.5728 6.90083 22.6423 2.46653 22.9586 0.970278" fill="#1B1B1B"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
          : 
          <footer className="bg-[#FFFEFE] md:p-5 dark:bg-gray-800">          
            <div className="flex flex-col justify-center items-center w-full px-[23px] py-[20px] gap-[14px]">
              <div>
                <div className="flex flex-row w-full gap-[30px] cursor-pointer">
                  <a href="https://vk.com/bodyart_yar" target="_blank" rel="noreferrer">
                    <svg className="mt-[3px]"  width="17" height="10" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22.9586 0.972222C23.1292 0.423889 22.9586 0.0252776 22.2039 0.0252776H19.6945C19.0615 0.0252776 18.7692 0.374305 18.5986 0.747639C18.5986 0.747639 17.3078 3.93653 15.5051 6.00396C14.9205 6.60187 14.6527 6.80118 14.336 6.80118C14.1654 6.80118 13.9459 6.60187 13.9459 6.05403V0.946458C13.9459 0.298958 13.7514 0 13.2152 0H9.26876C8.87872 0 8.6353 0.298958 8.6353 0.597917C8.6353 1.22063 9.53662 1.37035 9.63389 3.11403V6.90278C9.63389 7.72479 9.49014 7.875 9.17101 7.875C8.31857 7.875 6.24809 4.66132 5.00609 0.999444C4.76459 0.274167 4.51926 0 3.8858 0H1.35244C0.621709 0 0.5 0.348542 0.5 0.722361C0.5 1.39514 1.35244 4.78285 4.47038 9.26674C6.54086 12.3292 9.48822 13.9752 12.1433 13.9752C13.7514 13.9752 13.9459 13.6014 13.9459 12.9787V10.6619C13.9459 9.91472 14.0921 9.79028 14.6038 9.79028C14.9689 9.79028 15.6268 9.9891 17.1127 11.4591C18.8176 13.2028 19.1099 14 20.0601 14H22.569C23.2997 14 23.6409 13.6262 23.4459 12.9038C23.2269 12.1815 22.3984 11.1353 21.3265 9.88993C20.7419 9.19285 19.8651 8.42042 19.5972 8.0466C19.2321 7.54833 19.3294 7.34903 19.5972 6.90083C19.5728 6.90083 22.6423 2.46653 22.9586 0.970278" fill="#1B1B1B"/>
                    </svg>
                  </a>
                </div>
              </div>
              <a href="tel:+7905636060" className="text-bordo text-[11px]">+7 (905) 636-06-04</a>             
              <div className="text-[#1B1B1B] text-[11px]">© 2022 Copyright Студия Екатерины Федоровской</div>             
            </div>
          </footer>}
      </div>
    </>
  )
}

export default Main