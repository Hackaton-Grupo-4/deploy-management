import { MenuContent, MenuLayout, MenuOption, MenuKebab, MenuKebabClose } from './styled'
import { usePageContext } from 'context'
import { ChosePageEnum } from 'interfaces'
import { AiOutlinePlusCircle, AiOutlineUndo, AiOutlineMenu, AiOutlineArrowUp } from "react-icons/ai"

export const Menu = () => {
  const { setChosenPage, chosenPage, openMenuResponsive, setOpenMenuResponsive } = usePageContext()

  return (
    <MenuLayout {...{openMenuResponsive}}>
      <MenuKebab {...{openMenuResponsive}} onClick={() => setOpenMenuResponsive(true)}>
        <AiOutlineMenu />
      </MenuKebab>
      <MenuContent {...{openMenuResponsive}}>
        <MenuOption active={chosenPage === ChosePageEnum.HISTORIC} onClick={() => setChosenPage(ChosePageEnum.HISTORIC)}>
          <AiOutlineUndo />
        </MenuOption>
        <MenuOption active={chosenPage === ChosePageEnum.TEXTEDITOR} onClick={() => setChosenPage(ChosePageEnum.TEXTEDITOR)}>
          <AiOutlinePlusCircle />
        </MenuOption>
      </MenuContent>
      {
        openMenuResponsive && 
          <MenuKebabClose {...{openMenuResponsive}} onClick={() => setOpenMenuResponsive(false)}>
            <AiOutlineArrowUp />
          </MenuKebabClose>
      }
    </MenuLayout>
  )
}