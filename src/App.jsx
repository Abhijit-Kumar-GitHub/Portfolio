import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className={`min-h-screen ${dark ? 'bg-dark-bg text-gray-200' : 'bg-white text-gray-900'}`}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <Projects dark={dark} />
      <Experience dark={dark} />
      <Education dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
