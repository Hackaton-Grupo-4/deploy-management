import styled, { css } from 'styled-components'
import { heightMenu } from '../../../const'
import { IMenuStyled } from '../../../interfaces'

export const MenuLayout = styled.div<IMenuStyled>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 100%;
  padding: ${({ theme }) => theme.spaceSize.large}px 0;

  @media (max-width: ${({ theme }) => theme.breakPoint.xlarge}) {
    ${({ openMenuResponsive }) => !openMenuResponsive && css`
      height: ${heightMenu}px;
      padding: ${({ theme }) => theme.spaceSize.xsmall}px;
      position: absolute;
      z-index: 10;
    `}
  } 
`

export const MenuKebab = styled.div<IMenuStyled>`
  display: ${({ openMenuResponsive }) => openMenuResponsive ? 'none' : 'unset'};
  font-size: ${heightMenu}px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoint.xlarge}) {
    display: none;
  } 
`

export const MenuKebabClose = styled.div<IMenuStyled>`
  font-size: ${heightMenu}px;
  color: ${({ theme }) => theme.colors.blue1};
  position: absolute;
  bottom: ${({ theme }) => theme.spaceSize.xsmall}px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.xlarge}) {
    display: none;
  } 
`

export const MenuContent = styled.div<IMenuStyled>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaceSize.base}px;
  font-size: ${({ theme }) => theme.font.size.xlarge}px;

  @media (max-width: ${({ theme }) => theme.breakPoint.xlarge}) {
    display: ${({ openMenuResponsive }) => openMenuResponsive ? 'flex' : 'none' };
  } 
`

export const MenuOption = styled.div<{ active: boolean }>`
  color: ${({ theme, active }) => active ? theme.colors.white1 : theme.colors.blue1};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`