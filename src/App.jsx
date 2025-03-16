import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-100 antialiased selection:bg-indigo-700 selection:text-white-100'>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className=" fixed inset-0 -z-10 h-screen w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
      </div>
)
}
export default App
