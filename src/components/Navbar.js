import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Marco Greco</h1>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/aboutMe" className="nav-link">About me</Link>
      <Link to="/skills" className="nav-link">Skills</Link>
      <Link to="/progetti" className="nav-link">Progetti</Link>
      <Link to="/contatti" className="nav-link">Contatti</Link>
    </nav>
  );
};

export default Navbar;