import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { MdPersonOutline } from "react-icons/md";
import { BiCodeAlt, BiMessageAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { MdCheck } from "react-icons/md";
import Button from "../components/Button";
import { Link } from "gatsby";
import projectsData from "../../content/projects.json";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <header className="mt-16 flex flex-col min-h-screen">
        <nav className="flex gap-16 mx-auto text-white">
          <Link
            className="flex gap-2 items-center hover:text-primary active:text-primaryDark transition-all duration-200"
            to="#about"
          >
            <MdPersonOutline className="text-2xl" />
            <span className="text-lg">About</span>
          </Link>
          <Link
            className="flex gap-2 items-center hover:text-primary active:text-primaryDark transition-all duration-200"
            to="#projects"
          >
            <BiCodeAlt className="text-2xl" />
            <span className="text-lg">Projects</span>
          </Link>
          <Link
            className="flex gap-2 items-center hover:text-primary active:text-primaryDark transition-all duration-200"
            to="#contact"
          >
            <BiMessageAlt className="text-2xl" />
            <span className="text-lg">Contact</span>
          </Link>
        </nav>
        <div className="text-center mt-36">
          <h1 className="text-white text-5xl font-bold flex flex-col">
            <span className="mb-3">Martin Meneghetti,</span>
            <span className="">A Full-Stack Developer</span>
          </h1>
          <h2 className="font-medium text-2xl max-w-lg mx-auto mt-8">
            Specialized in building clean and custom digital experiences that
            prioritize user-centered design and intuitive interfaces
          </h2>
          <Button className="flex gap-4 items-center mx-auto mt-6 py-4 px-10">
            <FiSend className="text-2xl" />
            <span className="text-2xl">Contact Me</span>
          </Button>
        </div>
        <div className="text-white mt-auto mb-24 text-center">
          <span>Scroll Down</span>
        </div>
      </header>
      <main className="mt-32 max-w-5xl mx-auto">
        <section id="about">
          <div className="flex gap-24 items-center">
            <div className="flex-1">
              <h2 className="text-white text-2xl font-semibold">About Me</h2>
              <div className="h-1.5 bg-primary w-36"></div>
              <p className="mt-4">
                Hello, my name is Martin, and I'm a full-stack developer,
                designer, and fitness enthusiast! My passion for{" "}
                <span className="font-semibold">frontend development</span>{" "}
                started when I built my first website in school in December
                2019. Since then, I've dedicated myself to staying on the
                cutting edge of technology and mastering the latest tools and
                frameworks like React and Flutter.
                <br /> <br />
                Whether it's designing a{" "}
                <span className="font-semibold">
                  clean, user-friendly interface
                </span>{" "}
                or developing complex backend features, I'm always looking for{" "}
                <span className="font-semibold">innovative solutions</span> to
                real-world problems. If you're looking for a developer who can{" "}
                <span className="font-semibold">bring your ideas to life</span>{" "}
                with creativity and expertise, let's work together to make it
                happen!
                <br /> <br />
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <div className="flex-1">image</div>
          </div>
          <div>
            <div className="flex items-center">
              <MdCheck className="text-primary" />
              <span>Flutter</span>
            </div>
          </div>
        </section>
        <section id="work"></section>
        <section id="projects"></section>
        <section id="contact"></section>
      </main>
      <footer className=""></footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Martin Meneghetti Personal Website</title>
);
