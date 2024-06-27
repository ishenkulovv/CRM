import React from 'react'
import { InputStyled } from './styled'

export default function Input({onChange, value = "", id}) {

  const handler = (e) => {
    onChange(e.target.value)
  }

  return (
    <InputStyled id={id} type="text" onChange={handler} defaultValue={value} />
  )
}
