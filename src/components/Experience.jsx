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
    <section id="experience" className={`py-24 px-6 ${dark ? 'bg-dark-card/30' : 'bg-gray-50/50'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-4 md:left-6 top-0 bottom-0 w-px ${dark ? 'bg-dark-border' : 'bg-gray-200'}`} />

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
                <div className={`absolute left-2.5 md:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 z-10
                  ${item.current
                    ? 'bg-accent-blue border-accent-blue shadow-lg shadow-blue-500/20'
                    : dark ? 'bg-dark-card border-dark-border' : 'bg-white border-gray-300'
                  }`}
                />

                <div className={`p-6 rounded-xl transition-all hover:-translate-y-1
                  ${dark ? 'bg-dark-card border border-dark-border' : 'bg-white border border-gray-200 shadow-sm'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold">{item.role}</h3>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className={`flex flex-wrap items-center gap-3 text-sm mb-4 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {item.company}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {item.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {item.bullets.map(b => (
                      <li key={b} className={`text-sm flex items-start gap-2 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="text-accent-blue mt-0.5">▹</span>
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
