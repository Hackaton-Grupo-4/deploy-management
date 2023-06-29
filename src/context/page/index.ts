import { useContext, createContext } from 'react'
import { IPageContext } from 'interfaces'

const PageContext = createContext<IPageContext>({} as IPageContext)

const usePageContext = (): IPageContext => useContext(PageContext)

export { PageContext, usePageContext }

