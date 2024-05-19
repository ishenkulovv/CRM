import { styled } from "styled-components";

export const CheckBoxContainer = styled.div`
    position: relative;

    input: checked + label div {
        background-color: #0caf60;
    }
`;

export const CheckBoxInput = styled.input`
    position: absolute;
    top: -10px;
    left: -10px;
    opacity: 0;
`;

export const CheckBoxLabel = styled.label`
    position: relative;
`;

export const CheckBoxRadio = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #c8d5e0;
    cursor: pointer;
`;
