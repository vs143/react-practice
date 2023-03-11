import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { INC,DEC } from './State/Reducer/Index'

const Redux = () => {
  const count =useSelector((state)=>state.counting)
  const dispatch=useDispatch()
  return (
    <div>
      <div>
        <h1 >Redux react js</h1>
      </div>
      <h1>count{count} </h1>
      <button onClick={()=> dispatch(INC(5))}>Increment</button>
      <button onClick={()=> dispatch(DEC(21))}>Decrement</button>
    </div>
  )
}

export default Redux