
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 px-6 py-4"
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
        background: 'rgba(0, 0, 0, 0.8)'
      }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Felipe Silva
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-all duration-300 hover:text-blue-400 relative ${
                activeSection === section ? 'text-blue-400' : 'text-white'
              }`}
            >
              {section === 'home' ? 'Início' : 
               section === 'about' ? 'Sobre' : 
               section === 'projects' ? 'Projetos' : 'Contato'}
              {activeSection === section && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                  layoutId="activeSection"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-blue-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden mt-4 bg-black/95 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left py-3 capitalize hover:text-blue-400 transition-colors text-white"
            >
              {section === 'home' ? 'Início' : 
               section === 'about' ? 'Sobre' : 
               section === 'projects' ? 'Projetos' : 'Contato'}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;
