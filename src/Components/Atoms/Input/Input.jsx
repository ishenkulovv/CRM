import React from 'react'

export default function Input({onChange, value = ""}) {

  const handler = (e) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handler} defaultValue={value} />
    </div>
  )
}
