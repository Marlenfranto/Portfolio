import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Lazy load components below the fold
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Contact = React.lazy(() => import('./components/Contact'));

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

      {/* Sections placeholders with Suspense */}
      <Suspense fallback={<div style={{ height: '100vh' }}></div>}>
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
