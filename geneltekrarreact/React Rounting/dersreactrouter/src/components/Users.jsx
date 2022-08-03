import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'

function Users() {
const [users, setUsers] = useState([]);

useEffect(() => {
 axios('https://jsonplaceholder.typicode.com/users')
 .then(res=>setUsers(res.data))

}, [])




  return (
    <div>
        <h1>users</h1>
        <ul>
           {
            users.map((user)=>(
                <li key={user.id} > <Link to={`/user/1$ `} >{user.name} </Link> </li>
            ))
           }
            
        </ul>
    </div>
  )
}

export default Users