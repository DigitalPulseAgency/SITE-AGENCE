import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function SolutionSection() {
  return (
    <section className="py-32 relative bg-bg-alt" id="solution">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-soft border border-purple-deep/20 text-purple-deep font-medium mb-8">
            <CheckCircle className="w-5 h-5" /> La Bascule
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-ink">
            On met en place un système qui <span className="text-purple-deep bg-clip-text bg-gradient-to-r from-purple-deep to-purple-signa" style={{ WebkitTextFillColor: 'transparent', color: '#5B3FD9' }}>attire des clients</span>, automatise votre activité et organise tout à votre place.
          </h2>

          <p className="text-2xl text-ink-secondary font-medium">
            Vous n'avez <span className="text-ink border-b-2 border-purple-deep">rien à gérer techniquement.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
