import { motion } from 'framer-motion';
import { Laptop, Smartphone, Settings, Cpu } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Laptop className="text-violet-400" size={28} />,
      title: 'Desenvolvimento Web',
      desc: 'Criação de sites modernos, Landing Pages de alta conversão e aplicações web complexas.',
    },
    {
      icon: <Smartphone className="text-cyan-400" size={28} />,
      title: 'Aplicativos Mobile',
      desc: 'Aplicativos nativos e híbridos para Android e iOS focados em experiência do usuário.',
    },
    {
      icon: <Settings className="text-purple-400" size={28} />,
      title: 'Sistemas Personalizados',
      desc: 'Desenvolvimento de softwares sob medida para automatizar e otimizar processos de negócios.',
    },
    {
      icon: <Cpu className="text-pink-400" size={28} />,
      title: 'Integrações e APIs',
      desc: 'Conexão entre plataformas, criação de APIs robustas e seguras e integração de serviços cloud.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="sobre" className="relative py-24 bg-gray-950/40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-violet-400">
              Sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Quem está por trás <br /> dos projetos
            </h2>
            <p className="text-gray-400 leading-relaxed text-base">
              Sou desenvolvedor focado em criar soluções digitais eficientes, bonitas e escaláveis. Trabalho transformando necessidades reais em produtos funcionais de alto desempenho.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Com ampla experiência em tecnologias modernas, construo desde landing pages otimizadas a ecossistemas inteiros de microserviços na nuvem, garantindo sempre a melhor arquitetura e segurança.
            </p>
          </motion.div>

          {/* Right grid cards column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(139,92,246,0.1)]"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500/0 to-transparent group-hover:via-violet-500/50 transition-all duration-500" />
                <div className="mb-5 p-3 w-fit rounded-xl bg-white/5 border border-white/5 group-hover:bg-violet-950/20 group-hover:border-violet-500/20 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
