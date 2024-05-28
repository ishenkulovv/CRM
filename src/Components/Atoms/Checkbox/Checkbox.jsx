import React from 'react'
import { CheckboxRadio, CheckboxContainer, CheckboxInput, CheckboxLabel } from './styled'
import CheckboxArrowIcon from '../../../Assets/Icons/CheckboxArrowIcon'

export default function Checkbox( { item, handler } ) {
  return (
    <CheckboxContainer>
      <CheckboxInput
        id={item?.id} 
        checked={item?.checked} 
        type="checkbox" 
        onChange={(e) => {
          handler(item.id, e.target.checked);
        }} 
      />
      <CheckboxLabel htmlFor={item?.id}>
        <CheckboxRadio>
          <CheckboxArrowIcon />
        </CheckboxRadio>
      </CheckboxLabel>
    </CheckboxContainer>
  )
}
