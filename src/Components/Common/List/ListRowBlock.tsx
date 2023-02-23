import { FC } from 'react'

interface IRowBlock {
  label: string
  value: string | number
}

const ListRowBlock: FC<IRowBlock> = ({ label, value }) => {
  return (
    <div className="flex flex-col w-[10rem]">
      <span className="text-[#000000] text-[12px] leading-[14px] font-[400]">{label}</span>
      <span className="text-[#5C5C5C] text-[16px] leading-[20px] font-[400]">{value}</span>
    </div>
  )
}

export default ListRowBlock