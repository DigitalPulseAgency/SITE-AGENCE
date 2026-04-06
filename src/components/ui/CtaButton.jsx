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

  // GLASS STYLE CTA BUTTON
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
        className="absolute -inset-2 rounded-full bg-gradient-to-r from-accent via-primary-light to-secondary-light blur-[15px] pointer-events-none"
        variants={{
          rest: { 
            opacity: [0.15, 0.35, 0.15],
            scale: [0.98, 1.03, 0.98],
            transition: { duration: 3, ease: "easeInOut", repeat: Infinity } 
          },
          hover: { 
            opacity: 0.6,
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" } 
          },
          tap: { opacity: 0.2, scale: 0.95 }
        }}
      />

      {/* --- MAIN BUTTON (Glassmorphism) --- */}
      <motion.a
        href={href}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.04, transition: { duration: 0.2, ease: "easeInOut" } },
          tap: { scale: 0.97, transition: { duration: 0.1 } }
        }}
        className={`relative z-10 flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl group-hover:border-accent/50 transition-colors duration-300`}
      >        
        
        {/* Animated Background Gradient inside Glass */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(16,185,129,0.3), rgba(139,92,246,0.3), rgba(59,130,246,0.3), rgba(16,185,129,0.3))",
            backgroundSize: "300% 100%"
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        />

        {/* Shimmer / Light sweep effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0 pointer-events-none"></div>

        {/* Hover Highlight Overlay */}
        <motion.div
          className="absolute inset-0 bg-white z-0 pointer-events-none mix-blend-overlay"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 0.1 }
          }}
        />

        {/* Content */}
        {icon && (
          <motion.div 
            className="relative z-10"
            variants={{
              rest: { 
                scale: [1, 1.15, 1],
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 2, repeat: Infinity, repeatDelay: 2 }
              },
              hover: { rotate: 0, scale: 1.1 }
            }}
          >
            <PhoneCall className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </motion.div>
        )}
        <span className="relative z-10 tracking-wide text-white drop-shadow-md">{children}</span>
      </motion.a>
    </motion.div>
  );
}
