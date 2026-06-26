import { motion } from 'framer-motion';
import { Search, Compass, Code, Rocket } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function Timeline() {
  const steps: Step[] = [
    {
      number: '01',
      icon: <Search className="text-violet-400" size={24} />,
      title: 'Análise da Ideia',
      desc: 'Reunião para entender o seu negócio, os desafios e definir o escopo e objetivos principais da solução.',
    },
    {
      number: '02',
      icon: <Compass className="text-cyan-400" size={24} />,
      title: 'Planejamento e Design',
      desc: 'Estruturação do projeto, definição de arquitetura técnica, modelagem do banco de dados e desenho de protótipos visuais.',
    },
    {
      number: '03',
      icon: <Code className="text-emerald-400" size={24} />,
      title: 'Desenvolvimento Ágil',
      desc: 'Codificação limpa, escalável e segura. Entregas parciais frequentes para validação e acompanhamento do progresso.',
    },
    {
      number: '04',
      icon: <Rocket className="text-pink-400" size={24} />,
      title: 'Entrega e Evolução',
      desc: 'Publicação nas lojas (App Store/Play Store) ou deploy em servidores cloud de alta performance, com suporte e melhorias contínuas.',
    },
  ];

  return (
    <section id="processo" className="relative py-24 bg-gray-950/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-semibold tracking-wider uppercase text-violet-400">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Processo de Trabalho
          </h2>
          <p className="text-gray-400 text-base">
            Como transformo o seu conceito em um produto digital funcional, passo a passo.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical line - Desktop only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-600 via-cyan-500 to-transparent hidden lg:block pointer-events-none" />

          <div className="space-y-12 lg:space-y-20 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-center justify-between ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  } w-full`}
                >
                  {/* Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-[45%] flex flex-col justify-center space-y-4 bg-gray-900/20 border border-white/5 backdrop-blur-sm p-8 rounded-2xl group hover:border-violet-500/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400 font-mono">
                        {step.number}
                      </span>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:bg-violet-950/20 group-hover:border-violet-500/20 transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Dot/Node Column - Desktop only */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="w-6 h-6 rounded-full bg-black border-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)] z-10"
                    />
                  </div>

                  {/* Spacer Column - Desktop only */}
                  <div className="w-[45%] hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
