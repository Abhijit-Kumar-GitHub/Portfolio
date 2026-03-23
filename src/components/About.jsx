import { motion } from 'framer-motion';
import { Database, Zap, Trophy, GraduationCap } from 'lucide-react';
import GlassCard from './GlassCard';

const stats = [
  { icon: Database, value: '1B+', label: 'Records Processed' },
  { icon: Zap, value: '20x', label: 'Performance Gain' },
  { icon: Trophy, value: 'Top 1.3%', label: 'LeetCode' },
  { icon: GraduationCap, value: '9.28', label: 'CGPA' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: 'var(--bg-elevated)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
          style={{ color: 'var(--text-muted)' }}
        >
          A bit about my background and what drives me
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden p-[2px]"
                style={{ border: '2px solid var(--border)' }}>
                <img src="/assets/profile.jpeg" alt="Abhijit Kumar"
                  className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Software engineering student at Lovely Professional University passionate about
              building scalable systems. I've built a GPU-accelerated cryptocurrency analysis
              platform processing 1B+ high-frequency records and engineered a crash-safe database
              engine from scratch. Currently preparing for my SDE internship at Microsoft, where
              I'm focused on distributed systems and performance optimization.
            </p>

            {/* Stats */}


            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <GlassCard
                  key={s.label}
                  delay={0.3 + i * 0.1}
                  className="p-4 text-center"
                >
                  <s.icon size={20} className="mx-auto mb-2" style={{ color: 'var(--accent)' }} />
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
