import React from "react";
import { MdCheck } from "react-icons/md";
import skillsData from "../../content/skills.json";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

function About() {
  return (
    <motion.section
      id="about"
      className="section no-flicker"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ amount: 0.5, once: true }}
    >
      <div className="flex gap-24 items-center">
        <div className="flex-1">
          <h2 className="text-white text-2xl font-semibold">About Me</h2>
          <div className="h-1.5 bg-primary w-36"></div>
          <p className="mt-4">
            Hello, my name is Martin, and I'm a full-stack developer, designer,
            and fitness enthusiast! My passion for{" "}
            <span className="font-semibold text-primary">
              frontend development
            </span>{" "}
            started when I built my first website in school in December 2019.
            Since then, I've dedicated myself to staying on the cutting edge of
            technology and mastering the{" "}
            <span className="font-semibold text-primary">
              latest tools and frameworks
            </span>{" "}
            like React and Flutter.
            <br /> <br />
            Whether it's designing a{" "}
            <span className="font-semibold text-primary">
              clean, user-friendly interface
            </span>{" "}
            or developing complex backend features, I'm always looking for{" "}
            <span className="font-semibold text-primary">
              innovative solutions
            </span>{" "}
            to real-world problems. If you're looking for a developer who can{" "}
            <span className="font-semibold text-primary">
              bring your ideas to life
            </span>{" "}
            with creativity and expertise, let's work together to make it
            happen!
            <br /> <br />
            Here are a few technologies I’ve been working with recently:
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <StaticImage
            src="../../images/portrait.webp"
            alt="portrait of Martin Meneghetti"
            className="h-80 w-80 rounded-sm object-cover"
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 max-w-max gap-x-16 gap-y-2">
        {skillsData.map((skill) => (
          <div className="flex items-center" key={`skill-${skill}`}>
            <MdCheck className="text-primary mr-2 text-lg" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default About;
