import styled from '@emotion/styled'

type IsActive = {
  isActive: boolean
  maxHeight?: string
}
type IsOpen = {
  isOpen?: boolean
}
export const ModalMenu = styled.div<IsOpen>`
  position: absolute;
  display: ${props => (props.isOpen ? 'block ' : 'none')};
  min-width: 340px;
  right: 20px;
  bottom: -140px;
  background-color: #fff;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  z-index: 5000;
  @media (max-width: 768px) {
    position: fixed;
    display: block;
    left: 4%;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    bottom: ${props => (props.isOpen ? '0' : '-1000px')};
    width: 92%;
    z-index: 5000;
  }
`
export const ModalBackground = styled.div<IsOpen>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  background-color: ${props => (props.isOpen ? 'rgba(0,0,0,0.4)' : 'transparent')};
  transition: all 0.4s ease-in-out;
  z-index: 4000;
  @media (min-width: 768px) {
    background-color: transparent;
  } ;
`

export const ModalOption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 32px;
  border-radius: 8px;
  transition: all 100ms ease-in-out;
  &:hover {
    cursor: pointer;
  }
`
export const ModalOptionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cad6d1;
  margin-right: 16px;
`
export const ModalOptionLink = styled.a<IsActive>`
  width: 140px;
  color: ${props => (props.isActive ? '#587169' : '#A3B8B0')};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`
