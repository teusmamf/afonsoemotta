import { FileText, ShoppingCart, Factory } from 'lucide-react';
import { lazy, Suspense } from 'react';
const ContactBtn = lazy(()=> import('./contactbtn'));




const Especialties = () => {
  const specialties = [
    {
      icon: <FileText className="h-8 w-8 text-navy" />,
      title: "Contabilidade para Prestadores de Serviço",
      description: "Soluções contábeis especializadas para profissionais liberais e empresas de serviços, com enfoque no regime tributário ideal."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-navy" />,
      title: "Contabilidade para Comércio",
      description: "Gestão financeira e tributária personalizada para varejistas e atacadistas, acompanhando toda a movimentação comercial."
    },
    {
      icon: <Factory className="h-8 w-8 text-navy" />,
      title: "Contabilidade para Indústrias",
      description: "Assessoria contábil completa para o segmento industrial, com controle de custos de produção e otimização tributária."
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-deepBlue mb-2">Nossas Especialidades</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossos segmentos de atuação especializada
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="group relative bg-white p-6 rounded-lg border border-lightBlue/20 hover:border-navy/30 transition-all duration-300 ease-in-out overflow-hidden"
            >
              {/* Efeito de fundo hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-lightBlue/5 group-hover:to-lightBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              
              {/* Conteúdo */}
              <div className="relative z-10">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-lightBlue/10 text-navy mb-4 group-hover:bg-lightBlue/20 transition-colors duration-300 border border-lightBlue/20">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-semibold text-deepBlue mb-2 group-hover:text-navy transition-colors duration-300">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {specialty.description}
                </p>
              </div>

              {/* Efeito de borda animada */}
              <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-navy/10 transition-all duration-500 ease-in-out rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactBtn/>
    </div>
  );
};

export default Especialties;