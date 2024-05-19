import React from 'react'
import { CheckboxRadio, CheckboxContainer, CheckboxInput, CheckboxLabel } from './styled'
import CheckboxArrowIcon from '../../../Assets/Icons/CheckboxArrowIcon'

export default function Checkbox() {
  return (
    <CheckboxContainer>
      <CheckboxInput id="checkbox-1" type="checkbox" />
      <CheckboxLabel htmlFor='checkbox-1'>
        <CheckboxRadio>
          <CheckboxArrowIcon />
        </CheckboxRadio>
      </CheckboxLabel>
    </CheckboxContainer>
  )
}
