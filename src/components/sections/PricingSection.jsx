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
    <section className="py-32 relative bg-bg" id="offres">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 tracking-tight leading-tight text-ink"
          >
            Transformez vos réseaux en véritable levier d'acquisition
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-ink-secondary max-w-2xl mx-auto font-medium"
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
            icon={<Calendar className="w-6 h-6 text-ink-secondary" />}
            title="Présence"
            description="L'offre essentielle pour établir une image professionnelle en ligne, maintenir votre crédibilité et rester visible."
            price={<>59,99<span className="text-xl text-ink-tertiary font-semibold ml-1">€/mois</span></>}
            colorTheme="standard"
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
            price={<>197<span className="text-xl text-white/70 font-semibold ml-1">€/mois</span></>}
            colorTheme="highlight"
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
            icon={<Target className="w-6 h-6 text-green-cta" />}
            title="Acquisition"
            description="Un système complet d'acquisition conçu pour dominer votre marché et générer des demandes de manière régulière."
            price={<>497<span className="text-xl text-green-cta/70 font-semibold ml-1">€/mois</span></>}
            colorTheme="premium"
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

        {/* Global Call CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 max-w-3xl mx-auto relative z-20"
        >
          <p className="text-xl md:text-2xl font-bold mb-10 text-ink leading-relaxed">
            Un simple appel pour structurer l'acquisition de vos futurs clients.
          </p>
          <motion.a 
            href="tel:0615940884"
            className="relative inline-flex items-center justify-center px-10 py-[22px] font-bold rounded-full transition-all duration-300 text-lg md:text-xl group bg-gradient-to-r from-purple-deep to-purple-signa text-white shadow-[0_16px_40px_-12px_rgba(91,63,217,0.5)] hover:shadow-[0_16px_40px_-8px_rgba(91,63,217,0.6)] hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="text-2xl">📞</span> Je veux activer ce système
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ variants, icon, title, description, price, highlight, premium, badge, colorTheme, features, ctaText }) {
  
  const themeStyles = {
    standard: {
       cardClass: 'bg-bg-card border border-line shadow-[0_4px_16px_-4px_rgba(26,21,48,0.08)]',
       titleClass: 'text-ink',
       descClass: 'text-ink-secondary',
       priceClass: 'text-ink',
       featuresClass: 'text-ink-secondary',
       iconBg: 'bg-bg-alt border-line',
       checkColor: 'text-green-cta',
       btnBg: 'bg-bg-alt hover:bg-line text-ink border border-line',
       badgeClass: '',
    },
    highlight: {
       cardClass: 'bg-gradient-to-b from-purple-deep to-[#4A32B8] border-none shadow-[0_12px_32px_-8px_rgba(26,21,48,0.12)] z-10 lg:scale-[1.07] lg:-translate-y-4',
       titleClass: 'text-white',
       descClass: 'text-white/90',
       priceClass: 'text-white',
       featuresClass: 'text-white/90',
       iconBg: 'bg-white/10 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]',
       checkColor: 'text-white',
       btnBg: 'bg-white text-purple-deep hover:bg-bg-alt font-bold',
       badgeClass: 'bg-white text-purple-deep',
    },
    premium: {
       cardClass: 'bg-bg-card border border-green-cta/40 shadow-[0_4px_16px_-4px_rgba(26,21,48,0.08)]',
       titleClass: 'text-ink',
       descClass: 'text-ink-secondary',
       priceClass: 'text-ink',
       featuresClass: 'text-ink-secondary',
       iconBg: 'bg-green-cta/10 border-green-cta/30',
       checkColor: 'text-green-cta',
       btnBg: 'bg-green-cta/5 border border-green-cta/30 hover:bg-green-cta/10 text-green-cta font-bold',
       badgeClass: 'bg-green-cta/10 text-green-cta border border-green-cta/30',
    }
  };

  const currentTheme = themeStyles[colorTheme] || themeStyles.standard;

  return (
    <motion.div
      variants={variants}
      className={`group relative p-8 md:p-10 rounded-[2rem] flex flex-col transition-all duration-500 w-full hover:-translate-y-2 ${currentTheme.cardClass}`}
    >
      {badge && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-[11px] font-black tracking-widest whitespace-nowrap shadow-sm flex items-center justify-center gap-2 ${currentTheme.badgeClass}`}>
          {premium && <Sparkles className="w-3.5 h-3.5" />}
          {badge}
        </div>
      )}
      
      <div className={`mb-8 flex items-center justify-center w-14 h-14 rounded-2xl border transition-transform duration-300 relative z-10 ${currentTheme.iconBg}`}>
        {icon}
      </div>

      <div className="relative z-10">
        <h3 className={`text-3xl font-black tracking-tight mb-4 ${currentTheme.titleClass}`}>
          {title}
        </h3>
        
        <p className={`text-sm leading-relaxed mb-8 md:min-h-[85px] ${currentTheme.descClass}`}>
          {description}
        </p>
      </div>

      <div className={`text-5xl font-black mb-8 tracking-tighter relative z-10 ${currentTheme.priceClass}`}>
        {price}
      </div>
      
      <div className="mt-auto relative z-10">
        <ul className="space-y-4 mb-10">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm font-medium tracking-wide">
              <div className={`mt-1 shrink-0 flex items-center justify-center`}>
                <Check className={`w-4 h-4 ${currentTheme.checkColor}`} strokeWidth={3} />
              </div>
              <span className={`leading-snug ${currentTheme.featuresClass}`}>{feature}</span>
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
