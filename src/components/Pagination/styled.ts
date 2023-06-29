import styled from 'styled-components'

export const PaginationLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  column-gap: ${({ theme }) => theme.spaceSize.xsmall}px;
`

export const PaginationNumber = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  width: 26px;
  background-color: ${({ theme, active }) => active ? theme.colors.purple1 : 'transparent'};
  padding: ${({ theme }) => theme.spaceSize.tiny}px;
  border-radius: 4px;
  cursor: pointer;
`

export const PaginationButton = styled.div<{ hidde?: boolean }>`
  display: ${({ hidde }) => hidde ? 'none' : 'flex'};
  justify-content: center;
  background-color: ${({ theme }) => `${theme.colors.backgroundMenu}${theme.opacy.percent95}`};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spaceSize.tiny}px ${theme.spaceSize.small}px`};
  border-radius: 4px;
  cursor: pointer;

`