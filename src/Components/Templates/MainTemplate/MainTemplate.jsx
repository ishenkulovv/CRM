import React from 'react'
import Sidebar from '../../Organisms/Sidebar/Sidebar'

export default function MainTemplate({children}) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  )
}
