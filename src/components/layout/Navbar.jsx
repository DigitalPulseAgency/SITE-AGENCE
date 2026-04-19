import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-line py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative min-h-[50px]">
        
        {/* --- ZONE LOGO --- */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:transform-none md:flex-1 flex justify-start z-20">
          <div 
            className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 cursor-pointer w-max" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-deep rounded-lg flex items-center justify-center shadow-sm">
                {/* Minimal pulse dot / lightning */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
            </div>

            {/* Texte animé */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center text-center p-0 m-0"
            >
              <div className="font-extrabold text-lg md:text-2xl tracking-tighter leading-none flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-ink">DIGITAL</span>
                <span 
                  className="text-purple-deep"
                  style={{
                    background: 'linear-gradient(90deg, #5B3FD9 0%, #8E62FF 50%, #5B3FD9 100%)',
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

        {/* --- ZONE MENU --- */}
        <div className="hidden md:flex justify-center gap-8 z-10 shrink-0 text-sm font-medium text-ink-secondary">
          <button onClick={() => scrollTo('comparaison')} className="hover:text-ink transition-colors focus:outline-none">Automatisation</button>
          <button onClick={() => scrollTo('sites-internet')} className="hover:text-ink transition-colors focus:outline-none">Sites internet</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-ink transition-colors focus:outline-none">Contact</button>
        </div>

        {/* --- ZONE DROITE : Bouton CTA --- */}
        <div className="flex-1 flex justify-end z-20">
          <div className="hidden md:block">
            <a href="#contact" className="px-5 py-2.5 text-sm inline-flex items-center justify-center bg-green-cta hover:bg-green-cta-hover text-white font-bold rounded-full transition-all duration-300 shadow-[0_4px_12px_-4px_rgba(5,150,105,0.35)]">
              Appeler maintenant
            </a>
          </div>
        </div>

      </div>
    </motion.nav>
  );
}
