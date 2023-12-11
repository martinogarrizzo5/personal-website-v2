import React from "react";
import Button from "../Button";
import { FiSend, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import ButtonLink from "../ButtonLink";

function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center flex flex-col items-center"
      >
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Get In Touch!
        </h2>
        <p className="font-medium text-lg sm:text-xl max-w-2xl">
          Although I'm not actively looking, my inbox is always open. Feel free
          to drop me a line or say hello—I'll make sure to respond!
        </p>
        <ButtonLink
          className="flex gap-4 items-center mx-auto mt-6 py-3 sm:py-4 px-8 sm:px-10"
          href="mailto:martinmeneghetti1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send an email to Martin and say hello!"
        >
          <FiSend className="text-xl md:text-2xl" />
          <span className="text-xl md:text-2xl">Say Hello</span>
        </ButtonLink>
        <div className="mt-24 flex gap-8 sm:gap-16 items-center">
          <a
            href="mailto:martinmeneghetti1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Send an email to Martin"
          >
            <MdOutlineEmail />
          </a>
          <a
            href="https://www.instagram.com/martin_meneghetti_/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="See Martin's Instagram Profile"
          >
            <FiInstagram />
          </a>
          <a
            href="https://github.com/martinogarrizzo5"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="See Martin's Github Profile"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/martin-meneghetti-ba6206209/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="See Martin's LinkedIn Profile"
          >
            <FiLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
