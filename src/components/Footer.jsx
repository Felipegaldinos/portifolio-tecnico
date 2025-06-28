
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-blue-500/20 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-4">
              Felipe Silva
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor Front-End apaixonado por criar experiências digitais 
              incríveis e funcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Início
              </a>
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Sobre
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Projetos
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/felipesilva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 border border-blue-500/20"
              >
                <Linkedin size={20} className="text-blue-400" />
              </a>
              <a 
                href="https://github.com/felipesilva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 border border-blue-500/20"
              >
                <Github size={20} className="text-blue-400" />
              </a>
              <a 
                href="mailto:felipe@email.com"
                className="p-3 bg-gray-900/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 border border-blue-500/20"
              >
                <Mail size={20} className="text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Felipe Silva. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Desenvolvido com <Heart className="mx-1 text-red-500" size={16} /> usando React, TailwindCSS e Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
