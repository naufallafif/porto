import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';

const Calendar = () => {
  return (
      <motion.h2
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 1 }}
             viewport={{ once: false }}
             className="my-5 border-b border-neutral-500 text-4xl text-center font-thin"
           >
             Activities on Git
             
        <div className="w-full overflow-x-auto mt-10">
        
        <div className="flex justify-center">
          <GitHubCalendar username="naufallafif" />
        
      </div>
    </div>
           </motion.h2>
        
        
  
  );
};

export default Calendar;
