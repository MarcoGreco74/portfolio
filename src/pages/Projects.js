import React from "react";
import Card from "../components/Card";
import "../styles/Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Gestionale Hotel",
      description: "Applicazione full-stack per la gestione di un hotel. Tecnologie: Java, Spring Boot, Spring Security, JPA/Hibernate, MySQL, React.js, Axios, Bootstrap, REST API",
      link: "https://github.com/MarcoGreco74/Software-Gestionale-Hotel",
      demo: "https://youtu.be/r6QAmAe3loI"
    },
    {
      title: "Negozio Online",
      description: "E-commerce completo con carrello e pagamenti. Un progetto front-end con funzionalità di carrello e gestione prodotti, realizzato con HTML, CSS, JavaScript e PHP (per leggere i dati da un file CSV). I prodotti sono visualizzati in stile responsive con Bootstrap e permettono l'aggiunta al carrello, la modifica delle quantità e il salvataggio persistente nel localStorage.",
      link: "https://github.com/MarcoGreco74/Negozio-online",
    },
    {
      title: "Ticket plattform",
      description: "Realizzazione di un sistema full-stack per la gestione ticket di assistenza ad un prodotto con CRUD completo, gestione stato, note e logica di assegnazione operatori basata sulla disponibilità. Tecnologie: Java, Spring Boot, Spring Security, JPA/Hibernate, MySQL, Thymeleaf, Bootstrap, REST API.",
      link: "https://github.com/MarcoGreco74/ticket-platform",
    },
    {
      title: "Gestore eventi",
      description: "Applicazione console in Java per la gestione di eventi e concerti, con prenotazioni, disdette, filtri e ordinamenti. Implementate logiche su capienza e date, interazione via terminale, OOP con ereditarietà e gestione delle eccezioni.",
      link: "https://github.com/MarcoGreco74/java-gestore-eventi",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 style={{ color: "#053239ff", textAlign: "center" }}>I miei progetti</h2>
      <div className="project-grid">
        {projectData.map((proj, index) => (
          <Card key={index} title={proj.title} description={proj.description} link={proj.link} demo={proj.demo} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
