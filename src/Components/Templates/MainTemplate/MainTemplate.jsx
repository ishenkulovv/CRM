import React from 'react'
import Sidebar from '../../Organisms/Sidebar/Sidebar'
import { MainContainer } from './styled'
import Navbar from '../../Organisms/Navbar/Navbar'

export default function MainTemplate({children, title}) {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <Navbar title={title} />
        {children}
      </MainContainer>
    </>
  )
}
