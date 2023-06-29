import { MenuContent, MenuIcon, MenuLayout, MenuOption } from './styled'
import { usePageContext } from 'context'
import { ChosePageEnum } from 'interfaces'

export const Menu = () => {
  const { setChosenPage, chosenPage } = usePageContext()

  return (
    <MenuLayout>
      <MenuIcon src='/agileIcon.png' onClick={() => setChosenPage(ChosePageEnum.HISTORIC)}/>
      <MenuContent>
        <MenuOption active={chosenPage === ChosePageEnum.TEXTEDITOR} onClick={() => setChosenPage(ChosePageEnum.TEXTEDITOR)}>
          Criar
        </MenuOption>
        <MenuOption active={chosenPage === ChosePageEnum.HISTORIC} onClick={() => setChosenPage(ChosePageEnum.HISTORIC)}>
          Histórico
        </MenuOption>
      </MenuContent>
    </MenuLayout>
  )
}