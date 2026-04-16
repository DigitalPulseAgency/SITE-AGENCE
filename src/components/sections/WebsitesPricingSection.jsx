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
    <section className="py-32 relative" id="tarifs-sites">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-secondary-light/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-black mb-8 tracking-tight leading-tight"
          >
            Deux stratégies pour générer des clients avec votre site
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Faites le choix entre une <span className="text-gray-300">présence vitrine statique</span> rapide à lancer, et un <span className="text-white font-bold">système d'acquisition intelligent</span> régulièrement optimisé pour attirer des opportunités commerciales.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 max-w-6xl mx-auto items-stretch"
        >
          {/* Offer 1 */}
          <WebPricingCard
            variants={itemVariants}
            icon={<Layout className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors" />}
            title="Landing Page"
            price={<>487<span className="text-2xl text-gray-500 font-semibold ml-1">€</span></>}
            subprice={<span className="text-gray-500 font-normal">Paiement unique</span>}
            description={
              <>
                <span className="block mb-4 text-gray-400">Une solution de façade pour établir votre présence professionnelle immédiate.</span>
                Rapide, propre et efficace, mais <strong className="text-gray-300 font-semibold">totalement statique</strong> (ne bénéficie d'aucune évolution continue ni d'optimisation pour l'acquisition).
              </>
            }
            colorTheme="slate"
            features={[
              "Page unique professionnelle",
              "Présentation claire de votre activité",
              "Mise en ligne extrêmement rapide",
              "Idéal pour être présent en ligne rapidement"
            ]}
            ctaText="Créer ma landing page"
          />

          {/* Offer 2 */}
          <WebPricingCard
            variants={itemVariants}
            icon={<Activity className="w-8 h-8 text-white" />}
            title="Site optimisé pour la conversion"
            price={<>987<span className="text-2xl text-secondary-light/70 font-semibold ml-1">€</span></>}
            subprice={<>+ 79€ <span className="text-sm font-normal text-gray-400">/mois (évolution continue)</span></>}
            description={
              <>
                <strong className="text-white text-lg block mb-4">Conçu pour générer des contacts en continu.</strong>
                Votre site ne reste pas figé : <strong className="text-secondary-light font-semibold">il s'adapte et évolue chaque mois</strong> grâce à une optimisation basée sur les recherches réelles de vos futurs clients.
              </>
            }
            colorTheme="blue"
            highlight={true}
            badge="RECOMMANDÉ"
            features={[
              "Système intelligent qui attire de nouveaux clients",
              "S'adapte chaque mois aux recherches cibles",
              "Architecture optimisée pour la conversion pure",
              "Mise à jour stratégique de vos mots-clés",
              "Évolution dynamique de votre visibilité"
            ]}
            ctaText="Déployer ce système d'acquisition"
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
       btnBg: 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10',
    },
    blue: {
       borderHov: 'hover:border-secondary-light/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]',
       bgGlow: 'bg-secondary/15',
       iconText: 'text-secondary-light',
       btnBg: 'bg-gradient-to-r from-secondary-light to-primary-light text-white hover:opacity-90 hover:scale-[1.02] shadow-[0_0_30px_rgba(59,130,246,0.25)]',
    }
  };

  const currentTheme = themeColors[colorTheme] || themeColors.slate;

  return (
    <motion.div
      variants={variants}
      className={`group relative p-8 md:p-12 rounded-[2.5rem] border flex flex-col transition-all duration-500 w-full ${
        highlight 
          ? 'bg-[#0b0c10] shadow-[0_40px_80px_rgba(0,0,0,0.5),_0_0_50px_rgba(59,130,246,0.15)] border-secondary-light/40 z-10 lg:scale-[1.06] lg:-translate-y-4' 
          : `glass-card border-white/5 hover:-translate-y-2 ${currentTheme.borderHov} bg-white/[0.01]`
      }`}
    >
      {/* Background Soft Glows */}
      {!highlight && (
        <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 ${currentTheme.bgGlow}`} />
      )}
      {highlight && (
        <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-secondary/10 to-transparent pointer-events-none`} />
      )}
      {highlight && (
        <div className={`absolute -top-10 -right-10 w-72 h-72 rounded-full blur-[100px] opacity-40 pointer-events-none ${currentTheme.bgGlow}`} />
      )}

      {badge && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full text-xs font-black tracking-widest whitespace-nowrap shadow-xl flex items-center justify-center gap-2 ${
          highlight ? 'bg-gradient-to-r from-secondary-light to-primary-light text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] border border-white/20' : 'bg-[#12141a] border border-white/10 text-gray-300'
        }`}>
          <Sparkles className="w-4 h-4" />
          {badge}
        </div>
      )}

      <div className={`mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 relative z-10 ${highlight ? 'shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-gradient-to-br from-secondary-light/20 to-transparent' : ''}`}>
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

      <div className="relative z-10 border-b border-white/10 pb-8 mb-6 flex-1">
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
            <li key={idx} className="flex items-start gap-4 text-sm lg:text-base text-gray-200 font-medium tracking-wide">
              <div className={`mt-0.5 shrink-0 rounded-full w-5 h-5 flex items-center justify-center bg-white/5 border border-white/10`}>
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
