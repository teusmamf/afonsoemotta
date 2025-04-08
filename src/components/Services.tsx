import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, PieChart, TrendingUp, DollarSign, Briefcase } from 'lucide-react';
import ContactBtn from './contactbtn';

const Services = () => {
  const services = [
    {
      icon: <Calculator className="h-8 w-8 text-navy" />,
      title: "Contabilidade",
      description: "Serviços contábeis completos para manter suas finanças organizadas e em conformidade."
    },
    {
      icon: <FileText className="h-8 w-8 text-navy" />,
      title: "Planejamento Tributário",
      description: "Planejamento tributário estratégico para minimizar legalmente sua carga tributária."
    },
    {
      icon: <PieChart className="h-8 w-8 text-navy" />,
      title: "Análise Financeira",
      description: "Análise financeira aprofundada para ajudar você a tomar decisões empresariais informadas."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-navy" />,
      title: "Crescimento Empresarial",
      description: "Planejamento estratégico para crescimento e expansão sustentável dos negócios."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-navy" />,
      title: "Folha de Pagamento",
      description: "Gestão completa da folha de pagamento incluindo cálculos e conformidade fiscal."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-navy" />,
      title: "Consultoria Empresarial",
      description: "Consultoria especializada para ajudar você a navegar pelos desafios financeiros."
    }
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
          <h2 className="text-4xl font-bold text-navy mb-4">Nossos Serviços</h2>
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