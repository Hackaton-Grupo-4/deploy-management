import { DefaultTheme, css } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    backgroundMain: '#F3F5F9',
    borderMain: '#DFE3E8',
    backgroundMenu: '#122D52',
    shadowMain: '#122D5229',
    hoverMain: '#257CE5',

    black: '#000000',
    black1: '#2D3139',

    white: '#FFFFFF',
    white1: '#F3F5F9',
    
    grey1: '#447ECC29',
    grey2: '#6B7786',

    red: '#FF2424',

    blue: '#2699FB',
    blue1: '#9BA8BA',
    blue2: '#378FF7',

    green: '#4CAF50',
  },
  spaceSize: {
      tiny: 4,
      xsmall: 8,
      small: 12,
      base: 16,
      medium: 24,
      large: 32,
      xlarge: 48,
      big: 64,
  },
  font: {
      root: 'Inter',
      weight: {
        light: 200,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800
      },
      size: {
        tiny: 8,
        xsmall: 12,
        small: 14,
        base: 16,
        medium: 18,
        large: 20,
        xlarge: 24,
        big: 30
      }
  },
  opacy: {
    percent0: '00',
    percent5: '0D',
    percent10: '1A',
    percent15: '26',
    percent20: '33',
    percent25: '40',
    percent30: '4D',
    percent35: '59',
    percent40: '66',
    percent45: '73',
    percent50: '80',
    percent55: '8C',
    percent60: '99',
    percent65: 'A6',
    percent70: 'B3',
    percent75: 'BF',
    percent80: 'CC',
    percent85: 'D9',
    percent90: 'E6',
    percent95: 'F2',
    percent100: 'FF'
  },
  breakPoint: {
    small: '37.5em',
    medium: '48em',
    large: '62em',
    xlarge: '75em'
  },
  scroll: css`
    -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.grey1};
        border-radius: 12px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.grey2};
        border-radius: 12px;
    }
  `,
  animation: {
    time: {
      tiny: '0.1s',
      xsmall: '0.2s',
      small: '0.3s',
      base: '0.4s',
      medium: '0.5s',
      large: '0.6s',
      xlarge: '0.8s',
      big: '1s'
    }
  }
}

