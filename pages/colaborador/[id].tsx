import type { GetServerSideProps } from 'next'
import axios from 'axios'
import Image from 'next/image'
import Seo from '../../components/Seo'

import { HiOutlineIdentification } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
import { FiCalendar } from 'react-icons/fi'

import Layout from '../../components/Layout'
import BackButton from '../../components/BackButton'
import Card from '../../components/Card'
import Select from '../../components/Select'

import {
  PageTitleWrapper,
  Content,
  UserContainer,
  UserData,
  Username,
  Email,
  CardsWrapper,
  SectionOrganizationalData,
  SelectsContainerWrapper,
  SelectsRow,
} from '../../styles/colaborador'
import { PageTitle, SectionTitle } from '../../styles/texts'

interface Phone {
  ddd: number
  ddi: number
  number: number
}
interface Document {
  type: string
  number: number
}
interface Agent {
  id: number
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: boolean
  email: string
  phone: Phone
  document: Document
  birth_date: Date
}

interface MainProps {
  data: Agent
}
const Colaborador: React.FC<MainProps> = ({ data }) => {
  const transformCPF = (text: string) => {
    const badchars = /[^\d]/g
    const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
    const cpf = new String(text).replace(badchars, '')
    return cpf.replace(mask, '$1.$2.$3-$4')
  }
  return (
    <>
      <Seo title='Detalhe do colaborador' description='Detalhes do colaborador' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/' />
          <PageTitle>Detalhes do colaborador</PageTitle>
        </PageTitleWrapper>
        <Content>
          <UserContainer>
            <Image
              src={data.image}
              layout='fixed'
              height={80}
              width={80}
              objectFit='cover'
              alt='avatar'
              style={{ borderRadius: '50%' }}
            />
            <UserData>
              <Username>{data.name}</Username>
              <Email>{data.email}</Email>
            </UserData>
          </UserContainer>
          <SectionTitle>Informações pessoais</SectionTitle>
          <CardsWrapper>
            <Card
              Icon={HiOutlineIdentification}
              dataTitle={data.document.type}
              data={transformCPF(data.document.number.toString())}
            />
            <Card
              Icon={BiPhoneCall}
              dataTitle='Telefone'
              data={`+${data.phone.ddi} ${data.phone.ddd} ${data.phone.number}`}
            />
            <Card
              Icon={FiCalendar}
              dataTitle='Nascimento'
              data={new Date(data.birth_date).toLocaleDateString()}
            />
          </CardsWrapper>
          <SectionOrganizationalData>
            <SectionTitle>Dados Organizacionais</SectionTitle>
            <SelectsContainerWrapper>
              <SelectsRow>
                <Select label='Departamento' bgColor='#F5FAF8'>
                  <Select.Option>Comercial</Select.Option>
                </Select>
                <Select label='Cargo' bgColor='#F5FAF8'>
                  <Select.Option>Gerente</Select.Option>
                </Select>
              </SelectsRow>
              <SelectsRow>
                <Select label='Unidade' bgColor='#F5FAF8'>
                  <Select.Option>Unidade 1</Select.Option>
                </Select>
                <Select label='Status' bgColor='#F5FAF8'>
                  <Select.Option>Ativo</Select.Option>
                </Select>
              </SelectsRow>
            </SelectsContainerWrapper>
          </SectionOrganizationalData>
        </Content>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await axios.get('https://pp-api-desafio.herokuapp.com/agent/1')
  return {
    props: {
      data: data.agent,
    },
  }
}

export default Colaborador
