import React from 'react'
import { useState } from 'react'


function UseStateLearning() {

    let [counter,setCounter] = useState(0)
    let [typing,setTyping] = useState("aa ") 

    const inc = () =>{
        setCounter(
        counter = counter + 1 
    )}

    const onchange =(e)=>{
        typing = e.target.value
        setTyping(
            typing
        )
    } 
    return (
    <div>
    {counter} <button onClick={inc}>increment</button>
    <br></br>
    <br></br>
    <input onChange={onchange} placeholder='type something'/> {typing}

    </div>
  )
}

export default UseStateLearning