import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Code } from 'lucide-react';

export default function Education({ dark }) {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
          style={{ color: 'var(--text-muted)' }}
        >
          Where I've been learning
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl mb-8"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl" style={{ background: 'var(--accent-soft)' }}>
              <GraduationCap size={24} style={{ color: 'var(--accent)' }} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Lovely Professional University</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Bachelor of Technology — Computer Science and Engineering
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Aug 2023 — May 2027 (Expected)
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>9.43</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>CGPA / 10.0</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Minor: Data Science', 'Minor: DevOps/Cloud Engineering'].map(m => (
              <span key={m} className="px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
                {m}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold mb-6"
        >
          Achievements
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Trophy, title: 'LeetCode Knight Badge', desc: 'Rank 381 among 30,000+ contestants' },
            { icon: Code, title: 'HackerRank 5-Star', desc: 'In C++ and Problem Solving' },
          ].map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl flex items-start gap-4 transition-all hover:-translate-y-1"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div className="p-2 rounded-lg" style={{ background: 'var(--accent-2-soft)' }}>
                <a.icon size={20} style={{ color: 'var(--accent-2)' }} />
              </div>
              <div>
                <h4 className="font-semibold">{a.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
