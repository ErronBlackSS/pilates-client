import { FC, useEffect, useState } from 'react'

interface IMainSection {
  children: React.ReactNode
  isToggled: boolean | null
}

const MainSection: FC<IMainSection> = ({children, isToggled}) => {
  
  const [mainSectionClasses, setMainSectionClasses] = useState('')  

  useEffect(() => {
    let classes = 'mobile:above:pr-[60px] mobile:below:px-[60px] transition-all duration-500' + (isToggled ? ' ml-[300px]' : ' ml-[80px]')
    
    if(isToggled === null) return

    if(isToggled) {
      classes += ' ml-[300px]'
    } else {
      classes += ' ml-[80px]'
    }
    setMainSectionClasses(classes)
  }, [])

  return (
    <div className={mainSectionClasses}>
      {children}     
    </div>
  )
}

export default MainSection