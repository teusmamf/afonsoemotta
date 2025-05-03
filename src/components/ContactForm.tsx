import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building, Loader2, CheckCircle } from 'lucide-react';
import '../index.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    try {
      const response = await fetch('https://back-end-afonsoemotta.vercel.app/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Erro ao enviar mensagem.');
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      alert('Erro ao enviar mensagem.');
    } finally {
      setIsLoading(false);
    }
  };

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
            <div className="p-1.5 bg-beige">
              <h3 className="text-3xl font-bold text-navy mb-6">Entre em Contato</h3>
              <p className="text-gray-600 mb-8">
                Vamos discutir como podemos ajudar seu negócio a prosperar através de uma gestão contábil especializada.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="icone_mail_contactform" />
                  <span className="text-gray-600 ml-0">afonsoemottacontabilidade@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="icone_phone_contactform" />
                  <span className="text-gray-600">(45) 98828-0716</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Building className="icone_building_contactform" />
                  <span className="text-gray-600">R. Paraguai, 1135 - sala 04 - Centro, Cascavel - PR, 85805-017</span>
                </div>
              </div>
            </div>

            <div className="p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                    placeholder="João Silva"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                    placeholder="joao@exemplo.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                    placeholder="(45) 99999-9999"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                    placeholder="Como podemos ajudar você?"
                    required
                  />
                </div>
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${isLoading ? 'bg-navy/80' : 'bg-navy'} text-white py-3 px-6 rounded-lg hover:bg-deepBlue transition-colors flex items-center justify-center gap-2`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </motion.button>
                  
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center gap-2 text-green-600"
                    >
                      <CheckCircle className="text-green-600" />
                      <span>Mensagem enviada com sucesso!</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;