import React from "react";
import Card from "../components/Card";

function Contact() {
  const contacts = [
    {
    title: "Email",
    description: "",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=marcogreco.gibson@gmail.com",
    },
    {
    title: "LinkedIn",
    description: "",
    link: "https://www.linkedin.com/in/marco-greco-4b4274b2",
    },
    {
    title: "GitHub",
    description: "",
    link: "https://github.com/MarcoGreco74",
    },
  ];
  return (
    <section className="projects" id="projects">
      <h2 style={{ color: "#053239ff", textAlign: "center" }}>I miei contatti</h2>
      <div className="project-grid">
        {contacts.map((contact, index) => (
          <Card key={index} title={contact.title} description={contact.description} link={contact.link}  />
        ))}
      </div>
    </section>
  );
}

export default Contact;
   
