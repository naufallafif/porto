import React from "react";
import { motion } from "framer-motion";

function DownloadCV() {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 1.5 }}
      whileHover={{ scale: 1.1 }}
      className="flex justify-center my-3"
    >
      <a
        href="/CV.pdf"
        download="Naufal Afif_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 text-lg font-semibold border-purple-500 border-2 text-white-500 rounded-lg shadow-md "
        >
          Download CV 📄
        </motion.button>
      </a>
    </motion.div>
  );
}

export default DownloadCV;
