import React from 'react';
import { Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Afonso & Motta Contabilidade</h3>
            <p className="text-beige">
            Simplificando a contabilidade
potencializando
seu sucesso.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-beige hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-beige hover:text-white transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
          
         
          <div>
            <h4 className="text-lg font-semibold mb-4">Conecte-se Conosco</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/afonsoemotta" className="text-beige hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.linkedin.com/company/afonsoemottacontabilidade" className="text-beige hover:text-white transition-colors">
                <LinkedIn size={24} />
              </a>
              <a href="https://www.instagram.com/afonsoemottacontabilidade/" className="text-beige hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-beige/20 mt-8 pt-8 text-center">
          <p className="text-beige">
            © {new Date().getFullYear()} Afonso & Motta. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;