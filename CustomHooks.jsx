import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const CustomHooks = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    async function final() {
      const data = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=4&idStarts=1001`
      );
      const res = await data.json();
      setstate(res);
    }
    final();
  }, []);
  return (
    <>
      {state.map((e, i) => {
        return (
          <div key={i}>
            <h4>{e.firstName}</h4>
            <h4>{e.contactNumber}</h4>
          </div>
        );
      })}
      <NavLink to={'UseMomo'}>UseMomo</NavLink>
      <Outlet/>
    </>
  );
};

export default CustomHooks;
