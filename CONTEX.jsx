import React, { useState, createContext } from 'react'
import { NavLink,Outlet } from 'react-router-dom';


const SetName=createContext()
const AppState = createContext();
const CONTEX = () => {
    const [data,setdata] = useState("vishal jaiswal")
    const [name,setname] = useState({name: "vishal" ,age: 21})
    const nav=(({isActive})=>{
        return{
            textDecoration : isActive ? "none": "none",
            color: isActive ? "red" : "blue"
        }
    })
    return (
        <div className='data'>
            <AppState.Provider value={{data}}>
                <SetName.Provider value={name}>
             <NavLink style={nav} to={"compA"} >CompA</NavLink>
             <NavLink style={nav} to={"compB"} >CompB</NavLink>
             <NavLink style={nav} to={"compC"} >CompC</NavLink>
             <Outlet/>
             </SetName.Provider>
            </AppState.Provider>
        </div>
    )
}

export default CONTEX;

export { AppState ,SetName}