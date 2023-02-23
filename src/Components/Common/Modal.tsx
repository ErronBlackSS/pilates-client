import { FC } from 'react'

interface IModal {
  title: string
  children: any
  setShowModal: (value: boolean) => void
}

const Modal: FC<IModal> = ({ title, setShowModal, children }) => {

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div 
      className="fixed w-[100vw] h-[100vh] top-0 left-0 flex z-[100] items-center justify-center bg-[rgba(0,0,0,0.4)] mobile-below:px-[5px]"
      onClick={closeModal}
    >
      <div
        className="bg-[#FFF] min-w-[300px] rounded-[12px] relative p-[20px] transition-all duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-row justify-center w-full">    
            <div className="text-center text-[24px] text-[#1B1B1B] leading-[24px] mobile-below:text-[17px]">
              {title}
            </div>
          </div>
          <div className="flex flex-col">
            {children}
          </div>
        </div>
        <div className="absolute top-0 right-0 mx-[20px] my-[20px]">
          <button onClick={closeModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 21.9707L2 1.9707" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round"/>
              <path d="M2 21.9707L22 1.9707" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>  
      </div>
    </div>
  )
}

export default Modal