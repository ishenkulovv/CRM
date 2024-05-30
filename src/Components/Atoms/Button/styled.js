import { styled } from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({type}) => type === 'default' ? 'rgba(12, 175, 96, 1)' : 'white'};
  border: 1px solid ${({type}) => type === 'transparent-dark' ? 'rgba(17, 24, 39, 1)' : 'rgba(12, 175, 96, 1)'} ;
  padding: 12px;
  width: 100%;
  border-radius: 12px;
  color: ${({type}) => type === 'transparent-dark' ? 'rgba(17, 24, 39, 1)' : type === 'transparent' ? 'rgba(12, 175, 96, 1)' : 'white'};
  font-size: 14px;
  font-weight: 700;
  line-height: 22.4px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0px);
  }
`