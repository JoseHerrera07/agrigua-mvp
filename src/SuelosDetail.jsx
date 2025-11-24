// src/SuelosDetail.jsx
import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Droplets, Layers, Wind, Scale, Sprout, AlignCenterVertical, Weight, Apple, Waves, Star, Pickaxe } from 'lucide-react';

export default function SuelosDetail({ onBack }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const bgImageUrl = "https://images.unsplash.com/photo-1652471005010-fc03a9de9eae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cardStyle = "bg-[#F3F0E7]/95 backdrop-blur-sm rounded-[35px] overflow-hidden shadow-lg mb-6";
  const accordionBtnStyle = "bg-white p-4 rounded-2xl flex items-center justify-between cursor-pointer shadow-sm";

  return (
    <div
      className="relative w-full h-screen max-w-[400px] mx-auto flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="bg-white/90 backdrop-blur-md px-4 pt-5 pb-4 flex items-center shadow-sm z-20 sticky top-0">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100/50 text-gray-700 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <span className="text-gray-800 font-bold text-lg ml-4">Tipos de Suelo</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 hide-scrollbar p-5 z-10">
        <p className="text-sm text-white font-medium leading-relaxed mb-6 drop-shadow-md px-2">
          Conocer el tipo de suelo es el primer paso para un cultivo exitoso.
        </p>

        {/* --- SUELO ARENOSO --- */}
        <div className={cardStyle}>
            <div className="h-40 bg-[#E5CFAA] w-full relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1656720697505-2dd698b577a4?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Suelo Arenoso" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-extrabold text-[#4A4238] mb-5">Suelo Arenoso</h2>
                <div className="flex justify-between px-2 mb-8 text-xs font-bold text-[#7A7268]">
                    <div className="flex flex-col items-center gap-2"><Droplets size={22} className="text-[#D4A373]"/> <span>Drenaje rápido</span></div>
                    <div className="flex flex-col items-center gap-2"><Layers size={22} className="text-[#D4A373]"/> <span>Poca retención</span></div>
                    <div className="flex flex-col items-center gap-2"><Wind size={22} className="text-[#D4A373]"/> <span>Suelta</span></div>
                </div>
                <div onClick={() => toggleSection('arenoso')} className={accordionBtnStyle}>
                    <span className="font-bold text-gray-700 text-sm">Cómo prepararlo</span>
                    {openSection === 'arenoso' ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </div>
                {openSection === 'arenoso' && (
                    <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed bg-white/50 mx-2 rounded-b-2xl pt-3 mt-[-10px]">
                        Agrega materia orgánica como compost o estiércol para mejorar la retención de agua.
                    </div>
                )}
            </div>
        </div>

        {/* --- SUELO LIMOSO --- */}
        <div className={cardStyle}>
            <div className="h-40 bg-[#A89F91] w-full relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1643897905124-5f28dfa30096?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Suelo Limoso" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-extrabold text-[#4A4238] mb-5">Suelo Limoso</h2>
                <div className="flex justify-between px-2 mb-8 text-xs font-bold text-[#7A7268]">
                    <div className="flex flex-col items-center gap-2"><Scale size={22} className="text-[#9F9485]"/> <span>Equilibrio</span></div>
                    <div className="flex flex-col items-center gap-2"><Sprout size={22} className="text-[#9F9485]"/> <span>Fértil</span></div>
                    <div className="flex flex-col items-center gap-2"><AlignCenterVertical size={22} className="text-[#9F9485]"/> <span>Compacto</span></div>
                </div>
                <div onClick={() => toggleSection('limoso')} className={accordionBtnStyle}>
                    <span className="font-bold text-gray-700 text-sm">Cómo prepararlo</span>
                    {openSection === 'limoso' ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </div>
                {openSection === 'limoso' && (
                    <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed bg-white/50 mx-2 rounded-b-2xl pt-3 mt-[-10px]">
                        Evita pisarlo cuando está húmedo para no compactarlo. Añade arena si es necesario.
                    </div>
                )}
            </div>
        </div>

        {/* --- SUELO ARCILLOSO --- */}
        <div className={cardStyle}>
            <div className="h-40 bg-[#BFA588] w-full relative overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1673026794571-91daab9a9638?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Suelo Arcilloso" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-extrabold text-[#4A4238] mb-5">Suelo Arcilloso</h2>
                <div className="flex justify-between px-1 mb-8 text-xs font-bold text-[#7A7268]">
                    <div className="flex flex-col items-center gap-2"><Weight size={22} className="text-[#BFA588]"/> <span>Pesado</span></div>
                    <div className="flex flex-col items-center gap-2 text-center"><Apple size={22} className="text-[#BFA588]"/> <span>Nutrientes</span></div>
                    <div className="flex flex-col items-center gap-2 text-center"><Waves size={22} className="text-[#BFA588]"/> <span>Mal drenaje</span></div>
                </div>
                <div onClick={() => toggleSection('arcilloso')} className={accordionBtnStyle}>
                    <span className="font-bold text-gray-700 text-sm">Cómo prepararlo</span>
                    {openSection === 'arcilloso' ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </div>
                {openSection === 'arcilloso' && (
                    <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed bg-white/50 mx-2 rounded-b-2xl pt-3 mt-[-10px]">
                        Mezcla con arena gruesa y materia orgánica para mejorar el drenaje y aireación.
                    </div>
                )}
            </div>
        </div>

        {/* --- SUELO FRANCO --- */}
        <div className={cardStyle}>
            <div className="h-40 bg-[#5F7161] w-full relative overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1673828332632-17fe468ed31e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Suelo Franco" className="w-full h-full object-cover opacity-90" />
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-extrabold text-[#4A4238] mb-5">Suelo Franco</h2>
                <div className="flex justify-between px-2 mb-6 text-xs font-bold text-[#7A7268]">
                    <div className="flex flex-col items-center gap-2 text-center"><Star size={22} className="text-[#6F8270]" fill="currentColor"/> <span>Ideal</span></div>
                    <div className="flex flex-col items-center gap-2"><Scale size={22} className="text-[#6F8270]"/> <span>Equilibrado</span></div>
                    <div className="flex flex-col items-center gap-2 text-center"><Pickaxe size={22} className="text-[#6F8270]"/> <span>Fácil uso</span></div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-gray-800 text-sm mb-2">Mantenimiento</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        Añade compost regularmente y practica la rotación de cultivos.
                    </p>
                </div>
            </div>
        </div>
        <div className="h-4"></div>
      </div>
      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
    </div>
  );
}
