import { motion } from 'framer-motion';
import { 
  Car, Building2, Wind, Sparkles, Hammer, 
  CheckCircle, Star, Phone, ArrowRight, ShieldCheck,
  MapPin, Clock, Mail, ChevronRight, Droplet, Calendar
} from 'lucide-react';

export function PortfolioSection() {
  const sites = [
    { 
      name: "Elite Conciergerie", 
      title: "Conciergerie", 
      desc: "Création d'un système qui rassure les propriétaires d'appartements et met en valeur les prestations.",
      tags: ["+ de leads", "Acquisition propriétaire"],
      benefits: ["Simulateur de revenus intégré", "Design rassurant et premium", "Génération de leads qualifiés"],
      result: "x2 nouveaux propriétaires/mois",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(250,250,250,0.1)] group-hover:border-white/20",
      content: <ConciergerieMiniSite />
    },
    { 
      name: "Azur Piscines", 
      title: "Construction", 
      desc: "Portfolio visuel immersif démontrant 10 ans d'expertise pour capter des études de faisabilité.",
      tags: ["Prise de rendez-vous", "Image de marque"],
      benefits: ["Galerie immersive de réalisations", "Prise de rdv automatisée", "Qualification du budget client"],
      result: "+35% de chantiers signés",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] group-hover:border-cyan-500/30",
      content: <PiscinisteMiniSite />
    },
    { 
      name: "RentLux", 
      title: "Location premium", 
      desc: "Processus de réservation 24/7 en ligne centré sur un parcours client 100% automatisé.",
      tags: ["+ de réservations", "Paiement en ligne"],
      benefits: ["Prise de rendez-vous automatique", "Gestion centralisée du calendrier", "Suivi client automatisé"],
      result: "+45% de réservations en ligne",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(217,119,6,0.15)] group-hover:border-amber-500/30",
      content: <LocationCarsMiniSite />
    },
    { 
      name: "CleanAuto", 
      title: "Centre detailing", 
      desc: "Système de vente de forfaits ultra clair avec la réservation de créneaux synchronisée.",
      tags: ["Créneaux synchronisés", "+ de CA"],
      benefits: ["Présentation claire des forfaits", "Paiement d'acompte en ligne", "Rappels SMS automatiques"],
      result: "+28% de ventes Premium",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/30",
      content: <NettoyageMiniSite />
    },
    { 
      name: "ClimPro", 
      title: "Experts Climatisation", 
      desc: "Mise en avant des interventions d'urgence avec un module de demande de devis express connecté au CRM.",
      tags: ["+ de devis", "Automatisation"],
      benefits: ["Formulaire de devis qualifiant", "Appel d'urgence 1-clic", "Intégration directe au CRM"],
      result: "+60% de demandes entrantes",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30",
      content: <ClimatisationMiniSite />
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="sites-internet">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-light/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Intro Structure */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Des sites pensés pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">convertir</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Chaque site est conçu pour attirer, convaincre et transformer vos visiteurs en clients.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-20">
          {sites.map((site, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col gap-6 group cursor-pointer w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.666rem)]"
            >
              {/* Browser Mockup */}
              <div className={`relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-700 md:group-hover:scale-[1.03] md:group-hover:-translate-y-4 shadow-xl h-[500px] md:h-[600px] flex flex-col ${site.glowColor}`}>
                
                {/* Fake browser header */}
                <div className="bg-zinc-900/90 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center gap-2 z-30 shrink-0">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto text-[10px] text-gray-400 font-mono bg-zinc-800/80 px-4 py-1 flex items-center justify-center rounded-full truncate max-w-[150px] gap-1 group-hover:text-primary-light transition-colors duration-300">
                    <ShieldCheck className="w-3 h-3 group-hover:text-primary-light text-green-400 transition-colors" />
                    {site.name.toLowerCase().replace(' ', '').replace('é', 'e')}.fr
                  </div>
                </div>
                
                {/* Content with Scroll Effect */}
                <div className="relative flex-1 overflow-y-auto md:overflow-hidden bg-black touch-pan-y scrollbar-hide">
                  <div className="w-full transition-transform duration-[8000ms] ease-linear md:group-hover:-translate-y-[calc(100%-480px)]">
                    {site.content}
                  </div>
                  {/* Faded bottom gradient inside the mockup to hint at more content */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none md:group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Storytelling Metadata */}
              <div className="px-2 flex flex-col">
                 <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {site.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-200 shadow-sm">
                         {tag}
                      </span>
                    ))}
                    <div className="ml-auto text-xs font-black text-primary-light px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20 animate-pulse-slow">
                      {site.result}
                    </div>
                 </div>
                 
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-primary-light transition-colors duration-300 flex items-center flex-wrap gap-2">
                    {site.name} <span className="text-gray-400 font-medium text-lg ml-1">— {site.title}</span>
                 </h3>
                 
                 <p className="text-base text-gray-400 font-medium leading-relaxed mb-4">
                    {site.desc}
                 </p>
                 
                 <ul className="space-y-2 mt-auto pt-4 border-t border-white/5">
                    {site.benefits.map((benefit, idx) => (
                       <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                       </li>
                    ))}
                 </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------------------------- //
