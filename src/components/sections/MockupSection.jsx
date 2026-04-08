import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, UserPlus, FileText, 
  Receipt, Settings, TrendingUp, Bell, Search, 
  ArrowUpRight, MoreHorizontal, CheckCircle2, Clock,
  Home, Calendar, Sparkles, Key, Bot, DollarSign,
  CalendarCheck, CreditCard
} from 'lucide-react';

export function MockupSection() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        // La largeur disponible moins les padding potentiels si containerRef est le parent direct
        const width = containerRef.current.clientWidth;
        if (width < 1024) {
          setScale(width / 1024);
        } else {
          setScale(1);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-white/70 text-base md:text-lg max-w-2xl mx-auto flex flex-col gap-1"
          >
            <p>Un système qui s’adapte à votre métier et travaille à votre place.</p>
            <p>Ne perdez plus jamais un client à cause d’un manque de suivi ou de réactivité.</p>
          </motion.div>

        </div>

        {/* Realistic Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto w-full"
        >
          {/* Wrapper responsif conservant le ratio d'aspect exact de hauteur calculé manuellement 
              si on scale, la hauteur réelle du composant doit aussi changer ! */}
          <div 
            ref={containerRef}
            className="relative w-full"
            style={{ height: `${750 * scale}px` }}
          >
            {/* Conteneur taille fixe desktop redimensionné proportionnellement */}
            <div 
              className="absolute top-0 left-0 w-[1024px] h-[750px] shadow-2xl origin-top-left"
              style={{ 
                transform: `scale(${scale})`,
              }}
            >
              
              {/* Dashboard Container */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0f1c] shadow-[0_0_50px_rgba(107,50,236,0.15)] flex flex-col h-full w-full overflow-hidden p-5 transition-shadow duration-700 hover:shadow-[0_0_60px_rgba(107,50,236,0.25)]">
                
                {/* Window controls & Browser bar */}
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/5 shrink-0">
                  <div className="flex items-center gap-2 px-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white/5 text-gray-400 text-sm px-6 py-2 rounded-full flex items-center gap-2 w-full max-w-lg border border-white/5">
                      <Search className="w-4 h-4" />
                      <span>app.votresociete.com</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="flex flex-1 gap-8 overflow-hidden h-full">
                  
                  {/* Sidebar */}
                  <div className="flex flex-col gap-1 w-64 border-r border-white/5 pr-5 overflow-y-auto scrollbar-hide shrink-0 pb-6">
                    <div className="mb-6 px-3">
                      <div className="text-2xl font-bold tracking-tight flex items-center gap-3 text-white">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center shadow-lg">
                          <Home className="w-4 h-4 text-white" />
                        </div>
                        ConciergePro
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3 mt-4">Principal</div>
                    <SidebarItem icon={LayoutDashboard} label="Tableau de bord" active />
                    <SidebarItem icon={Calendar} label="Réservations" />
                    <SidebarItem icon={Users} label="Clients" />
                    <SidebarItem icon={Home} label="Logements" />
                    
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3 mt-8">Opérations</div>
                    <SidebarItem icon={Sparkles} label="Ménages" />
                    <SidebarItem icon={Key} label="Entrées / Sorties" />
                    
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3 mt-8">Finances</div>
                    <SidebarItem icon={Receipt} label="Factures" />
                    <SidebarItem icon={FileText} label="Devis" />
                    
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3 mt-8">Système</div>
                    <SidebarItem icon={Bot} label="Automatisations" />
                    <SidebarItem icon={Settings} label="Paramètres" />
                  </div>

                  {/* Main Area */}
                  <div className="flex-1 flex flex-col gap-6 overflow-y-auto pb-6 pr-2">
                    
                    {/* Header Actions */}
                    <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 p-5 rounded-2xl shrink-0">
                      <div>
                        <h3 className="text-xl font-bold text-white">Tableau de bord</h3>
                        <p className="text-sm text-gray-400 mt-1">Suivi en direct de vos activités.</p>
                      </div>
                      <div className="flex items-center gap-5">
                        <button className="relative p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                          <Bell className="w-6 h-6" />
                          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary-light rounded-full border-2 border-[#0a0f1c]"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-primary-light flex items-center justify-center text-white font-bold text-sm shadow-md cursor-pointer hover:scale-105 transition-transform">
                          CP
                        </div>
                      </div>
                    </div>

                    {/* Top Statistics Cards */}
                    <div className="grid grid-cols-4 gap-5 shrink-0">
                      <StatCard 
                        title="Logements actifs" 
                        value="12" 
                        trend="+2" 
                        icon={Home} 
                        color="text-blue-400" 
                        bg="bg-blue-400/10"
                      />
                      <StatCard 
                        title="Réservations en cours" 
                        value="28" 
                        trend="+15%" 
                        icon={CalendarCheck} 
                        color="text-green-400" 
                        bg="bg-green-400/10"
                      />
                      <StatCard 
                        title="Revenus mensuels" 
                        value="4 250 €" 
                        trend="+8.2%" 
                        icon={TrendingUp} 
                        color="text-primary-light" 
                        bg="bg-primary/20"
                      />
                      <StatCard 
                        title="Ménages du jour" 
                        value="6" 
                        trend="-1" 
                        trendDown
                        icon={Sparkles} 
                        color="text-amber-400" 
                        bg="bg-amber-400/10"
                      />
                    </div>

                    {/* Main Grid: Chart & Recent Activity */}
                    <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
                      
                      {/* Revenue Chart */}
                      <div className="col-span-2 bg-surface border border-white/5 p-6 rounded-2xl flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary-light/10 transition-colors duration-700" />
                        
                        <div className="flex justify-between items-center mb-8 relative z-10">
                          <h4 className="font-bold text-white text-lg">Évolution des revenus</h4>
                          <div className="text-sm font-medium bg-white/5 text-gray-300 px-4 py-1.5 rounded-lg border border-white/5">Ce mois-ci</div>
                        </div>
                        
                        <div className="flex-1 relative w-full flex items-end">
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className="w-full border-t border-white/[0.03]"></div>
                            ))}
                          </div>
                          
                          <div className="absolute inset-0 pt-4 pb-8 pl-12">
                            <svg viewBox="0 0 500 200" preserveAspectRatio="none" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(142,98,255,0.3)]">
                              <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#8e62ff" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#8e62ff" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>
                              <motion.path
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                d="M0,150 C50,120 100,160 200,100 C280,40 380,110 450,50 C480,20 490,40 500,10 L500,200 L0,200 Z"
                                fill="url(#chartGradient)"
                              />
                              <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M0,150 C50,120 100,160 200,100 C280,40 380,110 450,50 C480,20 490,40 500,10"
                                fill="none"
                                stroke="#8e62ff"
                                strokeWidth="4"
                                strokeLinecap="round"
                              />
                              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} cx="200" cy="100" r="5" fill="#10162A" stroke="#8e62ff" strokeWidth="3" />
                              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 }} cx="500" cy="10" r="6" fill="#c084fc" stroke="#c084fc" className="shadow-[0_0_15px_#c084fc]" />
                            </svg>
                          </div>

                          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500 font-medium">
                            <span>5k€</span>
                            <span>4k€</span>
                            <span>3k€</span>
                            <span>2k€</span>
                            <span>0</span>
                          </div>
                          
                          <div className="absolute left-12 right-0 bottom-2 flex justify-between text-xs text-gray-500 font-medium pb-px border-t border-white/5 pt-2">
                            <span>1er</span>
                            <span>10</span>
                            <span>20</span>
                            <span>30</span>
                          </div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="bg-surface border border-white/5 p-6 rounded-2xl flex flex-col relative h-full">
                        <div className="flex justify-between items-center mb-6 relative z-10">
                          <h4 className="font-bold text-white text-lg">Activité</h4>
                          <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer hover:text-white" />
                        </div>
                        
                        <div className="flex flex-col gap-6 flex-1 pt-2 overflow-y-auto scrollbar-hide">
                          <RecentActivity 
                            title="Nouvelle réservation" 
                            desc="Appt. Vue Mer - 3 nuits" 
                            date="15 min" 
                            icon={Calendar} 
                            color="bg-blue-500/10 text-blue-400" 
                          />
                          <RecentActivity 
                            title="Ménage programmé" 
                            desc="Studio Centre Ville" 
                            date="1h" 
                            icon={Sparkles} 
                            color="bg-amber-500/10 text-amber-400" 
                          />
                          <RecentActivity 
                            title="Paiement reçu" 
                            desc="+ 450,00 €" 
                            date="2h" 
                            icon={CreditCard} 
                            color="bg-green-500/10 text-green-400" 
                          />
                          <RecentActivity 
                            title="Client ajouté" 
                            desc="Marc Dupont" 
                            date="Hier" 
                            icon={UserPlus} 
                            color="bg-primary-light/10 text-primary-light" 
                          />
                        </div>
                        
                        <button className="w-full mt-4 pt-4 border-t border-white/5 text-sm font-semibold text-primary-light hover:text-white transition-colors flex items-center justify-center">
                          Voir tout l'historique
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SidebarItem({ icon: Icon, label, active }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
      active ? 'bg-primary/20 text-primary-light font-medium' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
    }`}>
      <Icon className="w-4 h-4 shrink-0" />
      <span className="text-sm whitespace-nowrap">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-light hidden md:block"></div>}
    </div>
  );
}

function StatCard({ title, value, trend, trendDown, icon: Icon, color, bg }) {
  return (
    <div className="bg-[#10162A] border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${bg} ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded bg-white/5 ${trendDown ? 'text-green-400' : 'text-green-400'}`}>
          {trendDown ? <CheckCircle2 className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
          {trend}
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">{value}</h4>
        <p className="text-xs text-gray-400">{title}</p>
      </div>
    </div>
  );
}

function RecentActivity({ title, desc, date, icon: Icon, color }) {
  return (
    <div className="flex gap-3 group">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <h5 className="text-sm font-semibold text-gray-200 truncate group-hover:text-primary-light transition-colors">{title}</h5>
        <div className="text-xs text-gray-500 truncate mt-0.5">{desc}</div>
      </div>
      <div className="text-right shrink-0">
        <div className="flex items-center gap-1 text-[10px] text-gray-500">
          <Clock className="w-3 h-3" />
          {date}
        </div>
      </div>
    </div>
  );
}
