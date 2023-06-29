import styled  from 'styled-components'
import { heightMenu } from 'const'

export const PagesLayout = styled.div`
  max-width: 100%;
  max-height: 100vh;
`

export const PagesMenu = styled.div`
  width: 100%;
  height: ${heightMenu}px;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
`

export const PagesContent = styled.div`
  width: 100%;
  height: calc(100vh - ${heightMenu}px);
  max-height: calc(100vh - ${heightMenu}px);

  overflow: auto;

  ${({ theme }) => theme.scroll}
`