import React from 'react'
import { ButtonStyled } from './styled'
import BellIcon from '../../../Assets/Icons/BellIcon'

export default function Button({ children, handler }) {
  return (
    <ButtonStyled onClick={handler}>{ children }</ButtonStyled>
  )
}
