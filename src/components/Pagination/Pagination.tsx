import {PaginationLayout, PaginationNumber, PaginationButton} from './styled'

export const Pagination = () => 
  <PaginationLayout>
    <PaginationButton onClick={() => {}} hidde>Prev</PaginationButton>
    <PaginationNumber active>1</PaginationNumber>
    <PaginationNumber>2</PaginationNumber>
    <PaginationNumber>3</PaginationNumber>
    <PaginationButton onClick={() => {}}>Next</PaginationButton>
  </PaginationLayout>