// REUSABLE MINI COMPONENTS FOR SITES
// -------------------------------------------------------------------------------- //

const FakeStars = () => (
  <div className="flex gap-0.5 text-amber-500 mb-2">
    <Star className="w-3 h-3 fill-current" />
    <Star className="w-3 h-3 fill-current" />
    <Star className="w-3 h-3 fill-current" />
    <Star className="w-3 h-3 fill-current" />
    <Star className="w-3 h-3 fill-current" />
  </div>
);

// -------------------------------------------------------------------------------- //
// MINI SITES COMPONENTS
// -------------------------------------------------------------------------------- //

function LocationCarsMiniSite() {
  return (
    <div className="flex flex-col bg-zinc-950 text-white w-full">
      {/* Hero */}
      <div className="relative h-[250px] bg-black overflow-hidden flex flex-col justify-center px-6">
        <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Luxe car" />
        <div className="relative z-10 w-full">
          <Car className="w-6 h-6 text-amber-500 mb-2" />
          <h1 className="text-xl font-bold mb-1">Prestige Fleet</h1>
          <p className="text-[10px] text-gray-300 mb-4 max-w-[80%]">Louez l'excellence. Flotte premium disponible 24/7 avec chauffeur privé en option.</p>
          <div className="w-24 py-1.5 bg-amber-500 text-black text-[9px] font-bold text-center rounded cursor-pointer">
            RÉSERVER
          </div>
        </div>
      </div>
      
      {/* Services */}
      <div className="py-6 px-4 bg-zinc-900 border-b border-white/5">
        <div className="text-center mb-4">
           <h2 className="text-sm font-bold text-amber-500">Nos Services Premium</h2>
           <p className="text-[9px] text-gray-400">Le luxe à votre portée</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
           <div className="bg-black p-3 rounded border border-white/10">
              <Clock className="w-4 h-4 text-white mb-2" />
              <div className="text-[10px] font-bold mb-1">Location 24h</div>
              <div className="text-[8px] text-gray-400">Disponibilité immédiate de votre véhicule.</div>
           </div>
           <div className="bg-black p-3 rounded border border-white/10">
              <Building2 className="w-4 h-4 text-white mb-2" />
              <div className="text-[10px] font-bold mb-1">Chauffeur Privé</div>
              <div className="text-[8px] text-gray-400">Professionnels bilingues certifiés.</div>
           </div>
        </div>
      </div>

      {/* Avantages */}
      <div className="py-6 px-4 bg-black">
        <h2 className="text-sm font-bold mb-3">Pourquoi nous choisir ?</h2>
        <ul className="space-y-3">
           <li className="flex gap-2 items-start"><CheckCircle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" /><span className="text-[10px] text-gray-300">Flotte renouvelée tous les 12 mois pour un confort absolu.</span></li>
           <li className="flex gap-2 items-start"><CheckCircle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" /><span className="text-[10px] text-gray-300">Discrétion et professionnalisme garantis.</span></li>
           <li className="flex gap-2 items-start"><CheckCircle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" /><span className="text-[10px] text-gray-300">Assurance multirisques premium incluse.</span></li>
        </ul>
      </div>

      {/* Témoignages */}
      <div className="py-6 px-4 bg-gradient-to-b from-zinc-900 to-black">
         <div className="text-center mb-4">
            <h2 className="text-sm font-bold">Ils nous font confiance</h2>
         </div>
         <div className="bg-zinc-800/50 p-4 rounded-xl border border-white/5 relative">
            <FakeStars />
            <p className="text-[9px] text-gray-300 italic mb-2">"Une expérience incroyable. Le service client est irréprochable et les véhicules sont dans un état clinique. Mon week-end a été parfait."</p>
            <div className="text-[10px] font-bold text-amber-500">- Marc Dubois, Entrepreneur</div>
         </div>
      </div>

      {/* CTA */}
      <div className="py-8 px-4 bg-amber-500 text-black text-center">
         <h2 className="text-sm font-black uppercase tracking-wide mb-2">Prêt à vivre l'expérience ?</h2>
         <p className="text-[9px] mb-4 font-medium">Réservez votre véhicule d'exception dès maintenant.</p>
         <button className="bg-black text-white text-[10px] px-6 py-2 rounded font-bold uppercase hover:bg-zinc-900">Prendre un rendez-vous</button>
      </div>

      {/* Footer */}
      <div className="pt-6 pb-4 px-4 bg-zinc-950 text-[8px] text-gray-500 border-t border-white/10 text-center">
         <div className="flex justify-center gap-4 mb-4">
            <span>Accueil</span>
            <span>Flotte</span>
            <span>Contact</span>
         </div>
         <div>© {new Date().getFullYear()} Prestige Fleet. Tous droits réservés.</div>
      </div>
    </div>
  )
}

