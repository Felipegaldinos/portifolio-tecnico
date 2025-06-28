
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

function HeroSection() {
  const handleDownloadCV = () => {
    // Create a sample CV content
    const cvContent = `
FELIPE SILVA - DESENVOLVEDOR FRONT-END

CONTATO:
Email: felipe@email.com
LinkedIn: linkedin.com/in/felipesilva
GitHub: github.com/felipesilva

SOBRE:
Desenvolvedor web especializado em React, TypeScript e Firebase.
Estudante de Análise e Desenvolvimento de Sistemas.
Experiência em projetos freelance e open-source.

HABILIDADES TÉCNICAS:
• React.js & Next.js
• TypeScript & JavaScript
• Firebase & Supabase
• TailwindCSS & Styled Components
• Git & GitHub
• Node.js & Express

PROJETOS DESTACADOS:
• Catálogo de Produtos com Firebase
• Dashboard Analytics Interativo
• App de Tarefas Colaborativo

FORMAÇÃO:
Análise e Desenvolvimento de Sistemas (em andamento)
Diversos cursos online em desenvolvimento web
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Felipe_Silva_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent">
            Felipe Silva
          </h1>
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-200 font-light">
            Desenvolvedor Front-End
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Apaixonado por transformar ideias em interfaces funcionais e modernas.
            Especializado em React, TypeScript e tecnologias web avançadas.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a 
            href="https://linkedin.com/in/felipesilva" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 bg-gray-900/50 backdrop-blur-xl rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-400/50"
          >
            <Linkedin size={28} className="text-blue-400" />
          </a>
          <a 
            href="https://github.com/felipesilva" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-gray-900/50 backdrop-blur-xl rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-400/50"
          >
            <Github size={28} className="text-blue-400" />
          </a>
          <a 
            href="mailto:felipe@email.com"
            className="p-4 bg-gray-900/50 backdrop-blur-xl rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-400/50"
          >
            <Mail size={28} className="text-blue-400" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 border border-blue-400/20"
          >
            <Download className="mr-3" size={24} />
            Download CV
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
