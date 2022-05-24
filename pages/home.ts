import styled from '@emotion/styled'

type IsActive = {
  isActive: boolean
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: -1;
`

export const Container = styled.div`
  margin: 0px 100px;
  width: 80%;
`
export const PageTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  font-family: 'Poppins';
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
export const ModalMenu = styled.div`
  position: absolute;
  right: 20px;
  bottom: -140px;
  background-color: #fff;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 8px;
  z-index: 5000;
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
  width: 36px;
  height: 36px;
  background: #eaefed;
  border-radius: 80px;
  transition: all 100ms ease-in-out;
  margin-right: 16px;

  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
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
`
export const Card = styled.div`
  display: flex;
  width:100%;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background: #f5faf8;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  margin-right: 24px;
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
  width:max-content;
  
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
    top: 5px;
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
