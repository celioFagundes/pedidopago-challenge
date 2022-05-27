
import Link from 'next/link'
import CloseX from '../Icons/CloseX'
import MoreVertical from '../Icons/MoreVertical'
import {
  Wrapper,
  Label,
  ModalOption,
  Icon,
  ModalHeader,
  ModalLabel,
  Modal,
  Container,
  ModalBackground,
} from './styles'

type Props = {
  closeFn: () => void
  openFn: () => void
  label: string
  isOpen: boolean
}

const SelectModal = (props: Props) => {
  return (
    <Wrapper>
      <Container onClick={props.openFn}>
        <Label>{props.label}</Label>
        <Icon>
          <MoreVertical/>
        </Icon>
      </Container>
      <>
        <ModalBackground isOpen={props.isOpen} onClick={props.closeFn} />
        <Modal isOpen={props.isOpen}>
          <ModalHeader>
            <ModalLabel>Categorias</ModalLabel>
            <Icon onClick={props.closeFn}>
              <CloseX />
            </Icon>
          </ModalHeader>
          <Link href='/agents'>
            <ModalOption onClick={props.closeFn}>Colaboradores</ModalOption>
          </Link>
          <Link href='/roles'>
            <ModalOption onClick={props.closeFn}>Cargos</ModalOption>
          </Link>
        </Modal>
      </>
    </Wrapper>
  )
}

export default SelectModal
