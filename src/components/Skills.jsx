import { motion } from 'framer-motion';

const categories = [
  { title: 'Languages', items: ['C++', 'Python', 'Java'] },
  { title: 'Web Development', items: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'Flask', 'HTML/CSS'] },
  { title: 'Data Science & ML', items: ['XGBoost', 'LightGBM', 'TensorFlow', 'Pandas', 'NumPy', 'cuDF/RAPIDS', 'SHAP'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { title: 'DevOps & Tools', items: ['Git', 'Docker', 'Linux', 'Postman', 'CMake'] },
  { title: 'Core Concepts', items: ['DSA', 'System Design', 'Distributed Systems', 'OOP', 'REST APIs', 'Perf. Optimization'] },
];

export default function Skills({ dark }) {
  return (
    <section id="skills" className={`py-24 px-6 ${dark ? 'bg-dark-card/30' : 'bg-gray-50/50'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        >
          Skills &{' '}
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Technologies</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-center mb-16 ${dark ? 'text-gray-500' : 'text-gray-500'}`}
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
              className={`p-6 rounded-xl transition-all hover:-translate-y-1 group
                ${dark ? 'bg-dark-card border border-dark-border hover:border-accent-blue/30' : 'bg-white border border-gray-200 hover:border-accent-blue/30 shadow-sm'}`}
            >
              <h3 className="text-lg font-semibold mb-4 group-hover:text-accent-blue transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                    ${dark
                      ? 'bg-dark-bg/50 text-gray-400 border border-dark-border hover:text-accent-blue hover:border-accent-blue/30'
                      : 'bg-gray-50 text-gray-600 border border-gray-200 hover:text-accent-blue hover:border-accent-blue/30'
                    }`}>
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
