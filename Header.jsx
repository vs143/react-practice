import React from "react";
import { NavLink ,Outlet } from "react-router-dom";

const Header = () => {
  const Navbar = ({isActive}) => {
    return {
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "blue" : "red",
      fontSize: "25px",
    };
  };
  return (
    <div className="navbar">
      <NavLink style={Navbar} to="/">
        home
      </NavLink>
      <NavLink style={Navbar} to="/about">
        About
      </NavLink>
      <NavLink style={Navbar} to="/contact">
        Contact
      </NavLink>
      <NavLink style={Navbar} to="/state">
        state
      </NavLink>
      <NavLink style={Navbar} to="/CONTEX">
        contex
      </NavLink>
      <NavLink style={Navbar} to="/refernce">
        use ref
      </NavLink>
      <NavLink style={Navbar} to="/UseReduse">
      UseReduse
      </NavLink>
      <NavLink style={Navbar} to="/Loaders">
      Loaders
      </NavLink>
     <Outlet/>
    </div>
  );
};

export default Header;
