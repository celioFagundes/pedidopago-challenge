import styled from '@emotion/styled'

type StatusProps = {
  status?: string
}
type IsActive = {
  isActive?: boolean
  maxHeight?: string
}
export const TableContainer = styled.div`
  width: 100%;
`
export const TableHeaderContainer = styled.div`
  border: 1px solid #cad6d1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  padding: 16px 0 ;
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
  margin-right:10px;
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
export const Td = styled.div<StatusProps>`
  display: flex;
  justify-content:flex-start;
  color: '#587169';
  text-align: left;
  color: ${props => props.status === 'inactive' && '#A3B8B0'};
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

export const Status = styled.div<StatusProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 116%;
  padding: 4px 8px;
  border-radius: 80px;
  text-transform: capitalize;
  background-color: ${props => (props.status === 'inactive' ? '#EAEFED' : '#B5F1DD')};
  color: ${props => (props.status === 'inactive' ? '#A3B8B0' : '#34423D')};
`
export const AvatarNameContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const Name = styled.p`
  margin-left: 8px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-weight: 600;
  }
`
