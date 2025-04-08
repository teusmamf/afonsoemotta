import React from 'react';
import { motion } from 'framer-motion';
import ContactBtn from './contactbtn';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      testimonial: "A Afonso e Motta simplificou minha vida financeira. O atendimento é incrível!"
    },
    {
      name: "Carlos Eduardo",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      testimonial: "Recebi uma orientação clara e prática que me ajudou a organizar minhas finanças."
    },
    {
      name: "Mariana Lopes",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      testimonial: "O suporte deles foi essencial para eu entender melhor meus impostos."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Depoimentos</h2>
          <p className="text-lg text-gray-600">
            Veja o que nossos clientes dizem sobre nós
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-lightGray p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h3 className="ml-4 text-xl font-semibold text-navy">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </div>
      <ContactBtn/>
    </section>
  );
};

export default Testimonials;