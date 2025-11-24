import React from 'react';
// Importamos los iconos necesarios
import { Search, Droplets, Sun, Wind, Bug, Shovel, Hammer, ArrowLeft, Home, BookOpen, Stethoscope, User } from 'lucide-react';

export default function GuidesScreen({ onBack, onNavigate }) {
  
  // Datos de las tarjetas
  const categorias = [
    { 
      id: 1, 
      nombre: "Riego y Agua", 
      desc: "Cuándo y cuánto regar.",
      icono: <Droplets size={24} className="text-[#3A7D44]" /> 
    },
    { 
      id: 2, 
      nombre: "Suelo y Tierra", 
      desc: "Tipos y salud del suelo.",
      icono: <Shovel size={24} className="text-[#8B5E3C]" /> 
    },
    { 
      id: 3, 
      nombre: "Luz y Clima", 
      desc: "Luz y temperatura.",
      icono: <Sun size={24} className="text-[#D97706]" /> 
    },
    { 
      id: 4, 
      nombre: "Nutrientes", 
      desc: "Guía sobre fertilizantes.",
      icono: <Wind size={24} className="text-[#65A30D]" /> 
    },
    { 
      id: 5, 
      nombre: "Plagas", 
      desc: "Identificar problemas.",
      icono: <Bug size={24} className="text-[#DC2626]" /> 
    },
    { 
      id: 6, 
      nombre: "Herramientas", 
      desc: "Resumen de esenciales.",
      icono: <Hammer size={24} className="text-[#4B5563]" /> 
    },
  ];

  return (
    <div className="relative w-full h-screen max-w-[400px] mx-auto bg-white flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100">
      
      {/* --- IMAGEN DE FONDO NUEVA --- */}
      <img 
        src="https://images.unsplash.com/photo-1696496857174-c0e89ddcf17d?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Fondo Textura" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
      />

      {/* --- CABECERA SUPERIOR --- */}
      <div className="bg-[#389491]/60 backdrop-blur-md px-4 pt-5 pb-3 flex items-center gap-4 shadow-sm z-20 sticky top-0 border-b border-white/10">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-white/20 text-white transition-colors">
           <ArrowLeft size={24} />
        </button>
        <span className="text-white font-bold text-lg drop-shadow-md">Guía para Principiantes</span>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="flex-1 overflow-y-auto pb-24 hide-scrollbar z-10 px-6 pt-6">
        
        {/* BARRA DE BÚSQUEDA */}
        <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Search size={20} />
            </div>
            {/* Input con fondo blanco semitransparente */}
            <input 
                type="text" 
                placeholder="Buscar temas específicos..." 
                className="w-full bg-white/80 border border-[#d1fae5] text-gray-700 placeholder-gray-400 pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-[#3A7D44] transition-all text-sm font-medium shadow-sm backdrop-blur-sm"
            />
        </div>

        {/* GRILLA DE CATEGORÍAS */}
        <div className="grid grid-cols-2 gap-4">
            {categorias.map((cat) => (
                <div 
                    key={cat.id}
                    // AQUÍ ESTÁ LA MAGIA: Si es el id 1 (Riego), vamos a 'riego-detail'
                    onClick={() => cat.id === 1 && onNavigate('riego-detail')}
                    className="bg-[#D8EECD]/95 backdrop-blur-sm p-4 rounded-[2rem] shadow-sm hover:scale-[1.02] transition-transform cursor-pointer relative overflow-hidden group border border-white/40 active:scale-95"
                >
                    
                    {/* Círculo Blanco detrás del icono */}
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/90 transition-colors">
                        {cat.icono}
                    </div>

                    {/* Decoración */}
                    <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-white/60"></div>
                    <div className="absolute top-8 right-3 w-1.5 h-1.5 rounded-full bg-white/60"></div>

                    <div>
                        <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1">{cat.nombre}</h3>
                        <p className="text-[10px] text-gray-600 leading-tight opacity-80">{cat.desc}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* --- BARRA INFERIOR (CON NAVEGACIÓN ARREGLADA) --- */}
      <div className="absolute bottom-0 w-full bg-[#389491]/60 backdrop-blur-md border-t border-white/10 py-3 px-6 flex justify-between items-center z-20">
        
        {/* INICIO */}
        <div onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <Home size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium">Inicio</span>
        </div>

        {/* GUÍA (Activo) */}
        <div className="flex flex-col items-center gap-1 cursor-pointer text-white">
          <BookOpen size={24} strokeWidth={2.5} />
          <span className="text-[10px] font-bold">Guía</span>
        </div>

        {/* DIAGNOSTICO */}
        <div onClick={() => onNavigate('diagnostico')} className="flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <Stethoscope size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium">Diagnóstico</span>
        </div>

        {/* PERFIL */}
        <div className="flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <User size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium">Perfil</span>
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}