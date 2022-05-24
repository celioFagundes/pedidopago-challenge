import styled from '@emotion/styled'

type IsActive = {
  isActive: boolean
}
export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 50px;
  z-index:-1;
`

export const Container = styled.div``
export const PageTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 24px;
`
export const Content = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 40px 24px;
`
export const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0;
  border-bottom: 1px solid #eaefed;
`
export const Tab = styled.a<IsActive>`
  width: 200px;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 110%;
  padding-bottom: 16px;
  border-bottom: 2px solid;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  color: ${props => (props.isActive ? '#587169' : '#A3B8B0')};
  border-color: ${props => (props.isActive ? '#22e0a1' : 'transparent')};
  &:hover {
    color: ${props => !props.isActive && '#587169'};
    border-color: ${props => !props.isActive && '#ABE0CE'};
  }
`
export const SearchInput = styled.input`
  margin: 40px 0;
`

export const ListTitle = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  margin: 40px 0;
`
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`
export const ModalButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: #587169;

`
export const ModalMenu = styled.div`
  position: absolute;
  right: 20px;
  bottom: -90px;
  background-color: #fff;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 8px;
  z-index:5000;
`

export const ModalOption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 32px;
  transition:all 100ms ease-in-out;
  &:hover{
    cursor:pointer;
    background-color:#EDEDED;
  }
`
export const ModalOptionIcon = styled.div`
  margin-right: 16px;
`
export const ModalOptionLink = styled.a<IsActive>`
  color: ${props => (props.isActive ? '#587169' : '#A3B8B0')};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 140px;
  `
