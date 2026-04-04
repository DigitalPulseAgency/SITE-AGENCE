import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function SolutionSection() {
  return (
    <section className="py-32 relative bg-primary/5" id="solution">
      {/* Glow on the side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light font-medium mb-8">
            <CheckCircle className="w-5 h-5" /> La Bascule
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            On met en place un système qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-primary-light">attire des clients</span>, automatise votre activité et organise tout à votre place.
          </h2>

          <p className="text-2xl text-gray-400 font-medium">
            Vous n'avez <span className="text-white border-b-2 border-primary">rien à gérer techniquement.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
