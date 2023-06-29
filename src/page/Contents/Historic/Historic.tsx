import { useHistoric } from 'hooks'
import { HistoricLayout, HistoricFilter, HistoricContent, HistoricBtnFilterResponse, HistoricFilterBoxBtn, HistoricFilterBox } from './styled'
import { Button } from 'components'
import { LiaFilterSolid } from "react-icons/lia"

export const PageHistoric = () => {
  const { openFilterResponsive, setOpenFilterResponsive } = useHistoric()

  return (
    <HistoricLayout>
      <HistoricBtnFilterResponse showBtnFilter={!openFilterResponsive} onClick={() => setOpenFilterResponsive(true)}>
        <LiaFilterSolid /> Filtro
      </HistoricBtnFilterResponse>
      <HistoricFilter openResponsive={openFilterResponsive}>
        <HistoricFilterBox>
         Filtros
        </HistoricFilterBox>
        <HistoricFilterBoxBtn responsive={openFilterResponsive}>
          {
            openFilterResponsive && 
              <Button outline onClick={() => setOpenFilterResponsive(false)}>
                Cancelar
              </Button>
          }
          <Button onClick={() => {}}>
            Filtrar
          </Button>
        </HistoricFilterBoxBtn>
      </HistoricFilter>
      <HistoricContent>
        Histórico
      </HistoricContent>
    </HistoricLayout>
  )
} 