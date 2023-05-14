import React from "react";
import Button from "../Button";
import { FiSend } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import Nav from "../Nav";
import { motion } from "framer-motion";

function Hero() {
  return (
    <header className="pt-16 flex flex-col min-h-screen">
      <Nav />
      <motion.div
        className="text-center my-auto no-flicker"
        transition={{ duration: 0.8, delay: 0.3 }}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
      >
        <h1 className="text-white text-5xl font-bold flex flex-col">
          <span className="mb-3">Martin Meneghetti,</span>
          <div className="flex justify-center text-primary">
            <Typewriter
              words={["A Full-Stack Developer", "An Experienced Designer"]}
              loop={false}
              cursor
              cursorColor="var(--primary)"
            />
          </div>
        </h1>
        <h2 className="font-medium text-2xl max-w-lg mx-auto mt-8">
          Specialized in building clean and custom digital experiences that
          prioritize user-centered design and intuitive interfaces
        </h2>
        <Button className="flex gap-4 items-center mx-auto mt-6 py-4 px-10">
          <FiSend className="text-2xl" />
          <span className="text-2xl">Contact Me</span>
        </Button>
      </motion.div>
      <motion.div
        className="text-white mt-8 mb-12 text-center"
        transition={{ duration: 1.5, delay: 0.7 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <div className="mouse-scroll mx-auto mb-4" />
        <span>Scroll Down</span>
      </motion.div>
    </header>
  );
}

export default Hero;
