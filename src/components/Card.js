import React from "react";
import { motion } from "framer-motion";
import "../styles/CardCss.css";

const Card = ({ title, description, link, demo }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{backgroundColor: "#1B1B1B"}}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">GitHub</a>
      {demo && (
          <a href={demo} target="_blank" rel="noreferrer">Demo</a>
        )}
    </motion.div>
  );
};

export default Card;

