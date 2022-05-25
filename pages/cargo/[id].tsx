import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { HiOutlineIdentification } from 'react-icons/hi'
import Layout from '../../components/Layout'
import {
  BackIcon,
  Card,
  CardDataWrapper,
  CardIcon,
  CardsWrapper,
  Checkbox,
  Container,
  Content,
  Data,
  DataTitle,
  Email,
  Label,
  Option,
  PageTitle,
  PageTitleWrapper,
  SectionOrganizationalData,
  SectionTitle,
  Select,
  SelectContainer,
  SelectsContainerWrapper,
  SelectsRow,
  UserContainer,
  UserData,
  Username,
  Wrapper,
} from '../home'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

import { FiCalendar } from 'react-icons/fi'
import Table from '../../components/Table'

interface GroupRules {
  role: string
  permissions: [string]
}
interface Role {
  name: string
  department: string
  grouprules: [GroupRules]
}

interface MainProps {
  data: Role
}
const Cargo: React.FC<MainProps> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Cargos e Permissôes</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Wrapper>
          <Container>
            <PageTitleWrapper>
              <Link href='/cargos'>
                <BackIcon>
                  <AiOutlineArrowLeft />
                </BackIcon>
              </Link>
              <PageTitle>Cargos e Permissôes</PageTitle>
            </PageTitleWrapper>
            <Content>
              <SectionTitle>Dados do cargo</SectionTitle>
              <CardsWrapper>
                <Card>
                  <Label>Departamento</Label>
                  <CardDataWrapper>
                    <Data>{data.department}</Data>
                  </CardDataWrapper>
                </Card>
                <Card>
                  <Label>Label</Label>
                  <CardDataWrapper>
                    <Data>{data.name}</Data>
                  </CardDataWrapper>
                </Card>
              </CardsWrapper>
              <SectionTitle>Listagem de permissões</SectionTitle>
              {data && (
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.Th>Cargo</Table.Th>
                      <Table.Th>Ler</Table.Th>
                      <Table.Th>Editar</Table.Th>
                      <Table.Th>Excluir</Table.Th>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {data.grouprules.map(rule => (
                      <Table.Row key={rule.role}>
                        <Table.Td>{rule.role} </Table.Td>
                        <Table.Td>
                          <Checkbox isActive={rule.permissions.includes('read')}>
                            <AiOutlineCheck />
                          </Checkbox>
                        </Table.Td>
                        <Table.Td>
                          <Checkbox isActive={rule.permissions.includes('write')}>
                            <AiOutlineCheck />
                          </Checkbox>
                        </Table.Td>
                        <Table.Td>
                          <Checkbox isActive={rule.permissions.includes('delete')}>
                            <AiOutlineCheck />
                          </Checkbox>
                        </Table.Td>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              )}
            </Content>
          </Container>
        </Wrapper>
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await axios.get('https://pp-api-desafio.herokuapp.com/role/1')
  return {
    props: {
      data: data.role,
    },
  }
}

export default Cargo