import type { GetServerSideProps } from 'next'
import axios from 'axios'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Seo from '../components/Seo'

import TableDrop from '../components/TableToDropdown'
import Layout from '../components/Layout'
import ModalOptions from '../components/ModalOptions'
import SearchInput from '../components/SearchInput'
import Pagination from '../components/Pagination'
import SelectModal from '../components/SelectModal'
import Tabs from '../components/Tabs'
import {
  ActionLabel,
  DropdownIcon,
  Value,
  Label,
  ActionsContainer,
  DotsIcon,
} from '../components/TableToDropdown/styles'
import { BottomContainerSingle, Content } from '../styles/cargos'
import { PageTitle, SectionTitle } from '../styles/texts'
import Eye from '../components/Icons/Eye'
import Down from '../components/Icons/Down'
import Up from '../components/Icons/Up'
import Edit from '../components/Icons/Edit'
import Duplicate from '../components/Icons/Duplicate'
import Repeat from '../components/Icons/Repeat'
import FilePlus from '../components/Icons/FilePlus'
import MoreVertical from '../components/Icons/MoreVertical'

interface Roles {
  name: string
  departament: string
  agents_quantity: number
}
interface MainProps {
  data: [Roles]
}

interface IsOpenList {
  [key: string]: boolean
}
const Cargos: React.FC<MainProps> = ({ data }) => {
  const [modalCategoriesIsOpen, setModalCategoriesIsOpen] = useState(false)
  const [modalIsOpenList, setModalIsOpenList] = useState<IsOpenList>({})
  const [dropdownIsOpenList, setDropdownIsOpenList] = useState<IsOpenList>({})
  const router = useRouter()

  useEffect(() => {
    const createActiveStatusList = () => {
      const activeStatusList = data.reduce((prev, curr) => {
        return { ...prev, [curr.name + curr.departament]: false }
      }, {})
      setModalIsOpenList(activeStatusList)
      setDropdownIsOpenList(activeStatusList)
    }
    createActiveStatusList()
  }, [data])

  const updateActiveStatusList = (
    id: string,
    prevList: IsOpenList,
    updateFn: Dispatch<SetStateAction<IsOpenList>>
  ) => {
    let newList = { ...prevList }
    if (newList[id]) {
      Object.keys(newList).forEach(item => (newList[item] = false))
    } else {
      Object.keys(newList).forEach(item => (newList[item] = false))
      newList[id] = !newList[id]
    }
    updateFn(newList)
  }
  const toggleOptionsModal = (id: string) => {
    updateActiveStatusList(id, modalIsOpenList, setModalIsOpenList)
  }
  const toggleDropdown = (id: string) => {
    updateActiveStatusList(id, dropdownIsOpenList, setDropdownIsOpenList)
  }
  const toggleCategoriesModal = (state: boolean) => {
    setModalCategoriesIsOpen(state)
  }

  const closeAnyActiveOptionsModal = () => {
    let newList = { ...modalIsOpenList }
    Object.keys(newList).forEach(item => (newList[item] = false))
    setModalIsOpenList(newList)
  }

  return (
    <div>
      <Seo title='Cargos' description='Listagem de cargos' />
      <Layout>
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
            openFn={() => toggleCategoriesModal(true)}
            closeFn={() => toggleCategoriesModal(false)}
            label={'Cargos'}
          />
          <SearchInput />
          <SectionTitle>Listagem de cargos</SectionTitle>
          {data && (
            <TableDrop>
              <TableDrop.Header>
                <TableDrop.Row numberOfColumns={4}>
                  <TableDrop.Th>Cargo</TableDrop.Th>
                  <TableDrop.Th>Departamento</TableDrop.Th>
                  <TableDrop.Th>Colaboradores</TableDrop.Th>
                  <TableDrop.Th></TableDrop.Th>
                </TableDrop.Row>
              </TableDrop.Header>
              <TableDrop.Body>
                {data.map(role => (
                  <TableDrop.Row
                    numberOfColumns={4}
                    key={role.name + role.departament}
                    isActive={dropdownIsOpenList[role.name + role.departament]}
                    maxHeight={'78px'}
                  >
                    <TableDrop.Td onClick={() => toggleDropdown(role.name + role.departament)}>
                      <Label>Cargo</Label>
                      <Value>{role.name}</Value>
                      <DropdownIcon>
                        {!dropdownIsOpenList[role.name + role.departament] ? <Down /> : <Up />}
                      </DropdownIcon>
                    </TableDrop.Td>
                    <TableDrop.Td>
                      <Label>Departamento</Label>
                      <Value>{role.departament}</Value>
                    </TableDrop.Td>
                    <TableDrop.Td>
                      <Label>Colaboradores</Label>
                      <Value>{role.agents_quantity}</Value>
                    </TableDrop.Td>
                    <TableDrop.Td>
                      <DotsIcon onClick={() => toggleOptionsModal(role.name + role.departament)}>
                        <MoreVertical />
                      </DotsIcon>
                      <ActionsContainer
                        onClick={() => toggleOptionsModal(role.name + role.departament)}
                      >
                        <FilePlus />
                        <ActionLabel>Ações</ActionLabel>
                      </ActionsContainer>
                      <ModalOptions
                        isOpen={modalIsOpenList[role.name + role.departament]}
                        closeFn={closeAnyActiveOptionsModal}
                      >
                        <ModalOptions.Option url={'/cargo/create'} isActive={true} icon={Eye}>
                          Ver cargo
                        </ModalOptions.Option>
                        <ModalOptions.Option url={'/cargo/create'} isActive={false} icon={Edit}>
                          Editar
                        </ModalOptions.Option>
                        <ModalOptions.Option
                          url={'/cargo/create'}
                          isActive={false}
                          icon={Duplicate}
                        >
                          Duplicar
                        </ModalOptions.Option>
                        <ModalOptions.Option url={'/cargo/create'} isActive={false} icon={Repeat}>
                          Excluir
                        </ModalOptions.Option>
                      </ModalOptions>
                    </TableDrop.Td>
                  </TableDrop.Row>
                ))}
              </TableDrop.Body>
            </TableDrop>
          )}
          <BottomContainerSingle>
            <Pagination />
          </BottomContainerSingle>
        </Content>
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await axios.get('https://pp-api-desafio.herokuapp.com/roles')
  return {
    props: {
      data: data.roles,
    },
  }
}

export default Cargos