function ConciergerieMiniSite() {
  return (
    <div className="flex flex-col bg-[#FAFAFA] text-zinc-900 w-full">
      <div className="px-4 py-3 flex justify-between items-center border-b border-zinc-200 bg-white">
         <div className="text-xs font-bold tracking-widest uppercase">Elite</div>
         <div className="w-16 h-2 bg-zinc-200 rounded"></div>
      </div>
      
      {/* Hero */}
      <div className="relative h-[220px] bg-stone-200 flex flex-col justify-end p-6 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Hotel room" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-2xl font-serif mb-1">Service 5 Étoiles</h1>
          <p className="text-[10px] text-zinc-300 font-light max-w-[90%] mb-3">Votre bien immobilier géré avec le plus grand soin par des professionnels de l'hôtellerie.</p>
        </div>
      </div>

      {/* Services */}
      <div className="px-4 py-8 bg-white">
        <div className="text-center mb-6">
          <p className="text-[8px] uppercase tracking-widest text-stone-500 mb-1">Nos prestations</p>
          <h2 className="text-sm font-serif">Gestion Complète</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
           {[
             { title: 'Check In/Out', desc: 'Accueil personnalisé' }, 
             { title: 'Ménage Pro', desc: 'Nettoyage hôtelier' }, 
             { title: 'Maintenance', desc: 'Intervention rapide 24/7' }, 
             { title: 'Prix Dynamique', desc: 'Optimisation des revenus' }
           ].map((srv, i) => (
             <div key={i} className="bg-stone-50 p-4 border border-stone-100 flex flex-col items-center text-center shadow-sm rounded-lg hover:shadow-md transition-shadow">
               <CheckCircle className="w-5 h-5 text-stone-600 mb-2" />
               <div className="text-[10px] font-bold mb-1">{srv.title}</div>
               <div className="text-[8px] text-stone-500">{srv.desc}</div>
             </div>
           ))}
        </div>
      </div>

      {/* Avantages */}
      <div className="py-8 px-5 bg-stone-900 text-stone-100">
         <h2 className="text-sm font-serif mb-4">L'Avantage Elite</h2>
         <div className="space-y-4">
            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0">1</div>
               <div>
                  <div className="text-[11px] font-bold mb-1 text-white">Revenus maximisés</div>
                  <div className="text-[9px] text-stone-400">Jusqu'à +30% de chiffre d'affaires grâce à notre tarification algorithmique.</div>
               </div>
            </div>
            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0">2</div>
               <div>
                  <div className="text-[11px] font-bold mb-1 text-white">Tranquillité d'esprit</div>
                  <div className="text-[9px] text-stone-400">Nous nous occupons de chaque détail, de la communication aux dépannages.</div>
               </div>
            </div>
         </div>
      </div>

      {/* Testimonials */}
      <div className="py-8 px-4 bg-stone-50">
         <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
            <FakeStars />
            <p className="text-[10px] text-stone-600 leading-relaxed mb-3">"Depuis que j'ai confié mon appartement à Elite, je ne me soucie plus de rien. Mes notes sur Airbnb sont passées à 4.9 et mes revenus ont explosé."</p>
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded-full bg-stone-200 shrink-0"></div>
               <div>
                  <div className="text-[9px] font-bold">Claire V.</div>
                  <div className="text-[8px] text-stone-400">Propriétaire à Paris</div>
               </div>
            </div>
         </div>
      </div>

      {/* CTA */}
      <div className="bg-stone-900 text-white p-8 text-center">
        <h2 className="text-sm font-serif mb-2">Prêt à déléguer ?</h2>
        <div className="text-[9px] mb-4 text-stone-300">Estimez vos revenus potentiels en quelques clics.</div>
        <button className="px-6 py-2.5 bg-white text-stone-900 text-[10px] font-bold tracking-widest hover:bg-stone-200 transition-colors uppercase">Prendre un rendez-vous</button>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-stone-200 text-center py-6 text-[8px] text-stone-400">
         <p>© {new Date().getFullYear()} Elite Conciergerie.</p>
      </div>
    </div>
  )
}

