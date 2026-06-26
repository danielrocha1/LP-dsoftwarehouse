import { motion } from 'framer-motion';
import { LayoutGrid, Smartphone, Target, Cpu } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge: string;
}

export default function Services() {
  const services: Service[] = [
    {
      icon: <LayoutGrid className="text-violet-400" size={32} />,
      title: 'Desenvolvimento de Sistemas',
      desc: 'Sistemas web personalizados e robustos, otimizados para a gestão e crescimento de empresas de diversos setores.',
      badge: 'Sistemas Web',
    },
    {
      icon: <Smartphone className="text-cyan-400" size={32} />,
      title: 'Aplicativos Mobile',
      desc: 'Aplicativos Android e iOS modernos, rápidos e focados em oferecer a melhor experiência para os usuários finais.',
      badge: 'Android & iOS',
    },
    {
      icon: <Target className="text-emerald-400" size={32} />,
      title: 'Landing Pages',
      desc: 'Páginas institucionais de alta conversão, rápidas, responsivas e estrategicamente otimizadas para converter visitantes em clientes.',
      badge: 'Foco em Conversão',
    },
    {
      icon: <Cpu className="text-pink-400" size={32} />,
      title: 'Automações',
      desc: 'Integrações de sistemas via APIs e desenvolvimento de processos automatizados inteligentes para economizar tempo e recursos.',
      badge: 'Integrações',
    },
  ];

  return (
    <section id="servicos" className="relative py-24 bg-black overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
            Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Como posso ajudar seu negócio
          </h2>
          <p className="text-gray-400 text-base">
            Ofereço soluções digitais sob medida para impulsionar a operação do seu negócio e maximizar seus resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-violet-500/20 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(139,92,246,0.08)]"
            >
              {/* Glow indicator on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none group-hover:bg-violet-600/10 transition-colors duration-300" />
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Icon wrapper */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:bg-violet-950/20 group-hover:border-violet-500/20 transition-all duration-300 shrink-0">
                  {service.icon}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <span className="inline-block text-xs px-2.5 py-0.5 rounded bg-white/5 text-gray-400 font-semibold border border-white/5">
                    {service.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
