import { motion } from 'framer-motion';

export function VideoShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative py-24 bg-bg-alt" id="videos">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6 text-ink"
          >
            Ce que vos futurs clients voient sur Instagram
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-ink-secondary italic max-w-2xl mx-auto"
          >
            Trois exemples réalisés en moins de 24h,<br className="hidden md:block"/>
            générés à 100% par intelligence artificielle
          </motion.p>
        </motion.div>

        {/* Horizontal scroll on mobile, 3 cols on desktop */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Video 3 (Now first) */}
          <motion.div variants={itemVariants} className="flex-none w-[80vw] md:w-auto snap-center group">
            <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-bg-card border border-line shadow-md group-hover:border-purple-deep/50 transition-colors duration-500">
               <video 
                  src="/media/3.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            </div>
            <p className="mt-4 text-center font-medium text-lg text-ink group-hover:text-purple-deep transition-colors">
              L'excellence du détail
            </p>
          </motion.div>

          {/* Video 2 */}
          <motion.div variants={itemVariants} className="flex-none w-[80vw] md:w-auto snap-center group">
            <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-bg-card border border-line shadow-md group-hover:border-purple-signa/50 transition-colors duration-500">
               <video 
                  src="/media/2.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            </div>
            <p className="mt-4 text-center font-medium text-lg text-ink group-hover:text-purple-signa transition-colors">
              Le charme provençal
            </p>
          </motion.div>

          {/* Video 1 (Now last) */}
          <motion.div variants={itemVariants} className="flex-none w-[80vw] md:w-auto snap-center group">
            <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-bg-card border border-line shadow-md group-hover:border-green-cta/50 transition-colors duration-500">
               <video 
                  src="/media/1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            </div>
            <p className="mt-4 text-center font-medium text-lg text-ink group-hover:text-green-cta transition-colors">
              L'appartement qui fait rêver
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-16 text-center"
        >
          <p className="text-ink-secondary max-w-3xl mx-auto text-lg leading-relaxed bg-bg-card p-6 rounded-2xl border border-line shadow-sm">
            Chaque contenu est créé à partir de votre identité — zéro stock, zéro générique, impossible à reproduire par vos concurrents.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
