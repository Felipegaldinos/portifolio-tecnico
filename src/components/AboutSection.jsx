
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Rocket, Brain, Heart } from 'lucide-react';

function AboutSection() {
  const skills = [
    { icon: Code, title: 'Clean Code', description: 'Código limpo e bem estruturado' },
    { icon: Palette, title: 'UI/UX Design', description: 'Interfaces modernas e intuitivas' },
    { icon: Zap, title: 'Performance', description: 'Aplicações rápidas e otimizadas' },
    { icon: Rocket, title: 'Inovação', description: 'Sempre buscando novas tecnologias' },
    { icon: Brain, title: 'Problem Solving', description: 'Soluções criativas para desafios' },
    { icon: Heart, title: 'Paixão', description: 'Amor pelo que faço' }
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça um pouco mais sobre minha jornada e paixão pelo desenvolvimento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
              <img  
                className="relative w-full max-w-md mx-auto h-96 object-cover rounded-3xl shadow-2xl border border-blue-500/20"
                alt="Felipe Silva - Desenvolvedor Front-End"
                src="https://images.unsplash.com/photo-1618927376995-a721da8c11db"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou desenvolvedor web com experiência em React, TypeScript e Firebase.
                Atualmente estudo Análise e Desenvolvimento de Sistemas e participo de 
                projetos freelance e open-source.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Minha paixão é criar experiências digitais que combinam design elegante 
                com funcionalidade robusta. Sempre em busca de novas tecnologias e 
                melhores práticas de desenvolvimento.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Acredito que a tecnologia deve ser acessível e que cada linha de código 
                pode fazer a diferença na vida das pessoas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {['React', 'TypeScript', 'Firebase', 'Next.js', 'TailwindCSS', 'Node.js'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <skill.icon className="relative mx-auto text-blue-400 group-hover:text-white transition-colors duration-300" size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
