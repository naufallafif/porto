import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -100 }}
        transition={{ duration: 1}}
        className="my-10 text-4xl text-center font-thin"
      >
        Experience
      </motion.h2>
      <motion.div whileInView={{ opacity: 1, x: 100 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 2 }} >
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-6 flex flex-wrap lg:justify-center">
            <div className="w-full text-center lg:w-1/4 lg:text-left">
              <p className="my-1 text-sm text-neutral-200">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-1 font-semibold">
                {experience.role} -
                <span className="text-sm"> {experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400 text-left">
                {experience.description}
              </p>
              <div className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
