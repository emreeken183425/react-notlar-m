import React from 'react'
import { useState } from 'react'
const ExampleInput = () => {
    const [name, setName] = useState("")
  return (
    <div>
        please enter a name
        <br /> <br />
        <input value={name} onChange={(e)=>setName(e.target.value)}  />
        {name}
    </div>
  )
}

export default ExampleInput