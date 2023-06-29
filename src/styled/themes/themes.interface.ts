import { FlattenInterpolation } from 'styled-components'

interface colors {
  backgroundMain: string
  borderMain: string
  backgroundMenu: string
  shadowMain: string
  black: string
  black1: string
  white: string
  red: string
  blue: string
  green: string
  grey1: string
  grey2: string
}

interface fontWeight {
    light: number
    normal: number
    medium: number
    semiBold: number
    bold: number
    extraBold: number
}

interface sizeFont {
    tiny: number
    xsmall: number
    small: number
    base: number
    medium: number
    large: number
    xlarge: number
    big: number
}

interface font {
    root: string
    weight: fontWeight,
    size: sizeFont
}

interface spaceSize {
    tiny: number
    xsmall: number
    small: number
    base: number
    medium: number
    large: number
    xlarge: number
    big: number
}

interface transparentColor {
    percent0: string
    percent5: string
    percent10: string
    percent15: string
    percent20: string
    percent25: string
    percent30: string
    percent35: string
    percent40: string
    percent45: string
    percent50: string
    percent55: string
    percent60: string
    percent65: string
    percent70: string
    percent75: string
    percent80: string
    percent85: string
    percent90: string
    percent95: string
    percent100: string
}

interface duration {
    tiny: string
    xsmall: string
    small: string
    base: string
    medium: string
    large: string
    xlarge: string
    big: string
}

interface animation {
    time: duration
}

export type nameColors =
      'backgroundMain'
    | 'borderMain'
    | 'backgroundMenu'
    | 'shadowMain'
    | 'black'
    | 'black1'
    | 'white'
    | 'red'
    | 'blue'
    | 'green'
    | 'grey1'
    | 'grey2'

export type nameOpacy =
    'percent0'
  | 'percent5'
  | 'percent10'
  | 'percent15'
  | 'percent20'
  | 'percent25'
  | 'percent30'
  | 'percent35'
  | 'percent40'
  | 'percent45'
  | 'percent50'
  | 'percent55'
  | 'percent60'
  | 'percent65'
  | 'percent70'
  | 'percent75'
  | 'percent80'
  | 'percent85'
  | 'percent90'
  | 'percent95'
  | 'percent100'

interface breakPoint {
    small: string
    medium: string
    large: string
    xlarge: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: colors
        font: font
        spaceSize: spaceSize
        opacy: transparentColor
        scroll: FlattenInterpolation<ThemeProps<DefaultTheme>>
        breakPoint: breakPoint
        animation: animation
    }
}
