import { motion } from 'framer-motion';
import { 
  Car, Building2, Wind, Droplets, Sparkles, Hammer, 
  CheckCircle, Star, Phone, ArrowRight, ShieldCheck 
} from 'lucide-react';

export function PortfolioSection() {
  const sites = [
    { 
      name: "RentLux", 
      niche: "Location de voitures", 
      color: "from-amber-600 to-orange-800",
      content: <LocationCarsMiniSite />
    },
    { 
      name: "Elite Conciergerie", 
      niche: "Conciergerie immobilière", 
      color: "from-stone-600 to-stone-900",
      content: <ConciergerieMiniSite />
    },
    { 
      name: "ClimPro", 
      niche: "Climatisation", 
      color: "from-cyan-500 to-blue-700",
      content: <ClimatisationMiniSite />
    },
    { 
      name: "Azur Piscines", 
      niche: "Pisciniste", 
      color: "from-sky-400 to-blue-600",
      content: <PiscinisteMiniSite />
    },
    { 
      name: "CleanAuto", 
      niche: "Nettoyage automobile", 
      color: "from-emerald-500 to-teal-800",
      content: <NettoyageMiniSite />
    },
    { 
      name: "BâtiFutur", 
      niche: "Artisans du bâtiment", 
      color: "from-yellow-600 to-amber-900",
      content: <ArtisanMiniSite />
    },
  ];

  return (
    <section className="py-24 bg-surface relative" id="sites-internet">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Aperçus des conceptions</h2>
          <p className="text-gray-400">Passez la souris sur une carte pour explorer le site complet.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sites.map((site, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors bg-[#0a0a0a] shadow-2xl"
            >
              {/* Fake browser header */}
              <div className="bg-zinc-900/90 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center gap-2 z-30 relative">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-[10px] text-gray-400 font-mono bg-zinc-800/80 px-4 py-1 rounded-full truncate max-w-[150px] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-green-400" />
                  {site.name.toLowerCase().replace(' ', '')}.fr
                </div>
              </div>
              
              {/* Image / Content with scroll effect */}
              <div className="relative h-[380px] overflow-hidden bg-black cursor-ns-resize touch-pan-y">
                
                {/* The Scrolling DOM Wrapper */}
                {/* Hauteur ajustée dynamiquement (translate-y) au hover */}
                {/* La propriété cubic-bezier permet un easing visqueux très premium */}
                <div 
                  className="absolute top-0 left-0 w-full transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[calc(100%-380px)]"
                >
                  {site.content}
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-accent text-xs font-bold tracking-wider uppercase mb-1 block">
                    {site.niche}
                  </span>
                  <h3 className="text-xl font-bold text-white">{site.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------------------------- //
// MINI SITES COMPONENTS
// -------------------------------------------------------------------------------- //

function LocationCarsMiniSite() {
  return (
    <div className="flex flex-col bg-zinc-950 text-white w-full h-[900px]">
      {/* Hero */}
      <div className="relative h-[250px] bg-black overflow-hidden flex flex-col justify-center px-6">
        <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" />
        <div className="relative z-10 w-full">
          <Car className="w-6 h-6 text-amber-500 mb-2" />
          <h1 className="text-xl font-bold mb-1">Prestige Fleet</h1>
          <p className="text-[10px] text-gray-300 mb-4 max-w-[80%]">Louez l'excellence. Flotte premium disponible 24/7 avec chauffeur privé en option.</p>
          <div className="w-24 py-1.5 bg-amber-500 text-black text-[9px] font-bold text-center rounded">
            RÉSERVER
          </div>
        </div>
      </div>
      {/* Booking Form (Fake) */}
      <div className="px-4 -mt-6 relative z-20 mb-6">
        <div className="bg-zinc-900 rounded-lg p-3 shadow-xl border border-white/5 flex gap-2">
           <div className="flex-1 bg-black rounded p-2 border border-white/10"><div className="w-8 h-2 bg-zinc-700 rounded mb-1"></div><div className="w-16 h-2 bg-zinc-500 rounded"></div></div>
           <div className="flex-1 bg-black rounded p-2 border border-white/10"><div className="w-8 h-2 bg-zinc-700 rounded mb-1"></div><div className="w-16 h-2 bg-zinc-500 rounded"></div></div>
        </div>
      </div>
      {/* Fleet */}
      <div className="px-4 pb-6">
        <h2 className="text-sm font-bold mb-3">Notre Flotte</h2>
        <div className="space-y-3">
          {[1,2,3].map(i => (
             <div key={i} className="flex gap-3 items-center bg-zinc-900 p-2 rounded border border-white/5">
                <div className="w-16 h-12 bg-zinc-800 rounded overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=150&q=80" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="flex-1">
                  <div className="w-20 h-3 bg-white/80 rounded mb-1"></div>
                  <div className="w-12 h-2 bg-amber-500/80 rounded"></div>
                </div>
             </div>
          ))}
        </div>
      </div>
      <div className="mt-auto h-[100px] bg-black flex grid grid-cols-3 gap-2 px-4 py-6 border-t border-white/10">
         <div className="h-2 bg-zinc-800 rounded"></div>
         <div className="h-2 bg-zinc-800 rounded"></div>
         <div className="h-2 bg-zinc-800 rounded"></div>
      </div>
    </div>
  )
}

function ConciergerieMiniSite() {
  return (
    <div className="flex flex-col bg-[#F9F9F9] text-zinc-900 w-full h-[900px]">
      <div className="px-4 py-3 flex justify-between items-center border-b border-zinc-200">
         <div className="text-xs font-bold tracking-widest uppercase">Elite</div>
         <div className="w-4 h-4 bg-zinc-200 rounded-full"></div>
      </div>
      {/* Hero */}
      <div className="relative h-[220px] bg-stone-200 flex flex-col justify-end p-6 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-2xl font-serif mb-1">Service 5 Étoiles</h1>
          <p className="text-[10px] text-zinc-300 font-light max-w-[90%]">Votre bien immobilier géré avec le plus grand soin par des professionnels de l'hôtellerie.</p>
        </div>
      </div>
      {/* Services grid */}
      <div className="px-4 py-6">
        <div className="text-center mb-4">
          <p className="text-[9px] uppercase tracking-widest text-stone-500 mb-1">Nos prestations</p>
          <h2 className="text-sm font-medium">Gestion Complète</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
           {['Check In/Out', 'Ménage Pro', 'Maintenance', 'Prix Dynamique'].map((srv, i) => (
             <div key={i} className="bg-white p-3 border border-zinc-100 flex flex-col items-center justify-center text-center shadow-sm">
               <CheckCircle className="w-5 h-5 text-stone-400 mb-2" />
               <div className="text-[9px] font-medium">{srv}</div>
             </div>
           ))}
        </div>
      </div>
      {/* Banner */}
      <div className="bg-stone-900 text-white p-6 text-center mx-4 mb-6 relative overflow-hidden">
        <div className="text-[11px] mb-2 z-10 relative">Estimez vos revenus en 2 clics</div>
        <div className="inline-block px-4 py-1.5 bg-white text-stone-900 text-[9px] font-bold">CALCULER</div>
      </div>
      {/* Footer */}
      <div className="mt-auto h-[120px] bg-stone-100 flex flex-col px-6 py-6 border-t border-stone-200 gap-2">
         <div className="w-16 h-3 bg-stone-300 rounded mb-2"></div>
         <div className="w-full h-1.5 bg-stone-200 rounded"></div>
         <div className="w-full h-1.5 bg-stone-200 rounded"></div>
      </div>
    </div>
  )
}

function ClimatisationMiniSite() {
  return (
    <div className="flex flex-col bg-slate-50 text-slate-800 w-full h-[900px]">
      <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center h-8">
        <div className="text-[11px] font-bold flex items-center gap-1"><Wind className="w-3 h-3" /> ClimPro</div>
        <div className="bg-white text-blue-600 px-2 py-0.5 text-[8px] font-bold rounded-full flex items-center gap-1">
          <Phone className="w-2 h-2" /> 01 23 45 67 89
        </div>
      </div>
      <div className="relative h-[200px]">
        <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center p-5 text-white">
          <div className="bg-blue-500 text-[8px] uppercase px-1.5 py-0.5 rounded w-max mb-2 font-bold tracking-wider">Intervention 24/7</div>
          <h1 className="text-xl font-black mb-1">Votre Confort Thermique.</h1>
          <p className="text-[9px] w-[85%]">Installation, entretien et dépannage de pompes à chaleur de dernière génération.</p>
        </div>
      </div>
      <div className="flex justify-center -mt-4 relative z-10 gap-2 px-4">
        <div className="bg-white p-2 rounded shadow border-b-2 border-blue-600 flex-1 text-center text-[9px] font-bold">Dépannage</div>
        <div className="bg-white p-2 rounded shadow border-b-2 border-blue-600 flex-1 text-center text-[9px] font-bold">Installation</div>
      </div>
      <div className="p-5 mt-4">
        <div className="w-20 h-4 bg-slate-200 rounded mb-4"></div>
        <div className="space-y-4">
          <div className="flex gap-3">
             <div className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-500">
               <Star className="w-6 h-6" />
             </div>
             <div className="flex-1">
                <div className="w-full h-2 bg-slate-200 rounded mb-1.5"></div>
                <div className="w-full h-2 bg-slate-200 rounded mb-1.5"></div>
                <div className="w-2/3 h-2 bg-slate-200 rounded"></div>
             </div>
          </div>
          <div className="flex gap-3">
             <div className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-500">
               <BuildIcon />
             </div>
             <div className="flex-1">
                <div className="w-full h-2 bg-slate-200 rounded mb-1.5"></div>
                <div className="w-full h-2 bg-slate-200 rounded mb-1.5"></div>
                <div className="w-2/3 h-2 bg-slate-200 rounded"></div>
             </div>
          </div>
        </div>
      </div>
      <div className="mt-auto h-[140px] bg-slate-900 text-white p-5 flex flex-col items-center justify-center text-center">
         <h3 className="text-sm font-bold mb-2">Besoin d'un devis ?</h3>
         <div className="w-full max-w-[200px] h-8 bg-blue-600 flex items-center justify-center text-[10px] font-bold rounded">CONTACTEZ-NOUS</div>
      </div>
    </div>
  )
}

function BuildIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>; }

function PiscinisteMiniSite() {
  return (
    <div className="flex flex-col bg-white text-cyan-950 w-full h-[900px]">
      {/* Header compact */}
      <div className="h-10 bg-white/80 backdrop-blur absolute top-0 w-full flex items-center justify-between px-4 z-50 border-b border-cyan-100">
         <div className="text-cyan-600 font-bold text-xs">Azur<span className="font-light">Piscines</span></div>
         <div className="w-5 h-0.5 bg-cyan-900"></div>
      </div>
      <div className="relative h-[280px] pt-10">
        <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-cyan-950/20 to-transparent"></div>
        <div className="absolute bottom-6 left-5 text-white pr-5">
           <h1 className="text-2xl font-light leading-tight mb-2">Concevez le <br/><span className="font-bold">bassin de vos rêves</span></h1>
           <div className="w-8 h-1 bg-cyan-400 mb-3"></div>
           <p className="text-[9px] text-cyan-100">Expert en construction et rénovation haut de gamme.</p>
        </div>
      </div>
      
      <div className="px-5 py-6 bg-cyan-50">
         <h2 className="text-center text-xs font-bold text-cyan-800 uppercase tracking-widest mb-4">Notre Processus</h2>
         <div className="space-y-3 relative">
            <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-cyan-200"></div>
            {[
              { title: "Étude 3D", desc: "Modélisation de votre projet" },
              { title: "Terrassement", desc: "Préparation du terrain" },
              { title: "Mise en eau", desc: "Finitions et domotique" }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0">{i+1}</div>
                <div className="pt-0.5">
                  <div className="text-[11px] font-bold">{step.title}</div>
                  <div className="text-[9px] text-cyan-700">{step.desc}</div>
                </div>
              </div>
            ))}
         </div>
      </div>

      <div className="p-5">
         <div className="grid grid-cols-2 gap-2">
            <div className="bg-cyan-100 aspect-square rounded overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="bg-cyan-100 aspect-square rounded relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-50 hue-rotate-180" />
            </div>
         </div>
         <div className="mt-4 bg-cyan-900 border border-cyan-800 rounded p-4 text-center">
            <div className="text-[12px] text-white font-bold mb-1">Votre projet commence ici</div>
            <div className="w-full bg-cyan-400 text-cyan-950 text-[9px] py-2 rounded font-bold uppercase tracking-wide">Prendre RDV</div>
         </div>
      </div>
    </div>
  )
}

function NettoyageMiniSite() {
  return (
    <div className="flex flex-col bg-zinc-900 text-zinc-100 w-full h-[900px]">
      <div className="relative h-[250px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-black/60"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-center">
           <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
           </div>
           <h1 className="text-3xl font-extrabold italic tracking-tight mb-2">CLEAN<span className="text-emerald-500">AUTO</span></h1>
           <p className="text-[10px] text-emerald-100">Detailing & Lavage premium sur mesure.</p>
        </div>
      </div>
      <div className="bg-emerald-500 text-zinc-900 text-[10px] font-bold uppercase tracking-widest text-center py-2">
         Réservation Rapide 24/7
      </div>
      
      <div className="p-6">
         <h2 className="text-lg font-bold mb-4">Forfaits</h2>
         <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-zinc-700 text-[8px] px-2 py-1 font-bold">INTÉRIEUR</div>
               <div className="text-xl font-bold text-white mb-2">49€</div>
               <div className="w-full h-1 bg-zinc-700 mb-1 rounded"></div>
               <div className="w-4/5 h-1 bg-zinc-700 rounded"></div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900 to-zinc-900 p-4 rounded-xl border border-emerald-500/50 relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.2)]">
               <div className="absolute top-0 right-0 bg-emerald-500 text-[8px] text-black px-2 py-1 font-bold">PREMIUM</div>
               <div className="text-xl font-bold text-emerald-400 mb-2">129€</div>
               <div className="w-full h-1 bg-emerald-800 mb-1 rounded"></div>
               <div className="w-full h-1 bg-emerald-800 mb-1 rounded"></div>
               <div className="w-3/5 h-1 bg-emerald-800 rounded"></div>
            </div>
         </div>
      </div>
      
      <div className="mt-8 bg-black p-6">
         <div className="h-5 w-32 bg-zinc-800 mb-4 rounded"></div>
         <div className="space-y-2">
            <div className="h-8 bg-zinc-900 rounded border border-zinc-800"></div>
            <div className="h-8 bg-zinc-900 rounded border border-zinc-800"></div>
            <div className="h-10 bg-emerald-600 rounded"></div>
         </div>
      </div>
    </div>
  )
}

function ArtisanMiniSite() {
  return (
    <div className="flex flex-col bg-[#F3F4F6] text-gray-900 w-full h-[900px]">
      <div className="h-[200px] relative">
         <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" />
         <div className="absolute inset-0 flex p-4 justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
            <div className="flex items-center gap-1.5 text-white font-bold text-lg">
               <div className="w-6 h-6 bg-amber-500 flex items-center justify-center rounded"><Hammer className="w-4 h-4 text-black" /></div>
               BâtiFutur
            </div>
         </div>
         <div className="absolute bottom-4 left-4 bg-white p-3 shadow-lg rounded max-w-[80%]">
            <div className="text-[12px] font-bold mb-1">Rénovation Globale</div>
            <div className="w-full h-1 bg-gray-200 rounded mb-4"></div>
            <div className="inline-flex items-center gap-1 text-[9px] text-amber-600 font-bold uppercase">
               Demander un devis <ArrowRight className="w-3 h-3" />
            </div>
         </div>
      </div>
      
      <div className="p-6 pb-2">
         <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-amber-500"></div>
            <h2 className="text-sm font-bold">Nos Engagements</h2>
         </div>
         <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white p-3 rounded shadow-sm border border-gray-100">
               <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded flex items-center justify-center mb-2"><ShieldCheck className="w-4 h-4" /></div>
               <div className="text-[10px] font-bold">Garantie Décennale</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm border border-gray-100">
               <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded flex items-center justify-center mb-2"><Building2 className="w-4 h-4" /></div>
               <div className="text-[10px] font-bold">Matériaux Pro</div>
            </div>
         </div>
      </div>

      <div className="bg-gray-900 text-white p-6 pb-12 mt-4 relative">
         <h2 className="text-sm font-bold mb-4 text-amber-500">Estimation en Ligne</h2>
         <div className="space-y-3">
            <div className="h-8 bg-gray-800 border border-gray-700 rounded px-3 flex items-center text-[10px] text-gray-400">Type de bien</div>
            <div className="h-8 bg-gray-800 border border-gray-700 rounded px-3 flex items-center text-[10px] text-gray-400">Surface (m²)</div>
            <div className="h-10 bg-amber-500 rounded text-gray-900 font-bold text-[11px] flex items-center justify-center mt-2">DÉMARRER LE PROJET</div>
         </div>
      </div>
    </div>
  )
}
