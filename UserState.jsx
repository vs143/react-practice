import React from 'react'
import { useState } from 'react'


const UserState = () => {
 const[state, setstate]=useState(0)
 
 const increment=(()=>{
    setstate(state+1)
 })
 const decrement=(()=>{
    setstate(state-1)
 })
  return (
    <>
    <h1 textAlign={"center"}>this is State  {state} </h1>
      <button onClick={(increment)} >increment  </button>
      <button onClick={(decrement)}>Decrement</button>  
    </>
  )
}

export default UserState