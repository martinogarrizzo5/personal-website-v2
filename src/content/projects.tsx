import React from "react";
import { TbBrandFlutter, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
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
        Lorem ipsum dolor sit amet consectetur. Quam vulputate ante ut elit diam
        nunc ut hendrerit. A lectus aliquam volutpat magna aliquet cras. Fusce
        quam cras platea sapien leo maecenas amet. Sollicitudin nibh dictum at
        id id sagittis. Lectus pulvinar at sagittis turpis sollicitudin blandit.
        <br /> <br />
        Vestibulum pellentesque nunc vitae at nec volutpat massa almen it dict.
        Nisi pulvinar in sit dictum ut.
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
        Lorem ipsum dolor sit amet consectetur. Quam vulputate ante ut elit diam
        nunc ut hendrerit. A lectus aliquam volutpat magna aliquet cras. Fusce
        quam cras platea sapien leo maecenas amet. Sollicitudin nibh dictum at
        id id sagittis. Lectus pulvinar at sagittis turpis sollicitudin blandit.
        <br /> <br />
        Vestibulum pellentesque nunc vitae at nec volutpat massa almen it dict.
        Nisi pulvinar in sit dictum ut.
      </p>
    ),
    technologies: [FaPhp, FaReact, TbBrandFlutter],
    imagePath: castelImg,
    alt: "SPI lombardia app",
    androidLink: "https://play.google.com/store/apps/details?id=it.spicgil.app",
    iosLink: "https://apps.apple.com/it/app/spi-lombardia/id1669531109",
    webLink: null,
    codeLink: null,
  },
  {
    id: 3,
    tag: "Project",
    title: "Barsanti App",
    description: (
      <p>
        Lorem ipsum dolor sit amet consectetur. Quam vulputate ante ut elit diam
        nunc ut hendrerit. A lectus aliquam volutpat magna aliquet cras. Fusce
        quam cras platea sapien leo maecenas amet. Sollicitudin nibh dictum at
        id id sagittis. Lectus pulvinar at sagittis turpis sollicitudin blandit.
        <br /> <br />
        Vestibulum pellentesque nunc vitae at nec volutpat massa almen it dict.
        Nisi pulvinar in sit dictum ut.
      </p>
    ),
    technologies: [TbBrandNextjs, TbBrandTailwind, TbBrandFlutter],
    imagePath: barsantiImg,
    alt: "SPI lombardia app",
    androidLink: "https://play.google.com/store/apps/details?id=it.spicgil.app",
    iosLink: "https://apps.apple.com/it/app/spi-lombardia/id1669531109",
    webLink: null,
    codeLink: null,
  },
  {
    id: 4,
    tag: "Website",
    title: "The Night Dreamer Store",
    description: (
      <p>
        Lorem ipsum dolor sit amet consectetur. Quam vulputate ante ut elit diam
        nunc ut hendrerit. A lectus aliquam volutpat magna aliquet cras. Fusce
        quam cras platea sapien leo maecenas amet. Sollicitudin nibh dictum at
        id id sagittis. Lectus pulvinar at sagittis turpis sollicitudin blandit.
        <br /> <br />
        Vestibulum pellentesque nunc vitae at nec volutpat massa almen it dict.
        Nisi pulvinar in sit dictum ut.
      </p>
    ),
    technologies: [TbBrandNextjs, TbBrandTailwind],
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
