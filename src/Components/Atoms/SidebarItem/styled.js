import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const ListStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.2px;
    text-align: left;
    text-decoration: none;
    color: #718096;
    gap: 16px;
    margin-top: 16px;

    &active {
        color: #0caf60;

        svg {
            path {
                fill: #0caf60;
            }
        }
    }

    &hover {
        color: #0caf60;

        svg {
            path {
                fill: #0caf60;
            }
        }
    }
`;
