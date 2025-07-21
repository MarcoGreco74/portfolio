import React from "react";
import "../styles/Home.css"; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero-container">
      <h1 className="nome">Marco Greco</h1>
      <h2 className="ruolo">Sviluppatore Web</h2>
      <Link to = "/progetti" className="cta">Scopri i miei progetti {"\u2193"}</Link>
    </div>
  );
};

export default Home;


