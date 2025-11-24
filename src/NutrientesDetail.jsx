import React, { useState } from 'react';
import { ArrowLeft, Search, Leaf, Droplets, Shield, Flower, Sun, Zap, FlaskConical, Atom, Grid, Settings } from 'lucide-react';

export default function NutrientesDetail({ onBack }) {
  const [activeTab, setActiveTab] = useState('macro'); // 'macro' o 'micro'

  const bgImageUrl = "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const macros = [
    { name: "Nitrógeno", desc: "Crecimiento de hojas", icon: <Leaf size={20} className="text-green-700"/> },
    { name: "Fósforo", desc: "Desarrollo de raíces", icon: <Droplets size={20} className="text-green-700"/> },
    { name: "Potasio", desc: "Fortaleza general", icon: <Shield size={20} className="text-green-700"/> },
    { name: "Calcio", desc: "Paredes celulares", icon: <Flower size={20} className="text-green-700"/> },
    { name: "Magnesio", desc: "Fotosíntesis", icon: <Sun size={20} className="text-green-700"/> },
    { name: "Azufre", desc: "Proteínas y enzimas", icon: <Zap size={20} className="text-green-700"/> },
  ];

  const micros = [
    { name: "Hierro", desc: "Clorofila", icon: <FlaskConical size={20} className="text-green-700"/> },
    { name: "Manganeso", desc: "Metabolismo", icon: <Atom size={20} className="text-green-700"/> },
    { name: "Zinc", desc: "Crecimiento", icon: <Grid size={20} className="text-green-700"/> },
    { name: "Cobre", desc: "Enzimas", icon: <Settings size={20} className="text-green-700"/> },
  ];

  return (
    <div 
      className="relative w-full h-screen max-w-[400px] mx-auto flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* CABECERA */}
      <div className="bg-white/90 backdrop-blur-md px-4 pt-5 pb-3 flex justify-between items-center shadow-sm z-20 sticky top-0">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100/50 text-gray-700 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <span className="text-gray-800 font-bold text-lg">Guía de Nutrientes</span>
        <Search size={24} className="text-gray-500" />
      </div>

      {/* CONTENIDO */}
      <div className="flex-1 overflow-y-auto pb-8 hide-scrollbar p-5 z-10">
        
        {/* Tabs Selector */}
        <div className="flex bg-white/80 backdrop-blur-sm p-1 rounded-full mb-6 shadow-sm">
            <button 
                onClick={() => setActiveTab('macro')}
                className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'macro' ? 'bg-[#39FF14] text-black shadow-md' : 'text-gray-500 hover:bg-white/50'}`}
            >
                Macronutrientes
            </button>
            <button 
                onClick={() => setActiveTab('micro')}
                className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'micro' ? 'bg-[#39FF14] text-black shadow-md' : 'text-gray-500 hover:bg-white/50'}`}
            >
                Micronutrientes
            </button>
        </div>

        <h3 className="text-white font-bold text-lg mb-4 drop-shadow-md">
            {activeTab === 'macro' ? 'Macronutrientes' : 'Micronutrientes'}
        </h3>

        <div className="grid grid-cols-2 gap-4">
            {(activeTab === 'macro' ? macros : micros).map((item, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-md flex flex-col gap-3 border border-white/50">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        {item.icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                        <p className="text-[10px] text-gray-500 leading-tight">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
    </div>
  );
}
