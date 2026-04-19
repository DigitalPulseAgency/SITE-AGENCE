import { useState } from 'react';
import { motion } from 'framer-motion';

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

    alert("Formulaire validé avec succès !");
  };

  const inputClasses = "w-full bg-bg-alt border border-line rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-purple-deep focus:ring-1 focus:ring-purple-deep transition-all duration-300";

  return (
    <footer className="relative bg-bg pt-24" id="contact">
      <div className="container mx-auto px-6 relative z-10 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 leading-tight text-ink"
            >
              "Expliquez-moi votre situation."
            </motion.h2>
            <p className="text-ink-secondary text-lg">
              Remplissez ces informations pour que je comprenne votre situation avant notre échange.
            </p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-bg-card p-8 md:p-10 rounded-3xl border border-line shadow-[0_4px_16px_-4px_rgba(26,21,48,0.08)] relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-2">Prénom</label>
                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className={inputClasses} placeholder="Votre prénom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-2">Nom</label>
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} className={inputClasses} placeholder="Votre nom" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-2">Email <span className="text-error">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-bg-alt border ${errors.email ? 'border-error' : 'border-line'} rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-purple-deep focus:ring-1 focus:ring-purple-deep transition-all duration-300`} placeholder="exemple@email.com" />
                {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-2">Téléphone <span className="text-error">*</span></label>
                <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className={`w-full bg-bg-alt border ${errors.telephone ? 'border-error' : 'border-line'} rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-purple-deep focus:ring-1 focus:ring-purple-deep transition-all duration-300`} placeholder="06 00 00 00 00" />
                {errors.telephone && <p className="text-error text-xs mt-1">{errors.telephone}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-ink-secondary mb-2">Votre activité</label>
              <select name="activite" value={formData.activite} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                <option value="" className="bg-bg-card">Sélectionnez une option</option>
                <option value="Conciergerie immobilière" className="bg-bg-card">Conciergerie immobilière</option>
                <option value="Location de voitures" className="bg-bg-card">Location de voitures</option>
                <option value="Nettoyage automobile" className="bg-bg-card">Nettoyage automobile</option>
                <option value="Artisan du bâtiment" className="bg-bg-card">Artisan du bâtiment</option>
                <option value="Autre" className="bg-bg-card">Autre</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-ink-secondary mb-2">Type d'entreprise</label>
              <select name="entreprise" value={formData.entreprise} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                <option value="" className="bg-bg-card">Sélectionnez une option</option>
                <option value="Indépendant" className="bg-bg-card">Indépendant</option>
                <option value="Petite entreprise" className="bg-bg-card">Petite entreprise</option>
                <option value="PME" className="bg-bg-card">PME</option>
                <option value="Autre" className="bg-bg-card">Autre</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-ink-secondary mb-2">Besoin principal</label>
              <select name="besoin" value={formData.besoin} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                <option value="" className="bg-bg-card">Sélectionnez un besoin</option>
                <option value="Je veux développer mon audience" className="bg-bg-card">Je veux développer mon audience</option>
                <option value="Je n'ai pas le temps pour mes réseaux" className="bg-bg-card">Je n'ai pas le temps pour mes réseaux</option>
                <option value="Je veux déléguer ma création de contenu IA" className="bg-bg-card">Je veux déléguer ma création de contenu IA</option>
                <option value="Autre" className="bg-bg-card">Autre</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-ink-secondary mb-2">Expliquez votre situation</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className={`${inputClasses} resize-none`} placeholder="Vos objectifs, vos difficultés..."></textarea>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <button 
                type="submit"
                className="w-full md:w-auto relative inline-flex items-center justify-center px-12 py-5 font-bold rounded-full transition-all duration-300 bg-gradient-to-r from-purple-deep to-purple-signa text-white shadow-[0_16px_40px_-12px_rgba(91,63,217,0.5)] hover:shadow-[0_16px_40px_-8px_rgba(91,63,217,0.6)] hover:-translate-y-1"
              >
                Je prends rendez-vous
              </button>
              
              <p className="text-ink-tertiary text-sm italic">
                Si vous préférez, vous pouvez directement m'appeler sans remplir ce formulaire.
              </p>
              
              <div className="flex items-center gap-4 mt-2">
                <a href="tel:0615940884" className="px-6 py-2.5 text-sm font-semibold rounded-full bg-bg-alt border border-line text-ink hover:bg-line transition-colors">
                  M'appeler
                </a>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      <div className="w-full bg-ink pt-12 pb-12 mt-12 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div>
            <span className="font-bold text-white/80">DIGITAL PULSE AGENCY</span> © {new Date().getFullYear()}
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
