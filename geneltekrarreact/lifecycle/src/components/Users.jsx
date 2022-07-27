import { useEffect, useState } from "react"






  const Users = () => {
    const[users,setUsers]=useState();


  const getUsers=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>(res.json())
    .then((data)=>setUsers(data) )
    );
  }
  useEffect(()=>{
  getUsers();
    
  },[])
 

  
  return (
    <div>   
      <h1>USER LİST</h1>
      {/* <button className="btn btn-primary" onClick={getUsers} >GET USERS</button> */}
      <div className="row">
        <div className="col">
          <img src="" alt="" />
          <h6>Name</h6>
        </div>
      </div>



    </div>
  )
}

export default Users