import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -100 }}
        transition={{ duration: 2 }}
        className="my-10 text-center text-4xl font-thin"
      >
        Projects
      </motion.h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="flex flex-col items-center cursor-pointer"
              onClick={() =>
                setSelectedProject(selectedProject === index ? null : index)
              }
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                whileInView={{ opacity: 1, y: 0 }}
                src={project.image}
                width={selectedProject === index ? 600 : 550}
                height={selectedProject === index ? 400 : 350}
                alt={project.title}
                className="rounded-lg shadow-lg transition-all duration-500"
              />

              {selectedProject === index && (
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                  className="text-center mt-4 p-4 rounded-lg"
                >
                  <h6 className="mb-2 font-semibold text-white">
                    {project.title}
                  </h6>
                  <p className="text-neutral-300 font-thin">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded bg-purple-900 px-2 py-1 text-sm font-medium text-white mb-5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Projects;
