import React from "react";
import { motion } from "framer-motion";

function Work() {
  return (
    <section id="work" className="section">
      <motion.div
        viewport={{ amount: 0.5, once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-white text-2xl font-semibold">Where I’ve Worked</h2>
        <div className="h-1.5 bg-primary w-64"></div>
        <div className="flex">
          <div className="flex flex-col mt-4 w-72">
            <div className="py-2 px-4 ">
              <h3 className="text-xl text-white cursor-pointer">CodeAtlas</h3>
            </div>
            <div className="py-2 px-4 ">
              <h3 className="text-xl text-white cursor-pointer">IBC</h3>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Work;
