import React, { useEffect, useState, useRef } from 'react'

const UseRefernce = () => {
    const [data, setdata] = useState("")
    const count = useRef(0)
    const previous=useRef("")
    const inputuse=useRef()
   
    useEffect(() => {
        count.current = count.current + 1;

    })
    useEffect(() => {
        previous.current = data;

    },[data])

    const handle = (e) => {
        setdata(e.target.value);
    }
    const one=()=>{
        inputuse.current.focus()
      console.log(  inputuse.current.value);
    }

    return (
        <div>
            <h1>hello world</h1>
            <input type="text" ref={inputuse} onChange={handle} value={data} />
            <h4>counting start  {count.current}</h4>
            <h4>previous element start {previous.current}</h4>
            <button onClick={one}>click me</button>
        </div>
    )
}

export default UseRefernce