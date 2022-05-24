import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'
import Table from '../../components/Table/index'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Layout from '../../components/Layout'
import {
  BottomContainer,
  Container,
  Content,
  ListTitle,
  PageTitle,
  Tab,
  Tabs,
  Wrapper,
} from '../home'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SearchInput from '../../components/SearchInput'
import SelectQuantity from '../../components/Select'
import Pagination from '../../components/Pagination'
interface Agent {
  agent_id: number
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: boolean
}
interface MainProps {
  data: [Agent]
}
const Colaborador: React.FC<MainProps> = ({ data }) => {
  const [displayData, setDisplayData] = useState(data)
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Wrapper>
          <Container>
            <PageTitle>Organização</PageTitle>
            <Content>
              <Tabs>
                <Link href='/'>
                  <Tab isActive={router.pathname === '/'}>Colaboradores</Tab>
                </Link>
                <Link href='/cargos'>
                  <Tab isActive={router.pathname !== '/'}>Cargos</Tab>
                </Link>
              </Tabs>
              <SearchInput />
              <ListTitle>Listagem de colaboradores</ListTitle>
              {data && (
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.Th>Nome Completo</Table.Th>
                      <Table.Th>Departamento</Table.Th>
                      <Table.Th>Cargo</Table.Th>
                      <Table.Th>Unidade</Table.Th>
                      <Table.Th>Status</Table.Th>
                      <Table.Th></Table.Th>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {displayData.map(
                      agent =>
                        agent.agent_id !== 15 && (
                          <Table.Row key={agent.agent_id}>
                            <Table.Td status={agent.status}>
                              <Table.AvatarAndName url={agent.image} name={agent.name} />
                            </Table.Td>
                            <Table.Td status={agent.status}>{agent.department}</Table.Td>
                            <Table.Td status={agent.status}>{agent.role}</Table.Td>
                            <Table.Td status={agent.status}>{agent.branch}</Table.Td>
                            <Table.Td>
                              <Table.Status status={agent.status}> {agent.status}</Table.Status>
                            </Table.Td>
                            <Table.Td>
                              <BsThreeDotsVertical size={16} color={'#587169'} />
                            </Table.Td>
                          </Table.Row>
                        )
                    )}
                  </Table.Body>
                </Table>
              )}
              <BottomContainer>
                <SelectQuantity />
                <Pagination />
              </BottomContainer>
            </Content>
          </Container>
        </Wrapper>
      </Layout>
    </div>
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

export default Colaborador
