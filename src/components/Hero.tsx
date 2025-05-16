import React from 'react';
import { motion } from 'framer-motion';
import ContactBtn from './contactbtn';
import heroImage from '../../assets/hero_affonso&motta.webp';

// Estilos CSS para o círculo
const styles = `
  .hero-circle {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-circle::before {
    content: '';
    background: rgba(173, 216, 230, 0.1);
    border-radius: 50%;
    width: 80%;
    height: 80%;
    filter: blur(80px);
  }
  @media (min-width: 1024px) {
    .hero-circle::before {
      width: 90%;
      height: 90%;
    }
  }
  @media (min-width: 1280px) {
    .hero-circle::before {
      width: 100%;
      height: 100%;
    }
  }
`;

const Hero = () => {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-navy to-deepBlue" id='home'>
      {/* Injetando os estilos CSS */}
      <style>{styles}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white lg:col-span-1 lg:pr-8"
          >
           <h1 className="container_simply">
  <span className="hero-title-line">Simplificando a contabilidade,</span>
  <span className="hero-title-line">potencializando seu sucesso</span>
</h1>
            <p className="text-lg lg:text-xl mb-8 text-beige leading-relaxed">
              Auxiliamos empresas a otimizar impostos, evitar riscos fiscais e garantir conformidade, com suporte estratégico personalizado para o seu segmento.
            </p>
            <ContactBtn/>
          </motion.div>

          {/* Image Section with Circle Background */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative w-full h-auto lg:col-span-2"
          >
            {/* Circle Background - Versão CSS puro */}
            <div className="hero-circle"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] xl:h-[800px] flex items-center justify-center">
              <img 
                src={heroImage}
                loading='lazy'
                alt="Ilustração de contabilidade"
                className="w-full h-full object-contain scale-110 z-10" // z-10 para ficar acima do círculo
                style={{ position: 'relative' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;