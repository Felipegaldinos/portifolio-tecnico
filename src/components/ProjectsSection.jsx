import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';
import ProjectPreview from '@/components/ProjectPreview';

function ProjectsSection() {
  const featuredProjects = projectsData.slice(0, 3);

  const handleGithubClick = (url) => {
    if (url === '#') {
      window.open('https://github.com', '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  const handleDemoClick = (url) => {
    if (url === '#') {
      window.open('https://example.com', '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Projetos Destacados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias web
          </p>
          
          <Link to="/projects">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Ver Todos os Projetos
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <ProjectPreview project={project} />
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    onClick={() => handleGithubClick(project.github)}
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    onClick={() => handleDemoClick(project.demo)}
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;