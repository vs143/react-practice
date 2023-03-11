import React from 'react'
import { useNavigate } from 'react-router-dom'
import Classcomp from "./Classcomp"



class About extends React.Component{
  // const nav=useNavigate()
  render(){

  return (
    <div>
      <Classcomp/>
        <h1> this is about page</h1>
        <button className='btn' onClick={()=>(-1)}>go back</button>
        <h1> {this.props.name} </h1>
    </div>
  )
  }
}

export default About