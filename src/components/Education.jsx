import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Code } from 'lucide-react';
import GlassCard from './GlassCard';

export default function Education({ dark }) {
  return (
    <section id="education" className="py-24 px-6" style={{ background: 'var(--bg-elevated)' }}>
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
          My academic journey, honors, and leadership roles
        </motion.p>

        <GlassCard delay={0} className="p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
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
            <div className="text-right w-full sm:w-auto mt-2 sm:mt-0">
              <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>9.28</div>
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
        </GlassCard>

        {/* 12th & 10th */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              school: 'National Institute of Open Education',
              location: 'Patna, Bihar',
              level: 'Intermediate (12th)',
              period: 'Nov 2021 — Oct 2022',
              score: '67.2%',
            },
            {
              school: 'Kendriya Vidyalaya Guwahati',
              location: 'Guwahati, Assam',
              level: 'Matriculation (10th)',
              period: 'Apr 2017 — Mar 2018',
              score: '96.4%',
            },
          ].map((edu, i) => (
            <GlassCard key={edu.level} delay={i * 0.1} className="p-6">
              <h3 className="font-bold text-base mb-1">{edu.school}</h3>
              <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>{edu.location}</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{edu.level}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{edu.period}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>{edu.score}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Achievements */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold mt-16 mb-6"
        >
          Achievements
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Trophy, title: 'LeetCode Knight Badge', desc: 'Ranked 381 among 30,000+ contestants globally (Top 1.3%).' },
            { icon: Code, title: 'HackerRank 5-Star', desc: 'Expert rating in C++ and Problem Solving data structures.' },
            { icon: GraduationCap, title: 'Student Coordinator', desc: 'Leading student feedback initiatives impacting 25,000+ CSE students and driving curriculum improvements at LPU SAAC.' },
          ].map((a, i) => (
            <GlassCard key={a.title} delay={i * 0.1} className="overflow-hidden">
              <div className="h-2 w-full" style={{ background: 'var(--accent)' }} />
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ background: 'var(--accent-soft)' }}>
                    <a.icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h4 className="font-bold text-base">{a.title}</h4>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
