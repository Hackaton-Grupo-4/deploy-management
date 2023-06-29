
import { HistoricList } from '../styled'
import { ListLayout } from './styled'
import { Card } from '../../../../components'
import { MockList } from './mock'
import { Pagination } from '../../../../components'

export const List = () => 
  <HistoricList>
    <ListLayout>
      {
        MockList.map((data, key) => <Card {...data} key={`card${key}`} />)
      }
      <Pagination />
    </ListLayout>
  </HistoricList>