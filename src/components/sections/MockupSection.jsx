import { motion } from 'framer-motion';
import { Monitor, BarChart, Users, Settings } from 'lucide-react';

export function MockupSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="demonstration">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Imaginez avoir <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-primary-light">le contrôle total</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">Un système sur mesure pour conciergeries, artisans, automobiles...</p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl shadow-2xl p-4 md:p-6 shadow-primary/20 hover:shadow-primary/40 transition-all duration-700">
            {/* Window controls */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-4 border-r border-white/5 pr-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/20 text-primary-light">
                  <Monitor className="w-5 h-5" /> Vue d'ensemble
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-400 transition-colors">
                  <Users className="w-5 h-5" /> Nouveaux prospects
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-400 transition-colors">
                  <Settings className="w-5 h-5" /> Automatisations
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: "Clients Actifs", value: "142", trend: "+12%" },
                    { label: "Rendez-vous Auto", value: "24", trend: "+5%" },
                    { label: "Heures Gagnées", value: "38h", trend: "/mois" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl glass-card border border-white/5"
                    >
                      <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                        <span className="text-accent text-xs mb-1 font-medium">{stat.trend}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="h-64 rounded-xl glass-card border border-white/5 flex items-center justify-center relative overflow-hidden group">
                  <BarChart className="w-12 h-12 text-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Fausse animation de souris */}
                  <motion.div 
                    animate={{ 
                      x: [0, 150, -50, 0],
                      y: [0, -50, 50, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-4 h-4 rounded-full bg-white/50 blur-[2px] pointer-events-none"
                    style={{ left: '40%', top: '50%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
