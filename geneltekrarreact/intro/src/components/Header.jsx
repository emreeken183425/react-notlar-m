import React from 'react'
import { useState } from 'react'
const Header = () => {
 const [name, setName] = useState('emre')
 const [age, setAge] = useState(30)
 const [friends, setFriends] = useState(["ahmet","mehmet","ali"] )
 const [adress, setAdress] = useState({title:"erzurum",posta:26080,ev:"site"})






  return (
    <div>

      <h1>merhaba {name} yaşın {age} </h1>
      <button onClick={()=>setName("yasemin") } >Click</button>
      <button onClick={()=>setAge(28) } >change</button>
      <br /><br />
      <h2>array and state</h2>
      <h3>Friends</h3>
      {friends.map((friend,index)=> {
        return <div key={index} >{friend}</div>

      }) }
      <br />
       <button onClick={()=>setFriends([...friends,"emir"] ) } >add new friends</button>
       <br />
       <h2>adress</h2>
       <div>
        {adress.title} {adress.ev} {adress.posta}
       </div>
       <br />
      <button onClick={()=>setAdress({...adress, title:"mersin"})} >adres değiş</button>


    </div>
  )
}

export default Header