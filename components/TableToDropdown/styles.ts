import styled from '@emotion/styled'
import { BoldText, LightText } from '../../styles/texts'

type StatusProps = {
  status?: string
}
type IsActive = {
  isActive?: boolean
  maxHeight?: string
  status?: string
}
export const TableContainer = styled.div`
  width: 100%;
`
export const TableHeaderContainer = styled.div`
  border: 1px solid #cad6d1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  padding: 16px 0;
  @media (max-width: 768px) {
    display: none;
  }
`
export const TableBodyContainer = styled.div`
  width: 100%;
`
export const Tr = styled.div<IsActive>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  color: '#587169';
  color: ${props => props.status === 'inactive' && '#A3B8B0'};
  @media (max-width: 768px) {
    max-height: ${props => (props.isActive ? '1000px' : props.maxHeight)};
    overflow-y: hidden;
    border-color: ${props => props.isActive && '#B5F1DD'};
    transition: max-height 0.4s ease-in-out;
    cursor: pointer;

    background: #ffffff;
    border: 2px solid #eaefed;
    border-color: ${props => props.isActive && '#B5F1DD'};
    border-radius: 8px;
    margin: 8px 0;
    transition: max-height 0.4s ease-in-out;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export const Th = styled.div`
  width: 100%;
  margin-right: 10px;
  text-align: left;
  color: #587169;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  &:last-of-type {
    width: 5%;
    padding-right: 10px;
  }
`
export const Td = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  border-bottom: 1px solid #eaefed;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  padding: 18px 0;
  width: 100%;
  position: relative;

  &:last-of-type {
    width: 5%;
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border: 0;
    &:first-of-type {
      grid-column: span 2;
    }
    &:last-of-type {
      width: 100%;
      grid-column: span 2;
      justify-content: flex-end;
      padding-right: 15px;
    }
  }
`
export const DropdownIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 25px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const Label = styled(BoldText)`
  font-size: 12px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const Value = styled.p`
  font-size: 12px;
`
export const DotsIcon = styled.div`
cursor:pointer;
  @media (max-width: 768px) {
    display: none;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 24px;
  border: 2px solid #b5f1dd;
  border-radius: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const ActionLabel = styled(BoldText)`
  color: #34423d;
  margin-left: 8px;
`

