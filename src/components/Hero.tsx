import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, PieChart } from 'lucide-react';
import ContactBtn from './contactbtn';

// Define the CSS for the bouncing animation
const bounceAnimation = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Hero = () => {
  return (
    <>
      {/* Inject the CSS animation into the document */}
      <style>{bounceAnimation}</style>

      <div className="pt-16 min-h-screen bg-gradient-to-br from-navy to-deepBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 items-center">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white lg:col-span-1 lg:pr-8"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Soluções Contábeis Especializadas para seu Negócio
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-beige leading-relaxed">
                Transforme a gestão financeira da sua empresa com nossos serviços contábeis profissionais.
                Ajudamos empresas a crescer através de planejamento financeiro estratégico e consultoria especializada.
              </p>
              <div className="flex space-x-6">
                {/* Ícones removidos */}
              </div>
              <ContactBtn/>
            </motion.div>

            {/* Spline Section - Ajustada para evitar cortes */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="relative w-full h-auto lg:col-span-2 overflow-visible"
            >
              <div
                className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
                style={{
                  animation: 'bounce 2s infinite ease-in-out',
                  margin: '0 -10%', // Adiciona margem negativa para compensar
                  width: '120%', // Aumenta a largura do container
                }}
              >
                <Spline
                  scene="https://prod.spline.design/Nq9w8PeZgAr3yQWo/scene.splinecode"
                  style={{
                    width: '1622px',
                    height: '875px',
                    transform: 'scale(0.8)', // Aumenta ligeiramente a escala
                  }}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;