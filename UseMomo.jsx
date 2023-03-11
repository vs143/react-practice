import React, { useMemo, useState  } from 'react'




const UseMomo = () => {
  const [count, setcount] = useState(0)
  const [name, setname] = useState("")
  const expensivecalculator = ((num) => {
    for (let i = 0; i < 100000000; i++) {
    }
    return (num)
  })
  const calculator=useMemo(()=>
     expensivecalculator(count)
  [name])
  


  return (
    <>
      <h1>count:{count} </h1>
      <button onClick={() => setcount(count + 1)}>click me</button>
      <h1> name: {name} </h1>
      <input type="text" onChange={(e) => setname(e.target.value)} />
      
    </>
  )
}
export default UseMomo
