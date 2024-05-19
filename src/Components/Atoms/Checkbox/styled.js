import { styled } from "styled-components";

export const CheckboxContainer = styled.div`
  position: relative;

  input:checked + label div {
    background-color: #0CAF60;
  }
`

export const CheckboxInput = styled.input`
  position: absolute;
  top: -10px;
  left: -10px;
  opacity: 0;
`

export const CheckboxLabel = styled.label`
  position: relative;
`

export const CheckboxRadio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #CBD5E0;
  cursor: pointer;
`