import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, TrendingUp } from 'lucide-react';

const WhyUs = () => {
  const cards = [
    {
      icon: <Shield className="h-8 w-8 text-navy" />,
      title: "Orientação Especializada",
      description: "Nossa equipe de contadores certificados oferece orientação financeira especializada adaptada às necessidades do seu negócio."
    },
    {
      icon: <Clock className="h-8 w-8 text-navy" />,
      title: "Entregas Ágeis",
      description: "Soluções contábeis rápidas e eficientes para atender suas necessidades financeiras com agilidade."
    },
    {
      icon: <Users className="h-8 w-8 text-navy" />,
      title: "Equipe Dedicada",
      description: "Um contador pessoal designado para sua empresa que entende seu setor específico."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-navy" />,
      title: "Foco no Crescimento",
      description: "Planejamento financeiro estratégico focado no crescimento sustentável e lucratividade do negócio."
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">
            Por que a Afonso e Motta é a<br />melhor empresa de contabilidade?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tenha um contador online, especialista no seu negócio, pronto para ajudar você a reduzir custos e aumentar sua lucratividade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-lightGray p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-beige/20 p-4 rounded-full inline-block mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;