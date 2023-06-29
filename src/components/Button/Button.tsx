import { FC } from 'react'
import { IButton } from 'interfaces'
import { ButtonLayout } from './styled'

export const Button: FC<IButton>  = (props) => 
  <ButtonLayout {...props}>
    {props.children}
  </ButtonLayout>