import { motion } from 'framer-motion';
import { CtaButton } from '../ui/CtaButton';
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
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden" id="hero">
      
      {/* Background Ambience (SaaS Depth) */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Orb 1 */}
         <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow opacity-60" />
         {/* Orb 2 */}
         <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow opacity-50" style={{ animationDelay: '2s' }} />
         {/* Subtle central glow behind the text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] mix-blend-screen opacity-30" />
         
         {/* Floating generic particles */}
         <div className="absolute w-1 h-1 bg-white/40 rounded-full top-[30%] left-[15%] animate-particle shadow-[0_0_10px_white]"></div>
         <div className="absolute w-1.5 h-1.5 bg-primary-light/50 rounded-full top-[60%] right-[25%] animate-particle shadow-[0_0_15px_#8e62ff]" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
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
            className="text-5xl md:text-[5.5rem] font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            Plus de clients.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-secondary-light to-primary inline-block mt-2">Moins de tâches.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-secondary-light to-primary drop-shadow-sm"
          >
            Votre business tourne, même quand vous ne travaillez pas.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed flex flex-col gap-1"
          >
            <p>Un système qui s'adapte à votre métier et travaille à votre place.</p>
            <p>Ne perdez plus jamais un client à cause d'un manque de suivi ou de réactivité.</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary animated CTA Container */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto relative group"
            >
              {/* Glow box underneath */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-[40px] blur opacity-30 group-hover:opacity-70 transition duration-500 animate-pulse-slow"></div>
              
              <a 
                href="tel:0615940884" 
                className="relative flex items-center justify-center w-full px-10 py-5 bg-accent text-surface text-lg font-bold rounded-[40px] shadow-2xl transition-all duration-300"
              >
                {/* Shine effect inside button */}
                <div className="absolute inset-0 overflow-hidden rounded-[40px]">
                  <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-white opacity-20 hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                </div>
                Appeler maintenant
              </a>
            </motion.div>
            
            {/* Secondary CTA */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <a 
                href="#call-com-placeholder"
                className="flex items-center justify-center w-full sm:w-auto px-10 py-5 text-lg font-bold text-white bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2 text-primary-light" />
                Prendre un rendez-vous
              </a>
            </motion.div>
          </motion.div>

          {/* Micro contact links */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex items-center justify-center gap-5 text-sm text-gray-400"
          >
            <a href="tel:0615940884" className="hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none">
              <PhoneIcon /> 06 15 94 08 84
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <a href="sms:0615940884" className="hover:text-white transition-colors focus:outline-none">SMS</a>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <a href="https://wa.me/33615940884" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-1.5 focus:outline-none">
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
