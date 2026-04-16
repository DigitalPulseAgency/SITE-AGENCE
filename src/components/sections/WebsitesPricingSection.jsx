import { motion } from 'framer-motion';
import { Check, ArrowRight, Layout, Activity, Sparkles } from 'lucide-react';

export function WebsitesPricingSection() {
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
    <section className="py-24 relative" id="tarifs-sites">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-secondary-light/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 tracking-tight leading-tight"
          >
            Deux approches pour votre site web
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium"
          >
            D'une simple vitrine professionnelle à une machine d'acquisition continuellement optimisée. Choisissez la formule adaptée à vos ambitions.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch"
        >
          {/* Offer 1 */}
          <WebPricingCard
            variants={itemVariants}
            icon={<Layout className="w-8 h-8 text-gray-300" />}
            title="Site Essentiel"
            price={<>487<span className="text-2xl text-gray-400 font-semibold ml-1">€</span></>}
            subprice={<span className="text-gray-500 font-normal">Paiement unique</span>}
            description="L'offre d'entrée pour établir une présence en ligne propre, rapide et professionnelle, sans frais d'optimisation récurrents."
            colorTheme="slate"
            features={[
              "Site one-page ou structure simple",
              "Design moderne et responsive",
              "Mise en ligne rapide",
              "Présentation claire de l’activité"
            ]}
            ctaText="Créer mon site"
          />

          {/* Offer 2 */}
          <WebPricingCard
            variants={itemVariants}
            icon={<Activity className="w-8 h-8 text-white" />}
            title="Site Performance"
            price={<>987<span className="text-2xl text-secondary-light/70 font-semibold ml-1">€</span></>}
            subprice={<>+ 79€ <span className="text-sm font-normal text-gray-400">/mois (maintenance & optimisation)</span></>}
            description={
              <>
                Conçu pour générer des contacts. Ce site n'est pas statique : il intègre <strong className="text-white">un système d'optimisation continue</strong> qui s'adapte en temps réel aux recherches de vos futurs clients.
              </>
            }
            colorTheme="blue"
            highlight={true}
            badge="IDÉAL POUR DÉVELOPPER"
            features={[
              "Site optimisé pour la conversion",
              "Structure pensée pour générer des contacts",
              "Architecture SEO orientée résultats",
              "Mise à jour intelligente des mots-clés",
              "Votre site évolue en permanence pour rester visible",
              "Ajustements techniques pour les performances"
            ]}
            ctaText="Passer au site performance"
          />
        </motion.div>
      </div>
    </section>
  );
}

function WebPricingCard({ variants, icon, title, description, price, subprice, highlight, badge, colorTheme, features, ctaText }) {
  const themeColors = {
    slate: {
       borderHov: 'hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]',
       bgGlow: 'bg-white/5',
       iconText: 'text-gray-400',
       btnBg: 'bg-white/5 hover:bg-white/10 text-white border border-white/10',
    },
    blue: {
       borderHov: 'hover:border-secondary-light/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]',
       bgGlow: 'bg-secondary/10',
       iconText: 'text-secondary-light',
       btnBg: 'bg-gradient-to-r from-secondary-light to-primary-light text-white hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-secondary/20',
    }
  };

  const currentTheme = themeColors[colorTheme] || themeColors.slate;

  return (
    <motion.div
      variants={variants}
      className={`group relative p-8 md:p-12 rounded-[2rem] border flex flex-col transition-all duration-500 w-full ${
        highlight 
          ? 'bg-[#0f111a] shadow-[0_30px_60px_rgba(0,0,0,0.4),_0_0_40px_rgba(59,130,246,0.15)] border-secondary-light/40 z-10 lg:scale-[1.03] lg:-translate-y-2' 
          : `glass-card border-white/5 hover:-translate-y-2 ${currentTheme.borderHov}`
      }`}
    >
      {/* Background Soft Glows */}
      {!highlight && (
        <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-30 pointer-events-none transition-opacity duration-500 group-hover:opacity-60 ${currentTheme.bgGlow}`} />
      )}
      {highlight && (
        <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none`} />
      )}
      {highlight && (
        <div className={`absolute -top-10 -right-10 w-64 h-64 rounded-full blur-[100px] opacity-30 pointer-events-none ${currentTheme.bgGlow}`} />
      )}

      {badge && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-[11px] font-black tracking-widest whitespace-nowrap shadow-lg flex items-center justify-center gap-2 ${
          highlight ? 'bg-gradient-to-r from-secondary-light to-primary-light text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'bg-[#12141a] border border-white/10 text-gray-300'
        }`}>
          <Sparkles className="w-3.5 h-3.5" />
          {badge}
        </div>
      )}

      <div className={`mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 relative z-10 ${highlight ? 'shadow-[0_0_20px_rgba(255,255,255,0.05)] bg-gradient-to-br from-secondary-light/20 to-transparent' : ''}`}>
        {icon}
      </div>

      <div className="relative z-10 border-b border-white/10 pb-8 mb-8 flex-1">
        <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-white mb-6">
          {title}
        </h3>
        
        <p className={`text-base leading-relaxed ${highlight ? 'text-gray-200' : 'text-gray-400'}`}>
          {description}
        </p>
      </div>

      <div className="relative z-10 mb-8 min-h-[100px]">
        <div className="text-5xl lg:text-6xl font-black tracking-tighter text-white">
          {price}
        </div>
        <div className="text-lg font-bold mt-3 text-gray-300">
          {subprice}
        </div>
      </div>
      
      <div className="mt-auto relative z-10">
        <ul className="space-y-4 mb-10">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-gray-200 font-medium tracking-wide">
              <div className={`mt-1 shrink-0 rounded-full w-5 h-5 flex items-center justify-center bg-white/5 border border-white/10`}>
                <Check className={`w-3.5 h-3.5 ${highlight ? 'text-white' : currentTheme.iconText}`} strokeWidth={3} />
              </div>
              <span className="leading-snug text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`w-full py-5 px-6 rounded-xl text-lg font-bold tracking-wide transition-all duration-300 flex items-center justify-center ${currentTheme.btnBg}`}>
          {ctaText} <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
