import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import CV from "./CV";
import SplitText from "./SplitText/SplitText";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 px-4 sm:px-6 lg:px-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-8 text-center text-3xl sm:text-4xl font-thin"
      >
        About<span className="text-neutral-400"> Me</span>
      </motion.h1>

      <div className="">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.5 }}
          className="  justify-center lg:justify-start"
          viewport={{ once: false }}
        >
          <div className="my-4 text-center lg:text-left text-base sm:text-lg font-thin leading-relaxed">
            <SplitText text={ABOUT_TEXT} easing="easeOutCubic" delay={20} />
          </div>
        </motion.div>
      </div>
      <CV />
    </div>
  );
};

export default About;
