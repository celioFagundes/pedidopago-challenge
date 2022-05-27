import React from 'react'
import { Label, OptionLabel, Selection, Wrapper } from './styles'

type Props = {
  label: string
  children: React.ReactNode
  bgColor?: string
}

type OptionProps = {
  children: React.ReactNode
  value?: string
}
const Select = (props: Props) => {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Selection bgColor = {props.bgColor}>{props.children}</Selection>
    </Wrapper>
  )
}
const Option = (props: OptionProps) => {
  return <OptionLabel value={props.value}>{props.children}</OptionLabel>
}
Select.Option = Option
export default Select
