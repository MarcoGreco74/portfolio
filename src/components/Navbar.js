import React from "react";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Marco Greco</h1>
      <NavLink to="/" className="nav-links">Home</NavLink>
      <NavLink to="/aboutMe" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>About me</NavLink>
      <NavLink to="/skills" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>Skills</NavLink>
      <NavLink to="/progetti" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>Progetti</NavLink>
      <NavLink to="/contatti" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"} style={{marginRight: "30px"}}>Contatti</NavLink>
    </nav>
  );
};

export default Navbar;