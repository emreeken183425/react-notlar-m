import React from 'react'
import {useState} from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>SAYAÇ UYGULAMASI</h1>
        <h1>Counter:{count}</h1>
        <button onClick={()=>setCount(count+1) } >INC</button>
        <button onClick={()=>setCount(count-1)} >DEC</button>
        <button onClick={()=>setCount(count===0) } >clean</button>
    </div>
  )
}

export default Counter