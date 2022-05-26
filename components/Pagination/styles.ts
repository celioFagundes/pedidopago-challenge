import styled from '@emotion/styled'
import { BoldText } from '../../styles/texts'

type buttonProps = {
  isDisabled: boolean
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
    border: 2px solid #b5f1dd;
    border-radius: 8px;
    cursor: pointer;
  }
`
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
  &:hover {
    cursor: ${props => !props.isDisabled && 'pointer'};
    color: ${props => !props.isDisabled && '#000'};
    border-color: ${props => !props.isDisabled && '#000'};
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const PaginationLabel = styled(BoldText)`
  margin: 0 12px;
  color : #A3B8B0;
  @media (max-width: 768px) {
    display: none;
  }
`
export const MobilePaginationLabel = styled(BoldText)`
  margin: 0 12px;
  
`
export const MobilePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`
