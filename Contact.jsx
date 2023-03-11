import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const Contact = () => {
  const nav = useNavigate()

  return (
    <div>
      <h1> this is Contact</h1>
      <button onClick={() => nav(-1)}>go back</button>
      <Link to={"insta"}> instagram </Link>
      <Link to={"gmail"}> <h4>Mail </h4></Link>
      <Outlet />
    </div>
  )
}
export default Contact

