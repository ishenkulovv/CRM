import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
`

export const LightBox = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 50%;
  background-color: #fff;
  z-index: -1;
`

export const GreenBox = styled(LightBox)`
  background-color: rgba(12, 175, 96, 1);
  right: 0px;
  left: auto;
`

export const FormContent = styled.div`
  max-width: 440px;
  width: 100%;
`

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
`

export const ImageBlock = styled.div`
  max-width: 440px;
  width: 100%;
  border: 1px solid red;
`