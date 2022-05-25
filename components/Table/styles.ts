import styled from '@emotion/styled'

type StatusProps = {
  status?: string
}
export const TableContainer = styled.table`
  width: 100%;
`
export const TableHeaderContainer = styled.thead`
  width: 100%;
`
export const TableBodyContainer = styled.tbody`
  width: 100%;
`
export const Tr = styled.tr`
  width: 100%;
`
export const Th = styled.th`
  width: 100%;
  text-align: left;
  color: #587169;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  border-top: 1px solid #cad6d1;
  border-bottom: 1px solid #cad6d1;
  &:nth-of-type(1) {
    border-top-left-radius: 8px;
    border-left: 1px solid #cad6d1;
  }
  &:last-of-type {
    border-top-right-radius: 8px;
    border-right: 1px solid #cad6d1;
  }

  padding: 16px;
`
export const Td = styled.td<StatusProps>`
  color: '#587169';
  text-align: left;
  color: ${props => props.status === 'inactive' && '#A3B8B0'};
  border-bottom: 1px solid #eaefed;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  padding: 18px 16px;
  width: 100%;
  position: relative;
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
`
export const Name = styled.p`
  margin-left: 8px;
  font-weight: 500;
`
