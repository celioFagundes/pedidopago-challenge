import Image from 'next/image'
import React from 'react'
import { Data, Header, LogoContainer, UserAvatar, UserContainer, UserData, Username, Wrapper } from './styles'

interface MainProps {
  children?: React.ReactNode
}
const Layout = (props: MainProps) => {
  return (
    <Wrapper>
      <Header>
        <LogoContainer>
          <Image  src = '/pedido-pago-logo.png' alt ='brand logo' height={35} width = {35}/>
        </LogoContainer>
        <UserContainer>
          <UserAvatar>LZ</UserAvatar>
          <UserData>
            <Username>Luiz Zlochevsky</Username>
            <Data>meus dados</Data>
          </UserData>
        </UserContainer>
      </Header>
      {props.children}
    </Wrapper>
  )
}

export default Layout
