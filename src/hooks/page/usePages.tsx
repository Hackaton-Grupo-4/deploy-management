import { useState } from 'react'
import { IPageContext } from 'interfaces'

export const usePages = (): IPageContext => {
  const [chosenPage, setChosenPage] = useState<'Historic' | 'Report' | 'TextEditor'>('Historic')
  
  return {
    chosenPage,
    setChosenPage
  }
}