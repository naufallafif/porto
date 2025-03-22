import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Roles from "./Roles";
import Lanyard from "./Lanyard/Lanyard";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, delay, ease: "easeInOut" },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-8xl font-thin tracking-tight lg:mt-14 lg:text-8xl"
            >
              Naufal Afif
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-600 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              <Roles />
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="hidden lg:block w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center min-h-screen overflow-x-hidden">
            <Lanyard position={[2, 0, 12]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
