import { FiSearch } from 'react-icons/fi'
import { Input, Label, Wrapper, Icon } from './styles'
type Props = {}

const SearchInput = (props: Props) => {
  return (
    <Wrapper>
      <Label>Pesquisar por</Label>
      <Icon>
        <FiSearch size ={22}/>
      </Icon>

      <Input placeholder='Pesquise por nome ou cpf'/>
    </Wrapper>
  )
}

export default SearchInput
