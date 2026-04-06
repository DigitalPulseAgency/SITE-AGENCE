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

          <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto">
            
            {/* Content Container */}
            <div className="flex flex-col items-center space-y-8 text-center">
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
                  Louis Humbert
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
                <p className="text-primary-light font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                  Fondateur — Digital Pulse Agency
                </p>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed text-lg md:text-xl">
                <p className="font-medium text-white italic text-xl md:text-2xl pt-2 pb-2">
                  "J'ai vu trop d'entrepreneurs brillants s'épuiser sur des tâches répétitives qui n'apportent aucune valeur ajoutée."
                </p>
                
                <p className="max-w-2xl mx-auto">
                  Notre mission chez Digital Pulse Agency n'est pas de vous vendre de la technologie. Notre mission est de vous redonner du temps.
                </p>
                
                <div className="mt-8 p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl relative shadow-inner w-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 rounded-t-2xl"></div>
                  <p className="font-semibold text-white">
                    Si un processus peut être automatisé, nous l'automatisons.<br className="hidden md:block" /> Si un site peut vous ramener plus d'appels, nous le construisons.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
