import { useState } from 'react';
import { motion } from 'framer-motion';

export function FounderSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto glass-card rounded-[32px] p-8 md:p-14 border border-white/5 relative"
        >
          {/* Subtle background glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center relative z-10 text-center md:text-left">
            
            {/* Photo Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="shrink-0 group"
            >
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-[24px] overflow-hidden relative border border-primary-light/30 shadow-[0_0_25px_rgba(107,50,236,0.15)] transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_0_35px_rgba(107,50,236,0.25)] group-hover:border-primary-light/50 bg-black">
                
                {/* Fallback & Image rendering */}
                {!imageError ? (
                  <img 
                    src="/louis-humbert.png" 
                    alt="Louis Humbert - Fondateur" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 relative z-10"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                    <span className="text-4xl md:text-6xl font-extrabold text-white/10 tracking-widest font-serif italic">LH</span>
                  </div>
                )}
                
              </div>
            </motion.div>

            {/* Content Container */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Louis Humbert</h2>
                <p className="text-primary-light font-bold uppercase tracking-wider text-[13px]">
                  Fondateur — Digital Pulse Agency
                </p>
              </div>

              <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
                <p>
                  "J'ai vu trop d'entrepreneurs brillants s'épuiser sur des tâches répétitives qui n'apportent aucune valeur ajoutée."
                </p>
                <p>
                  Notre mission chez Digital Pulse Agency n'est pas de vous vendre de la technologie. Notre mission est de vous redonner du temps.
                </p>
                <p className="font-semibold text-white italic border-l-2 border-accent pl-4">
                  Si un processus peut être automatisé, nous l'automatisons. Si un site peut vous ramener plus d'appels, nous le construisons.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
