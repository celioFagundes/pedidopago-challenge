import { IconType } from 'react-icons'
import { Data, DataTitle, Icon, Wrapper, DataWrapper } from './styles'

type Props = {
    Icon: IconType
    dataTitle: string | number
    data: string | number
}

const Card = (props: Props) => {
  return (
    <Wrapper>
      <Icon>
        <props.Icon size={20} />
      </Icon>
      <DataWrapper>
        <DataTitle>{props.dataTitle}</DataTitle>
        <Data>{props.data}</Data>
      </DataWrapper>
    </Wrapper>
  )
}

export default Card
