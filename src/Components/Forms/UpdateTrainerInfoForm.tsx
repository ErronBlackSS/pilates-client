import { FC, useEffect, useState } from 'react'
import UserService from '../../Services/UserService'

interface IUpdateTrainerInfoForm {
  trainerId: number
  setShowModal: (val: boolean) => void
}

const UpdateTrainerInfoForm : FC<IUpdateTrainerInfoForm> = ({ trainerId, setShowModal }) => {
  
  const [infoExists, setInfoExists] = useState(false)
  const [education, setEducation] = useState('')
  const [certificates, setCertificates] = useState('')
  const [achievements, setAchievements] = useState('')
  const [experience, setExperience] = useState('')
  const [directions, setDirections] = useState('')

  const getTrainerInfo = async () => {
    const resp = await UserService.getTrainerInfo(trainerId)
    
    if (!resp.data) {
      setInfoExists(false)
    }
    if (resp.data) {
      setInfoExists(true)
      setEducation(resp.data.education || '')
      setCertificates(resp.data.certificates || '')
      setAchievements(resp.data.personal_achievements || '')
      setExperience(resp.data.work_experience || '')
      setDirections(resp.data.directions || '')
    }
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setShowModal(false)
    if (infoExists) {
      await UserService.updateTrainerInfo(
        trainerId,
        education,
        certificates,
        achievements,
        experience,
        directions
      )
    } else {
      await UserService.createTrainerInfo(
        trainerId,
        education,
        certificates,
        achievements,
        experience,
        directions
      )
    }
  }

  useEffect(() => {
    getTrainerInfo()
  }, [])

  return (
    <div
      className="flex text-left justify-center w-full"
    >
      <form
        className="overflow-y-scroll"
        onSubmit={onSubmit}
      >
        <div className="mt-4 flex-col md:gap-1 xl:gap-3 align-baseline max-h-[500px]">
          <div className="flex flex-col gap-[25px]">
            <div className="flex flex-row mobile-below:flex-col gap-[20px] overflow-y-scroll">
              <div className="flex w-full flex-col gap-[7px]">
                <label
                  className="block text-[12px] leading-[15px] text-[#000000]"
                >
                Образование
                </label>
                <textarea
                  className="w-full h-[100px] rounded-[10px] border border-[#D9D9DA] p-[10px]"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
              <div className="flex w-full flex-col gap-[7px]">
                <label
                  className="block text-[12px] leading-[15px] text-[#000000]"
                >
                Сертификаты
                </label>
                <textarea
                  className="w-full h-[100px] rounded-[10px] border border-[#D9D9DA] p-[10px]"
                  value={certificates}
                  onChange={(e) => setCertificates(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row mobile-below:flex-col gap-[20px]">
              <div className="flex w-full flex-col gap-[7px]">
                <label
                  className="block text-[12px] leading-[15px] text-[#000000]"
                >
                Личные достижения
                </label>
                <textarea
                  className="w-full h-[100px] rounded-[10px] border border-[#D9D9DA] p-[10px]"
                  value={achievements}
                  onChange={(e) => setAchievements(e.target.value)}
                />
              </div>
              <div className="flex w-full flex-col gap-[7px]">
                <label
                  className="block text-[12px] leading-[15px] text-[#000000]"
                >
                Опыт
                </label>
                <textarea
                  className="w-full h-[100px] rounded-[10px] border border-[#D9D9DA] p-[10px]"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-[7px]">
              <label
                className="block text-[12px] leading-[15px] text-[#000000]"
              >
                Направления
              </label>
              <textarea
                className="w-full h-[100px] rounded-[10px] border border-[#D9D9DA] p-[10px]"
                value={directions}
                onChange={(e) => setDirections(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] bg-bordo"
          >
          Применить
          </button>
        </div>
      </form>
    </div>
  )    
}

export default UpdateTrainerInfoForm