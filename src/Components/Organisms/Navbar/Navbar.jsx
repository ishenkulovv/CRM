import React from 'react'
import { NavbarStyled } from './styled'

export default function Navbar({title}) {
  return (
    <NavbarStyled>
      {title}
    </NavbarStyled>
  )
}
