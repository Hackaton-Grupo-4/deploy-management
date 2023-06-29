
import { ThemeProvider } from 'styled-components'
import {theme, GlobalStyle } from './styled'
import { Pages } from './page'

export const App = () => 
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Pages />
  </ThemeProvider>