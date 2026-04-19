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
    <section className="py-32 relative bg-bg-alt" id="tarifs-sites">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-black mb-8 tracking-tight leading-tight text-ink"
          >
            Deux stratégies pour générer des clients avec votre site
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-ink-secondary max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Faites le choix entre une <span className="text-ink font-semibold">présence vitrine statique</span> rapide à lancer, et un <span className="text-purple-deep font-bold">système d'acquisition intelligent</span> régulièrement optimisé pour attirer des opportunités commerciales.
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
            icon={<Layout className="w-8 h-8 text-ink-secondary group-hover:text-ink transition-colors" />}
            title="Landing Page"
            price={<>487<span className="text-2xl text-ink-tertiary font-semibold ml-1">€</span></>}
            subprice={<span className="text-ink-tertiary font-normal">Paiement unique</span>}
            description={
              <>
                <span className="block mb-4 text-ink-secondary">Une solution de façade pour établir votre présence professionnelle immédiate.</span>
                Rapide, propre et efficace, mais <strong className="text-ink font-semibold">totalement statique</strong> (ne bénéficie d'aucune évolution continue ni d'optimisation pour l'acquisition).
              </>
            }
            colorTheme="standard"
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
            price={<>987<span className="text-2xl text-white/70 font-semibold ml-1">€</span></>}
            subprice={<>+ 79€ <span className="text-sm font-normal text-white/80">/mois (évolution continue)</span></>}
            description={
              <>
                <strong className="text-white text-lg block mb-4">Conçu pour générer des contacts en continu.</strong>
                Votre site ne reste pas figé : <strong className="text-white/90 font-semibold">il s'adapte et évolue chaque mois</strong> grâce à une optimisation basée sur les recherches réelles de vos futurs clients.
              </>
            }
            colorTheme="highlight"
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
  const themeStyles = {
    standard: {
       cardClass: 'bg-bg-card border border-line shadow-[0_4px_16px_-4px_rgba(26,21,48,0.08)]',
       titleClass: 'text-ink',
       descClass: 'text-ink-secondary',
       priceClass: 'text-ink',
       subpriceClass: 'text-ink-secondary',
       featuresClass: 'text-ink-secondary',
       iconBg: 'bg-bg-alt border-line',
       checkColor: 'text-green-cta',
       btnBg: 'bg-bg-alt hover:bg-line text-ink border border-line shadow-sm',
       badgeClass: '',
    },
    highlight: {
       cardClass: 'bg-gradient-to-b from-purple-deep to-[#4A32B8] border-none shadow-[0_24px_64px_-16px_rgba(26,21,48,0.18)] z-10 lg:scale-[1.06] lg:-translate-y-4',
       titleClass: 'text-white',
       descClass: 'text-white/90',
       priceClass: 'text-white',
       subpriceClass: 'text-white',
       featuresClass: 'text-white/90',
       iconBg: 'bg-white/10 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]',
       checkColor: 'text-white',
       btnBg: 'bg-white text-purple-deep hover:bg-bg-alt font-bold shadow-md',
       badgeClass: 'bg-white text-purple-deep',
    }
  };

  const currentTheme = themeStyles[colorTheme] || themeStyles.standard;

  return (
    <motion.div
      variants={variants}
      className={`group relative p-8 md:p-12 rounded-[2.5rem] flex flex-col transition-all duration-500 w-full hover:-translate-y-2 ${currentTheme.cardClass}`}
    >
      {badge && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full text-xs font-black tracking-widest whitespace-nowrap shadow-sm flex items-center justify-center gap-2 ${currentTheme.badgeClass}`}>
          <Sparkles className="w-4 h-4" />
          {badge}
        </div>
      )}

      <div className={`mb-8 flex items-center justify-center w-16 h-16 rounded-2xl border group-hover:scale-110 transition-transform duration-500 relative z-10 ${currentTheme.iconBg}`}>
        {icon}
      </div>

      <div className={`relative z-10 border-b border-line pb-8 mb-8 flex-1 ${highlight ? 'border-white/20' : ''}`}>
        <h3 className={`text-3xl lg:text-4xl font-black tracking-tight mb-6 ${currentTheme.titleClass}`}>
          {title}
        </h3>
        
        <p className={`text-base leading-relaxed ${currentTheme.descClass}`}>
          {description}
        </p>
      </div>

      <div className={`relative z-10 border-b border-line pb-8 mb-6 flex-1 ${highlight ? 'border-white/20' : ''}`}>
        <div className={`text-5xl lg:text-6xl font-black tracking-tighter ${currentTheme.priceClass}`}>
          {price}
        </div>
        <div className={`text-lg font-bold mt-3 ${currentTheme.subpriceClass}`}>
          {subprice}
        </div>
      </div>
      
      <div className="mt-auto relative z-10">
        <ul className="space-y-4 mb-10">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-4 text-sm lg:text-base font-medium tracking-wide">
              <div className={`mt-1 shrink-0 flex items-center justify-center`}>
                <Check className={`w-5 h-5 ${currentTheme.checkColor}`} strokeWidth={3} />
              </div>
              <span className={`leading-snug ${currentTheme.featuresClass}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`w-full py-5 px-6 rounded-xl text-lg tracking-wide transition-all duration-300 flex items-center justify-center ${currentTheme.btnBg}`}>
          {ctaText} <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
