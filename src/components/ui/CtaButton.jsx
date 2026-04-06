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
      {/* --- ONDES DE PULSATION (Le "boom... boom...") --- */}
      
      {/* Première onde */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent pointer-events-none"
        variants={{
          rest: {
            scale: [1, 1.3, 1],
            opacity: [0.4, 0, 0],
            transition: { duration: 2, repeat: Infinity, times: [0, 0.4, 1], ease: "easeOut" }
          },
          hover: {
            scale: [1.05, 1.5, 1.05],
            opacity: [0.5, 0, 0],
            transition: { duration: 1.2, repeat: Infinity, times: [0, 0.6, 1], ease: "easeOut" }
          },
          tap: { scale: 0.95, opacity: 0 }
        }}
      />
      
      {/* Deuxième onde (écho) */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent pointer-events-none"
        variants={{
          rest: {
            scale: [1, 1.4, 1],
            opacity: [0.2, 0, 0],
            transition: { duration: 2, repeat: Infinity, times: [0, 0.4, 1], delay: 0.2, ease: "easeOut" }
          },
          hover: {
            scale: [1.05, 1.6, 1.05],
            opacity: [0.3, 0, 0],
            transition: { duration: 1.2, repeat: Infinity, times: [0, 0.6, 1], delay: 0.2, ease: "easeOut" }
          },
          tap: { scale: 0.95, opacity: 0 }
        }}
      />

      {/* --- BOUTON PRINCIPAL --- */}
      <motion.a
        href={href}
        variants={{
          rest: {
            scale: [1, 1.03, 1, 1.03, 1], 
            boxShadow: [
              "0 0 10px rgba(16,185,129,0.3)",
              "0 0 20px rgba(16,185,129,0.6)",
              "0 0 10px rgba(16,185,129,0.3)",
              "0 0 20px rgba(16,185,129,0.5)",
              "0 0 10px rgba(16,185,129,0.3)"
            ],
            transition: { duration: 2, repeat: Infinity, times: [0, 0.15, 0.30, 0.45, 1], ease: "easeInOut" }
          },
          hover: {
            scale: [1.05, 1.08, 1.05],
            boxShadow: [
              "0 0 20px rgba(16,185,129,0.5)",
              "0 0 35px rgba(16,185,129,0.8)",
              "0 0 20px rgba(16,185,129,0.5)"
            ],
            transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
          },
          tap: { scale: 0.95 }
        }}
        className={`relative z-10 text-surface bg-gradient-to-r from-accent to-[#34d399] flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full overflow-hidden`}
      >        
        {/* Shimmer Effect (Reflet brillant qui passe sur le bouton au survol) */}
        <div className="absolute inset-0 pointer-events-none">
           <motion.div 
             className="w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
             variants={{
               rest: { x: "-150%", opacity: 0 },
               hover: { 
                 x: ["-150%", "150%"], 
                 opacity: [0, 1, 0],
                 transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }
               }
             }}
           />
        </div>

        {icon && (
          <motion.div
            variants={{
              rest: { rotate: [0, -10, 10, -10, 10, 0] },
              hover: { rotate: [0, -15, 15, -15, 15, 0] }
            }}
            transition={{ duration: 2, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 0.4, 1] }}
          >
            <PhoneCall className="w-5 h-5 fill-surface relative z-10" />
          </motion.div>
        )}
        <span className="relative z-10 tracking-wide">{children}</span>
      </motion.a>
    </motion.div>
  );
}
