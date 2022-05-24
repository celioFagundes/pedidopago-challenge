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
const Table = (props: MainProps) => {
  return <TableContainer>{props.children}</TableContainer>
}
const TableHeader = (props: MainProps) => {
  return <TableHeaderContainer>{props.children}</TableHeaderContainer>
}
const TableBody = (props: MainProps) => {
  return <TableBodyContainer>{props.children}</TableBodyContainer>
}
const TableRow = (props: MainProps) => {
  return <Tr>{props.children}</Tr>
}
const TableTh = (props: MainProps) => {
  return <Th>{props.children}</Th>
}
const TableTd = (props: StatusProps) => {
  return <Td status={props.status}>{props.children}</Td>
}
const TableStatus = (props: StatusProps) => {
  return <Status status={props.status}>{props.children}</Status>
}
const TableAvatarAndName = (props: AvatarProps) => {
  return (
    <AvatarNameContainer>
      <Image
        src={props.url}
        layout='fixed'
        height={32}
        width={32}
        objectFit='cover'
        alt='avatar'
        style={{ borderRadius: '50%' }}
      />
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