function ClimatisationMiniSite() {
  return (
    <div className="flex flex-col bg-slate-50 text-slate-800 w-full">
      <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center h-8">
        <div className="text-[11px] font-bold flex items-center gap-1"><Wind className="w-3 h-3" /> ClimPro</div>
        <div className="bg-white text-blue-600 px-2 py-0.5 text-[8px] font-bold rounded-full flex items-center gap-1">
          <Phone className="w-2 h-2" /> 01 23 45 67 89
        </div>
      </div>
      
      {/* Hero */}
      <div className="relative h-[220px]">
        <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover brightness-75" alt="HVAC System" />
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center p-5 text-white">
          <div className="bg-blue-500 text-[8px] uppercase px-1.5 py-0.5 rounded w-max mb-2 font-bold tracking-wider shadow-lg">Intervention 24/7</div>
          <h1 className="text-2xl font-black mb-2 leading-tight">Votre Confort Thermique.</h1>
          <p className="text-[10px] w-[90%] text-blue-100">Installation, entretien et dépannage de pompes à chaleur et climatisations.</p>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex justify-center -mt-4 relative z-10 px-4 gap-2">
        <div className="bg-white p-2.5 rounded shadow-lg border-b-2 border-blue-600 flex-1 text-center text-[10px] font-bold text-blue-900">Dépannage</div>
        <div className="bg-white p-2.5 rounded shadow-lg flex-1 text-center text-[10px] font-bold text-slate-500">Installation</div>
      </div>
      
      {/* Services */}
      <div className="p-5 mt-4 text-center">
        <h2 className="text-sm font-bold text-blue-900 mb-4">Nos Spécialités</h2>
        <div className="grid grid-cols-2 gap-3 text-left">
           <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <Sparkles className="w-4 h-4 text-blue-500 mb-2" />
              <h3 className="text-[10px] font-bold mb-1">Entretien Annuel</h3>
              <p className="text-[8px] text-slate-500">Assurez la longévité de votre appareil.</p>
           </div>
           <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-blue-500 mb-2" />
              <h3 className="text-[10px] font-bold mb-1">Dépannage Urgent</h3>
              <p className="text-[8px] text-slate-500">Intervention dans l'heure garantie.</p>
           </div>
        </div>
      </div>

      {/* Avantages */}
      <div className="bg-white py-6 px-5 border-y border-slate-200">
         <h2 className="text-sm font-bold text-blue-900 mb-3">L'engagement ClimPro</h2>
         <ul className="space-y-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /><span className="text-[10px] font-medium">Devis gratuit et transparent</span></li>
            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /><span className="text-[10px] font-medium">Artisans certifiés RGE QualiPAC</span></li>
            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /><span className="text-[10px] font-medium">SAV réactif 7j/7</span></li>
         </ul>
      </div>

      {/* Témoignages */}
      <div className="p-5 bg-slate-50">
         <div className="bg-blue-900 text-white p-4 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
               <Wind className="w-24 h-24 transform translate-x-4 -translate-y-4" />
            </div>
            <FakeStars />
            <p className="text-[10px] relative z-10 italic">"Très professionnel. Ils sont intervenus un dimanche après-midi pour réparer ma clim en pleine canicule. Je recommande les yeux fermés."</p>
            <div className="mt-2 text-[9px] font-bold text-blue-300">- Famille Martin, Lyon</div>
         </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white p-6 text-center mt-2">
         <h3 className="text-sm font-bold mb-2">Besoin d'un expert ?</h3>
         <button className="w-full h-10 bg-blue-600 flex items-center justify-center text-[10px] font-bold rounded uppercase hover:bg-blue-500 transition-colors">Prendre un rendez-vous</button>
      </div>

      <div className="bg-slate-950 text-slate-500 text-[8px] py-4 text-center">
         © ClimPro {new Date().getFullYear()}
      </div>
    </div>
  )
}

