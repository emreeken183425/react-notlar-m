import React from 'react'

const Users = (props) => {
  return (
    <div>
      <h1>{props.name} {props.surname} {props.age}  </h1>
      <h2>{props.friends }</h2>

    </div>
  )
}

export default Users