import { FC } from 'react'
import { TagLayout } from './styled'

export const Tag: FC<{}> = ({ children }) => 
  <TagLayout>
    { children }
  </TagLayout>