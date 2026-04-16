import { motion } from 'framer-motion';

export function PsychologicalImpact() {
  return (
    <section className="relative py-24 bg-background overflow-hidden" id="impact">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] mix-blend-screen opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            99% de vos concurrents font<br className="hidden md:block" /> tous la même chose.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.div 
             animate={{ scale: [1, 1.03, 1] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
             whileHover={{ scale: 1.06 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto relative group mt-8"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#10b981] to-[#047857] rounded-full blur-[15px] opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-slow"></div>
            <a 
              href="https://calendly.com/digitalpulse-agency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-full px-10 py-5 font-bold rounded-full shadow-2xl transition-all duration-300 overflow-hidden bg-accent text-surface text-lg md:text-xl border border-[#10b981]/50"
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
              </div>
              <div className="relative z-10 flex items-center justify-center w-full gap-2 drop-shadow-md text-center">
                 Je veux dominer mes réseaux sociaux
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

