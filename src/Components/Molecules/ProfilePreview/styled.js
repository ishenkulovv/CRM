import React from "react";
import { styled } from "styled-components";

export const ProfileImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 16px;
`;

export const ProfileStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfileTexts = styled.div``;

export const ProfileFullName = styled.h3`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: black;
`;

export const ProfileCompanyName = styled.h3`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
    color: #718096;
`;
