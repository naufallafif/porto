import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" border-b border-neutral-500 pb-4"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="my-10 text-4xl text-center font-thin"
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="mb-6 flex flex-wrap lg:justify-center"
          >
            <div className="w-full text-center lg:w-1/4 lg:text-left">
              <p className="my-1 text-sm text-neutral-200">{experience.year}</p>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false }}
                className="mb-1 font-semibold"
              >
                {experience.role} -{" "}
                <span className="text-sm">{experience.company}</span>
              </motion.h6>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: false }}
                className="mb-4 text-neutral-400 text-left"
              >
                {experience.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
                viewport={{ once: false }}
                className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-start"
              >
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.1 }}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
