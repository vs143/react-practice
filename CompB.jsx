import { useContext } from "react"
import { SetName } from "./CONTEX"


const CompB = () => {
    
  const detail=useContext(SetName)

  return (
    <div>
      <h1>
        this is component B
      </h1>
      <p>{detail.age} </p>
    </div>
  )
}

export default CompB