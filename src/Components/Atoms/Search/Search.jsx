import React from 'react'
import { SearchBlock, SearchIconStyled, SearchInput } from './styled'
import SearchIcon from '../../../Assets/Icons/SearchIcon'

export default function Search({ value, setValue, placeholder = 'Search by ID, product, or others...' }) {
  return (
    <SearchBlock>
      <SearchIconStyled>
        <SearchIcon />
      </SearchIconStyled>
      <SearchInput 
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchBlock>
  )
}
