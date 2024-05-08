import React from 'react'
import { SidebarListStyled } from './styled'
import SidebarItem from '../../Atoms/SidebarItem/SidebarItem'


export default function SidebarList({list = []}) {
  return (
    <SidebarListStyled>
      {list.map(item => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </SidebarListStyled>

  )
}
