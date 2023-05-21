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
        {/* Applicazione designata alla digitalizzazione di contenuti e notizie per
        i pensionati. Grazie a questa app il sindacato di SPI CGIL può
        comunicare in modo più efficace con i propri iscritti e renderli ancor
        più partecipi nel mondo digitale. In questo progetto mi sono occupato di
        realizzare l'app per Android e IOS usando Flutter incentrandomi
        sull'esperienza di navigazione tra le varie sezioni e la gestione dei
        contenuti. */}
        An innovative app designed to{" "}
        <span className="keyword">digitize content and news for retirees</span>.
        With this app, the <span className="keyword">SPI CGIL</span> union can
        now <span className="keyword">engage with its members</span> more
        effectively, bringing them into the digital world. In this project, my
        focus was on creating a captivating
        <span className="keyword">Android and iOS app </span>using Flutter. I
        dedicated my efforts to ensuring
        <span className="keyword"> seamless navigation</span> between different
        sections and{" "}
        <span className="keyword"> efficient content management.</span>
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
        {/* Partito come progetto tra scuole superiori, Castelturismo è un'app che
        favorisce la diffusione della storia di Castelfranco Veneto mostrandone
        i monumenti storici e i percorsi che si possono fare attorno essi. In
        questo progetto ho coordinato le attività di sviluppo del team e in
        particolare ho seguito gli sviluppi dell'app mobile con Flutter e del
        backoffice disegnando un'interfaccia custom adatta alle esigenze della
        proloco. */}
        Born as a collaborative project among high schools, Castelturismo has
        evolved into an app that promotes the rich{" "}
        <span className="keyword">history of Castelfranco Veneto</span> by
        showcasing its <span className="keyword">historical monuments</span> and
        the fascinating paths that surround them. In this endeavor, I took
        charge of <span className="keyword">leading the development team</span>{" "}
        and specifically focused on the progress of the{" "}
        <span className="keyword">mobile app</span> using Flutter. Additionally,
        I designed a <span className="keyword">customized interface</span> for
        the back office, tailored to the{" "}
        <span className="keyword">specific needs</span> of the local tourism
        association.
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
        {/* A seguito del progetto di Castelturismo ho gestito il progetto dell'app
        della mia scuola creando un' interfaccia pulita ed efficace per
        racchiudere i contenuti relativi le attività di orientamento
        nell'ambiente scolastico. Ho gestito gli sviluppi di backend, backoffice
        e app mobile utilizzando tecnologie moderne con approcci innovativi per
        garantire un progetto scalabile per le future implementazioni mirate a
        coinvolgere sempre di più gli studenti dell'istituto. */}
        Following the success of the Castelturismo project, I took on the
        responsibility of managing the app project for my school. My goal was to
        create a <span className="keyword">clean</span> and{" "}
        <span className="keyword">effective interface</span> that would
        encapsulate all the relevant content related to{" "}
        <span className="keyword">orientation activities</span> within the
        school environment. Throughout this endeavor, I{" "}
        <span className="keyword">oversaw the development</span> of the backend,
        back office, and mobile app, utilizing{" "}
        <span className="keyword">modern technologies</span> and{" "}
        <span className="keyword">innovative approaches</span>. My aim was to
        ensure a <span className="keyword">scalable</span> project that could
        accommodate future targeted implementations, further{" "}
        <span className="keyword">engaging the students</span> of the institute.
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
        {/* The Night Dreamer, uno store pensato per essere una web app che sfrutta
        al meglio le potenzialità del server side rendering. In questo progetto
        personale ho utilizzato NextJS per creare le funzionalità vitali di un
        e-commerce avvolgendole in un'interfaccia dai colori anticonformisti e
        accattivanti. */}
        Introducing The Night Dreamer, an{" "}
        <span className="keyword">online store</span> designed to be a web app
        that harnesses the full potential of{" "}
        <span className="keyword">server-side rendering</span>. In this personal
        project, I utilized NextJS to create the essential functionalities of an
        e-commerce platform , enveloping them within a visually{" "}
        <span className="keyword">captivating interface</span> adorned with{" "}
        <span className="keyword">nonconformist</span> and{" "}
        <span className="keyword">eye-catching</span> colors.
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
