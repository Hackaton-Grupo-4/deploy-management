import { useHistoric } from 'hooks'
import { HistoricLayout, HistoricContent, HistoricHeader, HistoricList } from './styled'
import { Filter } from './Filter'

export const PageHistoric = () => {
  const props = useHistoric()

  return (
    <HistoricLayout>
      <HistoricHeader>
        Estatíticas
      </HistoricHeader>
      <HistoricContent>
        <HistoricList>
          Listas
        </HistoricList>
        <Filter {...props} />
      </HistoricContent>
    </HistoricLayout>
  )
} 