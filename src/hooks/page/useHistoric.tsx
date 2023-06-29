import { useState } from 'react'
import { IUseHistoricResponse } from 'interfaces'

export const useHistoric = (): IUseHistoricResponse => {
  const [openFilterResponsive, setOpenFilterResponsive] = useState<boolean>(false)

  return {
    openFilterResponsive,
    setOpenFilterResponsive
  }
}