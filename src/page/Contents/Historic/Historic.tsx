import { useHistoric } from 'hooks'
import { HistoricLayout, HistoricContent } from './styled'
import { Filter } from './Filter'

export const PageHistoric = () => {
  const props = useHistoric()

  return (
    <HistoricLayout>
      <Filter {...props} />
      <HistoricContent>
        Histórico
      </HistoricContent>
    </HistoricLayout>
  )
} 