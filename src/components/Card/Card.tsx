import { CardLayout, CardTop, CardBottom, CardBottomTags, CardBottomBtn, CardContent, CardAuthor, CardSynthesis, CardTopBoxBtn  } from './styled'
import { Button, Tag } from '../../components'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { ICard } from '../../interfaces'
import { CardLabels } from '../../const'

export const Card = ({ author, synthesis, tags }: ICard) =>
  <CardLayout>
    <CardTop>
      <CardContent>
        <CardAuthor>
          <strong>{CardLabels.author}</strong> {author}
        </CardAuthor>
        <CardSynthesis>
          {synthesis}
        </CardSynthesis>
      </CardContent>
      <CardTopBoxBtn>
        <Button icon outline onClick={() => {}}>
          <AiOutlineEdit />
        </Button>
        <Button icon outline color='DANGER' onClick={() => {}}>
          <AiOutlineDelete/>
        </Button>
      </CardTopBoxBtn>      
    </CardTop>
    <CardBottom>
      <CardBottomTags>
        {
          tags.map((tag, key) => <Tag key={`tag${key}`}>{tag}</Tag>)
        }
      </CardBottomTags>
      <CardBottomBtn>
        <Button onClick={() => {}}>
          {CardLabels.more}
        </Button>
      </CardBottomBtn>
    </CardBottom>
  </CardLayout>