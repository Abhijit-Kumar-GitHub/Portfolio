import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CryptoML — High-Frequency Trading Analysis',
    desc: "End-to-end ML pipeline processing 1B+ high-frequency cryptocurrency trades. Engineered GPU-accelerated preprocessing using cuDF/RAPIDS, reducing data transformation from 4+ hours to 12 minutes (20x speedup). Achieved 59.83% directional accuracy using gradient boosting models.",
    tech: ['Python', 'XGBoost', 'LightGBM', 'TensorFlow', 'cuDF/RAPIDS', 'SHAP', 'WebSocket', 'Pandas'],
    highlights: [
      'Processes 1B+ records with GPU acceleration',
      '20x performance improvement (4hrs → 12min)',
      '59.83% prediction accuracy',
      'Real-time WebSocket data ingestion',
    ],
    github: 'https://github.com/Abhijit-Kumar-GitHub/Market-Prediction',
    emoji: '📈',
  },
  {
    title: 'ArborDB — Crash-Safe Database Engine',
    desc: "Custom database storage engine implementing B-Tree indexing with LRU page cache. Features persistent freelist management, dirty page tracking, and robust error propagation. Achieved ~90% disk I/O reduction through intelligent caching and 100% test coverage.",
    tech: ['C++', 'Python', 'Pytest', 'CMake', 'B-Trees', 'LRU Cache'],
    highlights: [
      'B-Tree indexing for efficient storage',
      '~90% disk I/O reduction via LRU cache',
      'Crash-safe persistence layer',
      '100% test coverage (40/40 tests passing)',
    ],
    github: 'https://github.com/Abhijit-Kumar-GitHub/DB',
    emoji: '🗄️',
  },
  {
    title: 'Vice of Dice — Provably Fair Gaming',
    desc: "Full-stack betting platform with cryptographic fairness using SHA-256 hashing. Features modular backend architecture with low-latency transaction processing, wallet management, and JWT-based authentication.",
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'SHA-256', 'JWT'],
    highlights: [
      'Provably fair outcomes (SHA-256 verification)',
      'Low-latency transaction processing',
      'Secure JWT authentication',
      'Real-time betting interface',
    ],
    github: 'https://github.com/Abhijit-Kumar-GitHub',
    emoji: '🎲',
  },
];

export default function Projects({ dark }) {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        >
          Featured{' '}
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-center mb-16 ${dark ? 'text-gray-500' : 'text-gray-500'}`}
        >
          Things I've built that I'm proud of
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group rounded-xl overflow-hidden flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl
                ${dark
                  ? 'bg-dark-card border border-dark-border hover:border-accent-blue/30 hover:shadow-blue-500/5'
                  : 'bg-white border border-gray-200 hover:border-accent-blue/30 shadow-sm hover:shadow-blue-500/10'
                }`}
            >
              {/* Preview header */}
              <div className={`h-40 flex items-center justify-center text-5xl relative
                ${dark ? 'bg-gradient-to-br from-dark-bg to-dark-card' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
                <span className="opacity-60 group-hover:scale-110 transition-transform">{p.emoji}</span>
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(${dark ? '#3b82f6' : '#3b82f6'} 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-3 group-hover:text-accent-blue transition-colors">{p.title}</h3>
                <p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{p.desc}</p>

                {/* Highlights */}
                <ul className="mb-4 space-y-1.5 flex-1">
                  {p.highlights.map(h => (
                    <li key={h} className={`text-xs flex items-start gap-2 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                      <span className="text-accent-blue mt-0.5">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map(t => (
                    <span key={t} className={`px-2 py-1 rounded text-xs font-mono
                      ${dark ? 'bg-dark-bg/50 text-accent-blue border border-dark-border' : 'bg-blue-50 text-accent-blue border border-blue-100'}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent-blue
                    ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Github size={16} /> View Code <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
