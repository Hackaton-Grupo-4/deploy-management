import { useHistoric } from 'hooks'
import { HistoricLayout, HistoricContent } from './styled'
import { Filter } from './Filter'

export const PageHistoric = () => {
  const props = useHistoric()

  return (
    <HistoricLayout>
      <HistoricContent>
        Histórico
      </HistoricContent>
      <Filter {...props} />
    </HistoricLayout>
  )
} 