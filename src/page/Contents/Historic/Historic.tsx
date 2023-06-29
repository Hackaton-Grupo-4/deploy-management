import { useHistoric } from '../../../hooks'
import { HistoricLayout, HistoricContent, HistoricHeader } from './styled'
import { Filter } from './Filter'
import { List } from './List'

export const PageHistoric = () => {
  const props = useHistoric()

  return (
    <HistoricLayout>
      <HistoricHeader>
        Estatíticas
      </HistoricHeader>
      <HistoricContent>
        <List />
        <Filter {...props} />
      </HistoricContent>
    </HistoricLayout>
  )
} 