import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'Sistemas Web',
    budget: 'R$ 5k - R$ 15k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    // We can simulate an API submission and then open WhatsApp with pre-filled message
    const whatsappMessage = encodeURIComponent(
      `Olá Daniel! Sou o(a) ${formData.name}. Gostaria de solicitar um orçamento para um projeto de ${formData.projectType}.\n\n*Detalhes do projeto:* ${formData.message}\n*Budget estimado:* ${formData.budget}\n*Contato:* ${formData.contact}`
    );
    
    // Set success state
    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/5521988628452?text=${whatsappMessage}`, '_blank');
    }, 1500);
  };

  const projectOptions = ['Sistemas Web', 'Aplicativos Mobile', 'Landing Page', 'Automação / API', 'Outro'];
  const budgetOptions = ['Até R$ 5k', 'R$ 5k - R$ 15k', 'R$ 15k - R$ 30k', 'Acima de R$ 30k'];

  return (
    <section id="contato" className="relative py-24 bg-gray-950/40 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
                Contato
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Tem uma ideia? <br /> Vamos transformar em realidade.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Preencha o formulário ao lado para solicitar uma estimativa ou agendar um bate-papo sem compromisso. Retorno em até 24 horas.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-cyan-400 group-hover:bg-cyan-950/30 group-hover:border-cyan-500/30 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">E-mail</p>
                  <a href="mailto:daniel.rochats@gmail.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    daniel.rochats@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-violet-400 group-hover:bg-violet-950/30 group-hover:border-violet-500/30 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">WhatsApp</p>
                  <a href="https://wa.me/5521988628452" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-violet-400 transition-colors">
                    +55 (21) 98862-8452
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-pink-400 group-hover:bg-pink-950/30 group-hover:border-pink-500/30 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Localização</p>
                  <p className="text-sm font-semibold text-white">
                    Rio de Janeiro, Maricá
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-gray-900/20 border border-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Seu nome *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: João Silva"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
                      />
                    </div>

                    {/* Email / Whatsapp */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">E-mail ou WhatsApp *</label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Ex: (11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Project type */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tipo de projeto</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-all duration-200"
                      >
                        {projectOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-gray-950">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget range */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Budget estimado</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-violet-500 transition-all duration-200"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-gray-950">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Fale um pouco sobre a ideia</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva brevemente o objetivo do sistema, principais recursos e o que você precisa..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white font-bold bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] flex items-center justify-center gap-2 group"
                  >
                    Solicitar orçamento
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                >
                  <div className="p-4 bg-green-950/40 border border-green-500/30 text-green-400 rounded-full animate-bounce">
                    <CheckCircle2 size={48} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Solicitação enviada!</h3>
                    <p className="text-gray-400 text-sm max-w-sm">
                      Você está sendo redirecionado para o WhatsApp para conversarmos em tempo real.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
