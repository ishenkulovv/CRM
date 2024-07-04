import { styled } from "styled-components";

export const Page = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  border: 1px solid red;
  padding-top: 100px;

  input {
    background: #FAFAFA;
  }
`

export const Container = styled.div`
  max-width: 818px;
  width: 100%;
  margin: 0 auto;
`
export const Title = styled.h1`
  font-family: General Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  color: rgba(17, 24, 39, 1);
`

export const SubTitle = styled.h2`
  font-family: General Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: rgba(113, 128, 150, 1);
  margin-top: 12px;
`

export const Block = styled.div`
  border: 1px solid rgba(238, 239, 242, 1);
  padding: 32px;
  border-radius: 24px;
`

export const FormField = styled.div`
  width: 100%;
  margin-top: 16px;
  div {
    max-width: 100%;
  }
`

export const Label = styled.label`
  display: block;
  font-family: General Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  margin-bottom: 12px;
  color: rgba(17, 24, 39, 1);
`

export const Legend = styled.p`
  font-family: General Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  color: rgba(113, 128, 150, 1);
  margin-bottom: 16px;
`

export const CheckboxBlock = styled.div`
  display: flex;
  gap: 15px;
  cursor: pointer;
`

export const Footer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0;
  height: 128px;
  width: 100%;
  border-top: 1px solid rgba(238, 239, 242, 1);
  padding: 32px 15px;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
  }
`

export const SkipButton = styled.div`
  width: 150px;
`

export const NextButton = styled.div`
  width: 150px;
`
