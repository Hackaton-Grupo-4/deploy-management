import { Dispatch, SetStateAction } from 'react'
import { TChosenPage } from 'interfaces'

export interface IPageContext {
  chosenPage: TChosenPage
  setChosenPage: Dispatch<SetStateAction<TChosenPage>>
  openMenuResponsive: boolean
  setOpenMenuResponsive: Dispatch<SetStateAction<boolean>>
}