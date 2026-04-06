import { motion } from 'framer-motion';
import { Zap, Globe, Share2, Check, ArrowRight } from 'lucide-react';

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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Investissez dans votre croissance</h2>
          <p className="text-gray-400">Des offres transparentes, orientées résultat.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
        >
          {/* Sites Internet (Gauché / Dominante Bleue) */}
          <PricingCard
            variants={itemVariants}
            icon={<Globe className="w-8 h-8 text-secondary-light" />}
            title="SITES INTERNET"
            valueText="Idéal pour générer plus de clients"
            price="À partir de 350€"
            colorTheme="blue"
            features={["Rapide", "Moderne", "Orienté conversion"]}
            ctaText="Voir des exemples"
            ctaHref="#sites-internet"
          />

          {/* Automatisation Centralisée (Centre / Dominante Vert-Violet / Recommandé) */}
          <PricingCard
            variants={itemVariants}
            icon={<Zap className="w-8 h-8 text-accent" />}
            title="AUTOMATISATION CENTRALISÉE"
            subtitle="Application développée sur mesure"
            valueText="Idéal pour scaler et gagner du temps"
            price="À partir de 1199€"
            colorTheme="green"
            highlight={true}
            features={[
              "Application sur mesure adaptée à votre activité",
              "Centralisation complète de vos tâches et outils",
              "Automatisation des actions répétitives",
              "Gain de temps et meilleure organisation"
            ]}
          >
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-t-accent/20 border-b-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500"></div>
              
              <p className="text-accent font-bold text-xl mb-4 relative z-10">7 jours d'essai gratuit</p>
              
              <ul className="text-sm text-gray-300 space-y-3 font-medium relative z-10 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  Aucun engagement
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  Vous testez concrètement le système
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  Vous payez uniquement si vous voyez une différence
                </li>
              </ul>
              
              <p className="text-white text-[13px] italic font-medium pt-4 border-t border-white/5 relative z-10 text-center">
                "Vous testez. Vous voyez les résultats. Vous décidez."
              </p>
            </div>
            {/* CTA Bouton de la carte centrale alignable avec les autres s'il le faut, mais le design focus l'essai gratuit. Ajout d'un bouton action optionnel */}
            <a href="#contact" className="mt-6 flex items-center justify-center w-full px-6 py-4 bg-accent/90 hover:bg-accent text-surface text-sm font-bold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105">
              Demander un essai
            </a>
          </PricingCard>

          {/* Visibilité (Droite / Dominante Violette) */}
          <PricingCard
            variants={itemVariants}
            icon={<Share2 className="w-8 h-8 text-primary-light" />}
            title="VISIBILITÉ"
            valueText="Idéal pour être visible et crédible"
            price="Sur devis"
            colorTheme="purple"
            features={[
              "Réseaux sociaux (179€/mois)",
              "SEO",
              "Avis Google (99€/mois)"
            ]}
            ctaText="Découvrir"
          />
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ variants, icon, title, subtitle, valueText, price, highlight, colorTheme, features, ctaText, ctaHref = "#contact", children }) {
  
  // Mapping thématiques de couleurs pour les effets
  const themeColors = {
    blue: {
       borderHov: 'hover:border-secondary-light/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
       bgGlow: 'bg-secondary/5',
       iconText: 'text-secondary-light',
       btn: 'bg-secondary-light/10 text-secondary-light hover:bg-secondary-light/20 border border-secondary-light/20',
       valText: 'text-secondary/70'
    },
    purple: {
       borderHov: 'hover:border-primary-light/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
       bgGlow: 'bg-primary/5',
       iconText: 'text-primary-light',
       btn: 'bg-primary-light/10 text-primary-light hover:bg-primary-light/20 border border-primary-light/20',
       valText: 'text-primary/70'
    },
    green: {
       borderHov: '',
       bgGlow: '',
       iconText: 'text-accent',
       btn: '',
       valText: 'text-accent/80'
    }
  };

  const currentTheme = themeColors[colorTheme] || themeColors.blue;

  return (
    <motion.div
      variants={variants}
      className={`group relative p-8 rounded-3xl border flex flex-col transition-all duration-300 ${
        highlight 
          ? 'bg-surface shadow-[0_0_40px_rgba(16,185,129,0.1),_0_0_40px_rgba(107,50,236,0.1)] border-accent/40 scale-105 z-10' 
          : `glass-card border-white/5 hover:scale-[1.03] ${currentTheme.borderHov} hover:bg-white/[0.03]`
      }`}
    >
      {/* Background stastique discret pour éviter la carte 100% plate ("Living card effect") */}
      {!highlight && (
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-80 ${currentTheme.bgGlow}`} />
      )}

      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-primary px-6 py-1.5 rounded-full text-surface text-xs font-black tracking-widest shadow-lg">
          RECOMMANDÉ
        </div>
      )}
      
      <div className="mb-5">{icon}</div>

      <div>
        <h3 className={`font-black tracking-wide ${highlight ? 'text-2xl text-white mb-1' : 'text-xl text-white mb-2'}`}>
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-primary-light text-sm font-bold uppercase tracking-wider mb-2">
            {subtitle}
          </p>
        )}

        {/* Ligne indicateur de valeur demandée */}
        {valueText && (
          <p className={`text-xs font-bold uppercase tracking-widest mb-6 ${currentTheme.valText}`}>
             👉 {valueText}
          </p>
        )}
      </div>

      <div className={`text-4xl font-extrabold mb-8 ${highlight ? 'text-white' : 'text-white drop-shadow-md'}`}>
        {price}
      </div>
      
      <ul className="space-y-4 mb-8 flex-1 relative z-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-300 font-medium">
            <Check className={`w-5 h-5 shrink-0 ${highlight ? 'text-accent' : currentTheme.iconText}`} />
            <span className="pt-0.5">{feature}</span>
          </li>
        ))}
      </ul>
      
      {children}

      {/* Mini Call To Action pour les cartes gauches / droites */}
      {!highlight && ctaText && (
         <a href={ctaHref} className={`mt-auto flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${currentTheme.btn} group-hover:scale-105`}>
            {ctaText} <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
         </a>
      )}
    </motion.div>
  );
}
