import styled, { css } from 'styled-components'
import { IButton, TColorButton } from '../../interfaces'
import { theme } from '../../styled'

const colorOptions = {
  PRIMARY: `${theme.colors.backgroundMenu}${theme.opacy.percent95}`,
  DANGER: `${theme.colors.red}${theme.opacy.percent95}`,
  SUCCESS: `${theme.colors.green}${theme.opacy.percent95}`
}

const colorOptionsHover = {
  PRIMARY: theme.colors.backgroundMenu,
  DANGER: theme.colors.red,
  SUCCESS: theme.colors.green
}

const colorButton = (color?: TColorButton) => color ? colorOptions[color] : `${theme.colors.backgroundMenu}${theme.opacy.percent95}`
const colorButtonHover = (color?: TColorButton) => color ? colorOptionsHover[color] : theme.colors.backgroundMenu

export const ButtonLayout = styled.div<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${({ theme }) => theme.spaceSize.small}px;
  min-width: 60px;
  width: 100%;
  max-width: 100%;
  max-height: 32px;
  white-space: nowrap;

  background-color: ${({ outline, color, theme }) => outline ? theme.colors.backgroundMain : colorButton(color)};  
  color: ${({ outline, color, theme }) => outline ? colorButton(color) : theme.colors.backgroundMain};
  
  border: 1px solid ${({ color }) => colorButton(color)};
  border-radius: 30px;

  padding: ${({ theme }) => `${theme.spaceSize.tiny}px ${theme.spaceSize.medium}px`};


  ${({ icon }) => icon && css`
      min-width: 32px;
      height: 32px;
      font-size: 18px;
      border-radius: 50%;
      padding: 0;
  `}

  cursor: pointer;
  transition-duration: ${({theme}) => theme.animation.time.medium};

  &:hover {
    background-color: ${({ color }) => colorButtonHover(color)};  
    color: ${({ theme }) => theme.colors.white};
  }
` 