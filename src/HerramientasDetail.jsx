import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';

export default function HerramientasDetail({ onBack }) {
  
  const bgImageUrl = "https://plus.unsplash.com/premium_photo-1663075955515-0b0a7acbb78e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const herramientas = [
    { name: "Tijeras de Podar", uso: "Cortes limpios en ramas y tallos.", mant: "Limpiar y afilar regularmente.", img: "https://plus.unsplash.com/premium_photo-1680322468906-d3ed1fb060d4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Regadera", uso: "Riego suave y directo a la base.", mant: "Vaciar después de usar.", img: "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?q=80&w=150&auto=format&fit=crop" },
    { name: "Pala de Jardín", uso: "Trasplantar, cavar y mezclar.", mant: "Limpiar la tierra después de usar.", img: "https://plus.unsplash.com/premium_photo-1678457828538-de52bdac0e9a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Guantes", uso: "Proteger tus manos de espinas.", mant: "Lavar y secar al aire.", img: "https://images.unsplash.com/photo-1582586131076-6c308a437385?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pulverizador", uso: "Aplicar fertilizantes foliares.", mant: "Enjuagar bien después.", img: "https://plus.unsplash.com/premium_photo-1663045650293-4ddba07dc462?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div 
      className="relative w-full h-screen max-w-[400px] mx-auto flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-white/40 z-0"></div>

      {/* CABECERA */}
      <div className="bg-white/90 backdrop-blur-md px-4 pt-5 pb-3 flex justify-between items-center shadow-sm z-20 sticky top-0">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100/50 text-gray-700 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <span className="text-gray-800 font-bold text-lg">Herramientas</span>
        <Search size={24} className="text-gray-500" />
      </div>

      {/* CONTENIDO */}
      <div className="flex-1 overflow-y-auto pb-8 hide-scrollbar p-5 z-10">
        
        {/* Banner Verde */}
        <div className="bg-[#E8F5E9]/90 backdrop-blur-sm p-5 rounded-2xl mb-6 border border-green-100 shadow-sm">
            <h3 className="text-green-800 font-bold text-lg mb-1">Tu Kit de Jardinería</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Descubre las herramientas que harán tu aventura en la jardinería más fácil y divertida. ¡Manos a la obra!</p>
        </div>

        {/* Lista */}
        <div className="flex flex-col gap-4">
            {herramientas.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-gray-100 items-start">
                    <img src={item.img} className="w-16 h-16 rounded-xl object-cover bg-gray-100" alt={item.name} />
                    <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h4>
                        <p className="text-[10px] text-gray-600 mb-1"><span className="font-bold text-gray-700">Uso:</span> {item.uso}</p>
                        <p className="text-[10px] text-gray-600"><span className="font-bold text-gray-700">Mantenimiento:</span> {item.mant}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
    </div>
  );
}
