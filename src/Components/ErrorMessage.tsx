import { FC } from 'react'

const ErrorMessage: FC<any> = (msg: string) => {
  return (
    <span className="text-red-500">
      {msg}
    </span>
  )
}

export default ErrorMessage