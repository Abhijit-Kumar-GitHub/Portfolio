import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light', !dark);
  }, [dark]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundParticles />
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills dark={dark} />
      <Certifications dark={dark} />
      <Projects dark={dark} />

      <Education dark={dark} />
      <Contact dark={dark} />
      <Footer />
    </div>
  );
}
