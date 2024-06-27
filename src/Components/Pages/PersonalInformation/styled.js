import { styled } from "styled-components";

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  color: rgba(17, 24, 39, 1);
`

export const HR = styled.div`
  border: 1px solid rgba(241, 242, 244, 1);
  margin-bottom: 32px;
  margin-top: 24px;
`

export const Form = styled.div``

export const UploaderBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({direction}) => direction ?? 'row'};
  position: relative;
  gap: 10px;
`

export const UploaderImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: gray;
`

export const UploaderInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
`

export const UploaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const UploaderText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  color: rgba(113, 128, 150, 1);
`

export const UploaderBtns = styled.div``

export const UploaderAdd = styled.label`
  font-size: 14px;
  font-weight: 700;
  line-height: 22.4px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  background-color: rgba(12, 175, 96, 1);
  border-radius: 10px;
  padding: 12px;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(0px);
  }
`

export const UploaderDelete = styled.div``

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
`

export const FormField = styled.div``

export const FormLabel = styled.label`
  font-family: General Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: rgba(113, 128, 150, 1);
  margin-bottom: 12px;
`

export const FormSubmit = styled.div`
  margin-top: 20px
`