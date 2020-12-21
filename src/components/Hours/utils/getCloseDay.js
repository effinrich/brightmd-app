const getCloseDay = (dayIndex, openTime, closeTime) => {
  let closeDay = dayIndex
  if (openTime >= closeTime) {
    if (dayIndex === 6) {
      closeDay = 0
    } else {
      closeDay = dayIndex + 1
    }
  }
  return closeDay
}

export default getCloseDay
