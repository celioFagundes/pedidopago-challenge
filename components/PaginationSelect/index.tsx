import { Container, Message, Option, Select, Wrapper } from "./styles"

type Props = {}

const PaginationSelect = (props: Props) => {
  return (
    <Wrapper>
      <Message>Mostrando 10 de 50 registros</Message>
      <Container htmlFor='select'>
        <Select id='select'>
          <Option>5</Option>
          <Option>10</Option>
          <Option>20</Option>
          <Option>40</Option>
          <Option>50</Option>
        </Select>  
      </Container>
    </Wrapper>
  )
}

export default PaginationSelect
