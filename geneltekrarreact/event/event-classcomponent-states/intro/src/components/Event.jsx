import React, { Component } from 'react';


const Events =()=>{
    let info="EVENTS";
    const handleChange=()=>{

    }
const handleClear=(text)=>{
alert(text)
}
 const handleClick=()=>{
    alert("buton clilkced")
 }


        return (
            <div className='container text-center mt-4 ' >
                <div className='display-4 text-danger mt-4 mb-4 ' >{info} </div>
                <button onClick={handleClick} className='btn btn-success text-white ' >Tıkla</button>
                <button onClick={()=> handleClear("CLEAR BTN PRESSED")} className='btn btn-dark' >Clear</button>
                <button onClick={handleChange} className='btn btn-danger' >Change</button>
            </div>
        );
    }


export default Events;