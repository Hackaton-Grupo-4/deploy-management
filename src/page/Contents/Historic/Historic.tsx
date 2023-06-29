import { useHistoric } from 'hooks'
import { HistoricLayout, HistoricFilter, HistoricContent, HistoricBtnFilterResponse } from './styled'
import { LiaFilterSolid } from "react-icons/lia"

export const PageHistoric = () => {
  const { openFilterResponsive, setOpenFilterResponsive } = useHistoric()

  return (
    <HistoricLayout>
      <HistoricBtnFilterResponse showBtnFilter={!openFilterResponsive} onClick={() => setOpenFilterResponsive(true)}>
        <LiaFilterSolid /> Filtro
      </HistoricBtnFilterResponse>
      <HistoricFilter openResponsive={openFilterResponsive} onClick={() => setOpenFilterResponsive(false)}>
        Filtros
      </HistoricFilter>
      <HistoricContent>
        Histórico
      </HistoricContent>
    </HistoricLayout>
  )
} 