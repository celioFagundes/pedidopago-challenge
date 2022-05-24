import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Message = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #587169;
  margin-right: 24px;
`

export const Container = styled.label`
  position: relative;
`
export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right;
  background-position-x: 90%;
  background-position-y: 10px;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  padding: 6px 40px 6px 15px;
  outline: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #587169;
  &:hover {
    cursor: pointer;
    border-color: #000;
  }
`
export const Icon = styled.div`
  position: absolute;
  right: 2px;
  top: 5px;
  z-index: 100;
  background-color: #0f0;
`
export const Option = styled.option``
