import React from "react";
import {
  TbBrandFlutter,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { FaPhp, FaReact } from "react-icons/fa";
import spiImg from "../images/spi-preview.webp";
import castelImg from "../images/castelturismo-preview.webp";
import barsantiImg from "../images/barsanti-preview.webp";
import theNightDreamerImg from "../images/the-night-dreamer-preview.webp";

const data = [
  {
    id: 1,
    tag: "Mobile App",
    title: "SPI Lombardia",
    description: (
      <p>
        Applicazione designata alla digitalizzazione di contenuti e notizie per
        i pensionati. Grazie a questa app il sindacato di SPI CGIL può
        comunicare in modo più efficace con i propri iscritti e renderli ancor
        più partecipi nel mondo digitale. In questo progetto mi sono occupato di
        realizzare l'app per Android e IOS usando Flutter incentrandomi
        sull'esperienza di navigazione tra le varie sezioni e la gestione dei
        contenuti.
      </p>
    ),
    technologies: [TbBrandFlutter],
    imagePath: spiImg,
    alt: "SPI lombardia app",
    androidLink: "https://play.google.com/store/apps/details?id=it.spicgil.app",
    iosLink: "https://apps.apple.com/it/app/spi-lombardia/id1669531109",
    webLink: null,
    codeLink: null,
  },
  {
    id: 2,
    tag: "Project",
    title: "Castelturismo",
    description: (
      <p>
        Partito come progetto tra scuole superiori, Castelturismo è un'app che
        favorisce la diffusione della storia di Castelfranco Veneto mostrandone
        i monumenti storici e i percorsi che si possono fare attorno essi. In
        questo progetto ho coordinato le attività di sviluppo del team e in
        particolare ho seguito gli sviluppi dell'app mobile con Flutter e del
        backoffice disegnando un'interfaccia custom adatta alle esigenze della
        proloco.
      </p>
    ),
    technologies: [FaPhp, FaReact, TbBrandTypescript, TbBrandFlutter],
    imagePath: castelImg,
    alt: "Castelfranco Veneto tourism app",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.castelfrancoveneto.castelturismo",
    iosLink: "https://apps.apple.com/it/app/castelfranco-veneto/id1629851991",
    webLink: null,
    codeLink: "https://github.com/martinogarrizzo5/castelturismo",
  },
  {
    id: 3,
    tag: "Project",
    title: "Barsanti App",
    description: (
      <p>
        A seguito del progetto di Castelturismo ho gestito il progetto dell'app
        della mia scuola creando un' interfaccia pulita ed efficace per
        racchiudere i contenuti relativi le attività di orientamento
        nell'ambiente scolastico. Ho gestito gli sviluppi di backend, backoffice
        e app mobile utilizzando tecnologie moderne con approcci innovativi per
        garantire un progetto scalabile per le future implementazioni mirate a
        coinvolgere sempre di più gli studenti dell'istituto.
      </p>
    ),
    technologies: [
      TbBrandNextjs,
      TbBrandTypescript,
      TbBrandTailwind,
      TbBrandFlutter,
    ],
    imagePath: barsantiImg,
    alt: "ITT Eugenio Barsanti school app",
    androidLink: "",
    iosLink: "",
    webLink: null,
    codeLink: "https://github.com/martinogarrizzo5/barsanti_app",
  },
  {
    id: 4,
    tag: "Website",
    title: "The Night Dreamer Store",
    description: (
      <p>
        The Night Dreamer, uno store pensato per essere una web app che sfrutta
        al meglio le potenzialità del server side rendering. In questo progetto
        personale ho utilizzato NextJS per creare le funzionalità vitali di un
        e-commerce avvolgendole in un'interfaccia dai colori anticonformisti e
        accattivanti.
      </p>
    ),
    technologies: [TbBrandNextjs, TbBrandTypescript, TbBrandTailwind],
    imagePath: theNightDreamerImg,
    alt: "Landing page of the store",
    androidLink: null,
    iosLink: null,
    webLink: "https://the-night-dreamer.vercel.app/",
    codeLink: null,
  },
];

export type ProjectData = (typeof data)[0];

export default data;
