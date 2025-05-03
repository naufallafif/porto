import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Lenis from "@studio-freight/lenis";
import "../App.css";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Footer } from "../components/layouts/Footer";
import Calendar from "../components/Calendar";
import { Timeline } from "../components/Timeline/Timeline";
import { motion } from "motion/react";
import kartar from "../assets/Changelog/eventkartar.JPG";
import sadewa from "../assets/Changelog/sadewa.png";
import mubes from "../assets/Changelog/leadmeet.jpg";
import logo from "../assets/Changelog/logogemastik.png";
import ketuplak from "../assets/Changelog/ketuplak.jpeg";
import mentor from "../assets/Changelog/mentor.png";
import speaker from "../assets/Changelog/speaker.jpg";
import struktur from "../assets/Changelog/struktur.png";
import asisten from "../assets/Changelog/asisten.jpg";

const data = [
  {
    title: "2022",
    content: (
      <div className="px-21">
        <h1 className="text-2xl mb-2">Growing in Leadership.</h1>
        <p className="mb-8 text-xs font-thin  md:text-sm ">
          In 2022, I took a big step in organizational leadership by leading a
          division and participating in a national competition, GEMASTIK XV,
          with the Smart City Division as a Front-End Developer. And Head
          Presidency of general assembly meeting at the Information Systems
          Association (HIMSISFO)
        </p>
        <p className="mb-8 text-xs font-normal  md:text-sm ">
          Image Activities :
        </p>
        <motion.div className="grid grid-cols-2 gap-4">
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={kartar}
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={sadewa}
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={mubes}
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={logo}
            alt="startup template"
            width={500}
            height={500}
            className="mb-20 h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="px-21">
        <h1 className="text-2xl mb-2">
          Empowering Others Through Education, Mentorship, and Impactful
          Community Service
        </h1>
        <p className="mb-8 text-xs font-thin  md:text-sm ">
          Served in various leadership and mentorship roles, including as Chief
          Executive of the Student Leadership Management Training (LKMM) at the
          Information Systems Association, Speaker at a community service event
          on "Microsoft Office and Canva for MSMEs," Mentor for Intermediate and
          Basic Leadership Trainings under the Faculty of Computer Science and
          new student programs, Assistant Instructor at Jakarta Intercultural
          School, and Chairperson of the General Assembly at the Information
          Systems Student Association (HIMSISFO), Universitas Mercu Buana.
        </p>
        <p className="mb-8 text-xs font-normal  md:text-sm ">
          Image Activities :
        </p>
        <motion.div className="grid grid-cols-2 gap-4">
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={ketuplak}
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={mentor}
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={struktur}
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={speaker}
            alt="startup template"
            width={500}
            height={500}
            className="mb-20 h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </motion.div>
      </div>
    ),
  },

  {
    title: "2024",
    content: (
      <div className="px-21">
        <h1 className="text-2xl mb-2">
        Developing Professional Skills and Achieving Academic Milestones.
        </h1>
        <p className="mb-8 text-xs font-thin  md:text-sm ">
          In 2024, I participated in an accreditation assessor training held by
          the Ministry of Manpower of the Republic of Indonesia, gaining a
          deeper understanding of national competency standards and quality
          assurance. At the same time, I contributed to Jakarta Intercultural
          School by designing a Data Visualization project using Google Looker,
          which helped streamline and present academic data more effectively. I
          officially graduated in June 2024 with a GPA of 3.62, and celebrated
          this academic achievement at the graduation ceremony held in December.
        </p>
        <p className="mb-8 text-xs font-normal  md:text-sm ">
          Image Activities :
        </p>
        <motion.div className="grid grid-cols-2 gap-4">
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={ketuplak}
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={mentor}
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={struktur}
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <motion.img
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={speaker}
            alt="startup template"
            width={500}
            height={500}
            className="mb-20 h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </motion.div>
      </div>
    ),
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="overflow-x-hidden max-w-full text-neutral-100 antialiased selection:bg-purple-500 selection:text-white-100">
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-indigo-900 z-50">
          <InfinitySpin width="200" color="#4F46E5" />
          <p className="mt-5 text-5xl font-thin text-white animate-pulse">
            Wait a minutes..
          </p>
        </div>
      ) : (
        <>
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="fixed inset-0 -z-10 h-screen w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          </div>

          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Calendar />
            <Timeline data={data} />
            <Technologies />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
