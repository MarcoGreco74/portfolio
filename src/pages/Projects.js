import React from "react";
import Card from "../components/Card";
import "../styles/Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Gestionale Hotel con Java e Spring",
      description: "Sviluppo di una web application full‑stack di tipo PMS per il settore alberghiero, progettata per centralizzare e automatizzare le operazioni quotidiane: gestione prenotazioni, check‑in/check‑out, tariffe e fatturazione. Implementate autenticazione utenti, API REST per l’integrazione frontend‑backend e database relazionale con relazioni complesse",
      technologies: ["Java", "Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL", "React", "REST API", "Axios"],
      link: "https://github.com/MarcoGreco74/Software-Gestionale-Hotel",
      demo: "https://youtu.be/r6QAmAe3loI",
    },
    {
      title: "Gestionale Hotel con PHP e MySQL",
      description: "Gestionale hotel leggero in PHP e MySQL/MariaDB. Il progetto copre un flusso essenziale di lavoro per una piccola struttura: prenotazioni, check-in, walk-in, camere in casa, addebiti e gestione degli stessi, pernottamenti BB e check-out.",
      technologies: ["PHP 8.1", "MySQL", "JavaScript", "jQuery", "Ajax"],
      link: "https://github.com/MarcoGreco74/Hotel",
    },
    {
      title: "Piattaforma Chat",
      description: "Applicazione web PHP/MySQL per una chat tra utenti registrati. Il progetto usa un front controller centrale, viste PHP separate, endpoint API per le chiamate AJAX e JavaScript dedicato alla pagina chat.",
      technologies: ["PHP 8.1", "MySQL", "JavaScript", "jQuery", "Ajax"],
      link: "https://github.com/MarcoGreco74/Piattaforma-Chat",
    },
    {
      title: "Ticket Platform",
      description: "Sistema full-stack per la gestione di ticket di assistenza, con CRUD completo, stati, note e assegnazione operatori in base alla disponibilita.",
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "Thymeleaf", "Bootstrap"],
      link: "https://github.com/MarcoGreco74/Piattaforma-Chat",
    },
    {
      title: "Gestore eventi",
      description: "Applicazione console in Java per eventi e concerti, con prenotazioni, disdette, filtri, ordinamenti e gestione delle eccezioni.",
      technologies: ["Java", "OOP", "Ereditarieta", "Exception handling"],
      link: "https://github.com/MarcoGreco74/java-gestore-eventi",
    },
    {
      title: "Negozio Online",
      description: "E-commerce responsive con catalogo prodotti, carrello persistente, modifica delle quantita e lettura dei dati prodotto da file CSV.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "localStorage"],
      link: "https://github.com/MarcoGreco74/Negozio-online",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="projects-kicker">Portfolio</span>
        <h2>I miei progetti</h2>
        <p>
          Una selezione di applicazioni full-stack e progetti pratici, con focus su
          gestione dati, interfacce responsive e logiche applicative reali.
        </p>
      </div>

      <div className="project-grid">
        {projectData.map((proj) => (
          <Card
            key={proj.title}
            title={proj.title}
            description={proj.description}
            technologies={proj.technologies}
            link={proj.link}
            demo={proj.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
