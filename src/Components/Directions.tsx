import LessonTypesService from '../Services/LessonTypesService'
import { useEffect, useState } from 'react'
import DirectionItem from './Directions/DirectionItem'
import { LessonTypeGroup } from '../Types/LessonTypes'

const Directions = () => {
  const [lessonTypes, setLessonTypes] = useState({} as LessonTypeGroup)
    
  useEffect(() => {
    LessonTypesService.getAllByGroup()
      .then(res => {
        setLessonTypes(res.data)
      })
  }, [])

  return (
    <>
      <div className="mb-[100px] mobile-below:mb-[50px]">
        {lessonTypes && Object.keys(lessonTypes).map((group, indexGroup) => {
          return (
            <div key={indexGroup}>
              <div className="flex mt-[70px] mb-[40px] mobile-below:ml-[19px] mobile-below:mt-[30px] mobile-below:mb-[28px]">
                <h1 className="text-[24px] text-bordo mobile-below:text-[16px]">{group}</h1>
              </div>
              <div className="flex flex-row gap-[16px]">
                <div className="flex items-center mobile-below:hidden">
                  <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 1L2 17L18 33" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-row w-full justify-start overflow-x-scroll scrollbar-hide gap-[32px] mobile-below:gap-[20px] mobile-below:px-[16px]">   
                  {lessonTypes[group].map((lType) => { 
                    return (
                      <DirectionItem
                        key={lType.id}
                        title={lType.title}
                        description={lType.description}
                        duration={lType.duration}
                        image_url={lType.image_url}
                      />
                    )
                  })}
                </div>
                <div className="flex items-center mobile-below:hidden">
                  <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 33L17 17L1 1" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </>
  )
}
export default Directions