function PiscinisteMiniSite() {
  return (
    <div className="flex flex-col bg-white text-cyan-950 w-full">
      {/* Header */}
      <div className="h-12 bg-white/90 backdrop-blur absolute top-0 w-full flex items-center justify-between px-5 z-50 border-b border-cyan-100 shadow-sm">
         <div className="text-cyan-600 font-bold text-sm">Azur<span className="font-light">Piscines</span></div>
         <div className="bg-cyan-50 text-cyan-700 px-3 py-1 text-[9px] font-bold rounded-full border border-cyan-200 uppercase">Projet</div>
      </div>
      
      {/* Hero */}
      <div className="relative h-[280px] pt-12">
        <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Pool construction" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/90 via-cyan-950/20 to-transparent"></div>
        <div className="absolute bottom-6 left-5 text-white pr-5">
           <h1 className="text-2xl font-light leading-tight mb-2">Donnez vie au <br/><span className="font-bold">bassin de vos rêves</span></h1>
           <div className="w-10 h-1 bg-cyan-400 mb-3 rounded-full"></div>
           <p className="text-[10px] text-cyan-50">Design, construction et rénovation haut de gamme.</p>
        </div>
      </div>
      
      {/* Services / Processus */}
      <div className="px-5 py-8 bg-cyan-50">
         <h2 className="text-center text-xs font-bold text-cyan-800 uppercase tracking-widest mb-6">Notre Méthode</h2>
         <div className="space-y-4 relative">
            <div className="absolute left-[13px] top-4 bottom-4 w-[2px] bg-cyan-200"></div>
            {[
              { title: "Étude 3D & Devis", desc: "Modélisation parfaite de votre projet" },
              { title: "Terrassement", desc: "Préparation soignée du terrain" },
              { title: "Livraison", desc: "Mise en eau et formation domotique" }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 relative z-10 bg-white p-3 rounded-lg shadow-sm border border-cyan-100">
                <div className="w-7 h-7 rounded-full bg-cyan-500 text-white flex items-center justify-center text-[12px] font-bold shrink-0 shadow-md">{i+1}</div>
                <div className="pt-0.5">
                  <div className="text-[11px] font-bold text-cyan-900">{step.title}</div>
                  <div className="text-[9px] text-cyan-700">{step.desc}</div>
                </div>
              </div>
            ))}
         </div>
      </div>

      {/* Avantages */}
      <div className="p-5 bg-white">
        <h2 className="text-sm font-bold text-cyan-900 mb-4">L'excellence Azur</h2>
        <div className="grid grid-cols-2 gap-2 text-center">
           <div className="bg-cyan-50 p-3 rounded border border-cyan-100">
              <Droplet className="w-5 h-5 text-cyan-500 mx-auto mb-1" />
              <div className="text-[10px] font-bold">Eau Cristalline</div>
           </div>
           <div className="bg-cyan-50 p-3 rounded border border-cyan-100">
              <ShieldCheck className="w-5 h-5 text-cyan-500 mx-auto mb-1" />
              <div className="text-[10px] font-bold">Garantie 10 ans</div>
           </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="p-5 bg-cyan-950 text-white text-center">
         <FakeStars />
         <h3 className="text-[11px] font-bold mb-2">"Un travail d'orfèvre"</h3>
         <p className="text-[9px] text-cyan-100 italic">"L'équipe a métamorphosé notre jardin. Du design à la réalisation, tout a été parfait. La piscine connectée est un vrai plus au quotidien."</p>
         <div className="text-[8px] mt-2 opacity-60">S. Dubois, Propriétaire</div>
      </div>

      {/* CTA */}
      <div className="p-6 bg-cyan-50 text-center">
         <div className="bg-cyan-900 border-2 border-cyan-400 rounded-xl p-5 shadow-xl">
            <div className="text-[14px] text-white font-bold mb-1">Ouvrez le dialogue</div>
            <div className="text-[9px] text-cyan-200 mb-4">Étude de faisabilité offerte</div>
            <button className="w-full bg-cyan-400 text-cyan-950 text-[10px] py-2.5 rounded font-bold uppercase tracking-wide hover:bg-cyan-300">Prendre un rendez-vous</button>
         </div>
      </div>
    </div>
  )
}

