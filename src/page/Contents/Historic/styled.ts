import styled from 'styled-components'

export const HistoricLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
`

export const HistoricBtnFilterResponse = styled.div<{ showBtnFilter: boolean }>`
  display: none;
  position: absolute;
  top: 2px;
  right: 2px;

  @media (max-width: ${({ theme }) => theme.breakPoint.xlarge}) {
    display: ${({ showBtnFilter }) => showBtnFilter ? 'flex' : 'none'};
  }
`

export const HistoricFilter = styled.div<{ openResponsive: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 430px;
  max-height: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.borderMain};

  @media (max-width: ${({ theme }) => theme.breakPoint.xlarge}) {
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

  @media (min-width: ${({ theme }) => theme.breakPoint.xlarge}) {
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
  width: calc(100% - 430px);

  @media (max-width: ${({ theme }) => theme.breakPoint.xlarge}) {
    width: 100%;
  } 
`
