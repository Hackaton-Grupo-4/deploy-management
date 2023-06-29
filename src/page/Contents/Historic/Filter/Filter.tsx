import React from 'react'
import { HistoricFilter, HistoricBtnFilterResponse } from '../styled'
import { IUseHistoricResponse } from 'interfaces'
import { BoxButton } from './BoxButton'
import { BoxFilter } from './BoxFilter'
import { LiaFilterSolid } from "react-icons/lia"
import { pageButtonsLabel } from 'const'
import { Button } from 'components'

export const Filter = (props: IUseHistoricResponse) => 
  <React.Fragment>
    <HistoricBtnFilterResponse showBtnFilter={!props.openFilterResponsive}>
      <Button onClick={() => props.setOpenFilterResponsive(true)} icon>
        <LiaFilterSolid />
      </Button>
    </HistoricBtnFilterResponse>
    <HistoricFilter openResponsive={props.openFilterResponsive}>
      <BoxFilter />
      <BoxButton {...props} />
    </HistoricFilter>
  </React.Fragment>