function NettoyageMiniSite() {
  return (
    <div className="flex flex-col bg-zinc-950 text-zinc-100 w-full">
      {/* Hero Section */}
      <div className="relative h-[280px] overflow-hidden bg-zinc-900 border-b border-emerald-900/20">
        <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Car washing" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-zinc-950"></div>
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
           <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Sparkles className="w-6 h-6 text-black" />
           </div>
           <h1 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-2 text-white">CLEAN<span className="text-emerald-500">AUTO</span></h1>
           <p className="text-[11px] text-emerald-100/90 font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-emerald-500/20">Detailing & Lavage Premium</p>
        </div>
      </div>
      
      {/* Action Bar - Clean & Non-Overlapping */}
      <div className="bg-zinc-950 px-5 pt-8 pb-4 relative z-20">
        <div className="flex gap-3">
          <button className="flex-1 bg-emerald-500 hover:bg-emerald-400 transition-colors text-black font-bold text-[11px] py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 uppercase tracking-widest flex items-center justify-center gap-2">
            PRENDRE RDV <ArrowRight className="w-3 h-3" />
          </button>
          <button className="w-12 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center text-emerald-500 hover:bg-zinc-700 hover:text-white transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Services / Forfaits */}
      <div className="px-5 pb-8 pt-4 bg-zinc-950 relative z-10 w-full">
         <div className="flex justify-between items-end mb-5">
            <h2 className="text-[13px] uppercase tracking-widest font-bold text-white/90">Nos Forfaits</h2>
            <span className="text-[10px] text-emerald-500 font-bold cursor-pointer hover:text-emerald-400">VOIR TOUT</span>
         </div>
         <div className="space-y-5">
            <div className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800/80 relative overflow-hidden transition-transform hover:scale-[1.02] hover:border-zinc-700">
               <div className="absolute top-0 right-0 bg-zinc-800/80 text-[8px] px-3 py-1.5 font-bold tracking-widest text-zinc-300 rounded-bl-lg">CLASSIQUE</div>
               <div className="text-2xl font-black text-white mb-2">49€</div>
               <div className="text-[10px] leading-relaxed text-gray-400 mb-2">Aspiration complète, plastiques, vitres intérieures/extérieures, et lavage extérieur à la main minutieux.</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/30 to-zinc-900 p-5 rounded-2xl border border-emerald-500/40 relative overflow-hidden shadow-[0_0_25px_rgba(16,185,129,0.1)] transition-transform hover:scale-[1.02]">
               <div className="absolute top-0 right-0 bg-emerald-500 text-[8px] text-black px-3 py-1.5 font-bold tracking-widest rounded-bl-lg">PREMIUM</div>
               <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 animate-[shimmer_3s_infinite] pointer-events-none"></div>
               <div className="text-2xl font-black text-emerald-400 mb-2 relative z-10">129€</div>
               <div className="text-[10px] leading-relaxed text-emerald-100/70 mb-2 relative z-10">Nettoyage Classique + Shampoing complet des sièges, pressing moquettes en profondeur, cire hydro-déperlante longue durée.</div>
            </div>
         </div>
      </div>

      {/* Avantages */}
      <div className="py-6 px-6 bg-black border-y border-white/5">
        <h2 className="text-sm font-bold mb-4 text-emerald-500">La Qualité CleanAuto</h2>
        <div className="grid grid-cols-2 gap-4">
           <div className="text-center">
              <div className="w-10 h-10 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-emerald-500/30 mb-2">
                 <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="text-[10px] font-bold">Produits Pro</div>
              <div className="text-[8px] text-gray-500 mt-1">Gamme Meguiar's & Koch Chemie</div>
           </div>
           <div className="text-center">
              <div className="w-10 h-10 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-emerald-500/30 mb-2">
                 <Clock className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="text-[10px] font-bold">Rapide</div>
              <div className="text-[8px] text-gray-500 mt-1">Intervention sur site ou à domicile</div>
           </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="p-6 bg-zinc-900">
         <div className="bg-black p-4 rounded-lg border border-zinc-800 border-l-2 border-l-emerald-500">
            <FakeStars />
            <p className="text-[10px] italic text-zinc-300">"Ma Twingo est ressortie dans l'état où elle était le jour de la concession. Le forfait Premium vaut largement son prix !"</p>
         </div>
      </div>
      
      {/* CTA */}
      <div className="bg-black px-6 py-8 text-center border-t border-white/5">
         <h2 className="text-sm font-bold text-white mb-2">Ne laissez pas la saleté s'installer</h2>
         <button className="w-full bg-emerald-500 text-black font-bold uppercase tracking-wider text-[10px] py-3 rounded hover:bg-emerald-400 transition-colors">Prendre un rendez-vous</button>
      </div>

      {/* Footer */}
      <div className="bg-zinc-950 py-4 text-center text-[8px] text-zinc-600">
         CleanAuto © {new Date().getFullYear()}
      </div>
    </div>
  )
}

