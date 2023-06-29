import { useState } from 'react'

export const useHistoric = () => {
  const [openFilterResponsive, setOpenFilterResponsive] = useState<boolean>(false)

  return {
    openFilterResponsive,
    setOpenFilterResponsive
  }
}