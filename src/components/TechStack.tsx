import { motion } from 'framer-motion';
import { Layers, Database, GitBranch } from 'lucide-react';

interface TechItem {
  name: string;
  level: string;
}

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  items: TechItem[];
  color: string;
}

export default function TechStack() {
  const categories: TechCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Layers size={22} />,
      color: 'from-blue-500 to-cyan-400',
      items: [
        { name: 'React', level: 'Especialista' },
        { name: 'Next.js', level: 'Avançado' },
        { name: 'React Native', level: 'Avançado' },
        { name: 'Tailwind CSS', level: 'Especialista' },
      ],
    },
    {
      title: 'Backend & Database',
      icon: <Database size={22} />,
      color: 'from-violet-500 to-purple-400',
      items: [
        { name: 'Node.js', level: 'Especialista' },
        { name: 'APIs REST / GraphQL', level: 'Especialista' },
        { name: 'PostgreSQL / MongoDB', level: 'Avançado' },
        { name: 'TypeScript', level: 'Avançado' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <GitBranch size={22} />,
      color: 'from-emerald-500 to-teal-400',
      items: [
        { name: 'GitHub / Git', level: 'Especialista' },
        { name: 'Docker', level: 'Intermediário' },
        { name: 'AWS / Cloud Services', level: 'Avançado' },
        { name: 'CI/CD Pipelines', level: 'Intermediário' },
      ],
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="tecnologias" className="relative py-24 bg-gray-950/40 overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-wider uppercase text-violet-400">
            Habilidades
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Stack Tecnológica
          </h2>
          <p className="text-gray-400 text-base">
            As principais tecnologias e ferramentas que utilizo para construir soluções digitais seguras, rápidas e escaláveis.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="p-8 rounded-2xl bg-gray-900/30 border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-white/10 transition-all duration-300"
            >
              {/* Colored top hover line */}
              <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${category.color}`} />

              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg bg-gradient-to-tr ${category.color} text-black font-bold`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Items List */}
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-b-0 hover:bg-white/5 px-2 rounded transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                      {item.name}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 font-semibold">
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
