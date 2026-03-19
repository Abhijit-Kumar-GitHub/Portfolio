import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Loader2, CheckCircle } from 'lucide-react';

export default function Contact({ dark }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

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

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all
    ${dark
      ? 'bg-dark-bg border border-dark-border text-gray-200 placeholder:text-gray-600 focus:border-accent-blue'
      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-accent-blue'
    }`;

  return (
    <section id="contact" className={`py-24 px-6 ${dark ? 'bg-dark-card/30' : 'bg-gray-50/50'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        >
          Let's{' '}
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-center mb-16 max-w-md mx-auto ${dark ? 'text-gray-500' : 'text-gray-500'}`}
        >
          Open to internship opportunities, collaborations, and interesting project ideas. Let's build something together.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className={`leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              Whether you want to discuss tech, collaborate on a project, or just say hello — my inbox is always open.
            </p>

            <a href="mailto:abhijitabhi127@gmail.com"
              className="flex items-center gap-3 text-accent-blue font-medium hover:underline">
              <Mail size={18} /> abhijitabhi127@gmail.com
            </a>

            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/Abhijit-Kumar-GitHub', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/abhijit2701', label: 'LinkedIn' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all hover:-translate-y-1
                    ${dark ? 'bg-dark-card border border-dark-border text-gray-400 hover:text-accent-blue hover:border-accent-blue/30' : 'bg-white border border-gray-200 text-gray-500 hover:text-accent-blue hover:border-accent-blue/30'}`}>
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
            <input type="text" name="name" placeholder="Your Name" required className={inputClass} />
            <input type="email" name="email" placeholder="Your Email" required className={inputClass} />
            <textarea name="message" placeholder="Your Message" rows={5} required className={`${inputClass} resize-none`} />

            <button type="submit" disabled={status === 'sending'}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all disabled:opacity-60">
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
