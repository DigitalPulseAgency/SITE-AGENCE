import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Zap } from 'lucide-react';

export function ComparisonSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface" id="comparaison">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative items-stretch">
            
            {/* VS Badge */}
            <div className="absolute top-[15%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center font-bold text-gray-400 z-10 hidden md:flex">
              VS
            </div>

            {/* Salarié */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-card border-red-500/20 opacity-80 h-fit"
            >
              <h3 className="text-xl font-bold text-gray-400 mb-6">Un salarié</h3>
              <ul className="space-y-4 text-gray-500 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-red-500 shrink-0">✗</span> ~4000€/mois (avec charges)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 shrink-0">✗</span> Horaires limités (35h)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 shrink-0">✗</span> Fatigue & Erreurs possibles
                </li>
              </ul>
            </motion.div>

            {/* Système (Version Enrichie) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-primary bg-primary/5 shadow-[0_0_30px_rgba(107,50,236,0.15)] relative flex flex-col"
            >
              <div className="absolute top-0 right-0 -mr-2 -mt-2 w-4 h-4 rounded-full bg-accent animate-pulse" />
              
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light mb-6">Votre Système</h3>
              
              {/* Le Prix / Setup */}
              <div className="mb-6">
                <span className="block text-[28px] font-black text-white drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] mb-1 leading-tight">
                  De 1199€ à 5999€
                </span>
                <span className="text-sm font-bold text-accent uppercase tracking-widest block mb-2">pour la mise en place complète du système</span>
                <span className="text-[11px] text-gray-300 font-medium">Développement sur mesure • Implémentation complète • Livraison clé en main</span>
              </div>

              {/* Explication Setup & Acompte */}
              <div className="bg-black/30 p-4 rounded-xl border border-white/5 mb-6 text-[13px] text-gray-300 leading-relaxed">
                <p className="mb-2">
                  <strong className="text-white">Chaque système est développé sur mesure</strong> selon votre entreprise. Ce travail nécessite en moyenne 2 à 3 semaines pour concevoir, centraliser et automatiser vos processus.
                </p>
                <p className="text-accent-light italic">
                  Un acompte est demandé pour lancer le projet, une fois que la collaboration est validée des deux côtés.
                </p>
              </div>

              {/* Les avantages */}
              <ul className="space-y-3 text-white font-medium mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent shrink-0 mt-0.5">✓</span> Réception des demandes 24h/24
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent shrink-0 mt-0.5">✓</span> Prospection ciblée automatisée
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent shrink-0 mt-0.5">✓</span> Gestion intelligente des demandes et devis
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent shrink-0 mt-0.5">✓</span> Relances automatiques (clients, devis)
                </li>
              </ul>

              {/* BLOC MENSUALITÉ */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-900/10 border border-primary/30 mt-2 mb-6">
                 <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-5 h-5 text-primary-light animate-[spin_4s_linear_infinite]" />
                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Suivi & Optimisation mensuelle</h4>
                 </div>
                 <div className="text-xl font-black text-primary-light mb-4">
                    À partir de 130€/mois <span className="text-[11px] font-medium text-gray-400 align-middle">jusqu'à 999€/mois</span>
                 </div>
                 
                 <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-[13px] text-gray-200">
                      <ShieldCheck className="w-4 h-4 text-primary-light shrink-0" />
                      <span>Optimisation continue de votre système</span>
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-gray-200">
                      <ShieldCheck className="w-4 h-4 text-primary-light shrink-0" />
                      <span>Surveillance quotidienne et intervention</span>
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-gray-200">
                      <Zap className="w-4 h-4 text-primary-light shrink-0" />
                      <span>Amélioration des performances chaque mois</span>
                    </li>
                 </ul>

                 <div className="text-[12px] text-gray-400 border-t border-white/10 pt-3 space-y-2">
                   <p><strong className="text-gray-300">Votre système n'est pas simplement installé.</strong> Il est suivi et amélioré en continu. Chaque mois, un bilan est réalisé pour adapter votre outil à l'évolution de votre activité.</p>
                   <p className="italic text-[11px] text-gray-500">L'ajout de nouvelles automatisations majeures fait l'objet d'une facturation supplémentaire.</p>
                 </div>
              </div>

              {/* Original Quote */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 leading-relaxed italic border-l-4 border-l-primary-light mt-auto">
                "Adapté pour gérer vos réservations, disponibilités et demandes clients sans perte de temps."
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 max-w-2xl mx-auto"
          >
            <p className="text-2xl font-bold mb-10">
              Vous choisissez comment vous voulez travailler.
            </p>

            {/* Nouveau CTA Ultra Conversion */}
            <div className="flex flex-col items-center justify-center">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden inline-flex items-center justify-center px-10 py-5 rounded-[40px] text-lg font-bold text-white shadow-[0_0_20px_rgba(34,197,94,0.4),0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6),0_0_30px_rgba(124,58,237,0.6)] animate-pulse-slow transition-all group"
                style={{ background: 'linear-gradient(135deg, #22c55e, #7c3aed)' }}
              >
                {/* Effet Shine ("Reflet") */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1s] pointer-events-none" />
                
                Voir comment ça peut s'appliquer à mon entreprise
              </motion.a>
              
              {/* Microcopy rassurante */}
              <p className="mt-4 text-xs font-medium text-gray-400">
                Réponse rapide • Sans engagement • 7 jours d'essai gratuit
              </p>
            </div>
            
          </motion.div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
      `}} />
    </section>
  );
}
