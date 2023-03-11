import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'

const Userdetails = () => {
  const nav=useNavigate()
  //
  return (
    <div>
        <h1>
        Userdetails
        </h1>
        <button onClick={()=>nav(-1)}>go back</button>
    </div>
  )
}

export default Userdetails