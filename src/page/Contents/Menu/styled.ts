import styled from 'styled-components'

export const MenuLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 100%;
  padding: 0 ${({ theme }) => theme.spaceSize.large}px;
`

export const MenuIcon = styled.img`
  width: 48px;
  cursor: pointer;
`

export const MenuContent = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spaceSize.large}px;
  font-size: ${({ theme }) => theme.font.size.large}px;
`

export const MenuOption = styled.div<{ active: boolean }>`
  color: ${({ theme, active }) => active ? theme.colors.white1 : theme.colors.blue1};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`