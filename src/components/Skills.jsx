import { motion } from 'framer-motion';
import { Code, Globe, BrainCircuit, Database, Terminal, Cpu } from 'lucide-react';

const categories = [
  { title: 'Languages', icon: Code, items: ['C++', 'Python', 'Java'] },
  { title: 'Web Development', icon: Globe, items: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'Flask', 'HTML/CSS'] },
  { title: 'Data Science & ML', icon: BrainCircuit, items: ['XGBoost', 'LightGBM', 'TensorFlow', 'Pandas', 'NumPy', 'cuDF/RAPIDS', 'SHAP'] },
  { title: 'Databases', icon: Database, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { title: 'DevOps & Tools', icon: Terminal, items: ['Git', 'Docker', 'Linux', 'Postman', 'CMake'] },
  { title: 'Core Concepts', icon: Cpu, items: ['DSA', 'System Design', 'Distributed Systems', 'OOP', 'REST APIs', 'Perf. Optimization'] },
];

export default function Skills({ dark }) {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: 'var(--bg-elevated)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
          style={{ color: 'var(--text-muted)' }}
        >
          What I work with day-to-day
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl transition-all hover:-translate-y-1 group"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ background: 'var(--accent-soft)' }}>
                  <cat.icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      background: 'var(--bg-elevated)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                    }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
