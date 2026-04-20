import { motion } from 'framer-motion';
import { Check, Eye, Target, Calendar, Sparkles } from 'lucide-react';

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
    <section className="py-32 relative bg-background overflow-hidden" id="offres">
      {/* Background Dark Gradient/Halos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-deep/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 tracking-tight leading-tight text-white"
          >
            Choisissez le rythme de votre croissance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium"
          >
            Trois formules pensées pour chaque étape de votre développement digital.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto items-center"
        >
          {/* Offre 1 - Présence */}
          <PricingCard
            variants={itemVariants}
            className="order-2 lg:order-1"
            icon={<Calendar className="w-6 h-6 text-gray-400" />}
            title="Présence"
            tagline="Existez en ligne, sans y penser."
            description="L'essentiel pour maintenir une image professionnelle crédible et rester visible auprès de vos clients actuels."
            price={<>59,99<span className="text-xl text-gray-400 font-semibold ml-1">€<span className="text-sm">/mois</span></span></>}
            colorTheme="standard"
            features={[
              "2 posts vidéo professionnels / semaine",
              "1 post photo qualitatif / semaine",
              "1 story engageante / semaine",
              "Bases d'une belle image de marque"
            ]}
            ctaText="Bâtir ma présence"
          />

          {/* Offre 2 - Visibilité (Dominant & First on mobile) */}
          <PricingCard
            variants={itemVariants}
            className="order-1 lg:order-2"
            icon={<Eye className="w-8 h-8 text-white" />}
            title="Visibilité"
            tagline="Attirez les bons clients, chaque semaine."
            description="Le juste équilibre entre contenu stratégique et prospection active. On ne publie pas pour publier — on attire vos futurs clients."
            price={<>197<span className="text-xl text-white/80 font-semibold ml-1">€<span className="text-sm">/mois</span></span></>}
            colorTheme="highlight"
            highlight={true}
            badge="LE PLUS CHOISI"
            secondaryBadge="MEILLEUR RAPPORT VALEUR"
            features={[
              "4 posts / semaine (3 vidéos + 1 photo/carrousel)",
              "3 stories stratégiques / semaine",
              "Optimisation de la bio pour convertir",
              "Interaction avec les bons prospects",
              "Prospection passive incitant à la curiosité",
              "Ciblage des abonnés de vos concurrents"
            ]}
            ctaText="Développer ma visibilité"
          />

          {/* Offre 3 - Acquisition */}
          <PricingCard
            variants={itemVariants}
            className="order-3 lg:order-3"
            icon={<Target className="w-6 h-6 text-green-cta" />}
            title="Acquisition"
            tagline="Un flux constant de demandes entrantes."
            description="Le système d'acquisition complet pour dominer votre marché local et générer des demandes de manière régulière et prévisible."
            price={<>497<span className="text-xl text-green-cta/80 font-semibold ml-1">€<span className="text-sm">/mois</span></span></>}
            colorTheme="premium"
            premium={true}
            badge="SYSTÈME COMPLET"
            features={[
              "5 vidéos / semaine (une par jour ouvré)",
              "5 stories / semaine (une par jour, à l'heure choisie)",
              "Stratégie d'approche continue",
              "Ciblage ultra-précis des propriétaires",
              "Scripts de réponse à forte conversion",
              "Analyse et ajustements constants",
              "Accompagnement exclusif sur la conversion"
            ]}
            ctaText="Déployer ce système"
          />
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ variants, className, icon, title, tagline, description, price, highlight, premium, badge, secondaryBadge, colorTheme, features, ctaText }) {
  
  const themeStyles = {
    standard: {
       cardClass: 'bg-[#0f0f11] border border-white/5 shadow-lg scale-[0.98]',
       titleClass: 'text-gray-200',
       taglineClass: 'text-gray-300',
       descClass: 'text-gray-500',
       priceClass: 'text-gray-200',
       featuresClass: 'text-gray-400',
       iconBg: 'bg-white/5 border-white/10',
       checkColor: 'text-gray-400',
       btnBg: 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10',
       badgeClass: '',
    },
    highlight: {
       cardClass: 'bg-gradient-to-b from-[#251571] via-[#5B3FD9] to-[#4A32B8] border border-[#8E62FF]/50 shadow-[0_0_60px_rgba(91,63,217,0.3)] z-10 lg:scale-[1.08] relative overflow-hidden',
       titleClass: 'text-white drop-shadow-md',
       taglineClass: 'text-white font-bold',
       descClass: 'text-white/90',
       priceClass: 'text-white drop-shadow-lg',
       featuresClass: 'text-white font-medium',
       iconBg: 'bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)]',
       checkColor: 'text-white',
       btnBg: 'bg-white text-purple-deep hover:scale-105 font-black shadow-[0_0_30px_rgba(255,255,255,0.4)] text-lg',
       badgeClass: 'bg-white text-purple-deep',
    },
    premium: {
       cardClass: 'bg-[#0d1210] border border-green-cta/20 shadow-lg scale-[0.98]',
       titleClass: 'text-gray-200',
       taglineClass: 'text-green-cta/90',
       descClass: 'text-gray-400',
       priceClass: 'text-gray-100',
       featuresClass: 'text-gray-300',
       iconBg: 'bg-green-cta/5 border-green-cta/20',
       checkColor: 'text-green-cta',
       btnBg: 'bg-transparent border border-green-cta/50 hover:bg-green-cta/10 text-green-cta font-bold',
       badgeClass: 'bg-green-cta/10 text-green-cta border border-green-cta/30',
    }
  };

  // Set breathing animation properties dynamically
  const cardAnimation = highlight ? {
    animate: { scale: [1, 1.02, 1] },
    transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
  } : {};

  return (
    <motion.div
      variants={variants}
      className={`relative w-full flex flex-col ${className}`}
    >
      <motion.div 
        {...cardAnimation}
        className={`group relative p-8 md:p-10 rounded-[2rem] flex flex-col transition-all duration-500 w-full hover:-translate-y-2 h-full ${currentTheme.cardClass}`}
      >
        {highlight && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-[2rem]" />
        )}
        
        {/* Badges Container */}
        {(badge || secondaryBadge) && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 w-full">
            {badge && (
              <div className={`px-5 py-2 rounded-full text-[11px] font-black tracking-widest whitespace-nowrap shadow-xl flex items-center justify-center gap-2 ${currentTheme.badgeClass} ${highlight ? 'text-sm animate-pulse-slow shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/20' : ''}`}>
                {premium && <Sparkles className="w-3.5 h-3.5" />}
                {!premium && highlight && <Sparkles className="w-4 h-4" />}
                {badge}
              </div>
            )}
            {secondaryBadge && (
              <div className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/90 text-[9px] font-bold tracking-wider uppercase">
                {secondaryBadge}
              </div>
            )}
          </div>
        )}
        
        <div className={`mb-6 flex items-center justify-center ${highlight ? 'w-16 h-16 mt-2' : 'w-14 h-14 mt-1'} rounded-2xl border transition-transform duration-300 relative z-10 ${currentTheme.iconBg}`}>
          {icon}
        </div>

        <div className="relative z-10 flex-1">
          <h3 className={`text-2xl md:text-3xl font-black tracking-tight mb-2 ${currentTheme.titleClass}`}>
            {title}
          </h3>
          <p className={`text-[15px] leading-snug mb-4 ${currentTheme.taglineClass}`}>
            {tagline}
          </p>
          <p className={`text-[13px] leading-relaxed mb-6 md:min-h-[50px] ${currentTheme.descClass}`}>
            {description}
          </p>
        </div>

        <div className={`text-5xl md:text-6xl font-black mb-8 tracking-tighter relative z-10 ${currentTheme.priceClass}`}>
          {price}
        </div>
        
        <div className="mt-auto relative z-10 mb-8 border-t border-white/10 pt-8">
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm font-medium tracking-wide">
                <div className={`mt-0.5 shrink-0 flex items-center justify-center`}>
                  <Check className={`w-4 h-4 ${currentTheme.checkColor}`} strokeWidth={3} />
                </div>
                <span className={`leading-snug ${currentTheme.featuresClass}`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 mt-auto">
          <a href="#contact" className={`w-full py-4 px-6 rounded-xl tracking-wide transition-all duration-300 flex items-center justify-center ${currentTheme.btnBg}`}>
            {ctaText}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
