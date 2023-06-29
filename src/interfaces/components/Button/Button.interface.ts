export interface IButton {
  color?: TColorButton
  outline?: boolean
  onClick: () => void
  icon?: boolean
} 

export type TColorButton = 'PRIMARY' | 'DANGER' | 'SUCCESS'