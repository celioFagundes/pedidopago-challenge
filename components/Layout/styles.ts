import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`
export const Header = styled.header`
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  width: 100%;
  padding: 0 32px;
  border-bottom: 1px solid #eaefed;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right: 32px;
  border-right: 1px solid #eaefed;
`
export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 32px;
  border-left: 1px solid #eaefed;
`
export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b5f1dd;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Poppins';
`
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`
export const Username = styled.p`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Poppins';
`
export const Data = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Poppins';
`
export const Container = styled.section`
  display: grid;
  grid-template-columns: 18% 1fr;
  justify-content: flex-start;
  min-height: 100%;
  background-color: #f8faf9;
`
export const Sidebar = styled.aside`
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-right: 1px solid #eaefed;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
`
export const Main = styled.section`
  padding: 50px 0px;
  width: 100%;
  background-color: #f8faf9;
`
