import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-deepBlue" id='contactform'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 bg-beige">
              <h3 className="text-3xl font-bold text-navy mb-6">Entre em Contato</h3>
              <p className="text-gray-600 mb-8">
                Vamos discutir como podemos ajudar seu negócio a prosperar <br></br>  através de uma gestão contábil especializada.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-navy" />
                  <span className="text-gray-600">afonsoemottacontabilidade@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-navy" />
                  <span className="text-gray-600">(45) 998828-0716</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Building className="h-6 w-6 text-navy" />
                  <span className="text-gray-600">R. Paraguai, 1135 - sala 04 - Centro, Cascavel - PR, 85805-017</span>
                </div>
              </div>
            </div>

            <div className="p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                    placeholder="joao@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-navy text-white py-3 px-6 rounded-lg hover:bg-deepBlue transition-colors"
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;