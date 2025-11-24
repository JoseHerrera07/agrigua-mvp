import React from 'react';
import { ArrowLeft, Search, ChevronDown, Shield, Eye, Bug, ArrowRight } from 'lucide-react';

export default function PlagasDetail({ onBack }) {
  
  const bgImageUrl = "https://images.unsplash.com/photo-1720115587616-62ec66117dd4?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div 
      className="relative w-full h-screen max-w-[400px] mx-auto flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* CABECERA */}
      <div className="bg-white/90 backdrop-blur-md px-4 pt-5 pb-3 flex items-center gap-4 shadow-sm z-20 sticky top-0">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100/50 text-gray-700 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <span className="text-gray-800 font-bold text-lg">Guía de Plagas</span>
      </div>

      {/* CONTENIDO */}
      <div className="flex-1 overflow-y-auto pb-8 hide-scrollbar p-5 z-10">
        
        {/* Buscador */}
        <div className="bg-white rounded-2xl flex items-center px-4 py-3 mb-4 shadow-sm">
            <Search size={18} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Busca por nombre o síntoma..." className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder-gray-400"/>
        </div>

        {/* Filtros */}
        <div className="flex gap-3 mb-6">
            <button className="bg-[#C8E6C9] px-4 py-2 rounded-full text-[10px] font-bold text-green-800 flex items-center gap-1">
                Por tipo de cultivo <ChevronDown size={12}/>
            </button>
            <button className="bg-[#C8E6C9] px-4 py-2 rounded-full text-[10px] font-bold text-green-800 flex items-center gap-1">
                Por tipo de plaga <ChevronDown size={12}/>
            </button>
        </div>

        {/* Tarjeta 1: Pulgón */}
        <div className="bg-white rounded-[25px] overflow-hidden shadow-lg mb-6">
            <img src="https://images.unsplash.com/photo-1686760466426-3ba493fcb12b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-40 object-cover" alt="Pulgón" />
            <div className="p-5">
                <h2 className="text-xl font-extrabold text-gray-800 mb-2">Pulgón</h2>
                <div className="flex gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-md">Chupador de savia</span>
                    <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-md">Hojas amarillas</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Shield size={16}/></div>
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Eye size={16}/></div>
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Bug size={16}/></div>
                    </div>
                    <button className="bg-[#22C55E] text-white text-xs font-bold py-2 px-4 rounded-full flex items-center gap-1 hover:bg-green-600 transition-colors">
                        Ver detalles <ArrowRight size={14}/>
                    </button>
                </div>
            </div>
        </div>

        {/* Tarjeta 2: Araña Roja */}
        <div className="bg-white rounded-[25px] overflow-hidden shadow-lg mb-6">
            <img src="https://images.unsplash.com/photo-1713208653053-69e6668edce4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-40 object-cover" alt="Araña Roja" />
            <div className="p-5">
                <h2 className="text-xl font-extrabold text-gray-800 mb-2">Araña Roja</h2>
                <div className="flex gap-2 mb-4">
                    <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded-md">Telarañas finas</span>
                    <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-md">Manchas blancas</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Shield size={16}/></div>
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Eye size={16}/></div>
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Bug size={16}/></div>
                    </div>
                    <button className="bg-[#22C55E] text-white text-xs font-bold py-2 px-4 rounded-full flex items-center gap-1 hover:bg-green-600 transition-colors">
                        Ver detalles <ArrowRight size={14}/>
                    </button>
                </div>
            </div>
        </div>

      </div>
      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
    </div>
  );
}
