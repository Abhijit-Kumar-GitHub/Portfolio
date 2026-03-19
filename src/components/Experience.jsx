import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const items = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Microsoft',
    location: 'Hyderabad, India',
    period: 'May 2026 — July 2026',
    bullets: [
      'Incoming SDE intern (team TBD)',
      'Selected through competitive technical interview process',
    ],
    current: true,
  },
  {
    role: 'Coordinator',
    company: 'LPU Student Academic Advisory Committee',
    location: 'Phagwara, Punjab',
    period: 'May 2025 — Present',
    bullets: [
      'Leading student feedback initiatives impacting 25,000+ CSE students',
      'Driving curriculum improvements and policy reforms',
    ],
    current: true,
  },
];

export default function Experience({ dark }) {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: 'var(--bg-elevated)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
          style={{ color: 'var(--text-muted)' }}
        >
          Where I've worked and contributed
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px" style={{ background: 'var(--border)' }} />

          <div className="space-y-10">
            {items.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 z-10"
                  style={item.current
                    ? { background: 'var(--accent)', borderColor: 'var(--accent)', boxShadow: '0 0 8px var(--accent-glow)' }
                    : { background: 'var(--bg-card)', borderColor: 'var(--border)' }
                  }
                />

                <div className="p-6 rounded-xl transition-all hover:-translate-y-1"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold">{item.role}</h3>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium w-fit"
                        style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {item.company}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {item.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {item.bullets.map(b => (
                      <li key={b} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent)' }} className="mt-0.5">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
