import React from 'react'
import {
  TableBodyContainer,
  TableContainer,
  TableHeaderContainer,
  Td,
  Th,
  Tr,
} from './styles'

interface MainProps {
  children?: React.ReactNode
}
interface TableRowType  {
  children?: React.ReactNode
  isActive?: boolean
  maxHeight?: string
  status?: string
}
interface TableTDType{
  children?: React.ReactNode
  onClick?: () => void
}

const TableDrop = (props: MainProps) => {
  return <TableContainer>{props.children}</TableContainer>
}
const TableHeader = (props: MainProps) => {
  return <TableHeaderContainer>{props.children}</TableHeaderContainer>
}
const TableBody = (props: MainProps) => {
  return <TableBodyContainer>{props.children}</TableBodyContainer>
}
const TableRow = (props: TableRowType) => {
  return <Tr {...props}>{props.children}</Tr>
}
const TableTh = (props: MainProps) => {
  return <Th>{props.children}</Th>
}
const TableTd = (props: TableTDType) => {
  return <Td {...props}>{props.children}</Td>
}

TableDrop.Header = TableHeader
TableDrop.Body = TableBody
TableDrop.Row = TableRow
TableDrop.Th = TableTh
TableDrop.Td = TableTd

export default TableDrop
