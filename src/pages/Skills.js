import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "JPA/Hibernate", "PHP", "Node.js", "REST API"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "Database e dati",
      skills: ["MySQL", "SQL", "JSON", "XML"],
    },
    {
      title: "Soft skills",
      skills: ["Problem solving", "Comunicazione", "Team work", "Gestione priorita", "Orientamento al cliente"],
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-header">
        <span className="skills-kicker">Competenze</span>
        <h2>Stack tecnico e percorso</h2>
        <p>
          Un profilo costruito tra sviluppo software, attenzione al cliente e
          capacita organizzativa maturata sul campo.
        </p>
      </div>

      <div className="skills-layout">
        <div className="skills-grid" aria-label="Lista competenze">
          {skillGroups.map((group) => (
            <motion.article
              className="skill-group"
              key={group.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.article
          className="skill-story-card"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <h3>Dal settore alberghiero allo sviluppo software</h3>
          <p>
            Dopo 20 anni di carriera, di cui 15 nel settore alberghiero come
            receptionist, ho scelto di seguire la mia vera passione: la
            programmazione. Ho iniziato da autodidatta nel 2021 e ho poi
            consolidato il percorso con due tech academy.
          </p>
          <p>
            L'esperienza in strutture orientate al servizio mi ha allenato a
            gestire situazioni complesse, lavorare sotto pressione, organizzare
            priorita e comunicare con persone diverse. Sono competenze che oggi
            porto dentro il lavoro tecnico.
          </p>
          <p>
            Attualmente sviluppo applicazioni web con Java, Spring Boot, PHP, React.js
            e MySQL, con attenzione alla qualita del codice, alla sicurezza e
            all'esperienza utente.
          </p>
        </motion.article>
      </div>
    </section>
  );
}

export default Skills;
