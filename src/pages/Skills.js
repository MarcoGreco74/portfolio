import React from "react";

function Skills() {
  const skills = [
    "Java", "Spring Boot", "JPA", "React.js", "JavaScript", "jQuery",
    "PHP", "MySQL", "SQL", "Node.js", "REST API", "JSON/XML",
    "HTML5", "CSS3", "Bootstrap"
  ];

  return (
    <section style={{color: "black"}} id="skills">
      <h2>Competenze</h2>
      <div className="skill-list">
        <h5>
        {skills.map((skill, index) => (
          <span key={index}>{skill}{" "}</span>
        ))}
        </h5>
      </div>
      <p>
        Dopo 20 anni di carriera di cui 15 nel settore alberghiero come receptionist, ho scelto di seguire la mia vera passione: la programmazione. 
        Ho iniziato come autodidatta nel 2021, immergendomi con entusiasmo nello studio dei linguaggi e delle tecnologie, fino a rivolgermi 
        a due tech academy  in due periodi diversi per consolidare il mio percorso formativo e avere un chiaro orientamento.
      </p>
      <p>
        Sin dall’inizio ho compreso che questo tipo di formazione non può essere affrontata come un semplice hobby, ma richiede impegno totale, 
        come un lavoro vero e proprio. A testimonianza di questa scelta radicale, ho messo da parte una lunga attività musicale 
        — sette chitarre elettriche e una strumentazione di valore — per dedicarmi completamente allo sviluppo software.
      </p>
      <p>
        Nel mio percorso nel settore alberghiero ho sviluppato competenze trasversali preziose anche in ambito tech. 
        Lavorando per strutture con un target elevato e orientate al servizio, ho imparato a gestire situazioni complesse,
         a lavorare sotto pressione e a organizzare il lavoro in autonomia, definendo priorità e rispettando obiettivi e scadenze.
      </p>
      <p>
        Ho maturato esperienza nella gestione dei rapporti interpersonali, sia con colleghi che con clienti, affinando le mie capacità comunicative 
        e relazionali. So collaborare in team eterogenei, guidare piccoli gruppi di lavoro e interagire con persone di culture diverse.
      </p>
      <p>
        In parallelo, la mia esperienza da docente in corsi di formazione professionale mi ha insegnato a comunicare con chiarezza, 
        ad adattarmi a diversi contesti e a valorizzare le potenzialità di ogni persona.
      </p>
      <p>
        Infine, la mia creatività, coltivata per anni nella musica e nella composizione, mi aiuta oggi ad affrontare lo sviluppo software 
        con uno spirito aperto e progettuale, orientato alla cura dell’interfaccia, alla user experience e all’innovazione.
      </p>
      <p>
        Il mio sogno e mio obiettivo oggi è entrare in un team che corre, dove poter contribuire con determinazione, 
        crescere professionalmente e immergermi in “tonnellate di codice”. Per me, l’utile coincide finalmente con il dilettevole: unire lavoro e passione.
      </p>
      <p>
        Sono convinto che le mie attitudini, insieme all’esperienza maturata nel tempo, siano perfettamente allineate con le sfide di un'azienda orientata al cliente, all’innovazione continua e alla conquista di nuovi mercati.
      </p>
      <p>
        Attualmente sviluppo applicazioni web con tecnologie come Java, Spring Boot, React.js e MySQL, 
        con attenzione alla qualità del codice, all’esperienza utente e alla sicurezza.
      </p>
    </section>
  );
}

export default Skills;
