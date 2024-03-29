import styled from 'styled-components'
import { heightMenu, widthMenu } from 'const'

export const HistoricLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
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
  right: 2px;
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
  display: flex;
  flex-direction: column;
  min-width: 280px;
  max-height: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.borderMain};

  @media (max-width: ${({ theme }) => theme.breakPoint.large}) {
    display: ${({ openResponsive }) => openResponsive ? 'unset' : 'none'};
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundMain};
    position: absolute;
    right: 0;
    z-index: 10;
  } 
`
export const HistoricFilterBox = styled.div`
  height: calc(100% - 60px);
`


export const HistoricFilterBoxBtn = styled.div<{ responsive: boolean }>`
  display: flex;
  justify-content: space-around;
  width: 100%;  

  div {
    width: ${({ responsive }) => responsive ? 'unset' : '70%'};
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.large}) {
    div {
      width: 70%;
    }

    div:first-child {
      display:  ${({ responsive }) => responsive ? 'none' : 'flex'};
    }
    
  } 
`

export const HistoricContent = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 128px);

  position: relative;
`

export const HistoricHeader = styled.div`
  width: 100%;
  height: 128px;
  max-height: 128px;
`

export const HistoricList = styled.div`
  width: calc(100% - 280px);
`
