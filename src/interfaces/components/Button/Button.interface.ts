export interface IButton {
  color?: TColorButton
  outline?: boolean
  onClick: () => void
} 

export type TColorButton = 'PRIMARY' | 'DANGER' | 'SUCCESS'