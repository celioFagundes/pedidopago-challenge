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
export const PageTitle = styled(BoldText)`
  font-size: 32px;
  @media (max-width: 768px) {
    margin-left: 16px;
    font-size: 24px;
  }
`
export const SectionTitle = styled(BoldText)`
  font-size: 16px;
  margin: 40px 0;
`