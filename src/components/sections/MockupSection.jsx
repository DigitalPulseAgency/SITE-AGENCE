import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, UserPlus, FileText, 
  Receipt, Settings, TrendingUp, Bell, Search, 
  ArrowUpRight, MoreHorizontal, CheckCircle2, Clock,
  Home, Calendar, Sparkles, Key, Bot, DollarSign,
  CalendarCheck, CreditCard
} from 'lucide-react';

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
          <p className="text-gray-400 text-lg">Un système sur mesure pour la conciergerie immobilière et les artisans.</p>
        </div>

        {/* Realistic Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Dashboard Container */}
          <div className="relative rounded-2xl border border-white/10 bg-[#0a0f1c] shadow-2xl p-4 shadow-primary/20 hover:shadow-primary/40 transition-all duration-700 overflow-hidden flex flex-col md:h-[750px]">
            {/* Window controls & Browser bar */}
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/5 text-gray-400 text-xs px-4 py-1.5 rounded-full flex items-center gap-2 w-full max-w-md">
                  <Search className="w-3 h-3" />
                  <span>app.votresociete.com</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-1 gap-6 overflow-hidden flex-col md:flex-row">
              {/* Sidebar */}
              <div className="md:flex flex-col gap-1 md:w-56 border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-4 overflow-x-auto md:overflow-y-auto scrollbar-hide shrink-0">
                <div className="hidden md:block mb-6 px-3">
                  <div className="text-xl font-bold tracking-tight flex items-center gap-2 text-white">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                      <Home className="w-3 h-3 text-white" />
                    </div>
                    ConciergePro
                  </div>
                </div>

                {/* Wrapper for horizontal scroll on mobile */}
                <div className="flex md:flex-col gap-2 md:gap-1 px-2 md:px-0 min-w-max md:min-w-0">
                  <div className="hidden md:block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3 mt-4">Principal</div>
                  <SidebarItem icon={LayoutDashboard} label="Tableau de bord" active />
                  <SidebarItem icon={Calendar} label="Réservations" />
                  <SidebarItem icon={Users} label="Clients" />
                  <SidebarItem icon={Home} label="Logements" />
                  
                  <div className="hidden md:block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3 mt-6">Opérations</div>
                  <SidebarItem icon={Sparkles} label="Ménages" />
                  <SidebarItem icon={Key} label="Entrées / Sorties" />
                  
                  <div className="hidden md:block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3 mt-6">Finances</div>
                  <SidebarItem icon={Receipt} label="Factures" />
                  <SidebarItem icon={FileText} label="Devis" />
                  
                  <div className="hidden md:block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3 mt-6">Système</div>
                  <SidebarItem icon={Bot} label="Automatisations" />
                  <SidebarItem icon={Settings} label="Paramètres" />
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 pb-6">
                
                {/* Header Actions */}
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                  <div>
                    <h3 className="text-lg font-bold text-white">Tableau de bord 📊</h3>
                    <p className="text-xs text-gray-400">Suivi en direct de vos logements et réservations.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                      <Bell className="w-5 h-5" />
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-light rounded-full"></span>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-primary-light flex items-center justify-center text-white font-bold text-xs">
                      CP
                    </div>
                  </div>
                </div>

                {/* Top Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Revenue Chart */}
                  <div className="lg:col-span-2 bg-[#10162A] border border-white/5 p-5 rounded-xl flex flex-col min-h-[350px]">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="font-bold text-white">Évolution des revenus</h4>
                      <div className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-md">Les 30 derniers jours</div>
                    </div>
                    
                    <div className="flex-1 relative w-full flex items-end">
                      {/* Lignes de repère */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-full border-t border-white/5"></div>
                        ))}
                      </div>
                      
                      {/* Graphique SVG Animé */}
                      <div className="absolute inset-0 pt-4 pb-1 pl-8">
                        <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#8e62ff" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#8e62ff" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          {/* Fill Gradient Animé (Fade In) */}
                          <motion.path
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            d="M0,150 C50,120 80,160 150,100 C200,60 250,110 300,50 C350,10 380,30 400,10 L400,200 L0,200 Z"
                            fill="url(#chartGradient)"
                          />
                          {/* Courbe principale avec animation de dessin */}
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            d="M0,150 C50,120 80,160 150,100 C200,60 250,110 300,50 C350,10 380,30 400,10"
                            fill="none"
                            stroke="#8e62ff"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          {/* Points d'intérêt */}
                          <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} cx="150" cy="100" r="4" fill="#10162A" stroke="#8e62ff" strokeWidth="2" />
                          <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }} cx="300" cy="50" r="4" fill="#10162A" stroke="#8e62ff" strokeWidth="2" />
                          <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 }} cx="400" cy="10" r="5" fill="#c084fc" stroke="#c084fc" className="shadow-[0_0_10px_#c084fc]" />
                        </svg>
                      </div>

                      {/* Fake Y Axis Labels */}
                      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-500 pb-6">
                        <span>5k€</span>
                        <span>4k€</span>
                        <span>3k€</span>
                        <span>2k€</span>
                        <span>0</span>
                      </div>
                      
                      {/* Fake X Axis Labels */}
                      <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px] text-gray-500">
                        <span>1er</span>
                        <span>10</span>
                        <span>20</span>
                        <span>30</span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-[#10162A] border border-white/5 p-5 rounded-xl flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="font-bold text-white">Activité récente</h4>
                      <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer hover:text-white" />
                    </div>
                    
                    <div className="flex flex-col gap-5 flex-1">
                      <RecentActivity 
                        title="Nouvelle réservation créée" 
                        desc="Appt. Vue Mer - 3 nuits" 
                        date="Il y a 15 min" 
                        icon={Calendar} 
                        color="bg-blue-500/20 text-blue-400" 
                      />
                      <RecentActivity 
                        title="Ménage programmé" 
                        desc="Studio Centre Ville" 
                        date="Il y a 1h" 
                        icon={Sparkles} 
                        color="bg-amber-500/20 text-amber-400" 
                      />
                      <RecentActivity 
                        title="Paiement reçu" 
                        desc="+ 450,00 €" 
                        date="Il y a 2h" 
                        icon={CreditCard} 
                        color="bg-green-500/20 text-green-400" 
                      />
                      <RecentActivity 
                        title="Client ajouté" 
                        desc="Marc Dupont" 
                        date="Hier" 
                        icon={UserPlus} 
                        color="bg-primary/20 text-primary-light" 
                      />
                    </div>
                    
                    <button className="w-full mt-auto pt-4 text-xs font-semibold text-primary-light hover:text-white transition-colors flex items-center justify-center gap-1">
                      Voir l'historique complet
                    </button>
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
