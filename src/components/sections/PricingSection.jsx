import { motion } from 'framer-motion';
import { Check, ArrowRight, Eye, Target, Calendar, Sparkles } from 'lucide-react';

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
    <section className="py-32 relative" id="offres">
      {/* Background glow for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 tracking-tight leading-tight"
          >
            Transformez vos réseaux en véritable levier d'acquisition
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium"
          >
            Déléguez votre présence en ligne pour bâtir une autorité solide et attirer activement les bons propriétaires immobiliers.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto items-center"
        >
          {/* Offre 1 */}
          <PricingCard
            variants={itemVariants}
            icon={<Calendar className="w-6 h-6 text-gray-300" />}
            title="Présence"
            description="L'offre essentielle pour établir une image professionnelle en ligne, maintenir votre crédibilité et rester visible."
            price={<>69<span className="text-xl text-gray-500 font-semibold ml-1">€/mois</span></>}
            colorTheme="slate"
            features={[
              "2 posts vidéo professionnels / semaine",
              "1 post photo qualitatif / semaine",
              "1 story engageante / semaine",
              "Bases d'une belle image de marque"
            ]}
            ctaText="Bâtir ma présence"
          />

          {/* Offre 2 - Le plus choisi */}
          <PricingCard
            variants={itemVariants}
            icon={<Eye className="w-7 h-7 text-white" />}
            title="Visibilité"
            description="Le juste équilibre pour développer votre audience. Nous ne faisons pas que publier du contenu exclusif, nous attirons activement vos futurs clients."
            price={<>197<span className="text-xl text-secondary-light/70 font-semibold ml-1">€/mois</span></>}
            colorTheme="blue"
            highlight={true}
            badge="LE PLUS CHOISI"
            features={[
              "5 posts vidéo & 3 photos / semaine",
              "3 stories stratégiques / semaine",
              "Optimisation de la bio pour convertir",
              "Interaction avec les bons prospects",
              "Prospection passive incitant à la curiosité",
              "Ciblage des abonnés de vos concurrents"
            ]}
            ctaText="Développer ma visibilité"
          />

          {/* Offre 3 */}
          <PricingCard
            variants={itemVariants}
            icon={<Target className="w-6 h-6 text-accent" />}
            title="Acquisition"
            description="Un système complet d'acquisition conçu pour dominer votre marché et générer des demandes de manière régulière."
            price={<>497<span className="text-xl text-accent/70 font-semibold ml-1">€/mois</span></>}
            colorTheme="green"
            premium={true}
            badge="SYSTÈME COMPLET"
            features={[
              "10 posts (dont 4 vidéos) / semaine",
              "6 stories interactives / semaine",
              "Stratégie d'approche continue",
              "Ciblage ultra-précis des propriétaires",
              "Scripts de réponse à forte conversion",
              "Analyse et d'ajustements constants",
              "Accompagnement exclusif sur la conversion"
            ]}
            ctaText="Déployer ce système"
          />
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ variants, icon, title, description, price, highlight, premium, badge, colorTheme, features, ctaText }) {
  
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
    },
    green: {
       borderHov: 'hover:border-accent/40 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)]',
       bgGlow: 'bg-accent/10',
       iconText: 'text-accent',
       btnBg: 'bg-white/5 border border-accent/20 hover:bg-accent/10 hover:border-accent/40 text-accent font-bold',
    }
  };

  const currentTheme = themeColors[colorTheme] || themeColors.blue;

  return (
    <motion.div
      variants={variants}
      className={`group relative p-8 md:p-10 rounded-[2rem] border flex flex-col transition-all duration-500 w-full ${
        highlight 
          ? 'bg-[#0f111a] shadow-[0_30px_60px_rgba(0,0,0,0.4),_0_0_40px_rgba(59,130,246,0.15)] border-secondary-light/30 z-10 lg:scale-[1.07] lg:-translate-y-4' 
          : premium 
            ? `glass-card border-accent/20 hover:-translate-y-2 ${currentTheme.borderHov}`
            : `glass-card border-white/5 hover:-translate-y-2 ${currentTheme.borderHov}`
      }`}
    >
      {/* Background soft glows */}
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
          highlight ? 'bg-gradient-to-r from-secondary-light to-primary-light text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'bg-[#12141a] border border-accent/30 text-accent/90'
        }`}>
          {premium && <Sparkles className="w-3.5 h-3.5" />}
          {badge}
        </div>
      )}
      
      <div className={`mb-8 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10 ${highlight ? 'shadow-[0_0_20px_rgba(255,255,255,0.05)] bg-gradient-to-br from-secondary-light/20 to-transparent' : ''}`}>
        {icon}
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-black tracking-tight text-white mb-4">
          {title}
        </h3>
        
        <p className={`text-sm leading-relaxed mb-8 md:min-h-[85px] ${highlight ? 'text-gray-300' : 'text-gray-400'}`}>
          {description}
        </p>
      </div>

      <div className="text-5xl font-black mb-8 tracking-tighter text-white relative z-10">
        {price}
      </div>
      
      <div className="mt-auto relative z-10">
        <ul className="space-y-4 mb-10">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-200 font-medium tracking-wide">
              <div className={`mt-1 shrink-0 rounded-full w-4 h-4 flex items-center justify-center bg-white/5 border border-white/10`}>
                <Check className={`w-3 h-3 ${highlight ? 'text-white' : currentTheme.iconText}`} strokeWidth={3} />
              </div>
              <span className="leading-snug text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`w-full py-4 px-6 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center ${currentTheme.btnBg}`}>
          {ctaText}
        </a>
      </div>
    </motion.div>
  );
}

