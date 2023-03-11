import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const nav =useNavigate()
  return (
    <div>
        <h1>Found error 404 ! .....</h1>
        <button onClick={()=>nav(-1)}>go back</button>
    </div>
  )
}

export default Error