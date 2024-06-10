import { styled } from "styled-components";

export const BlockContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 24px 0px;
  margin-top: ${({marginTop}) => marginTop || 0}
`

export const FlexBlock = styled.div`
  display: flex;
  max-width: ${({width}) => width || '100%'};
  width: 100%;
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
`