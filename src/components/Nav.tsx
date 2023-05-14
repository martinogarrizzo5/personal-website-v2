import { Link } from "gatsby";
import React from "react";
import { BiCodeAlt, BiMessageAlt } from "react-icons/bi";
import { MdPersonOutline, MdOutlineWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";

function Nav() {
  return (
    <motion.nav
      className="flex gap-16 mx-auto text-white no-flicker"
      transition={{ duration: 0.8 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -50, opacity: 0 }}
    >
      <Link
        className="flex gap-2 items-center hover:text-primary active:text-primaryDark transition-all duration-200"
        to="#about"
      >
        <MdPersonOutline className="text-2xl" />
        <span className="text-lg">About</span>
      </Link>
      <Link
        className="flex gap-2 items-center hover:text-primary active:text-primaryDark transition-all duration-200"
        to="#work"
      >
        <MdOutlineWorkOutline className="text-2xl" />
        <span className="text-lg">Work</span>
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
    </motion.nav>
  );
}

export default Nav;
