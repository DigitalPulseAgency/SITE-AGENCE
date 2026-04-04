import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export function CtaButton({ children, href, className = "", icon = true, type = "primary" }) {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-accent hover:bg-accent-hover text-surface shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] animate-glow",
    secondary: "glass-card text-white hover:bg-white/10"
  };

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variants[type]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && type === 'primary' && <PhoneCall className="w-5 h-5 fill-surface" />}
      {children}
    </motion.a>
  );
}
