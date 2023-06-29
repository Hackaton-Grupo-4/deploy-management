import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.colors.backgroundMain};
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.root};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }
  body {
    font-size: ${({ theme }) => theme.font.size.base}; 
    line-height: 1.5;
    overflow: hidden;
  }
`
