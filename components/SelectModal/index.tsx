import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
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
          <BsThreeDotsVertical />
        </Icon>
      </Container>

      <>
        <ModalBackground isOpen={props.isOpen} />
        <Modal isOpen={props.isOpen}>
          <ModalHeader>
            <ModalLabel>Categorias</ModalLabel>
            <Icon onClick={props.closeFn}>
              <AiOutlineClose />
            </Icon>
          </ModalHeader>
          <Link href='/' >
            <ModalOption onClick={props.closeFn}>Colaboradores</ModalOption>
          </Link>
          <Link href='/cargos' >
            <ModalOption onClick={props.closeFn}>Cargos</ModalOption>
          </Link>
        </Modal>
      </>
    </Wrapper>
  )
}

export default SelectModal
