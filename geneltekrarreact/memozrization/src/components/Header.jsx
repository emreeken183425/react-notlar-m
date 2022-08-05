import React from 'react'

function Header({number,increment}) {
  return (
    <div>
    <h1>HEADER-{number} </h1>
    <button onClick={increment } >INC</button>
    </div>
  )
}

export default React.memo(Header) ;
