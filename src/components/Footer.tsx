import { Github, MessageSquare, Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/danielrocha1', label: 'GitHub' },
    { icon: <MessageSquare size={20} />, href: 'https://wa.me/5521988628452', label: 'WhatsApp' },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side Logo */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-lg text-white">
            <Code2 size={18} />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Daniel Rocha
          </span>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#sobre" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Sobre
          </a>
          <a href="#servicos" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Serviços
          </a>
          <a href="#contato" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Contato
          </a>
        </div>

        {/* Right Side Socials */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-violet-950/20 hover:border-violet-500/20 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}

          {/* Scroll to Top */}
          <button
            onClick={handleScrollTop}
            aria-label="Voltar ao Topo"
            className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-cyan-950/20 hover:border-cyan-500/20 transition-all duration-300 ml-4"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Daniel Rocha. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-600">
          Desenvolvido com React, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
