import React from "react";
import { RiAppleLine, RiGooglePlayLine } from "react-icons/ri";
import ButtonLink from "./ButtonLink";
import { motion } from "framer-motion";
import { ProjectData } from "../content/projects";

function Project(props: ProjectData) {
  return (
    <motion.div
      className="flex items-center gap-12 no-flicker"
      viewport={{ amount: 0.5, once: true }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="shrink-0 border-white border-4 rounded-xl">
        <img
          src={props.imagePath}
          alt={props.alt}
          className="border-black border-4 rounded-xl object-cover h-[380px] w-[180px]"
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
        <div>{props.description}</div>
        <div className="flex mt-6 gap-4 items-center">
          <span>Technologies I used: </span>
          {props.technologies.map((Icon, index) => (
            <Icon key={`icon-${index}`} className="text-3xl text-white" />
          ))}
        </div>
        <div className="flex mt-8 gap-6">
          {props.androidLink && (
            <ButtonLink
              className="flex items-center gap-2 py-3 px-10"
              href={props.androidLink}
              aria-label="See the app on the Play Store"
            >
              <RiGooglePlayLine className="text-2xl" />
              <span>Android</span>
            </ButtonLink>
          )}
          {props.iosLink && (
            <ButtonLink
              className="flex items-center gap-2 py-3 px-10"
              href={props.iosLink}
              aria-label="See the app on the App Store"
            >
              <RiAppleLine className="text-2xl" />
              <span>IOS</span>
            </ButtonLink>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
