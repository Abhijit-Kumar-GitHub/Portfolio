import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';

const roles = ['Systems Engineer', 'ML Developer', 'Problem Solver'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timer;
    if (!deleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timer = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(var(--text-muted) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
            Incoming SDE Intern @ Microsoft
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--text-primary)' }}>
            Abhijit Kumar
          </h1>

          {/* Typing */}
          <p className="text-xl sm:text-2xl mb-4" style={{ color: 'var(--text-secondary)' }}>
            I'm a{' '}
            <span className="font-semibold" style={{ color: 'var(--accent)' }}>{text}</span>
            <span className="inline-block w-0.5 h-6 ml-0.5 align-text-bottom animate-pulse"
              style={{ background: 'var(--accent)' }} />
          </p>

          {/* Tagline */}
          <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Building scalable systems and ML pipelines
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <a href="#projects"
              className="px-6 py-3 rounded-lg text-white font-semibold text-sm hover:-translate-y-0.5 transition-all"
              style={{ background: 'var(--accent)' }}>
              View Projects
            </a>
            <a href="/assets/certificates/CV_Abhijit_ML.pdf" target="_blank"
              className="px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
              <FileText size={16} /> Resume
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/Abhijit-Kumar-GitHub', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/abhijit2701', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:abhijitabhi127@gmail.com', label: 'Email' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="p-3 rounded-xl transition-all hover:-translate-y-1"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ color: 'var(--text-muted)' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
