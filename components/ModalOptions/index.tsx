import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'
import { ModalBackground, ModalMenu, ModalOption, ModalOptionIcon, ModalOptionLink } from './styles'

type Props = {
  children: React.ReactNode
  isOpen: boolean
}

interface Options {
  children: React.ReactNode
  url: string
  Icon: IconType
  isActive: boolean
}
const ModalOptions = (props: Props) => {
  return (
    <>
      <ModalBackground isOpen={props.isOpen} />
      <ModalMenu isOpen={props.isOpen}>{props.children}</ModalMenu>
    </>
  )
}

const Option = (props: Options) => {
  return (
    <Link href={props.url}>
      <ModalOption>
        <ModalOptionIcon>
          <props.Icon size={22} />
        </ModalOptionIcon>

        <ModalOptionLink isActive={props.isActive}>{props.children}</ModalOptionLink>
      </ModalOption>
    </Link>
  )
}

ModalOptions.Option = Option
export default ModalOptions
