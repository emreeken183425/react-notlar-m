import React, { useState } from 'react'

function FormObject() {
const [username,setUsername]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const handleSubmit=()=>{
alert(`username:${username}
email:${email}
password:${password}

`)
}


  return (
    <div>
      <form onSubmit={handleSubmit} >
      <div className="mb-3">
    <label htmlFor="username" className="form-label">username:{username} </label>
    <input type="text" className="form-control" id="username" onChange={(e)=>(setUsername(e.target.value) )} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address:{email} </label>
    <input type="email" className="form-control" id="email" onChange={(e)=>(setEmail(e.target.value))} />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="Form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={(e)=>(setPassword(e.target.value))} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default FormObject;