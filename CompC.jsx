import React,{useContext} from 'react'
import { AppState } from './CONTEX'



const CompC = () => {
const appdata=useContext(AppState)
  return (
    <div>
        <h1> this is component C</h1>
         <h1>{appdata.data} </h1>
    </div>
  )
}

export default CompC