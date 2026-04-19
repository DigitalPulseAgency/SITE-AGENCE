import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger text appearance
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-bg" id="hero">
      
      {/* Background Ambience (Light Mode) */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Subtle radial gradient behind headline */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,98,255,0.06),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-[5.5rem] font-extrabold tracking-tight mb-6 leading-[1.1] text-ink"
          >
            Pendant que vos concurrents postent des photos,<br />
            <span className="text-purple-deep bg-clip-text bg-gradient-to-r from-purple-deep to-purple-signa inline-block mt-2" style={{ WebkitTextFillColor: 'transparent', color: '#5B3FD9' }}>vous, vous dominez.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-normal mt-8 mb-6 text-ink-secondary drop-shadow-none leading-tight"
          >
            Spécialiste en gestion de réseaux sociaux 100% IA — Des contenus viraux et une présence digitale automatisée pour écraser la concurrence.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary animated CTA Container */}
            <motion.div 
              animate={{ 
                scale: [1, 1.03, 1],
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto relative group"
            >
              <a 
                href="tel:0615940884" 
                aria-label="Appeler maintenant"
                className="relative flex items-center justify-center w-full px-10 py-5 font-bold rounded-full shadow-[0_8px_24px_-8px_rgba(5,150,105,0.35)] transition-all duration-300 overflow-hidden bg-green-cta text-white text-lg hover:bg-green-cta-hover"
              >
                {/* Shine effect inside button (permanent) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                </div>
                <div className="relative z-10 flex items-center gap-2">
                   <PhoneIcon />
                   Appeler maintenant
                </div>
              </a>
            </motion.div>
            
            {/* Secondary CTA */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <a 
                href="https://calendly.com/digitalpulse-agency/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prendre un rendez-vous"
                className="flex items-center justify-center w-full sm:w-auto px-10 py-5 text-lg font-bold text-ink bg-card border border-line rounded-[40px] hover:bg-bg-alt hover:border-purple-deep transition-all duration-300 shadow-sm"
              >
                <Calendar className="w-5 h-5 mr-2 text-purple-deep" />
                Prendre un rendez-vous
              </a>
            </motion.div>
          </motion.div>

          {/* Micro contact links */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex items-center justify-center gap-5 text-sm text-ink-tertiary"
          >
            <a href="tel:0615940884" className="hover:text-ink transition-colors flex items-center gap-1.5 focus:outline-none" aria-label="Numéro de téléphone">
              <PhoneIcon /> 06 15 94 08 84
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-line"></span>
            <a href="sms:0615940884" className="hover:text-ink transition-colors focus:outline-none" aria-label="Envoyer un SMS">SMS</a>
            <span className="w-1.5 h-1.5 rounded-full bg-line"></span>
            <a href="https://wa.me/33615940884" target="_blank" rel="noreferrer" className="hover:text-green-cta transition-colors flex items-center gap-1.5 focus:outline-none" aria-label="Contacter sur WhatsApp">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  )
}
