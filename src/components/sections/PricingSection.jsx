import { motion } from 'framer-motion';
import { Check, ArrowRight, Eye, Target, Calendar } from 'lucide-react';

export function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 relative" id="offres">
      {/* Background glow for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
          >
            Attirez plus de propriétaires grâce à vos réseaux sociaux
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Nous transformons vos réseaux en un véritable levier d’acquisition, sans complexité.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
        >
          {/* Offre 1 */}
          <PricingCard
            variants={itemVariants}
            icon={<Calendar className="w-6 h-6 text-gray-300" />}
            title="Présence"
            description="On met en place une présence professionnelle sur vos réseaux avec du contenu régulier."
            price={<>69<span className="text-xl text-gray-400 font-medium">€/mois</span></>}
            colorTheme="slate"
            features={[
              "Image professionnelle",
              "Contenu régulier",
              "Présence active"
            ]}
          />

          {/* Offre 2 */}
          <PricingCard
            variants={itemVariants}
            icon={<Eye className="w-6 h-6 text-secondary-light" />}
            title="Visibilité"
            description="En plus du contenu, on commence à aller chercher de la visibilité en se positionnant directement auprès des personnes qui suivent déjà vos concurrents."
            price={<>197<span className="text-xl text-gray-400 font-medium">€/mois</span></>}
            colorTheme="blue"
            features={[
              "Visibilité ciblée",
              "Positionnement stratégique",
              "Début d’acquisition"
            ]}
          />

          {/* Offre 3 */}
          <PricingCard
            variants={itemVariants}
            icon={<Target className="w-6 h-6 text-accent" />}
            title="Acquisition"
            description="On met en place un système complet pour générer des demandes de propriétaires de manière régulière."
            price={<>497<span className="text-xl text-gray-400 font-medium">€/mois</span></>}
            colorTheme="green"
            highlight={true}
            features={[
              "Système d’acquisition",
              "Génération de demandes",
              "Croissance continue"
            ]}
          />
        </motion.div>

        {/* Conclusion + CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="glass-card border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
             {/* Glows */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-primary/30" />
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-secondary/30" />
             
             <p className="text-2xl md:text-3xl font-bold text-white mb-10 relative z-10 leading-snug">
               “L’objectif n’est pas simplement de publier du contenu,<br className="hidden md:block"/> mais d’attirer des propriétaires et générer des demandes.”
             </p>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
               <a href="#calendly" className="w-full sm:w-auto px-8 py-4 bg-white text-background font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
                 Prendre rendez-vous <ArrowRight className="w-5 h-5" />
               </a>
               <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                 En savoir plus
               </a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ variants, icon, title, description, price, highlight, colorTheme, features }) {
  
  const themeColors = {
    slate: {
       borderHov: 'hover:border-gray-400/30 hover:shadow-[0_0_30px_rgba(156,163,175,0.1)]',
       bgGlow: 'bg-gray-500/5',
       iconText: 'text-gray-400',
    },
    blue: {
       borderHov: 'hover:border-secondary-light/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
       bgGlow: 'bg-secondary/5',
       iconText: 'text-secondary-light',
    },
    green: {
       borderHov: 'hover:border-accent/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]',
       bgGlow: 'bg-accent/5',
       iconText: 'text-accent',
    }
  };

  const currentTheme = themeColors[colorTheme] || themeColors.blue;

  return (
    <motion.div
      variants={variants}
      className={`group relative p-8 rounded-[2.5rem] border flex flex-col transition-all duration-500 ${
        highlight 
          ? 'bg-surface/80 shadow-[0_0_50px_rgba(16,185,129,0.1),_0_0_50px_rgba(107,50,236,0.05)] border-accent/40 z-10 lg:-translate-y-4 lg:hover:-translate-y-6 backdrop-blur-xl' 
          : `glass-card border-white/5 lg:hover:-translate-y-2 ${currentTheme.borderHov} hover:bg-white/[0.03]`
      }`}
    >
      {!highlight && (
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-80 ${currentTheme.bgGlow}`} />
      )}

      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-emerald-400 px-5 py-1.5 rounded-full text-background text-xs font-black tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.4)] whitespace-nowrap">
          RECOMMANDÉ
        </div>
      )}
      
      <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <div>
        <h3 className="text-2xl font-black tracking-tight text-white mb-4">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8 md:min-h-[60px]">
          {description}
        </p>
      </div>

      <div className={`text-5xl font-black mb-8 tracking-tighter ${highlight ? 'text-white' : 'text-white drop-shadow-md'}`}>
        {price}
      </div>
      
      <div className="mt-auto">
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-medium tracking-wide">
              <div className={`mt-0.5 shrink-0 rounded-full p-1 bg-white/5 border border-white/10`}>
                <Check className={`w-3.5 h-3.5 ${highlight ? 'text-accent' : currentTheme.iconText}`} strokeWidth={3} />
              </div>
              <span className="leading-tight pt-0.5">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

