import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, AlertCircle } from 'lucide-react';

export function CaseStudiesSection() {
  const cases = [
    {
      niche: "Conciergerie",
      problem: "Trop de messages, réservations dispersées, organisation compliquée. Vous perdez du temps et vous devez tout gérer vous-même.",
      action: "Centralisation complète dans une seule application : réservations, messages clients, check-in/out, organisation interne.",
      result: "Tout devient clair, organisé et automatisé. Vous gagnez du temps chaque jour et vous réduisez votre charge mentale."
    },
    {
      niche: "Location de Voitures",
      problem: "Demandes clients constantes, gestion des disponibilités compliquée, suivi des véhicules difficile.",
      action: "Mise en place d'un système qui centralise les réservations, les disponibilités, les informations véhicules et les demandes clients.",
      result: "Moins d'erreurs, plus de fluidité, et une gestion simplifiée de toute votre activité."
    },
    {
      niche: "Climatisation",
      problem: "Vous perdez des appels pendant vos interventions. Chaque appel manqué = un client perdu.",
      action: "Installation d'un système qui répond, filtre et prend les rendez-vous automatiquement 24h/24.",
      result: "+45% de demandes traitées. Plus aucun appel perdu. Vous restez concentré sur votre travail."
    },
    {
      niche: "Pisciniste",
      problem: "Difficile de suivre les chantiers, les clients et les interventions en même temps.",
      action: "Mise en place d'un système avec suivi des chantiers, photos avant/après, gestion des rendez-vous.",
      result: "Vous savez exactement où vous en êtes, à tout moment. Moins de stress, plus d'organisation."
    },
    {
      niche: "Nettoyage Automobile",
      problem: "Trop de demandes à gérer, oublis de relances, organisation compliquée.",
      action: "Automatisation des rendez-vous, des relances clients et du suivi des prestations.",
      result: "Plus de clients, moins de charge mentale, et une activité plus fluide."
    },
    {
      niche: "Artisan du Bâtiment",
      problem: "Organisation complexe entre les devis, les clients et les chantiers.",
      action: "Centralisation des demandes, devis, suivi client et planning dans une seule interface.",
      result: "Gain de temps, meilleure organisation et moins d'erreurs."
    }
  ];

  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Des résultats concrets, <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">visibles dès les premiers jours.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ce n'est pas une promesse. Ce sont des systèmes déjà en place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card hover:bg-white/10 transition-colors p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col group relative"
            >
              <div className="text-sm font-black text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                Projet {study.niche}
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-red-400/80 text-xs font-bold uppercase flex items-center gap-1.5 mb-2">
                    <AlertCircle className="w-3.5 h-3.5" /> PROBLÈME
                  </span>
                  <p className="text-gray-300 font-medium text-sm leading-relaxed">{study.problem}</p>
                </div>

                <div className="w-5 h-5 bg-white/5 rounded-full flex items-center justify-center opacity-50">
                  <ArrowDown className="w-3 h-3 text-white" />
                </div>

                <div>
                  <span className="text-primary-light text-xs font-bold uppercase flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" /> ACTION
                  </span>
                  <p className="text-gray-300 font-medium text-sm leading-relaxed">{study.action}</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 relative z-10 group-hover:border-accent/30 transition-colors">
                <span className="text-accent text-xs font-bold flex items-center gap-1 mb-2 uppercase tracking-wide">
                  RÉSULTAT
                </span>
                <p className="font-bold text-white leading-relaxed">{study.result}</p>
              </div>

              {/* Subtly glow inside on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-bold p-6 rounded-2xl bg-white/5 border border-white/10">
            "Si vous vous reconnaissez dans une de ces situations, c'est que vous <span className="text-red-400">perdez déjà du temps chaque jour</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
