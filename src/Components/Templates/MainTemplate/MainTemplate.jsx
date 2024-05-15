import React from 'react'
import Sidebar from '../../Organisms/Sidebar/Sidebar'
import { Container, MainContainer } from './styled'
import Navbar from '../../Organisms/Navbar/Navbar'

export default function MainTemplate({children, title}) {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <Navbar title={title} />
        <Container>
          {children}
        </Container>
      </MainContainer>
    </>
  )
}
