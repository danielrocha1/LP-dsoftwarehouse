import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Gustavo Santos',
      role: 'CEO',
      company: 'LimpaKi',
      comment: 'O Daniel superou nossas expectativas no desenvolvimento do app. A arquitetura está extremamente sólida e os usuários elogiam muito a velocidade e facilidade de agendamento.',
      rating: 5,
    },
    {
      name: 'Mariana Azevedo',
      role: 'Diretora de Operações',
      company: 'Fintech Solutions',
      comment: 'Contratamos o Daniel para refatorar e reconstruir nosso dashboard web financeiro. O resultado foi um sistema premium, com carregamento de dados em tempo real e visual impecável.',
      rating: 5,
    },
    {
      name: 'Rodrigo Lima',
      role: 'Fundador',
      company: 'SaaS Flow',
      comment: 'Trabalho impecável de ponta a ponta. Comunicação clara, cumprimento rigoroso dos prazos e uma qualidade de código incrível. Recomendo fortemente para qualquer projeto complexo.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="relative py-24 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Resultados reais de projetos entregues
          </h2>
          <p className="text-gray-400 text-base">
            O que dizem os parceiros e clientes que confiaram a criação de suas soluções digitais ao meu trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-white/5 backdrop-blur-sm relative flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-800">
                <Quote size={40} className="opacity-20" />
              </div>

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed italic relative z-10">
                  "{t.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {t.role} @ <span className="text-gray-400">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
