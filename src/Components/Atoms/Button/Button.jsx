import React from 'react'
import { ButtonStyled } from './styled'
import BellIcon from '../../../Assets/Icons/BellIcon'

export default function Button({ children, handler, type = 'default' }) {
  return (
    <ButtonStyled onClick={handler} type={type}>
      { children }
    </ButtonStyled>
  )
}
