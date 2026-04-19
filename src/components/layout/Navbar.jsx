import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Active Nav Links
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to get the most visible one
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { threshold: 0.4 }
    );

    const sectionIds = ['hero', 'offres', 'sites-internet', 'comparaison'];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsContactDropdownOpen(false);
      }
    };
    const handleEsc = (event) => {
      if (event.key === 'Escape') setIsContactDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    if (id === 'top' || id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Accueil', id: 'hero' },
    { label: 'Réseaux sociaux', id: 'offres' },
    { label: 'Site internet', id: 'sites-internet' },
    { label: 'Automatisation', id: 'comparaison' },
  ];

  return (
    <>
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
          <div className="flex justify-start z-30">
            <div 
              className="group flex items-center gap-3 cursor-pointer w-max focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:outline-none rounded-lg" 
              onClick={() => scrollTo('top')}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') scrollTo('top'); }}
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
              <div className="flex justify-center text-center p-0 m-0">
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
              </div>
            </div>
          </div>

          {/* --- ZONE MENU DESKTOP --- */}
          <div className="hidden md:flex justify-end items-center gap-8 z-10 shrink-0 flex-1">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button 
                    key={link.id} 
                    onClick={() => scrollTo(link.id)} 
                    className={`text-sm transition-colors focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none rounded-sm ${isActive ? 'text-ink font-semibold' : 'text-ink-secondary hover:text-ink font-medium'}`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </div>

            {/* CONTACT DROPDOWN DESKTOP */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                onMouseEnter={() => {
                  // Slight delay to avoid flicker
                  setTimeout(() => {
                    setIsContactDropdownOpen(true);
                  }, 100);
                }}
                className="relative overflow-hidden inline-flex items-center gap-1.5 justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(5,150,105,0.4)] transition-all group bg-green-cta hover:bg-[#047857] focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
                aria-expanded={isContactDropdownOpen}
                aria-haspopup="menu"
                aria-controls="contact-menu"
              >
                <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                Contact
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isContactDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isContactDropdownOpen && (
                  <motion.div
                    id="contact-menu"
                    role="menu"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    onMouseLeave={() => setIsContactDropdownOpen(false)}
                    className="absolute right-0 top-[calc(100%+8px)] bg-white border border-line rounded-xl shadow-[0_12px_32px_-8px_rgba(26,21,48,0.15)] p-2 min-w-[260px] z-50 flex flex-col gap-1"
                  >
                    <a
                      href="https://calendly.com/digitalpulse-agency/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="menuitem"
                      onClick={() => setIsContactDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-ink font-medium text-sm hover:bg-bg-alt transition-colors focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:outline-none group"
                    >
                      <Calendar className="w-4 h-4 text-purple-deep shrink-0 group-hover:scale-110 transition-transform" />
                      Prendre rendez-vous
                    </a>
                    <a
                      href="tel:0615940884"
                      role="menuitem"
                      onClick={() => setIsContactDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-ink font-medium text-sm hover:bg-bg-alt transition-colors focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:outline-none group"
                    >
                      <Phone className="w-4 h-4 text-green-cta shrink-0 group-hover:scale-110 transition-transform" />
                      Appeler maintenant
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <div className="md:hidden flex items-center justify-end z-30">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ink focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:outline-none p-2 rounded-lg"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* --- MOBILE MENU PANEL --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white border-l border-line flex flex-col pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-lg font-semibold text-ink">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button 
                    key={link.id} 
                    onClick={() => scrollTo(link.id)} 
                    className={`text-left pb-4 border-b border-line focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:outline-none rounded-sm transition-colors ${isActive ? 'text-purple-deep border-purple-deep/30' : 'hover:text-purple-deep'}`}
                  >
                    {link.label}
                  </button>
                )
              })}
              
              <div className="pb-4">
                <div className="mb-4 text-ink-secondary text-sm uppercase tracking-wider font-bold">Contact</div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://calendly.com/digitalpulse-agency/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-bg-alt border border-line text-ink font-medium hover:border-purple-deep/30 focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:outline-none min-h-[44px] transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-purple-deep shrink-0" />
                    <span>→ Prendre rendez-vous</span>
                  </a>
                  <a
                    href="tel:0615940884"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-bg-alt border border-line text-ink font-medium hover:border-green-cta/30 focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:outline-none min-h-[44px] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-green-cta shrink-0" />
                    <span>→ Appeler maintenant</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
