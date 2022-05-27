import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BackIcon } from './styles'

type Props = {
    url: string
}

const BackButton = (props: Props) => {
  return (
    <Link href={props.url}>
      <BackIcon>
        <AiOutlineArrowLeft />
      </BackIcon>
    </Link>
  )
}

export default BackButton
