import styled from '@emotion/styled'

type StatusProps = {
  status?: string
}
export const TableContainer = styled.table`
  border-spacing: 0px;
 
`
export const TableHeaderContainer = styled.thead``
export const TableBodyContainer = styled.tbody``
export const Tr = styled.tr``
export const Th = styled.th`
  text-align: left;
  color: #587169;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  border-top: 1px solid #cad6d1;
  border-bottom: 1px solid #cad6d1;
  &:nth-of-type(1) {
    border-top-left-radius: 8px;
    border-left: 1px solid #cad6d1;
  }
  &:nth-of-type(6) {
    border-top-right-radius: 8px;
    border-right: 1px solid #cad6d1;
  }

  padding: 16px;
`
export const Td = styled.td<StatusProps>`
  color: ${props => (props.status === 'active' ? '#587169' : '#A3B8B0')};
  border-bottom: 1px solid #eaefed;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  padding: 16px;
  position:relative;
  
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
  color: ${props => (props.status === 'inactive' ? '#A3B8B0' : '#587169')};
`
export const AvatarNameContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Name = styled.p`
  margin-left: 8px;
  font-weight: 500;
`
