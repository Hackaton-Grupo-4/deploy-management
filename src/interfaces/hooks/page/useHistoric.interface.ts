import { Dispatch, SetStateAction } from "react"

export interface IUseHistoricResponse {
  openFilterResponsive: boolean
  setOpenFilterResponsive: Dispatch<SetStateAction<boolean>>
}