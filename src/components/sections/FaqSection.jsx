import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const faqs = [
    { q: "Suis-je engagé sur la durée ?", a: "Non. Il n'y a absolument aucun engagement. Vous êtes libre d'arrêter quand vous le souhaitez." },
    { 
      q: "Est-ce adapté à mon activité ?", 
      a: "Oui, tous nos systèmes (délégation de standard, prise de rendez-vous, facturation) sont créés sur-mesure pour s'intégrer parfaitement à votre secteur." 
    },
    { 
      q: "Au bout de combien de temps verrai-je les résultats ?", 
      a: "Les résultats se ressentent très rapidement.\n\nVous gagnez du temps, vous réduisez votre charge mentale et vous arrêtez de gérer des tâches répétitives.\n\nMoins d'appels manqués, plus de relances à faire manuellement, et toute votre activité devient plus claire et organisée.\n\nTout est centralisé, vous savez exactement où vous en êtes, sans vous disperser." 
    },
    { 
      q: "Quels sont les risques ?", 
      a: "Le vrai risque aujourd'hui, c'est de ne rien changer.\n\nContinuer à perdre du temps sur des tâches répétitives, manquer des opportunités et gérer seul des choses qui peuvent être automatisées.\n\nVous avez la possibilité de déléguer intelligemment à un système conçu pour ça." 
    }
  ];

  return (
    <section className="py-24 relative bg-bg-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-ink">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-line rounded-xl overflow-hidden bg-bg-card shadow-[0_4px_16px_-4px_rgba(26,21,48,0.08)]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:ring-inset"
      >
        <span className="font-bold text-lg text-ink">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-purple-deep" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-ink-secondary border-t border-line whitespace-pre-line leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
