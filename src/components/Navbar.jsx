import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  // { label: 'Experience', href: '#experience' },
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
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--bg-card)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-150"
        style={{ width: `${progress}%`, background: 'var(--accent)' }}
      />

      <div className="max-w-full px-12 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight" style={{ color: 'var(--accent)' }}>
          AK<span style={{ color: 'var(--text-muted)' }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {l.label}
            </a>
          ))}
          <button onClick={() => setDark(!dark)}
            className="p-2 rounded-lg transition-colors cursor-pointer"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setDark(!dark)}
            className="p-2 rounded-lg cursor-pointer"
            style={{ color: 'var(--text-muted)' }}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)}
            className="p-2 rounded-lg cursor-pointer"
            style={{ color: 'var(--text-secondary)' }}
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
          className="md:hidden px-6 py-4 flex flex-col gap-3"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderTop: '1px solid var(--border)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium py-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
