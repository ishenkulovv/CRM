import { styled } from "styled-components";

export const NavbarStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid red;
    padding: 24px 48px;
`;

export const NavbarLeft = styled.div``;

export const NavbarRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 250px;
    width: 100%;
`;

export const NavbarTitle = styled.h1`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: black;
`;
