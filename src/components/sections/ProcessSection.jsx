import { motion } from 'framer-motion';

export function ProcessSection() {
  const steps = [
    { num: "01", title: "Analyse", desc: "Audit de vos processus actuels et identification des fuites de temps/clients." },
    { num: "02", title: "Mise en place", desc: "Création et intégration du système sans perturber votre activité en cours." },
    { num: "03", title: "Optimisation", desc: "Ajustements basés sur de vraies données pour maximiser vos résultats continuellement." }
  ];

  return (
    <section className="py-24 bg-bg-alt" id="methodologie">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-ink">La méthode</h2>
          <p className="text-ink-secondary">Un déploiement sans friction pour votre entreprise.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-6 bg-bg-card border border-line rounded-2xl shadow-[0_4px_16px_-4px_rgba(26,21,48,0.08)] hover:border-purple-deep/30 transition-colors"
              >
                {/* No watermark background numbers allowed! */}
                <h3 className="text-xl font-bold mb-3 text-ink relative z-10">{step.num}. {step.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-center gap-2 text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-purple-soft border border-purple-deep/20 text-purple-deep text-sm font-bold">
              Formation rapide (15 minutes) au système final. En visio ou en présentiel.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
