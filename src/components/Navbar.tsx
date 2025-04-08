import React from 'react';
import { Menu } from 'lucide-react';
import logo from '../../assets/Logo- AeM- final_AeM-Logo-Principal-050D66.png';
import ContactBtn from './contactbtn';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Logotipo com tamanho controlado */}
            <img
              src={logo}
              alt="Afonso e Motta Logo"
              className="h-20 w-20" // Definindo altura fixa e largura automática
            />
          </div>

          {/* Links da Navbar */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#"
                className="text-navy hover:text-deepBlue px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Início
              </a>
              <a
                href="#about"
                className="text-navy hover:text-deepBlue px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sobre Nós
              </a>
              <ContactBtn/>
            </div>
          </div>

          {/* Botão de menu para telas pequenas */}
          <div className="md:hidden">
            <button className="text-navy p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;