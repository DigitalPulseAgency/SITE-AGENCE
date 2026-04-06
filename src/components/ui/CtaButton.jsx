import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export function CtaButton({ children, href, className = "", icon = true, type = "primary" }) {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-all duration-300";
  
  if (type !== 'primary') {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} glass-card text-white hover:bg-white/10 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div 
      className={`relative inline-block group ${className}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
    >
      {/* 1. Soft Glowing Pulse Effect (Idle State) */}
      <motion.div
        className="absolute -inset-1.5 rounded-full bg-accent blur-[10px] pointer-events-none"
        variants={{
          rest: { 
            opacity: [0.15, 0.4, 0.15],
            scale: [0.98, 1.02, 0.98],
            transition: { duration: 3, ease: "easeInOut", repeat: Infinity } 
          },
          hover: { 
            opacity: 0.6,
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" } 
          },
          tap: { opacity: 0.2, scale: 0.95 }
        }}
      />

      {/* --- MAIN BUTTON --- */}
      <motion.a
        href={href}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.04, transition: { duration: 0.2, ease: "easeInOut" } },
          tap: { scale: 0.96, transition: { duration: 0.1 } }
        }}
        className={`relative z-10 text-surface flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full overflow-hidden`}
      >        
        
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, #10b981, #059669, #10b981, #059669)",
            backgroundSize: "300% 100%"
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        />

        {/* Hover Highlight Overlay */}
        <motion.div
          className="absolute inset-0 bg-white z-0 pointer-events-none mix-blend-overlay"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 0.15 }
          }}
        />

        {icon && (
          <motion.div className="relative z-10">
            <PhoneCall className="w-5 h-5 fill-surface" />
          </motion.div>
        )}
        <span className="relative z-10 tracking-wide">{children}</span>
      </motion.a>
    </motion.div>
  );
}