function ArtisanMiniSite() {
  return (
    <div className="flex flex-col bg-[#F3F4F6] text-gray-900 w-full">
      {/* Hero */}
      <div className="h-[220px] relative">
         <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Construction" />
         <div className="absolute inset-0 flex p-4 justify-between items-start bg-gradient-to-b from-black/80 via-black/40 to-transparent">
            <div className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
               <div className="w-7 h-7 bg-amber-500 flex items-center justify-center rounded shadow-lg"><Hammer className="w-4 h-4 text-gray-900" /></div>
               BâtiFutur
            </div>
         </div>
         <div className="absolute bottom-4 left-4 right-4 bg-white p-4 shadow-xl rounded-lg border border-gray-100">
            <div className="text-[14px] font-black uppercase text-gray-900 mb-1">Rénovation Globale</div>
            <div className="text-[10px] text-gray-500 mb-3">Donnez une nouvelle vie à votre habitat.</div>
            <div className="w-full h-1 bg-gray-100 rounded mb-3 overflow-hidden">
               <div className="h-full bg-amber-500 w-1/3"></div>
            </div>
            <button className="w-full bg-gray-900 text-white py-2 rounded text-[9px] font-bold uppercase hover:bg-amber-500 hover:text-black transition-colors">
               Demander une estimation
            </button>
         </div>
      </div>
      
      {/* Services */}
      <div className="p-6 mt-6">
         <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 bg-amber-500"></div>
            <h2 className="text-sm font-bold uppercase tracking-wide">Expertises</h2>
         </div>
         <div className="grid grid-cols-2 gap-3 mb-2">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-amber-400 transition-colors">
               <Building2 className="w-5 h-5 text-amber-500 mb-2" />
               <div className="text-[11px] font-bold mb-1">Gros Œuvre</div>
               <div className="text-[8px] text-gray-500">Extensions, maçonnerie, fondations.</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-amber-400 transition-colors">
               <div className="w-5 h-5 mb-2"><svg className="text-amber-500 w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg></div>
               <div className="text-[11px] font-bold mb-1">Second Œuvre</div>
               <div className="text-[8px] text-gray-500">Isolation, électricité, plomberie.</div>
            </div>
         </div>
      </div>

      {/* Avantages */}
      <div className="px-6 py-6 border-y border-gray-200 bg-white">
         <h2 className="text-sm font-bold mb-4">Nos Engagements</h2>
         <div className="flex bg-gray-50 p-3 rounded border border-gray-100 gap-3 items-center mb-3">
            <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
            <div>
               <div className="text-[10px] font-bold">Garantie Décennale</div>
               <div className="text-[9px] text-gray-500">Protégé pour les 10 prochaines années</div>
            </div>
         </div>
         <div className="flex bg-gray-50 p-3 rounded border border-gray-100 gap-3 items-center">
            <Clock className="w-6 h-6 text-amber-600 shrink-0" />
            <div>
               <div className="text-[10px] font-bold">Respect des délais</div>
               <div className="text-[9px] text-gray-500">Planning rigoureux garanti sur contrat</div>
            </div>
         </div>
      </div>

      {/* Témoignages */}
      <div className="py-6 px-6 bg-gray-100 text-center">
         <FakeStars />
         <p className="text-[10px] italic font-medium text-gray-700">"Travail sérieux, équipe ponctuelle et chantier rendu impeccable. L'extension de notre salon correspond exactement à ce que nous voulions."</p>
         <div className="text-[9px] font-bold text-gray-900 mt-2">Albert H.</div>
      </div>

      {/* CTA Estimator */}
      <div className="bg-gray-950 text-white p-6 relative">
         <h2 className="text-sm font-bold mb-2 text-amber-500">Estimation en Ligne</h2>
         <p className="text-[9px] text-gray-400 mb-4">Obtenez un pré-chiffrage gratuit.</p>
         <div className="space-y-3">
            <div className="h-9 bg-gray-900 border border-gray-800 rounded px-3 flex justify-between items-center text-[10px] text-gray-400">
               Type de projet <ChevronRight className="w-3 h-3" />
            </div>
            <div className="h-9 bg-gray-900 border border-gray-800 rounded px-3 flex justify-between items-center text-[10px] text-gray-400">
               Surface concernée <ChevronRight className="w-3 h-3" />
            </div>
            <button className="w-full h-10 bg-amber-500 rounded hover:bg-amber-400 text-gray-900 font-bold text-[10px] uppercase tracking-wide mt-2">Démarrer le projet</button>
            <button className="w-full h-10 text-white border border-gray-700 rounded text-[10px] uppercase font-bold hover:bg-gray-800">Prendre un rendez-vous</button>
         </div>
      </div>

      {/* Footer */}
      <div className="bg-white py-4 text-center text-[8px] text-gray-500 border-t border-gray-200">
         <p>BâtiFutur © {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
