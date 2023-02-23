export const getCurrentWeek = () => {
  const date = new Date()
  let currentDayIndex = date.getDay()
  currentDayIndex = currentDayIndex === 0 ? 7 : currentDayIndex
  if (currentDayIndex === 1) {
    const start = date
    let end = new Date(start)
    end = new Date(end.setDate(end.getDate() + 7))
    start.setHours(3)
    start.setMinutes(0)
    end.setHours(2)
    end.setMinutes(59)
    return { start: start, end: end }
  } else {
    const start = new Date(date.setDate(date.getDate() - currentDayIndex + 1))
    let end = new Date(start)
    end = new Date(end.setDate(end.getDate() + 7))
    start.setHours(3)
    start.setMinutes(0)
    end.setHours(2)
    end.setMinutes(59)
    return { start: start, end: end }
  }
}

export const getNextWeek = () => {
  const date = new Date(new Date().setDate(new Date().getDate() + 7))
  let currentDayIndex = date.getDay()
  currentDayIndex = currentDayIndex === 0 ? 7 : currentDayIndex
  if (currentDayIndex === 1) {
    const start = date
    let end = new Date(start)
    end = new Date(end.setDate(end.getDate() + 7))
    start.setHours(3)
    start.setMinutes(0)
    end.setHours(2)
    end.setMinutes(59)
    return { start: start, end: end }
  } else {
    const start = new Date(date.setDate(date.getDate() - currentDayIndex + 1))
    let end = new Date(start)
    end = new Date(end.setDate(end.getDate() + 7))
    start.setHours(3)
    start.setMinutes(0)
    end.setHours(2)
    end.setMinutes(59)
    return { start: start, end: end }
  }
}