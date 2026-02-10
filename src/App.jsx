import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

import GalaxyBackground from './components/GalaxyBackground';
import CustomCursor from './components/CustomCursor';
import RocketProfile from './components/RocketProfile';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <GalaxyBackground />
      <RocketProfile />
      <Navbar />
      <Hero />

      {/* Sections placeholders */}
      <Experience />

      <Projects />
      <Education />
      <Skills />

      <Contact />
    </div>
  );
}

export default App;
