import { BsArrowRepeat } from 'react-icons/bs'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { MobilePagination, MobilePaginationLabel, PaginationButton, PaginationLabel, Wrapper } from './styles'

type Props = {}

const Pagination = (props: Props) => {
  return (
    <Wrapper>
      <PaginationButton isDisabled = {true}>
        <MdKeyboardArrowLeft size = {28} />
      </PaginationButton>
      <PaginationLabel>1 de 10</PaginationLabel>
      <PaginationButton isDisabled = {false}>
        <MdKeyboardArrowRight size = {28} />
      </PaginationButton>
      <MobilePagination>
        <BsArrowRepeat color = '#1DD195' size = {28}/>
        <MobilePaginationLabel>Carregar mais</MobilePaginationLabel>
      </MobilePagination>
    </Wrapper>
  )
}

export default Pagination
