import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';

const certifications = [
  {
    title: 'Google Advanced Data Analytics',
    issuer: 'Google — Coursera',
    date: 'Sep 2025',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/IXXZZSJ57Q52',
  },
  {
    title: 'Google Cybersecurity Professional',
    issuer: 'Google — Coursera',
    date: 'Sep 2025',
    link: 'https://coursera.org/share/e1a5b19de16a682372b7fff322156ef6',
  },
  {
    title: 'MERN Stack Front to Back',
    issuer: 'Packt — Coursera',
    date: 'Sep 2025',
    link: 'https://coursera.org/share/b92035a269abb984db3b46478716edfd',
  },
  {
    title: 'Deep Learning',
    issuer: 'IIT Kharagpur — NPTEL',
    date: 'Apr 2025',
    link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-ee16/Course/NPTEL25EE16S54750054604510204.pdf',
  },
];

const trainings = [
  {
    title: 'Data Science Internship',
    issuer: 'Techvanto Academy, New Delhi',
    date: 'Jun 2025 — Jul 2025',
    detail: '6-Week Live Internship with Grade A',
    file: '/assets/certificates/Abhijit-Certificate.pdf',
  },
];

export default function Certifications({ dark }) {
  return (
    <section id="certifications" className="py-24 px-6" style={{ background: 'var(--bg-elevated)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        >
          Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
          style={{ color: 'var(--text-muted)' }}
        >
          Courses and credentials I've earned along the way
        </motion.p>



        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <GlassCard
              key={cert.title}
              as={motion.a}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              delay={i * 0.08}
              className="p-5 flex flex-col gap-3 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg" style={{ background: 'var(--accent-soft)' }}>
                  <Award size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--text-muted)' }} />
              </div>
              <h3 className="font-semibold text-sm leading-snug">{cert.title}</h3>
              <div>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
                <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--accent)' }}>{cert.date}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Training */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold mt-16 mb-4"
        >
          Training
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          Industry training and workshops
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trainings.map((t, i) => (
            <GlassCard
              key={t.title}
              as={motion.a}
              href={t.file}
              target="_blank"
              rel="noopener noreferrer"
              delay={i * 0.08}
              className="p-5 flex flex-col gap-3 group cursor-pointer"
            >
              <div className="p-2 rounded-lg w-fit" style={{ background: 'var(--accent-2-soft)' }}>
                <Award size={20} style={{ color: 'var(--accent-2)' }} />
              </div>
              <h3 className="font-semibold text-sm">{t.title}</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.issuer}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--accent)' }}>{t.date}</p>
              {t.detail && <p className="text-[10px] uppercase font-bold mt-1 opacity-60">{t.detail}</p>}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
