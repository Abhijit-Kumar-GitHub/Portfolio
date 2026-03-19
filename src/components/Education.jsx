import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Trophy } from 'lucide-react';

export default function Education({ dark }) {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 rounded-xl mb-8
            ${dark ? 'bg-dark-card border border-dark-border' : 'bg-white border border-gray-200 shadow-sm'}`}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className={`p-3 rounded-xl ${dark ? 'bg-dark-bg' : 'bg-blue-50'}`}>
              <GraduationCap size={24} className="text-accent-blue" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Lovely Professional University</h3>
              <p className={`text-sm ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                Bachelor of Technology — Computer Science and Engineering
              </p>
              <p className={`text-sm ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                Aug 2023 — May 2027 (Expected)
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                9.43
              </div>
              <div className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-500'}`}>CGPA / 10.0</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {['Minor: Data Science', 'Minor: DevOps/Cloud Engineering'].map(m => (
              <span key={m} className={`px-3 py-1.5 rounded-lg text-sm font-medium
                ${dark ? 'bg-dark-bg/50 text-gray-400 border border-dark-border' : 'bg-gray-50 text-gray-600 border border-gray-200'}`}>
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
            { icon: Trophy, title: 'LeetCode Knight Badge', desc: 'Rank 381 among 30,000+ contestants', color: 'text-amber-500' },
            { icon: Code, title: 'HackerRank 5-Star', desc: 'In C++ and Problem Solving', color: 'text-green-500' },
          ].map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-5 rounded-xl flex items-start gap-4 transition-all hover:-translate-y-1
                ${dark ? 'bg-dark-card border border-dark-border' : 'bg-white border border-gray-200 shadow-sm'}`}
            >
              <div className={`p-2 rounded-lg ${dark ? 'bg-dark-bg' : 'bg-gray-50'}`}>
                <a.icon size={20} className={a.color} />
              </div>
              <div>
                <h4 className="font-semibold">{a.title}</h4>
                <p className={`text-sm ${dark ? 'text-gray-500' : 'text-gray-500'}`}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
