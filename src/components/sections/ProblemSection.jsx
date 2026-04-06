import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    "Vous perdez des clients sans même le savoir",
    "Vous oubliez de relancer au bon moment",
    "Vous êtes constamment interrompu par des demandes",
    "Votre business dépend entièrement de vous"
  ];

  return (
    <section className="py-24 relative" id="probleme">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 text-xl md:text-2xl font-medium text-gray-300 bg-surface/50 p-6 rounded-2xl border border-white/5"
              >
                <XCircle className="w-8 h-8 text-red-500/80 shrink-0" />
                <p>{problem}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white">
              Et pendant ce temps, <span className="text-red-500">vos concurrents récupèrent ces clients</span> à votre place.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
