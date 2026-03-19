import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';

const roles = ['Systems Engineer', 'ML Developer', 'Problem Solver'];

export default function Hero({ dark }) {
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
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20
          ${dark ? 'bg-accent-blue' : 'bg-blue-200'}`} />
        <div className={`absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15
          ${dark ? 'bg-accent-purple' : 'bg-purple-200'}`} />
        {/* Grid pattern */}
        <div className={`absolute inset-0 opacity-[0.03]`}
          style={{
            backgroundImage: `radial-gradient(${dark ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8
            ${dark ? 'bg-dark-card border border-dark-border text-accent-blue' : 'bg-blue-50 border border-blue-100 text-accent-blue'}`}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Incoming SDE Intern @ Microsoft
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Abhijit Kumar
            </span>
          </h1>

          {/* Typing */}
          <p className={`text-xl sm:text-2xl mb-4 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm a{' '}
            <span className="text-accent-blue font-semibold">{text}</span>
            <span className="inline-block w-0.5 h-6 bg-accent-blue ml-0.5 align-text-bottom animate-pulse" />
          </p>

          {/* Tagline */}
          <p className={`text-lg max-w-xl mx-auto mb-10 leading-relaxed
            ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
            Building scalable systems and ML pipelines
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <a href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all">
              View Projects
            </a>
            <a href="/assets/certificates/CV_Abhijit_ML.pdf" target="_blank"
              className={`px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5
                ${dark ? 'border border-dark-border text-gray-300 hover:border-accent-blue' : 'border border-gray-300 text-gray-700 hover:border-accent-blue'}`}>
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
                className={`p-3 rounded-xl transition-all hover:-translate-y-1
                  ${dark ? 'bg-dark-card border border-dark-border text-gray-400 hover:text-accent-blue hover:border-accent-blue/50' : 'bg-gray-50 border border-gray-200 text-gray-500 hover:text-accent-blue hover:border-accent-blue/50'}`}>
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${dark ? 'text-gray-600' : 'text-gray-400'}`}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
