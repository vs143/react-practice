import React from 'react'
import { useState, useEffect } from 'react'
import { TailSpin,BallTriangle } from "react-loader-spinner"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Loaders = () => {
    const [isLoading, setLoading] = useState(false)
    const [data, setdata] = useState([])
    useEffect(() => {
        async function last() {
            setLoading(true)
            const res = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001`)
            const final = await res.json();
            setdata(final)
            setLoading(false)
            toast.success("successfull registered")
        }
        last()
    }, [])
    return (
        <>
        <ToastContainer/>
        <div className='loder'>
        {isLoading?
        <BallTriangle/>
        :
        data.map((e, i) => {
        return (
          <div key={i}>
            <h4>{e.firstName}</h4>
            <h4>{e.contactNumber}</h4>
          </div>
        );
      })}
        </div>
        </>
    )
}

export default Loaders