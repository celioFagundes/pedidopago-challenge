import styled from '@emotion/styled'

export const BaseText = styled.p`
  font-style: normal;
  font-size: 16px;
`;
export const LightText = styled(BaseText)`
  font-weight: 400;
`
export const NormalText = styled(BaseText)`
  font-weight: 500;
`
export const BoldText = styled(BaseText)`
  font-weight: 600;
`
export const MobilePaginationLabel = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #587169;
  margin: 0 12px;
`
export const Message = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #587169;
  margin-right: 24px;
`
export const ModalOptionLink = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #587169;
`
export const ModalLabel = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #34423d;
  margin-bottom: 35px;
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
export const AvatarName = styled.p`
  margin-left: 8px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-weight: 600;
  }
`
export const DropdownItemData = styled.p`
  font-weight: 400;
  font-size: 12px;
`
export const DropdownActionLabel = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #34423d;
  margin-left: 8px;
`
export const DropdownLabel = styled.p`
  
  font-weight: 600;
  font-size: 12px;
  @media (min-width: 768px) {
    display: none;
  }
`
