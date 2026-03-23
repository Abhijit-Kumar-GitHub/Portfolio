import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';

export default function GlassCard({ children, className = '', delay = 0, as: Component = motion.div, ...props }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Spotlight effect gradient
  const background = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(16, 185, 129, 0.15),
      transparent 80%
    )
  `;

  return (
    <Component
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden rounded-2xl border transition-colors duration-300 ${className}`}
      style={{
        background: 'var(--bg-glass)',
        borderColor: 'var(--glass-border)',
        backdropFilter: 'blur(var(--blur))',
        WebkitBackdropFilter: 'blur(var(--blur))',
      }}
      {...props}
    >
      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />
      
      {/* Content wrapper to ensure it sits above spotlight but doesn't block it */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </Component>
  );
}
