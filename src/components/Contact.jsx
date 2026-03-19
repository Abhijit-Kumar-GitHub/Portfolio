import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Loader2, CheckCircle } from 'lucide-react';

export default function Contact({ dark }) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    try {
      const res = await fetch('https://formspree.io/f/xrgvqeop', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'var(--bg-elevated)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16 max-w-md mx-auto"
          style={{ color: 'var(--text-muted)' }}
        >
          Open to internships, collaborations, and interesting project ideas. Let's build something together.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Whether you want to discuss tech, collaborate on a project, or just say hello — my inbox is always open.
            </p>

            <a href="mailto:abhijitabhi127@gmail.com"
              className="flex items-center gap-3 font-medium hover:underline"
              style={{ color: 'var(--accent)' }}>
              <Mail size={18} /> abhijitabhi127@gmail.com
            </a>

            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/Abhijit-Kumar-GitHub', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/abhijit2701', label: 'LinkedIn' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all hover:-translate-y-1"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {['name', 'email'].map(field => (
              <input key={field} type={field === 'email' ? 'email' : 'text'} name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`} required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                }}
              />
            ))}
            <textarea name="message" placeholder="Your Message" rows={5} required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              }}
            />
            <button type="submit" disabled={status === 'sending'}
              className="w-full py-3 px-6 rounded-xl text-white font-semibold text-sm
                flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
              style={{ background: 'var(--accent)' }}>
              {status === 'sending' && <><Loader2 size={16} className="animate-spin" /> Sending...</>}
              {status === 'sent' && <><CheckCircle size={16} /> Sent!</>}
              {status === 'error' && 'Try Again'}
              {status === 'idle' && <><Send size={16} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
