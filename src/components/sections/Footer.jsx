import { useState } from 'react';
import { motion } from 'framer-motion';
import { CtaButton } from '../ui/CtaButton';

export function Footer() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    activite: '',
    entreprise: '',
    besoin: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = "L'email est requis";
    if (!formData.telephone) newErrors.telephone = "Le téléphone est requis";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Logic d'envoi ici (ex: API)
    alert("Formulaire validé avec succès !");
  };

  return (
    <footer className="relative bg-background pt-24 pb-12 border-t border-white/5 overflow-hidden" id="contact">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/10 blur-[100px] pointer-events-none rounded-[100%]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            >
              "Expliquez-moi votre situation."
            </motion.h2>
            <p className="text-gray-400 text-lg">
              Remplissez ces informations pour que je comprenne votre situation avant notre échange.
            </p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Prénom</label>
                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" placeholder="Votre prénom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nom</label>
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" placeholder="Votre nom" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email <span className="text-red-400">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300`} placeholder="exemple@email.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Téléphone <span className="text-red-400">*</span></label>
                <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className={`w-full bg-white/5 border ${errors.telephone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300`} placeholder="06 00 00 00 00" />
                {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">Votre activité</label>
              <select name="activite" value={formData.activite} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none">
                <option value="" className="bg-surface text-gray-500">Sélectionnez une option</option>
                <option value="Location de voitures" className="bg-surface">Location de voitures</option>
                <option value="Conciergerie immobilière" className="bg-surface">Conciergerie immobilière</option>
                <option value="Artisan du bâtiment" className="bg-surface">Artisan du bâtiment</option>
                <option value="Climatisation" className="bg-surface">Climatisation</option>
                <option value="Pisciniste" className="bg-surface">Pisciniste</option>
                <option value="Nettoyage automobile" className="bg-surface">Nettoyage automobile</option>
                <option value="Autre" className="bg-surface">Autre</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">Type d'entreprise</label>
              <select name="entreprise" value={formData.entreprise} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none">
                <option value="" className="bg-surface text-gray-500">Sélectionnez une option</option>
                <option value="Indépendant" className="bg-surface">Indépendant</option>
                <option value="Petite entreprise" className="bg-surface">Petite entreprise</option>
                <option value="PME" className="bg-surface">PME</option>
                <option value="Autre" className="bg-surface">Autre</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">Besoin principal</label>
              <select name="besoin" value={formData.besoin} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none">
                <option value="" className="bg-surface text-gray-500">Sélectionnez un besoin</option>
                <option value="Perte de temps sur tâches répétitives" className="bg-surface">Perte de temps sur tâches répétitives</option>
                <option value="Trop d'appels manqués" className="bg-surface">Trop d'appels manqués</option>
                <option value="Difficulté à gérer les demandes clients" className="bg-surface">Difficulté à gérer les demandes clients</option>
                <option value="Manque d'organisation" className="bg-surface">Manque d'organisation</option>
                <option value="Pas assez de clients" className="bg-surface">Pas assez de clients</option>
                <option value="Trop de relances" className="bg-surface">Trop de relances</option>
                <option value="Autre" className="bg-surface">Autre</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-400 mb-2">Expliquez votre situation</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none" placeholder="Vos objectifs, vos difficultés..."></textarea>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <button 
                type="submit"
                className="w-full md:w-auto relative inline-flex items-center justify-center px-12 py-5 font-bold rounded-full transition-all duration-300 bg-accent hover:bg-accent-hover text-surface shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] animate-glow hover:scale-105 active:scale-95"
              >
                Je prends rendez-vous
              </button>
              
              <p className="text-gray-500 text-sm italic">
                Si vous préférez, vous pouvez directement m'appeler sans remplir ce formulaire.
              </p>
              
              <div className="flex items-center gap-4 mt-2">
                <CtaButton href="tel:0615940884" type="secondary" className="px-6 py-2 text-sm border-white/5">
                  M'appeler
                </CtaButton>
              </div>
            </div>
          </motion.form>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>
            <span className="font-bold text-gray-300">DIGITAL PULSE AGENCY</span> © {new Date().getFullYear()}
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
