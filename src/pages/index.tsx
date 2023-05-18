import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import { MotionConfig } from "framer-motion";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Work from "../components/sections/Work";
import Projects from "../components/sections/Projects";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import SEO from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <main className="pt-24 max-w-7xl mx-auto lg:px-24 sm:px-12 px-6">
        <About />
        {/* <Work /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO></SEO>;
