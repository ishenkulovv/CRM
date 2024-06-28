import React from 'react'
import { Container, Content, FormContent, GreenBox, ImageBlock, InfoContent, LightBox } from './styled'

export default function AuthTemplate({children}) {
  return (
    <Content>
      <Container>
        <FormContent>
          {children}
        </FormContent>
      </Container>
      <InfoContent>
        <ImageBlock></ImageBlock>
      </InfoContent>
      <LightBox></LightBox>
      <GreenBox></GreenBox>
    </Content>
  )
}
