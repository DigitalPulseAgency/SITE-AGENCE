import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CtaButton } from '../ui/CtaButton';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* --- ZONE GAUCHE : Logo ---
            Utilise flex-1 sur desktop pour garantir le parfait centrage du menu au milieu.
            Sur mobile, prend tout l'espace requis. */}
        <div className="flex md:flex-1 justify-center md:justify-start w-full md:w-auto">
          <div 
            className="group flex items-center gap-3 cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            {/* Icône avec animations */}
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              {/* Particules d'énergie */}
              <div className="absolute inset-0 pointer-events-none hidden md:block">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-primary-light/60 mix-blend-screen animate-particle opacity-0"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${40 + Math.random() * 40}%`,
                      animationDelay: `${i * 1.2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Icône (Photo) */}
              <div className="w-10 h-10 md:w-12 md:h-12 relative animate-brain-pulse group-hover:[animation-duration:1.5s]">
                <img 
                  src="/logo.png" 
                  alt="Logo Digital Pulse" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Garde la structure si pas d'image
                  }}
                />
              </div>
            </div>

            {/* Texte animé */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="font-extrabold text-xl md:text-2xl tracking-tighter leading-none flex items-center gap-1.5">
                <span className="text-white">DIGITAL</span>
                {/* Texte "Pulse" avec Shimmer Effect */}
                <span 
                  className="text-primary-light"
                  style={{
                    background: 'linear-gradient(90deg, #8e62ff 0%, #d8b4fe 50%, #8e62ff 100%)',
                    backgroundSize: '200% auto',
                    color: 'transparent',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    animation: 'shimmer 3s linear infinite'
                  }}
                >
                  PULSE
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* --- ZONE CENTRE : Menu de Navigation ---
            Parfaitement centré car logé entre deux conteneurs de taille égale (md:flex-1) */}
        <div className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-gray-300 shrink-0">
          <button onClick={() => scrollTo('comparaison')} className="hover:text-white transition-colors">Automatisation</button>
          <button onClick={() => scrollTo('sites-internet')} className="hover:text-white transition-colors">Sites internet</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
        </div>

        {/* --- ZONE DROITE : Bouton CTA --- 
            Utilise flex-1 pour équilibrer parfaitement le logo et garantir le centrage mathématique de la zone centrale. */}
        <div className="hidden md:flex md:flex-1 justify-end">
          <CtaButton href="#contact" className="px-5 py-2.5 text-sm">
            Appeler maintenant
          </CtaButton>
        </div>

      </div>
    </motion.nav>
  );
}
