import React from "react";
import { motion } from "framer-motion";
import "../styles/CardCss.css";

const Card = ({ title, description, technologies = [], link, demo }) => {
  const linkDisplay = (() => {
    switch (true) {
      case link.includes("github"):
        return "GitHub";
      case link.includes("linkedin"):
        return "LinkedIn";
      case link.includes("@gmail"):
        return "marcogreco.gibson@gmail.com";
      default:
        return "Apri progetto";
    }
  })();

  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {technologies.length > 0 && (
        <ul className="tech-list" aria-label="Tecnologie usate">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}

      <div className="project-card-actions">
        <a href={link} target="_blank" rel="noreferrer">{linkDisplay}</a>
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">Demo</a>
        )}
      </div>
    </motion.article>
  );
};

export default Card;
