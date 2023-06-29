import React from 'react'
import { HistoricFilter, HistoricBtnFilterResponse } from '../styled'
import { IUseHistoricResponse } from 'interfaces'
import { BoxButton } from './BoxButton'
import { BoxFilter } from './BoxFilter'
import { LiaFilterSolid } from "react-icons/lia"
import { pageButtonsLabel } from 'const'

export const Filter = (props: IUseHistoricResponse) => 
  <React.Fragment>
    <HistoricBtnFilterResponse showBtnFilter={!props.openFilterResponsive} onClick={() => props.setOpenFilterResponsive(true)}>
      <LiaFilterSolid /> {pageButtonsLabel.filter}
    </HistoricBtnFilterResponse>
    <HistoricFilter openResponsive={props.openFilterResponsive}>
      <BoxFilter />
      <BoxButton {...props} />
    </HistoricFilter>
  </React.Fragment>