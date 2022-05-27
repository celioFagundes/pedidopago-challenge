import type { GetServerSideProps } from 'next'
import axios from 'axios'
import Seo from '../../components/Seo'

import Layout from '../../components/Layout'
import Table from '../../components/Table'
import BackButton from '../../components/BackButton'
import Select from '../../components/Select'

import { SelectsRow, Content, PageTitleWrapper } from '../../styles/cargos/create'
import { PageTitle, SectionTitle } from '../../styles/texts'
import CheckboxOn from '../../components/Icons/CheckboxOn'
import CheckboxOff from '../../components/Icons/CheckboxOff'

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
const CreateCargo: React.FC<MainProps> = ({ data }) => {
  return (
    <>
      <Seo title='Criar novo cargo' description='Criação de um novo cargo' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/cargos' />
          <PageTitle>Cargos e Permissôes</PageTitle>
        </PageTitleWrapper>
        <Content>
          <SectionTitle>Dados do cargo</SectionTitle>
          <SelectsRow>
            <Select label='Departamento'>
              <Select.Option>{data.department}</Select.Option>
            </Select>
            <Select label='Cargo'>
              <Select.Option>{data.name}</Select.Option>
            </Select>
          </SelectsRow>
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
                      {rule.permissions.includes('read') ? <CheckboxOn /> : <CheckboxOff />}
                    </Table.Td>
                    <Table.Td>{rule.permissions.includes('write') ? <CheckboxOn /> : <CheckboxOff />}</Table.Td>
                    <Table.Td>{rule.permissions.includes('delete') ? <CheckboxOn /> : <CheckboxOff />}</Table.Td>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </Content>
      </Layout>
    </>
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

export default CreateCargo
