import aboutMe from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 px-4 sm:px-6 lg:px-16">
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-8 text-center text-3xl sm:text-4xl font-thin"
      >
        About<span className="text-neutral-400"> Me</span>
      </motion.h1>

      {/* Kontainer utama */}
      <div className="flex flex-wrap">
        {/* Bagian Gambar */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:p-8"
        >
          <img
            loading="lazy"
            className="rounded-2xl sm:w-80 md:w-full w-20"
            width={300}
            height={300}
            src={aboutMe}
            alt="Profile"
          />
        </motion.div>

        {/* Bagian Teks */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <p className="max-w-screen-md my-4 text-center lg:text-left text-base sm:text-lg font-thin leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
