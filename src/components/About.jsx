import { motion } from 'framer-motion';
import { Database, Zap, Trophy, GraduationCap } from 'lucide-react';

const stats = [
  { icon: Database, value: '1B+', label: 'Records Processed' },
  { icon: Zap, value: '20x', label: 'Performance Gain' },
  { icon: Trophy, value: 'Top 1.3%', label: 'LeetCode' },
  { icon: GraduationCap, value: '9.43', label: 'CGPA' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About({ dark }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-16 text-center"
        >
          About{' '}
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-accent-blue to-accent-purple p-[2px]">
                <img src="/assets/profile.jpeg" alt="Abhijit Kumar"
                  className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-3xl -z-10 blur-xl" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className={`text-lg leading-relaxed mb-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              Software engineering student at Lovely Professional University passionate about
              building scalable systems. I've built a GPU-accelerated cryptocurrency analysis
              platform processing 1B+ high-frequency records and engineered a crash-safe database
              engine from scratch. Currently preparing for my SDE internship at Microsoft, where
              I'm focused on distributed systems and performance optimization.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`p-4 rounded-xl text-center transition-all hover:-translate-y-1
                    ${dark ? 'bg-dark-card border border-dark-border' : 'bg-gray-50 border border-gray-200'}`}
                >
                  <s.icon size={20} className="mx-auto mb-2 text-accent-blue" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className={`text-xs mt-1 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
