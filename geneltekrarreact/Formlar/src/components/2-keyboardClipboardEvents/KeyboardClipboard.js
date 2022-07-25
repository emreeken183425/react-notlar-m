import React, { useState } from 'react'

function KeyboardClipboard() {

    const[inputvalue,setInputvalue]=useState("")

  const handleKeyDown=(e)=>{
    // console.log(e.keyCode);
    e.target.value=e.target.value.toUpperCase();
    e.keyCode===13 && alert('entere basıldı');
  }

  const handleAreaPaste=(e)=>{
    e.target.value +=e.clipboardData.getData('text').toLowerCase();
    e.target.style.border="3px solid red";
    e.target.style.backgroundColor='blue';
    e.preventDefault();
  }
  const handleAreaChange=(e)=>{
    if(!e.target.value){
        e.target.style.border='1px solid black'
        e.target.style.backgroundColor='transparent'
    }
  }
  return (
    <div className='container text-center' >
        <h2>Clipboard</h2>
        <input type="text" onChange={(e)=>setInputvalue(e.target.value)} onKeyDown={handleKeyDown} />
        <p className='text-start mt-4' onCopy={()=>alert('dikkat kopya')} >{inputvalue} </p>
        <textarea rows="10" cols="30" id='area' onPaste={handleAreaPaste} onChange={handleAreaChange} ></textarea>

    </div>
  )
}

export default KeyboardClipboard