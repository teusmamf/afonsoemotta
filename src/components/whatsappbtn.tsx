// components/WhatsAppButton.js
import React from 'react';
import { motion } from 'framer-motion';

// Define the CSS for the pulse animation
const pulseAnimation = `
  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(255, 245, 224, 0.7); /* Beige shadow */
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 10px rgba(255, 245, 224, 0); /* Fades out */
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(255, 245, 224, 0);
    }
  }
`;

const WhatsAppButton = () => {
  // Número do WhatsApp (substitua pelo número real, no formato internacional, ex.: +5511999999999)
  const phoneNumber = "+5545988280716"; // Exemplo, substitua pelo número real
  // Mensagem pré-definida
  const message = "Olá, gostaria de saber mais sobre os serviços contábeis!";
  // URL do WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Inject the CSS animation */}
      <style>{pulseAnimation}</style>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-50"
        style={{
          animation: 'pulse 2s infinite ease-in-out', // Apply the pulse animation
          width: '60px',
          height: '60px',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* WhatsApp Icon (SVG inline para simplicidade) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.563 4.245 1.632 6.081L0 24l5.916-1.632A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.674 17.99c-.294.828-1.465 1.594-2.415 1.805-.606.134-1.404.24-4.07-.854-3.42-1.404-5.602-4.854-5.772-5.09-.17-.236-1.37-1.914-1.37-3.654s.86-2.58 1.166-2.946c.306-.366.67-.46 1.166-.46.094 0 .188 0 .282.006.294.018.706-.11 1.106.854.4.964.824 2.704.894 2.904.07.2.13.43-.024.66-.154.23-.23.376-.46.64-.23.264-.494.59-.706.894-.212.304-.43.624-.188.964.242.34 1.08 1.48 2.32 2.394 1.586 1.17 2.92 1.53 3.26 1.67.34.14.54.12.74-.094.2-.214.894-.964 1.134-1.254.24-.29.48-.24.74-.14.26.1 1.64.77 1.934.914.294.144.49.214.54.33.05.116.05.67-.244 1.498z" />
        </svg>
      </motion.a>
    </>
  );
};

export default WhatsAppButton;