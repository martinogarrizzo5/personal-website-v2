import React from "react";
import { motion } from "framer-motion";
import projectsData from "../../content/projects";
import Project from "../Project";

function Projects() {
  return (
    <motion.section id="projects" className="section">
      <motion.div
        viewport={{ amount: 0.5, once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-white text-2xl font-semibold">
          Some Things I’ve Built
        </h2>
        <div className="h-1.5 bg-primary w-64 mb-16" />
      </motion.div>
      <div className="flex flex-col gap-24">
        {projectsData.map((project) => (
          <Project key={`project-${project.id}`} {...project} />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
