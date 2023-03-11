import React, { useReducer } from 'react'
import {NavLink ,Outlet} from "react-router-dom"



const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 2;
  }
  else if (action.type === "DEC") {
    return state - 2;
  }
  else if (action.type === "DIV") {
    return state % 2;
  }
  else if (action.type === "MUL") {
    return state * 2;
  }
  return state;
}
const UseReduse = () => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <><div className='data'>
      <h1>{state} </h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>decrement</button>
      <button onClick={() => dispatch({ type: "DID" })}>devide</button>
      <button onClick={() => dispatch({ type: "MUL" })}>multiple</button>
    </div>
    <NavLink to={"custom"}>custom hooks</NavLink>
    <Outlet/>
    </>
  )
}

export default UseReduse