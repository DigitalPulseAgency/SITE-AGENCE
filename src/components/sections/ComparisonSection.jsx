import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Zap } from 'lucide-react';

export function ComparisonSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-alt" id="comparaison">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative items-stretch">
            
            {/* VS Badge */}
            <div className="absolute top-[15%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-bg-alt border border-line flex items-center justify-center font-bold text-ink-secondary z-30 hidden md:flex shadow-sm">
              VS
            </div>

            {/* COLONNE GAUCHE (Salarié + Espace Vide Rempli) */}
            <div className="flex flex-col gap-6 md:gap-8">
              
              {/* Salarié */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-bg-card border border-line shadow-[0_4px_16px_-4px_rgba(26,21,48,0.08)] h-fit relative z-20"
              >
                <h3 className="text-xl font-bold text-ink mb-6">Un salarié</h3>
                <ul className="space-y-4 text-ink-secondary mb-8 font-medium">
                  <li className="flex items-center gap-3">
                    <span className="text-error shrink-0 font-bold">✗</span> ~4000€/mois (avec charges)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-error shrink-0 font-bold">✗</span> Horaires limités (35h)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-error shrink-0 font-bold">✗</span> Fatigue & Erreurs possibles
                  </li>
                </ul>
              </motion.div>

              {/* Animation Abstraite IA */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="hidden md:flex flex-1 rounded-3xl border border-line bg-bg-card relative overflow-hidden min-h-[350px] shadow-sm items-center justify-center"
              >
                 <AiNetworkAnimation />
              </motion.div>

            </div>

            {/* COLONNE DROITE (Système) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-purple-deep to-purple-signa text-white shadow-[0_12px_32px_-8px_rgba(26,21,48,0.12)] relative flex flex-col z-20"
            >
              <div className="absolute top-0 right-0 -mr-2 -mt-2 w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
              
              <h3 className="text-2xl font-bold text-white mb-6">Votre Système</h3>
              
              {/* Le Prix / Setup */}
              <div className="mb-6">
                <span className="block text-[28px] font-black text-white drop-shadow-sm mb-1 leading-tight">
                  De 1199€ à 5999€
                </span>
                <span className="text-sm font-bold text-white/90 uppercase tracking-widest block mb-2">pour la mise en place complète du système</span>
                <span className="text-[11px] text-white/70 font-medium">Développement sur mesure • Implémentation complète • Livraison clé en main</span>
              </div>

              {/* Explication Setup & Acompte */}
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 mb-6 text-[13px] text-white/90 leading-relaxed shadow-inner">
                <p className="mb-2">
                  <strong className="text-white">Chaque système est développé sur mesure</strong> selon votre entreprise. Ce travail nécessite en moyenne 2 à 3 semaines pour concevoir, centraliser et automatiser vos processus.
                </p>
                <p className="text-white/70 italic">
                  Un acompte est demandé pour lancer le projet, une fois que la collaboration est validée des deux côtés.
                </p>
              </div>

              {/* Les avantages */}
              <ul className="space-y-3 text-white font-medium mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-white/90 shrink-0 font-bold mt-0.5">✓</span> Réception des demandes 24h/24
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/90 shrink-0 font-bold mt-0.5">✓</span> Prospection ciblée automatisée
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/90 shrink-0 font-bold mt-0.5">✓</span> Gestion intelligente des demandes et devis
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/90 shrink-0 font-bold mt-0.5">✓</span> Relances automatiques (clients, devis)
                </li>
              </ul>

              {/* BLOC MENSUALITÉ */}
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20 mt-2 mb-6">
                 <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-5 h-5 text-white animate-[spin_4s_linear_infinite]" />
                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Suivi & Optimisation mensuelle</h4>
                 </div>
                 <div className="text-xl font-black text-white mb-4">
                    À partir de 130€/mois <span className="text-[11px] font-medium text-white/70 align-middle">jusqu'à 999€/mois</span>
                 </div>
                 
                 <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-[13px] text-white/90">
                      <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                      <span>Optimisation continue de votre système</span>
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-white/90">
                      <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                      <span>Surveillance quotidienne et intervention</span>
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-white/90">
                      <Zap className="w-4 h-4 text-white shrink-0" />
                      <span>Amélioration des performances chaque mois</span>
                    </li>
                 </ul>

                 <div className="text-[12px] text-white/70 border-t border-white/10 pt-3 space-y-2">
                   <p><strong className="text-white/90">Votre système n'est pas simplement installé.</strong> Il est suivi et amélioré en continu. Chaque mois, un bilan est réalisé pour adapter votre outil à l'évolution de votre activité.</p>
                   <p className="italic text-[11px] text-white/50">L'ajout de nouvelles automatisations majeures fait l'objet d'une facturation supplémentaire.</p>
                 </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80 leading-relaxed italic border-l-4 border-l-white mt-auto">
                "Adapté pour gérer vos réservations, disponibilités et demandes clients sans perte de temps."
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 max-w-2xl mx-auto relative z-20"
          >
            <p className="text-2xl font-bold mb-10 text-ink">
              Vous choisissez comment vous voulez travailler.
            </p>

            <div className="flex flex-col items-center justify-center">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden inline-flex items-center justify-center px-10 py-5 rounded-[40px] text-lg font-bold text-white shadow-[0_16px_40px_-12px_rgba(91,63,217,0.5)] transition-all group"
                style={{ background: 'linear-gradient(135deg, #5B3FD9, #8E62FF)' }}
              >
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1s] pointer-events-none" />
                Voir comment ça peut s'appliquer à mon entreprise
              </motion.a>
              
              <p className="mt-4 text-xs font-medium text-ink-tertiary">
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

function AiNetworkAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      
      {/* Cercles orbitaux en SVG */}
      <svg className="absolute w-[240px] h-[240px] overflow-visible" viewBox="0 0 240 240">
        <motion.circle 
          cx="120" cy="120" r="80" 
          fill="none" stroke="#5B3FD9" strokeWidth="1" strokeDasharray="4 8" opacity="0.4"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ originX: "120px", originY: "120px" }}
        />
        <motion.circle 
          cx="120" cy="120" r="100" 
          fill="none" stroke="#8E62FF" strokeWidth="1.5" strokeDasharray="12 12" opacity="0.3"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ originX: "120px", originY: "120px" }}
        />
      </svg>

      {/* Noeuds Connectés dynamiques avec traits */}
      <div className="relative w-[200px] h-[200px]">
         {/* Coeur IA Central */}
         <motion.div 
           className="absolute top-1/2 left-1/2 -ml-3 -mt-3 w-6 h-6 bg-purple-deep shadow-[0_0_20px_#8E62FF] rounded-full flex items-center justify-center z-10"
           animate={{ scale: [1, 1.2, 1] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
         </motion.div>

         {/* Lignes générées en CSS absolute au centre reliées par SVG */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
            {/* Lignes radiales qui clignotent */}
            {[
              { x2: 20, y2: 40 },
              { x2: 180, y2: 50 },
              { x2: 170, y2: 170 },
              { x2: 40, y2: 160 },
              { x2: 100, y2: 10 },
              { x2: 100, y2: 190 }
            ].map((p, i) => (
              <motion.line 
                key={`line-${i}`}
                x1="100" y1="100" x2={p.x2} y2={p.y2}
                stroke="#8E62FF"
                opacity="0.5"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0, 0], opacity: [0, 0.4, 0.4, 0, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
              />
            ))}

            {/* Noeuds satellites périphériques */}
            {[
              { cx: 20, cy: 40, color: "#8E62FF", r: 4 },
              { cx: 180, cy: 50, color: "#5B3FD9", r: 5 },
              { cx: 170, cy: 170, color: "#8E62FF", r: 6 },
              { cx: 40, cy: 160, color: "#5B3FD9", r: 4 },
              { cx: 100, cy: 10, color: "#8E62FF", r: 5 },
              { cx: 100, cy: 190, color: "#5B3FD9", r: 4 }
            ].map((n, i) => (
              <motion.circle 
                key={`n-${i}`}
                cx={n.cx} cy={n.cy} r={n.r}
                fill={n.color}
                opacity="0.8"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
              />
            ))}
         </svg>
      </div>

    </div>
  );
}
