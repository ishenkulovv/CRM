import React from 'react'
import { CheckboxRadio, CheckboxContainer, CheckboxInput, CheckboxLabel } from './styled'
import CheckboxArrowIcon from '../../../Assets/Icons/CheckboxArrowIcon'

export default function Checkbox( { id } ) {
  return (
    <CheckboxContainer>
      <CheckboxInput id={id} type="checkbox" />
      <CheckboxLabel htmlFor={id}>
        <CheckboxRadio>
          <CheckboxArrowIcon />
        </CheckboxRadio>
      </CheckboxLabel>
    </CheckboxContainer>
  )
}
