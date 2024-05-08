import React from 'react'
import './style.css'

export default function SidebarItem({item}) {
  return (
    <div>
      {item.label}
      <div className="logo"></div>
    </div>
  )
}
