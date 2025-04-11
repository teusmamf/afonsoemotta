import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FileText, PieChart, TrendingUp, DollarSign, MapPin, RefreshCcw } from 'lucide-react';
import ContactBtn from './contactbtn';

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8 text-navy" />,
      title: "Abertura de empresa",
      description: "Processo completo e descomplicado para abertura legal do seu negócio, com orientação sobre o melhor enquadramento jurídico."
    },
    {
      icon: <MapPin className="h-8 w-8 text-navy" />,
      title: "Endereço fiscal",
      description: "Solução de endereço fiscal válido para regularização do seu CNPJ, garantindo conformidade com as exigências legais."
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-navy" />,
      title: "Troca de Contador",
      description: "Transição segura e sem burocracias para um novo contador, com transferência organizada de todos os documentos fiscais."
    },
  ];

  return (
    <section className="py-20 bg-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Por que ser nosso cliente?</h2>
          <p className="text-lg text-gray-600">
            Soluções contábeis completas adaptadas às necessidades do seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-beige/20 p-4 rounded-full inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Services;