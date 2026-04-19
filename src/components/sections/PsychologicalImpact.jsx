import { motion } from 'framer-motion';

export function PsychologicalImpact() {
  return (
    <section className="relative py-24 bg-bg overflow-hidden" id="impact">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-ink">
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
            <div className="absolute -inset-2 bg-gradient-to-r from-green-cta to-[#059669] rounded-full blur-[15px] opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <a 
              href="https://calendly.com/digitalpulse-agency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-full px-10 py-5 font-bold rounded-full shadow-[0_8px_20px_-8px_rgba(5,150,105,0.4)] transition-all duration-300 overflow-hidden bg-green-cta text-white text-lg md:text-xl border border-green-cta hover:bg-[#059669]"
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
              </div>
              <div className="relative z-10 flex items-center justify-center w-full gap-2 text-center">
                 Je veux dominer mes réseaux sociaux
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
