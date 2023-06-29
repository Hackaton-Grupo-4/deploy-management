import { HistoricFilterBoxBtn } from '../styled'
import { IUseHistoricResponse } from '../../../../interfaces'
import { Button } from '../../../../components'
import { AiOutlineArrowUp } from "react-icons/ai"


export const BoxButton = ({ openFilterResponsive, setOpenFilterResponsive }: IUseHistoricResponse) => 
  <HistoricFilterBoxBtn responsive={openFilterResponsive}>
    {
      openFilterResponsive && 
        <Button onClick={() => setOpenFilterResponsive(false)} icon>
          <AiOutlineArrowUp />
        </Button>
    }
  </HistoricFilterBoxBtn>