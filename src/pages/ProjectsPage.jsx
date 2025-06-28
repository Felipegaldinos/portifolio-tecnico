import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';
import ProjectPreview from '@/components/ProjectPreview';

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Firebase', 'Node.js', 'Next.js'];

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           project.technologies.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

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
    <>
      <Helmet>
        <title>Todos os Projetos - Felipe Silva | Desenvolvedor Front-End</title>
        <meta name="description" content="Explore todos os projetos desenvolvidos por Felipe Silva. Aplicações web modernas usando React, TypeScript, Firebase e outras tecnologias avançadas." />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-blue-500/20 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-3 group">
                  <ArrowLeft className="text-blue-400 group-hover:text-white transition-colors" size={24} />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                    Voltar ao Portfólio
                  </span>
                </Link>
                
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                  Felipe Silva
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              {/* Page Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent">
                  Todos os Projetos
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore minha coleção completa de projetos desenvolvidos com as mais modernas tecnologias web
                </p>
              </motion.div>

              {/* Filters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex flex-col lg:flex-row gap-6 items-center">
                    {/* Search */}
                    <div className="relative flex-1 w-full lg:max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="Buscar projetos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      />
                    </div>

                    {/* Category Filter */}
                    <div className="flex items-center space-x-3">
                      <Filter className="text-blue-400" size={20} />
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                              selectedCategory === category
                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                : 'bg-gray-800/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400'
                            }`}
                          >
                            {category === 'all' ? 'Todos' : category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 p-6">
                      {/* Project Preview */}
                      <ProjectPreview project={project} />
                      
                      {/* Project Info */}
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
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

              {/* No Results */}
              {filteredProjects.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-300 mb-2">Nenhum projeto encontrado</h3>
                  <p className="text-gray-400">Tente ajustar os filtros ou termo de busca</p>
                </motion.div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;