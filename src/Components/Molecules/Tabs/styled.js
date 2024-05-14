import { styled, css } from "styled-components";

export const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 24px;
    padding-bottom: 6px;
    border-bottom: 1px solid #eeeff2;
    gap: 16px;
`;

export const Tab = styled.div`
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #718096;
    cursor: pointer;
    padding: 0 8px;

    ${(props) =>
        props.active === "true" &&
        css`
            color: #0caf60;
            &:after {
                position: absolute;
                bottom: -7px;
                left: 0px;
                content: "";
                width: 100%;
                height: 2px;
                background-color: #0caf60;
            }
        `}
`;
