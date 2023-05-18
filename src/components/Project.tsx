import React from "react";
import { RiAppleLine, RiGooglePlayLine } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import ButtonLink from "./ButtonLink";
import { motion } from "framer-motion";
import { ProjectData } from "../content/projects";
import { BiCodeAlt, BiMessageAlt } from "react-icons/bi";

function Project(props: ProjectData) {
  return (
    <motion.div
      className="flex items-center gap-12 no-flicker flex-col lg:flex-row"
      viewport={{ amount: 0.5, once: true }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="shrink-0 border-white border-4 rounded-xl">
        <img
          src={props.imagePath}
          alt={props.alt}
          className="border-black border-4 rounded-xl object-cover h-[285px] w-[135px] sm:h-[380px] sm:w-[180px]"
          loading="lazy"
          width={180}
          height={380}
        />
      </div>
      <div>
        <span className="text-sm text-primary font-medium">{props.tag}</span>
        <h3 className="text-2xl font-semibold text-white mb-2">
          {props.title}
        </h3>
        <div className="text-left">{props.description}</div>
        <div className="flex mt-6 gap-4 items-center">
          <span>Technologies I used: </span>
          {props.technologies.map((Icon, index) => (
            <Icon key={`icon-${index}`} className="text-3xl text-white" />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row mt-8 gap-6">
          {props.androidLink && (
            <ButtonLink
              className="flex items-center justify-center sm:justify-start gap-2 py-3 px-10"
              href={props.androidLink}
              aria-label="See the app on the Play Store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGooglePlayLine className="text-2xl" />
              <span>Android</span>
            </ButtonLink>
          )}
          {props.iosLink && (
            <ButtonLink
              className="flex items-center justify-center sm:justify-start gap-2 py-3 px-10"
              href={props.iosLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="See the app on the App Store"
            >
              <RiAppleLine className="text-2xl" />
              <span>IOS</span>
            </ButtonLink>
          )}
          {props.webLink && (
            <ButtonLink
              className="flex items-center justify-center sm:justify-start gap-2 py-3 px-10"
              href={props.webLink}
              aria-label="See the app on the App Store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGlobe className="text-2xl" />
              <span>Web</span>
            </ButtonLink>
          )}
          {props.codeLink && (
            <ButtonLink
              className="flex items-center justify-center sm:justify-start gap-2 py-3 px-10 border-2 border-white hover:bg-white hover:text-primary bg-transparent shadow-none"
              href={props.codeLink}
              aria-label="See the code on github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiCodeAlt className="text-2xl" />
              <span>Code</span>
            </ButtonLink>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
