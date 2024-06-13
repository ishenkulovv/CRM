import React from 'react'

export default function Input({onChange}) {

  const handler = (e) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handler} />
    </div>
  )
}
