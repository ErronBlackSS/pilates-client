export enum ROUTES {
  MAIN = '/',
  LOGIN = '/login',
  ACCOUNT = '/account',
  REGISTRATION = '/registration',
  RESET = '/reset',
  RESET_PASSWORD = '/reset/:token',
  PROFILE = '/account/profile',
  MY_LESSONS = '/account/lessons',
  LESSONS_CONTROL = '/account/lessons/control',
  USERS = '/account/users',
  DIRECTIONS = '/account/directions',
  LESSON_TYPES = '/account/lessonstypes',
  TRAINERS = '/account/trainers',
}

export enum ROLES {
  USER = '9bd2b9fc-446b-44ad-bbcd-d97c71004f5d',
  COACH =  'a3ee77b5-dd34-4a63-a460-7eb53eb6e560',
  ADMIN = '1c4f8c85-7a58-4dc9-85cc-d0709820eeea'
}

export enum ButtonColors {
  bordo = ' border border-bordo py-[4px] bg-bordo text-[#FEFAFA] text-[14px]',
  white = ' border border-[#1B1B1B] py-[4px] bg-white text-[#1B1B1B] text-[14px]',
  red = ' outline-none outline-[#FF2E00] outline-[1px] bg-white text-[#FF2E00] text-[14px]',
  borderless = ' outline-none bg-white text-[#1B1B1B] text-[14px]',
  bordo_direcitons = 'outline-none outline bg-bordo text-[#FEFAFA]'
}
