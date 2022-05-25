import styled from '@emotion/styled'

type StatusProps = {
  status?: string
}
type IsActive = {
  isActive: boolean
  maxHeight?: string
}
type IsOpen = {
  isOpen?: boolean
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: -1;
  max-width: 980px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

export const Container = styled.div`
  width: 100%;
`
export const PageTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  font-family: 'Poppins';
  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 16px;
  }
`
export const Content = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 40px 24px;
  margin-top: 24px;
`
export const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0;
  border-bottom: 1px solid #eaefed;
  @media (max-width: 768px) {
    display: none;
  }
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
export const SectionTitle = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  margin: 40px 0;
`
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`
export const BottomContainerSingle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;
`
export const ModalButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: #587169;
`
export const ModalMenu = styled.div<IsOpen>`
  position: absolute;
  min-width: 340px;
  right: 20px;
  bottom: -140px;
  background-color: #fff;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 8px;
  z-index: 5000;
  transition: all 0.4s ease-in-out;
  @media (max-width: 768px) {
    position: fixed;
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
export const PageTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const BackIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 32px;
  height: 32px;
  background: #eaefed;
  border-radius: 8px;
  transition: all 100ms ease-in-out;
  margin-right: 16px;

  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
  @media (max-width: 768px) {
    border-radius:50%;
  } ;
`
export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 24px;
`
export const Username = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #34423d;
`
export const Email = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #587169;
`
export const CardsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width:768px){
    flex-direction:column;
  }
`
export const Card = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background: #f5faf8;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  margin-right: 24px;
  @media(max-width:768px){
    margin-right: 0;
    margin-bottom:8px;
  }
`
export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: #cad6d1;
  border-radius: 50%;
  margin-right: 8px;
  color: #465953;
`
export const CardDataWrapper = styled.div``
export const DataTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #587169;
`
export const Data = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #587169;
  width: max-content;
`
export const SectionOrganizationalData = styled.section`
  padding: 24px;
  border: 2px solid #eaefed;
  border-radius: 8px;
  margin: 40px 0;
`
export const SelectsContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  
`

export const SelectsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  grid-gap: 24px;
  @media(max-width:768px){
    grid-template-columns: 1fr;
  }
`
export const SelectContainer = styled.div`
  position: relative;
`
export const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 18px;
  padding: 0 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #a3b8b0;
  z-index: 4000;
  ::before {
    display: block;
    position: absolute;
    z-index: -1;
    top: 2px;
    left: 0px;
    content: ' ';
    background-color: #fff;
    height: 1px;
    width: 100%;
    padding: 5px 0px;
  }
`
export const Select = styled.select`
  width: 100%;
  padding: 20px;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #587169;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    #f5faf8 no-repeat right;
  background-position-x: 90%;
  background-position-y: 25px;
  outline: none;
  cursor: pointer;
`
export const Option = styled.option``

export const Checkbox = styled.div<IsActive>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  background: ${props => (props.isActive ? '#1DD195' : '#fff')};
  border: ${props => (props.isActive ? '0' : '2px solid #CAD6D1')};
  border-radius: 6px;
  color: #fff;
`
export const MobileDropdown = styled.div<IsActive>`
  max-height: ${props => (props.isActive ? '1000px' : props.maxHeight)};
  overflow-y: hidden;
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border: 2px solid #eaefed;
  border-color: ${props => props.isActive && '#B5F1DD'};
  border-radius: 8px;
  margin: 8px 0;
  transition: max-height 0.4s ease-in-out;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`
export const DropdownToggle = styled.div`
  position: relative;
  width: 100%;
`
export const DropdownLabel = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
`
export const Name = styled.p<StatusProps>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #587169;
  margin-left: 8px;
  color: ${props => props.status === 'inactive' && '#A3B8B0'};
`
export const DropdownAvatarAndName = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
`

export const DropdownIcon = styled.div`
  position: absolute;
  right: 10px;
  top: -5px;
`
export const DropdownContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const DropdownItem = styled.div<StatusProps>`
  margin: 16px 0;
  color: #587169;
  color: ${props => props.status === 'inactive' && '#A3B8B0'};
`
export const DropdownItemData = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`
export const DropdownAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 24px;
  border: 2px solid #b5f1dd;
  border-radius: 8px;
`
export const DropdownActionLabel = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #34423d;
  margin-left: 8px;
`
export const Status = styled.div<StatusProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 72px;
  font-weight: 500;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 80px;
  background-color: ${props => (props.status === 'inactive' ? '#EAEFED' : '#B5F1DD')};
  color: ${props => (props.status === 'inactive' ? '#A3B8B0' : '#587169')};
`
