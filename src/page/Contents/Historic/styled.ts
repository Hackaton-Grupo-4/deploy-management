import styled from 'styled-components'
import { heightMenu } from 'const'

export const HistoricLayout = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;

  position: relative;
`

export const HistoricBtnFilterResponse = styled.div<{ showBtnFilter: boolean }>`
  display: none;
  align-items: center;
  justify-content: space-evenly;
  width: 80px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.blue2};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.blue2};
  position: absolute;
  top: 2px;
  left: 2px;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.backgroundMain};
    background-color: ${({ theme }) => theme.colors.blue2};
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.large}) {
    display: ${({ showBtnFilter }) => showBtnFilter ? 'flex' : 'none'};
  } 
`

export const HistoricFilter = styled.div<{ openResponsive: boolean }>`
  min-width: 280px;
  max-height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.borderMain};

  @media (max-width: ${({ theme }) => theme.breakPoint.large}) {
    display: ${({ openResponsive }) => openResponsive ? 'unset' : 'none'};
    height: calc(100vh - ${heightMenu}px);
    background-color: ${({ theme }) => theme.colors.backgroundMain};
    position: absolute;
    z-index: 10;
  } 
`

export const HistoricContent = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spaceSize.large}px;
`