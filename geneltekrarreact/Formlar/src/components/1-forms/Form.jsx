import React, { useState } from 'react'

const Form=()=> {
const [username,setUsername]=useState("");
const [email,setEmail]=useState('');
const [pasword,setPasword]=useState('');

const handleSubmit=()=>{
  alert(`
  username:${username}
  email:${email}
  password:${pasword}
  `)
}
  
return (
    <div className='d-flex flex-column justify-content-center align-items-center ' >
      <form style={{margin:'5rem'}} onSubmit={handleSubmit} >
      <div className="mb-3">
    <label htmlFor="username" className="form-label">User Name <span className='text-primary' >:{username} </span> </label>
    <input type="text" className="form-control" value={username} id="username" onChange={(e)=> setUsername(e.target.value)}  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address <span className='text-warning' >{email} </span> </label>
    <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"  id="password" onChange={(e)=>setPasword(e.target.value) }  />
  </div>
 
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Form