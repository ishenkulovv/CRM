import React from 'react'
import { TabStyled, TabsContainer } from './styled'

export default function Tabs({ list, setTab }) {
  return (
    <TabsContainer>
      {list.map(item => (
        <TabStyled 
          key={item.id}
          active={item.active ? 'true' : 'false'}
          onClick={() => setTab(item.id)}
        >
          { item.label }
        </TabStyled>
      ))}
    </TabsContainer>
  )
}
