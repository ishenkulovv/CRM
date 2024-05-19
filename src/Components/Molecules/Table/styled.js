import { styled } from "styled-components";

export const TableContainer = styled.div`
    margin-top: 10px;
`;

export const TableHead = styled.div`
    border-top: 1px solid #eeeff2;
`;

export const TableBody = styled.div``;

export const TableTr = styled.div`
    display: grid;
    align-items: flex-start;
    grid-template-columns: 100px 1fr 0.6fr 1fr 0.7fr 0.7fr 1fr;
    border-bottom: 1px solid #eeeff2;
    gap: 10px;
    padding: 15px 12px;
`;

export const TableTh = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    color: rgba(113, 128, 150, 1);
`;

export const TableTd = styled.div`
    font-family: General Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
`;

export const TableOrder = styled.div``;

export const TableOrderId = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 22.4px;
    text-align: left;
`;

export const TableStatus = styled.div`
    padding: 5px 16px;
    font-size: 14px;
    border-radius: 8px;
    text-align: right;
    line-height: 22.4px;
    font-weight: 500;
    width: max-content;
    color: ${(color) => color};
    background: ${(background) => background};
`;
