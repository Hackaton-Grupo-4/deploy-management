import { CardLayout, CardTop, CardBottom, CardBottomTags, CardBottomBtn, CardContent, CardAuthor, CardSynthesis, CardTopBoxBtn  } from './styled'
import { Button } from '../../components'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"

export const Card = () =>
  <CardLayout>
    <CardTop>
      <CardContent>
        <CardAuthor>
          <strong>Autor:</strong> João Soares
        </CardAuthor>
        <CardSynthesis>
        "O texto descritivo é um tipo textual marcado pela descrição de um lugar ou paisagem, animal, pessoa, acontecimento, entre outros, tendo como objetivo trazer uma imagem ou cena ao seu leitor. Geralmente é utilizado junto ao texto narrativo, pois as sequências formadas pela narração são intercala..."
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
        <div>Aplicação</div>
        <div>Time</div>
        <div>Plataforma</div>
        <div>Status</div>
      </CardBottomTags>
      <CardBottomBtn>
        <Button onClick={() => {}}>
          Ver mais
        </Button>
      </CardBottomBtn>
    </CardBottom>
  </CardLayout>