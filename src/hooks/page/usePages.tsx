import { useState } from 'react'
import { IPageContext, TChosenPage, ChosePageEnum } from 'interfaces'

export const usePages = (): IPageContext => {
  const [chosenPage, setChosenPage] = useState<TChosenPage>(ChosePageEnum.HISTORIC)
  const [openMenuResponsive, setOpenMenuResponsive] = useState<boolean>(false)
  
  return {
    chosenPage,
    setChosenPage,
    openMenuResponsive,
    setOpenMenuResponsive
  }
}