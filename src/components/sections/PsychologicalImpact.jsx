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
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light font-bold">
            Voici pourquoi vous allez les dépasser.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ComparisonCard 
             delay={0.1}
             euxText="Postent des photos que personne ne regarde"
             vousText="Publiez des vidéos cinématiques qui arrêtent le scroll en 2 secondes"
          />
          <ComparisonCard 
             delay={0.2}
             euxText="Utilisent les mêmes visuels que tous leurs concurrents"
             vousText="Avez un contenu unique qu'aucun concurrent ne peut copier"
          />
          <ComparisonCard 
             delay={0.3}
             euxText="Publient de façon irrégulière quand ils ont le temps"
             vousText="Avez un calendrier automatisé, chaque semaine, sans y penser"
          />
          <ComparisonCard 
             delay={0.4}
             euxText="Cherchent des clients sans stratégie sociale claire"
             vousText="Vos clients vous trouvent car vous dominez votre marché"
          />
        </div>

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
              <div className="relative z-10 flex items-center gap-2 drop-shadow-md">
                 Je veux dominer mes réseaux sociaux
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonCard({ euxText, vousText, delay }) {
  return (
    <motion.div 
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay, duration: 0.5 }}
       className="flex flex-col h-full rounded-2xl bg-surface border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
    >
      <div className="p-6 bg-white/[0.02] border-b border-white/5 flex-1 flex flex-col justify-center">
         <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Eux</span>
         <p className="text-gray-400 leading-relaxed font-medium">{euxText}</p>
      </div>
      <div className="p-6 bg-gradient-to-br from-surface to-accent/5 flex-1 flex flex-col justify-center relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-left">
         {/* Subtle glow behind vous */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px]" />
         <span className="text-sm font-bold text-accent uppercase tracking-widest mb-3 relative z-10">Vous</span>
         <p className="text-white font-bold leading-relaxed relative z-10 text-lg">{vousText}</p>
      </div>
    </motion.div>
  );
}
