import { styled } from "styled-components";

export const SelectStyled = styled.div`
  position: relative;
  max-width: 248px;
  width: 100%;
`

export const SelectContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FAFAFA;
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
`

export const SelectValue = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: ${({active}) => active === 'null' ? '#A0AEC0' : 'rgba(17, 24, 39, 1)'} ;
`

export const SelectIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SelectOptions = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;
  background-color: #FAFAFA;
  width: 100%;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: rgba(17, 24, 39, 1);
  overflow: hidden;
  z-index: 5;
`

export const SelectOption = styled.div`
  cursor: pointer;
  margin-top: 3px;
  padding: 8px 16px;
  
  transition: all 0.3s;
  &:first-child {
    margin: 0px;
  }

  &:hover {
    background-color: rgba(0,0,0, 0.3);
    color: white;
  }
`

export const SelectClear = styled.div``