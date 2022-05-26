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
    border-radius: 50%;
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
  @media (max-width: 768px) {
    flex-direction: column;
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
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
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
  @media (max-width: 768px) {
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
export const Name = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  margin-left: 8px;
 
`
export const DropdownAvatarAndName = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
`
export const Status = styled.div<StatusProps>`
  font-weight: 500;
  font-size: 14px;
  padding: 4px 16px;
  border-radius: 80px;
  background-color: ${props => (props.status === 'inactive' ? '#EAEFED' : '#B5F1DD')};
  color: ${props => (props.status === 'inactive' ? '#A3B8B0' : '#34423D')};
`
export const AvatarNameContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const ImageWrapper = styled.div`
  position: relative;
  min-height: 32px;
  min-width: 32px;
`
