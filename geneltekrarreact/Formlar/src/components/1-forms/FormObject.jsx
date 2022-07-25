import React, { useState } from 'react'

function FormObject() {
const [formvalues,setFormValues]=useState({username:"",email:"",password:""})


const handleSubmit=()=>{
  const {username,password,email}=formvalues;
alert(`username:${username}
email:${email}
password:${password}

`)
}

const handFormValues=(e)=>{
setFormValues({...formvalues,[e.target.id]:  e.target.value });

}





  return (

   <div>
  <form onSubmit={handleSubmit} >
      <div className="mb-3">
    <label htmlFor="username" className="form-label">username:{formvalues.username} </label>
    <input type="text" className="form-control" id="username" onChange={handFormValues} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address:{formvalues.email} </label>
    <input type="email" className="form-control" id="email" onChange={handFormValues} />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="Form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={handFormValues} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
    </div>
  )
}

export default FormObject;