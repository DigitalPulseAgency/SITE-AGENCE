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
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        
        {/* --- ZONE GAUCHE : Menu de Navigation (Desktop) / Spacer Mobile --- */}
        <div className="flex-1 flex justify-start z-10">
          {/* Espace libre mobile */}
          <div className="md:hidden w-full"></div>
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button onClick={() => scrollTo('comparaison')} className="hover:text-white transition-colors">Automatisation</button>
            <button onClick={() => scrollTo('sites-internet')} className="hover:text-white transition-colors">Sites internet</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>
        </div>

        {/* --- ZONE LOGO (Parfaitement Centré partout) --- */}
        <div className="flex shrink-0 justify-center items-center z-20 text-center w-full max-w-[200px]" style={{ textAlign: 'center' }}>
          <div 
            className="group flex items-center justify-center cursor-pointer w-full" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            style={{ width: '100%', textAlign: 'center' }}
          >
            {/* L'icône est en absolute pour ne pas décaler le texte du centre mathématique, 
                ou bien on utilise un espacement équilibré. On va utiliser une marge négative 
                ou l'éloigner sans impacter la largeur du texte. */}
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 mr-3">
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
              
              <div className="w-10 h-10 md:w-12 md:h-12 relative animate-brain-pulse group-hover:[animation-duration:1.5s]">
                <img 
                  src="/logo.png" 
                  alt="Logo Digital Pulse" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Texte animé (Garanti centré) */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center text-center p-0 m-0"
            >
              <div className="font-extrabold text-xl md:text-2xl tracking-tighter leading-none flex items-center gap-1.5">
                <span className="text-white">DIGITAL</span>
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

            {/* Spacer invisible à droite pour contrebalancer la largeur de l'icône et garantir un vrai centrage 
                Si l'icône fait 3rem (48px) + mr-3 (12px) = 60px */}
            <div className="w-10 md:w-12 ml-3 opacity-0 pointer-events-none"></div>
          </div>
        </div>
        
        {/* --- ZONE DROITE : Bouton CTA / Spacer Mobile --- */}
        <div className="flex-1 flex justify-end z-20">
          <div className="hidden md:block">
            <CtaButton href="#contact" className="px-5 py-2.5 text-sm">
              Appeler maintenant
            </CtaButton>
          </div>
          {/* Menu Hamburger mobile ou CTA libre */}
        </div>

      </div>
    </motion.nav>
  );
}
