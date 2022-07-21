import { useState } from "react"

const  UseStateExample=()=> {
    const [count,setCount]=useState(0);
    const [info,setInfo]=useState({
        name:"emre eken",
        email:"ey@hmail.com",
        age:30
    })
    const Inc=()=>{
        setCount(count+1)
    }
    const dec=()=>{
        setCount(count-1)
    }
  const IncAge=()=>{
    setInfo({...info,age:info.age+1} )
  }






  return (
    <div className='container text-center mt-4 mb-4' >
        <h1 className='display-5 text-primary mt-4' > USESTATE COUNT:{count} </h1>
        <button onClick={Inc}  className='btn btn-success' >INC</button>
        <button onClick={()=> setCount(0)}  className='btn btn-danger' >CLR</button>
        <button onClick={dec}   className='btn btn-warning' >DEC</button>
        <div>
        <h1 className='display-5 text-primary mt-4' >usestateobject:  </h1>
        <h2>{info.name }</h2>
        <h2>{info.email }</h2>
        <h2>{info.age }</h2>
        <button onClick={IncAge}  className="btn btn-primary" >İNC AGE</button>
        </div>
      </div>
  )
}
 export default UseStateExample;