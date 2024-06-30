import React from 'react'
import { InputStyled } from './styled'

export default function Input({onChange, value = "", id, type = 'text', placeholder = 'Placeholder'}) {

  const handler = (e) => {
    onChange(e.target.value)
  }

  return (
    <InputStyled placeholder={placeholder} id={id} type={type} onChange={handler} defaultValue={value} />
  )
}
