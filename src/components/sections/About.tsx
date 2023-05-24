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
      <div className="flex gap-12 sm:gap-24 items-center flex-col lg:flex-row">
        <div className="flex-1">
          <h2 className="text-white text-xl sm:text-2xl font-semibold">
            About Me
          </h2>
          <div className="h-1.5 bg-primary w-36"></div>
          <p className="mt-4">
            Hello, my name is Martin, and I'm a full-stack developer, designer,
            and fitness enthusiast! My passion for{" "}
            <span className="keyword">frontend development</span> started when I
            built my first website in school in December 2019. Since then, I've
            dedicated myself to staying on the cutting edge of technology and
            mastering the{" "}
            <span className="keyword">latest tools and frameworks</span> like
            React and Flutter.
            <br /> <br />
            Whether it's designing a{" "}
            <span className="keyword">clean, user-friendly interface</span> or
            developing complex backend features, I'm always looking for{" "}
            <span className="keyword">innovative solutions</span> to real-world
            problems. If you're looking for a developer who can{" "}
            <span className="keyword">bring your ideas to life</span> with
            creativity and expertise, let's work together to make it happen!
            <br /> <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="mt-4 grid grid-cols-2 max-w-max gap-x-16 gap-y-2">
            {skillsData.map(skill => (
              <div className="flex items-center" key={`skill-${skill}`}>
                <MdCheck className="text-primary mr-2 text-lg" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <StaticImage
            src="../../images/martin-meneghetti.webp"
            alt="portrait of Martin Meneghetti"
            className="h-60 w-60 sm:h-80 sm:w-80 rounded-sm object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default About;
