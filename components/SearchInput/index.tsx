import Search from '../Icons/Search'
import { Input, Label, Wrapper, Icon } from './styles'
type Props = {}

const SearchInput = (props: Props) => {
  return (
    <Wrapper>
      <Label>Pesquisar por</Label>
      <Icon>
        <Search/>
      </Icon>

      <Input placeholder='Pesquise por nome ou cpf' />
    </Wrapper>
  )
}

export default SearchInput
