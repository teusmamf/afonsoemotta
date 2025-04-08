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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="animate-float inline-flex items-center p-4 bg-white/10 rounded-full"
                >
                  <Calculator className="h-8 w-8 text-beige" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="animate-float inline-flex items-center p-4 bg-white/10 rounded-full"
                >
                  <TrendingUp className="h-8 w-8 text-beige" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="animate-float inline-flex items-center p-4 bg-white/10 rounded-full"
                >
                  <PieChart className="h-8 w-8 text-beige" />
                </motion.div>
              </div>
            </motion.div>

            {/* Spline Section with Entrance Transition and Bouncing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start below and invisible
              animate={{ opacity: 1, y: 0 }} // Fade in and slide up
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }} // Smooth transition with a slight delay
              className="relative w-full h-auto lg:col-span-2"
            >
              <div
                className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-visible"
                style={{
                  animation: 'bounce 2s infinite ease-in-out', // Apply the bouncing animation
                }}
              >
                <Spline
                  scene="https://prod.spline.design/Nq9w8PeZgAr3yQWo/scene.splinecode"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain', // Ensure the scene scales without cropping
                    overflow: 'visible', // Ensure no clipping occurs
                  }}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ContactBtn/>
    </>
  );
};

export default Hero;