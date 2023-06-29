import styled  from 'styled-components'
import { widthMenu, heightMenu } from 'const'
import { IMenuStyled } from 'interfaces'

export const PagesLayout = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100vh;
  position: relative;
`

export const PagesMenu = styled.div<IMenuStyled>`
  width: ${widthMenu}px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};

  @media (max-width: ${({ theme }) => theme.breakPoint.large}) {
    height: ${({ openMenuResponsive }) => openMenuResponsive ? '100vh' : `${heightMenu}px`};
    background-color: ${({ openMenuResponsive, theme }) => openMenuResponsive ? theme.colors.backgroundMenu : 'transparent'};
    position: absolute;
    z-index: 10;
  } 
`

export const PagesContent = styled.div`
  width: calc(100% - ${widthMenu}px);
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakPoint.large}) {
    width: 100%;
  } 
`