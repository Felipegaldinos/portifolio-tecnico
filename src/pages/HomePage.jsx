
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Felipe Silva - Desenvolvedor Front-End | Portfólio</title>
        <meta name="description" content="Portfólio de Felipe Silva, desenvolvedor front-end especializado em React, TypeScript e Firebase. Confira meus projetos e entre em contato!" />
      </Helmet>

      <div className="relative">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10">
          <Header />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
