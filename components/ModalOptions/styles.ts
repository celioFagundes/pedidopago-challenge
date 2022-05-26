import styled from "@emotion/styled"

type IsActive = {
    isActive: boolean
    maxHeight?: string
  }
  type IsOpen = {
    isOpen?: boolean
  }
export const ModalMenu = styled.div<IsOpen>`
  position: absolute;
  min-width: 340px;
  right: 20px;
  bottom: -140px;
  display: ${props => (props.isOpen ? 'block ' : 'none')};
  background-color: #fff;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 8px;
  z-index: 5000;
  transition: all 0.4s ease-in-out;
  @media (max-width: 768px) {
    position: fixed;
    display: block;
    left: 4%;
    bottom: ${props => (props.isOpen ? '0' : '-1000px')};
    width: 92%;
    z-index: 5000;
  }
`
export const ModalBackground = styled.div<IsOpen>`
  position: fixed;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  z-index: 4000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  transition: all 0.4s ease-in-out;
  background-color: ${props => (props.isOpen ? 'rgba(0,0,0,0.4)' : 'transparent')};
  @media (min-width: 768px) {
    display: none;
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
    background-color: #ededed;
  }
`
export const ModalOptionIcon = styled.div`
  color: #cad6d1;
  margin-right: 16px;
`
export const ModalOptionLink = styled.a<IsActive>`
  color: ${props => (props.isActive ? '#587169' : '#A3B8B0')};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 140px;
`