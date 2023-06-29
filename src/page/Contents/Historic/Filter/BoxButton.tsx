import { HistoricFilterBoxBtn } from '../styled'
import { IUseHistoricResponse } from 'interfaces'
import { Button } from 'components'
import { pageButtonsLabel } from 'const'


export const BoxButton = ({ openFilterResponsive, setOpenFilterResponsive }: IUseHistoricResponse) => 
  <HistoricFilterBoxBtn responsive={openFilterResponsive}>
    {
      openFilterResponsive && 
        <Button outline onClick={() => setOpenFilterResponsive(false)}>
          {pageButtonsLabel.cancel}
        </Button>
    }
    <Button onClick={() => {}}>
      {pageButtonsLabel.apply}
    </Button>
  </HistoricFilterBoxBtn>