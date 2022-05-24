import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { PaginationButton, PaginationLabel, Wrapper } from './styles'

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
    </Wrapper>
  )
}

export default Pagination
