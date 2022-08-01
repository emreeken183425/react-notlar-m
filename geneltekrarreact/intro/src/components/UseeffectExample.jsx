import React, { useEffect } from 'react'
import { useState } from 'react'
const UseeffectExample = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
console.log("state güncellendi");


    })
//     useEffect(()=>{
//         console.log("component maoubt edildi");
//             },1000)
// setInterval(()=>{
//     setCount((count)=>count + 1)
// },[])

  return (
    <div>
        <h1>sayı:{count} </h1>
        <button onClick={()=>setCount(count + 1)} >click</button>
    </div>
  )
}

export default UseeffectExample