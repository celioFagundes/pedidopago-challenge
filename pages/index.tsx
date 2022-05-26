import type { GetServerSideProps } from 'next'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Seo from '../components/Seo'

import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

import Layout from '../components/Layout'
import TableDrop from '../components/TableToDropdown'
import SearchInput from '../components/SearchInput'
import SelectQuantity from '../components/Select'
import Pagination from '../components/Pagination'
import SelectModal from '../components/SelectModal'
import Tabs from '../components/Tabs'
import ModalOptions from '../components/ModalOptions'

import {
  ActionLabel,
  DropdownIcon,
  Value,
  Label,
  ActionsContainer,
  DotsIcon,
} from '../components/TableToDropdown/styles'
import {
  AvatarNameContainer,
  ImageWrapper,
  Name,
  Status,
  BottomContainer,
  Container,
  Content,
  ListTitle,
  PageTitle,
  Wrapper,
} from '../styles/home'

interface Agent {
  agent_id: number
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: string
}
interface MainProps {
  data: [Agent]
}

interface IsOpenList {
  [key: number]: boolean
}
const Home: React.FC<MainProps> = ({ data }) => {
  const [displayData, setDisplayData] = useState(data)
  const [modalIsOpenList, setModalIsOpenList] = useState<IsOpenList>({})
  const [dropdownIsOpenList, setDropdownIsOpenList] = useState<IsOpenList>({})
  const [modalCategoriesIsOpen, setModalCategoriesIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isOpenList = displayData.reduce((prev, curr) => {
      return { ...prev, [curr.agent_id]: false }
    }, {})
    setModalIsOpenList(isOpenList)
    setDropdownIsOpenList(isOpenList)
  }, [displayData])

  const toggleModal = (id: number) => {
    let newList = { ...modalIsOpenList }
    Object.keys(newList).forEach(item => (newList[Number(item)] = false))
    newList[id] = true
    setModalIsOpenList(newList)
  }
  const toggleDropdown = (id: number) => {
    let newList = { ...dropdownIsOpenList }
    if (newList[id]) {
      Object.keys(newList).forEach(item => (newList[Number(item)] = false))
    } else {
      Object.keys(newList).forEach(item => (newList[Number(item)] = false))
      newList[id] = !newList[id]
    }
    setDropdownIsOpenList(newList)
  }
  const anyModalOpen = () => {
    let isOpen = false
    Object.keys(modalIsOpenList).forEach(item => {
      if (modalIsOpenList[Number(item)]) {
        isOpen = true
      }
    })
    return isOpen
  }
  const closeModal = () => {
    if (anyModalOpen()) {
      let newList = { ...modalIsOpenList }
      Object.keys(newList).forEach(item => (newList[Number(item)] = false))
      setModalIsOpenList(newList)
    }
  }
  return (
    <>
      <Seo title='Colaboradores' description='Listagem dos colaboradores' />
      <Layout>
        <Wrapper onClick={closeModal}>
          <Container>
            <PageTitle>Organização</PageTitle>
            <Content>
              <Tabs>
                <Tabs.Tab url='/' isActive={router.pathname === '/'}>
                  Colaboradores
                </Tabs.Tab>
                <Tabs.Tab url='/cargos' isActive={router.pathname !== '/'}>
                  Cargos
                </Tabs.Tab>
              </Tabs>
              <SelectModal
                isOpen={modalCategoriesIsOpen}
                openFn={() => setModalCategoriesIsOpen(true)}
                closeFn={() => setModalCategoriesIsOpen(false)}
                label={'Colaboradores'}
              />
              <SearchInput />
              <ListTitle>Listagem de colaboradores</ListTitle>
              {data && (
                <TableDrop>
                  <TableDrop.Header>
                    <TableDrop.Row>
                      <TableDrop.Th>Nome Completo</TableDrop.Th>
                      <TableDrop.Th>Departamento</TableDrop.Th>
                      <TableDrop.Th>Cargo</TableDrop.Th>
                      <TableDrop.Th>Unidade</TableDrop.Th>
                      <TableDrop.Th>Status</TableDrop.Th>
                      <TableDrop.Th></TableDrop.Th>
                    </TableDrop.Row>
                  </TableDrop.Header>
                  <TableDrop.Body>
                    {data.map(agent => (
                      <TableDrop.Row
                        key={agent.agent_id}
                        isActive={dropdownIsOpenList[agent.agent_id]}
                        status={agent.status}
                        maxHeight={'90px'}
                      >
                        <TableDrop.Td onClick={() => toggleDropdown(agent.agent_id)}>
                          <Label>Nome Completo</Label>
                          <AvatarNameContainer>
                            <ImageWrapper
                              style={{ position: 'relative', minHeight: '32px', minWidth: '32px' }}
                            >
                              <Image
                                src={agent.image}
                                layout='fill'
                                objectFit='contain'
                                alt='avatar'
                                style={{ borderRadius: '50%' }}
                              />
                            </ImageWrapper>
                            <Name>{agent.name}</Name>
                          </AvatarNameContainer>
                          <DropdownIcon>
                            {!dropdownIsOpenList[agent.agent_id] ? (
                              <MdOutlineKeyboardArrowDown />
                            ) : (
                              <MdOutlineKeyboardArrowUp />
                            )}
                          </DropdownIcon>
                        </TableDrop.Td>
                        <TableDrop.Td>
                          <Label>Departamento</Label>
                          <Value>{agent.department}</Value>
                        </TableDrop.Td>
                        <TableDrop.Td>
                          <Label>Cargo</Label>
                          <Value>{agent.role}</Value>
                        </TableDrop.Td>
                        <TableDrop.Td>
                          <Label>Unidade</Label>
                          <Value>{agent.branch}</Value>
                        </TableDrop.Td>
                        <TableDrop.Td>
                          <Label>Status</Label>
                          <Status status={agent.status}>
                            {agent.status === 'active' ? 'Ativo' : 'Inativo'}
                          </Status>
                        </TableDrop.Td>
                        <TableDrop.Td>
                          <DotsIcon onClick={() => toggleModal(agent.agent_id)}>
                            <BsThreeDotsVertical size={16} />
                          </DotsIcon>
                          <ModalOptions isOpen={modalIsOpenList[agent.agent_id]}>
                            <ModalOptions.Option
                              Icon={AiOutlineEye}
                              url={'/colaborador/${agent.agent_id}'}
                              isActive={true}
                            >
                              Ver colaborador
                            </ModalOptions.Option>
                            <ModalOptions.Option Icon={RiDeleteBinLine} url={'/'} isActive={false}>
                              Excluir
                            </ModalOptions.Option>
                          </ModalOptions>
                          <ActionsContainer onClick={() => toggleModal(agent.agent_id)}>
                            <AiOutlineFileAdd size={24} color='#1DD195' />
                            <ActionLabel>Ações</ActionLabel>
                          </ActionsContainer>
                        </TableDrop.Td>
                      </TableDrop.Row>
                    ))}
                  </TableDrop.Body>
                </TableDrop>
              )}
              <BottomContainer>
                <SelectQuantity />
                <Pagination />
              </BottomContainer>
            </Content>
          </Container>
        </Wrapper>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await axios.get('https://pp-api-desafio.herokuapp.com/agents')
  return {
    props: {
      data: data.items,
    },
  }
}

export default Home
