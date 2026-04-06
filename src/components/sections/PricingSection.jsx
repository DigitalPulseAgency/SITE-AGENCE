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
            icon={<Globe className="w-6 h-6 text-secondary-light" />}
            title="SITES INTERNET"
            valueText="Générer plus de clients"
            price="À partir de 350€"
            colorTheme="blue"
            features={["Rapide", "Moderne", "Orienté conversion"]}
            ctaText="Voir des exemples"
            ctaHref="#sites-internet"
          />

          {/* Automatisation Centralisée (Centre / Dominante Vert-Violet / Recommandé) */}
          <PricingCard
            variants={itemVariants}
            icon={<Zap className="w-6 h-6 text-accent" />}
            title="AUTOMATISATION"
            subtitle="Application sur mesure"
            valueText="Scaler et gagner du temps"
            price="À partir de 1199€"
            colorTheme="green"
            highlight={true}
            features={[
              "Centralisation de vos tâches",
              "Automatisation des actions",
              "Meilleure organisation"
            ]}
          >
            <a href="#contact" className="mt-auto flex items-center justify-center w-full px-5 py-3 bg-accent/90 hover:bg-accent text-surface text-sm font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105">
              Demander un essai
            </a>
          </PricingCard>

          {/* Visibilité (Droite / Dominante Violette) */}
          <PricingCard
            variants={itemVariants}
            icon={<Share2 className="w-6 h-6 text-primary-light" />}
            title="VISIBILITÉ"
            valueText="Être visible et crédible"
            price="Sur devis"
            colorTheme="purple"
            features={[
              "Réseaux sociaux (179€/m)",
              "SEO",
              "Avis Google (99€/m)"
            ]}
            ctaText="Découvrir"
          />
        </motion.div>

        {/* 7 Jours d'Essai Gratuit Block (Moved outside and styled as premium floating banner) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-12 max-w-4xl mx-auto p-6 md:p-8 rounded-2xl glass-card bg-gradient-to-br from-accent/5 to-primary/5 border border-white/10 relative overflow-hidden group flex flex-col md:flex-row items-center gap-8 justify-between shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[60px] pointer-events-none transition-colors duration-500 group-hover:bg-primary/10"></div>
           
           <div className="flex-1 relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-bold text-accent mb-2">7 jours d'essai gratuit</h3>
              <p className="text-gray-300 font-medium text-sm">Vous testez le système. Vous voyez les résultats. Vous décidez.</p>
           </div>

           <ul className="text-sm text-gray-300 space-y-3 font-medium relative z-10 flex-1">
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                 Aucun engagement
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                 Test complet en conditions réelles
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                 Facturation uniquement aux résultats
              </li>
           </ul>
        </motion.div>

      </div>
    </section>
  );
}

function PricingCard({ variants, icon, title, subtitle, valueText, price, highlight, colorTheme, features, ctaText, ctaHref = "#contact", children }) {
  
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
      className={`group relative p-6 md:p-8 rounded-3xl border flex flex-col transition-all duration-300 ${
        highlight 
          ? 'bg-surface shadow-[0_0_40px_rgba(16,185,129,0.1),_0_0_40px_rgba(107,50,236,0.1)] border-accent/40 z-10 md:-translate-y-4 md:hover:-translate-y-6' 
          : `glass-card border-white/5 hover:-translate-y-2 ${currentTheme.borderHov} hover:bg-white/[0.03]`
      }`}
    >
      {!highlight && (
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-80 ${currentTheme.bgGlow}`} />
      )}

      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-primary px-4 py-1 rounded-full text-surface text-[10px] font-black tracking-widest shadow-lg">
          RECOMMANDÉ
        </div>
      )}
      
      <div className="mb-4">{icon}</div>

      <div>
        <h3 className={`font-black tracking-wide leading-tight ${highlight ? 'text-xl text-white mb-1' : 'text-lg text-white mb-1'}`}>
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-primary-light text-xs font-bold uppercase tracking-wider mb-1">
            {subtitle}
          </p>
        )}

        {valueText && (
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${currentTheme.valText}`}>
             👉 {valueText}
          </p>
        )}
      </div>

      <div className={`text-3xl font-extrabold mb-6 ${highlight ? 'text-white' : 'text-white drop-shadow-md'}`}>
        {price}
      </div>
      
      <ul className="space-y-3 mb-8 flex-1 relative z-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300 font-medium">
            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${highlight ? 'text-accent' : currentTheme.iconText}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {children}

      {!highlight && ctaText && (
         <a href={ctaHref} className={`mt-auto flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${currentTheme.btn} group-hover:scale-105`}>
            {ctaText} <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
         </a>
      )}
    </motion.div>
  );
}
