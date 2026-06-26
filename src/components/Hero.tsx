import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Cpu, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-black">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/40 border border-violet-800/40 text-violet-400 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Disponível para novos projetos
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Transformo ideias em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">
              produtos digitais
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            Desenvolvo sistemas, aplicativos e experiências digitais modernas que ajudam empresas a crescer.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#servicos"
              className="px-8 py-4 rounded-full text-white font-medium bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 flex items-center gap-2 group"
            >
              Ver meus serviços
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#contato"
              className="px-8 py-4 rounded-full text-gray-300 hover:text-white font-medium bg-gray-900 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare size={18} />
              Entrar em contato
            </a>
          </div>

          {/* Bottom Floating Stats / Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-sm font-medium hover:bg-white/10 transition-colors duration-200">
              🚀 Full Stack Developer
            </span>
            <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-sm font-medium hover:bg-white/10 transition-colors duration-200">
              React | Node.js | Mobile | Cloud
            </span>
          </div>
        </motion.div>

        {/* Right Content - Visual illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center items-center lg:justify-end"
        >
          {/* Animated Tech Illustration Mockup */}
          <div className="relative w-full max-w-[450px] aspect-square rounded-2xl border border-white/10 bg-gray-950/40 backdrop-blur-md p-6 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            
            {/* Header controls of Mock Window */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="text-xs text-gray-500 ml-4 font-mono select-none">daniel-rocha.tsx</div>
            </div>

            {/* Simulated code editor layout */}
            <div className="font-mono text-xs text-gray-400 space-y-3 leading-relaxed overflow-x-auto">
              <div className="text-violet-400">const <span className="text-white">developer</span> = &#123;</div>
              <div className="pl-4">name: <span className="text-cyan-300">"Daniel Rocha"</span>,</div>
              <div className="pl-4">role: <span className="text-cyan-300">"Full Stack Architect"</span>,</div>
              <div className="pl-4">skills: [</div>
              <div className="pl-8 text-cyan-300">"React", "Next.js", "Node.js", "React Native",</div>
              <div className="pl-8 text-cyan-300">"PostgreSQL", "Docker", "AWS", "APIs"</div>
              <div className="pl-4">],</div>
              <div className="pl-4 text-purple-400">status: <span className="text-green-400">"🚀 Ready to Build Premium Solutions"</span></div>
              <div className="text-violet-400">&#125;;</div>
              
              <div className="pt-4 text-gray-600 select-none">// Generating stunning experiences...</div>
            </div>

            {/* Glowing floating decorative badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 px-4 py-2 bg-gray-900/90 border border-violet-500/30 rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-md"
            >
              <Cpu size={16} className="text-violet-400 animate-spin" />
              <span className="text-xs font-semibold text-white">Full Stack</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-4 bottom-1/4 px-4 py-2 bg-gray-900/90 border border-cyan-500/30 rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-md"
            >
              <Globe size={16} className="text-cyan-400" />
              <span className="text-xs font-semibold text-white">Web & Mobile</span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 px-4 py-2 bg-gray-900/90 border border-green-500/30 rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-md"
            >
              <ShieldCheck size={16} className="text-green-400" />
              <span className="text-xs font-semibold text-white">Segurança & Performance</span>
            </motion.div>

            {/* Decorative abstract elements */}
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
