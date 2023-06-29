import { PagesLayout, PagesContent, PagesMenu } from './styled'
import { PageContext } from 'context'
import { usePages } from 'hooks'
import { PageHistoric, PageReport, PageTextEditor, Menu } from './Contents'

export const Pages = () => {
  const hookProps = usePages()
  const { chosenPage } = hookProps

  const Content = {
    Historic: <PageHistoric />,
    Report: <PageReport />,
    TextEditor: <PageTextEditor />
  }

  return (
    <PageContext.Provider value={{ ...hookProps }}>
      <PagesLayout>
        <PagesMenu children={<Menu />}  {...{...hookProps}} />
        <PagesContent>
          {
            Content[chosenPage]
          }
        </PagesContent>
      </PagesLayout>
    </PageContext.Provider>
  )
}
  