import styled from '@emotion/styled'

type buttonProps = {
  isDisabled: boolean
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Pagination = styled.div``
export const PaginationButton = styled.button<buttonProps>`
  border: 1.4px solid;
  border-color: ${props => (props.isDisabled ? '#cad6d1' : '#709085')};
  border-radius: 8px 0px 0px 8px;
  padding: 0px 7px;
  color: ${props => (props.isDisabled ? '#cad6d1' : '#709085')};
  background-color: #fff;
  transition: all 100ms ease-in-out;
  &:nth-of-type(2) {
    border-radius: 0px 8px 8px 0px;
  }
  &:hover{
    cursor: ${props => !props.isDisabled && 'pointer'};
    color: ${props => !props.isDisabled && '#000'};
    border-color: ${props => !props.isDisabled && '#000'};
  }
`
export const PaginationLabel = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #587169;
  margin: 0 12px;
`
