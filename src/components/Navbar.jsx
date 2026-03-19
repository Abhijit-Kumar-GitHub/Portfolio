import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? dark
          ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-dark-border shadow-lg'
          : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm'
        : 'bg-transparent'
      }`}
    >
      {/* Scroll progress */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            AK
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors hover:text-accent-blue
                ${dark ? 'text-gray-400 hover:text-accent-blue' : 'text-gray-600 hover:text-accent-blue'}`}
            >
              {l.label}
            </a>
          ))}
          <button onClick={() => setDark(!dark)}
            className={`p-2 rounded-lg transition-colors ${dark ? 'hover:bg-dark-card text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setDark(!dark)}
            className={`p-2 rounded-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)}
            className={`p-2 rounded-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`md:hidden border-t px-6 py-4 flex flex-col gap-3
            ${dark ? 'bg-dark-bg/95 backdrop-blur-xl border-dark-border' : 'bg-white/95 backdrop-blur-xl border-gray-200'}`}
        >
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`text-sm font-medium py-2 ${dark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
