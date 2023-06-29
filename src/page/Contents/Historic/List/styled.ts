import styled from 'styled-components'

export const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  row-gap: ${({ theme }) => theme.spaceSize.base}px;
  padding: ${({ theme }) => `${theme.spaceSize.xsmall}px ${theme.spaceSize.large}px`};

  overflow: auto;

  ${({ theme }) => theme.scroll}

`