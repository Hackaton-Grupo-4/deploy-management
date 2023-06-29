import styled from 'styled-components'
import { IButton, TColorButton } from 'interfaces'
import { theme } from 'styled'

const colorOptions = {
  PRIMARY: theme.colors.blue2,
  DANGER: `${theme.colors.red}${theme.opacy.percent85}`,
  SUCCESS: `${theme.colors.green}${theme.opacy.percent85}`
}

const colorOptionsHover = {
  PRIMARY: theme.colors.hoverMain,
  DANGER: theme.colors.red,
  SUCCESS: theme.colors.green
}

const colorButton = (color?: TColorButton) => color ? colorOptions[color] : theme.colors.blue2
const colorButtonHover = (color?: TColorButton) => color ? colorOptionsHover[color] : theme.colors.hoverMain

export const ButtonLayout = styled.div<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${({ theme }) => theme.spaceSize.small}px;

  min-width: 60px;
  width: 100%;
  max-width: 100%;
  max-height: 32px;
  
  background-color: ${({ outline, color, theme }) => outline ? theme.colors.backgroundMain : colorButton(color)};  
  color: ${({ outline, color, theme }) => outline ? colorButton(color) : theme.colors.backgroundMain};
  
  border: 1px solid ${({ color }) => colorButton(color)};
  border-radius: 4px;

  padding: ${({ theme }) => `${theme.spaceSize.xsmall}px ${theme.spaceSize.medium}px`};

  cursor: pointer;
  transition-duration: ${({theme}) => theme.animation.time.medium};

  &:hover {
    background-color: ${({ color }) => colorButtonHover(color)};  
    color: ${({ theme }) => theme.colors.backgroundMain};
  }
` 