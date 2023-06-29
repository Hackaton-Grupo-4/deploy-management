import styled from 'styled-components'

export const TagLayout = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple1};
  color: ${({ theme }) => theme.colors.purple};
  padding: ${({ theme }) => theme.spaceSize.xsmall}px;
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 10px;
`