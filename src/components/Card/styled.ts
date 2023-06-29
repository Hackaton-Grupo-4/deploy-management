import styled from 'styled-components'

export const CardLayout = styled.div`
  width: 100%;
  max-width: calc(100% - ${({ theme }) => theme.spaceSize.large}px);
  height: 162px;
  max-height: 162px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderMain};
  border-radius: 6px;
  padding: ${({ theme }) => theme.spaceSize.base}px;
`

export const CardTop = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 32px);
`

export const CardBottom = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
`

export const CardBottomTags = styled.div`
  display: flex;
  width: calc(100% - 110px);
`

export const CardBottomBtn = styled.div`
  width: 40px;
`

export const CardContent = styled.div`  
  max-height: 100%;
`

export const CardAuthor = styled.div`
  width: calc(100% - ${({ theme }) => theme.spaceSize.xsmall}px);
  height: 28px;
`

export const CardSynthesis = styled.div`
  display: -webkit-box;
  width: calc(100% - ${({ theme }) => theme.spaceSize.xsmall}px);
  max-height: calc(100% - 36px);
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const CardTopBoxBtn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaceSize.xsmall}px;
`