import Image from 'next/image'
import React from 'react'
import {
  AvatarNameContainer,
  Name,
  Status,
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
interface StatusProps {
  children?: React.ReactNode
  status?: string
}
interface AvatarProps {
  url: string
  name: string
}
interface TableRowType  {
  children?: React.ReactNode
  isActive?: boolean
  maxHeight?: string
}
interface TableTDType{
  children?: React.ReactNode
  status?: string
  onClick?: () => void
}

const Table = (props: MainProps) => {
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
const TableStatus = (props: StatusProps) => {
  return <Status status={props.status}>{props.children}</Status>
}
const TableAvatarAndName = (props: AvatarProps) => {
  return (
    <AvatarNameContainer>
      <div style={{ position: 'relative', minHeight: '32px', minWidth: '32px' }}>
        <Image
          src={props.url}
          layout='fill'
          objectFit='contain'
          alt='avatar'
          style={{ borderRadius: '50%' }}
        />
      </div>

      <Name>{props.name}</Name>
    </AvatarNameContainer>
  )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Th = TableTh
Table.Td = TableTd
Table.Status = TableStatus
Table.AvatarAndName = TableAvatarAndName
export default Table
