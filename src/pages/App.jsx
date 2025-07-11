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
// import { motion } from "motion/react";
import timelineData from '../constants/timelineData';

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
            <Timeline data={timelineData} />
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
