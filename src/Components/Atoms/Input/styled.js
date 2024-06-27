import { styled } from 'styled-components';

export const InputStyled = styled.input`
  background-color: rgba(250, 250, 250, 1);
  width: 100%;
  border: 1px solid transparent;
  padding: 16px;
  border-radius: 12px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: rgba(12, 175, 96, 1);
  }
`