import React from 'react'
import { NavLink } from 'react-router-dom'
import { LinkStyled } from './styled'

export default function SidebarItem({item}) {
  const {label, icon: Icon, to} = item

  return (
    <LinkStyled to={to}>
      <span>{Icon && <Icon />}</span>
      <span>{label}</span>
    </LinkStyled>
  )
}
