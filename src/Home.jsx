import React, { useRef } from 'react';
import { Bell, ArrowRight, ChevronRight, ChevronLeft, Home, BookOpen, Stethoscope, User, ArrowLeft } from 'lucide-react';

export default function HomeScreen({ onBack, onNavigate }) { 
  
  const scrollContainerRef = useRef(null);

  const misCultivos = [
    { id: 1, nombre: "Tomates", estado: "Regar mañana", color: "text-amber-600", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=400&auto=format&fit=crop" },
    { id: 2, nombre: "Albahaca", estado: "Revisar plaga", color: "text-red-500", img: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?q=80&w=400&auto=format&fit=crop" },
    { id: 3, nombre: "Maracuyá", estado: "Cosecha pronto", color: "text-green-700", img: "https://plus.unsplash.com/premium_photo-1723294490531-adb186f8e319?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, nombre: "T. Cherry", estado: "Falta sol", color: "text-orange-600", img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=400&auto=format&fit=crop" },
    { id: 5, nombre: "Lechuga", estado: "Todo bien", color: "text-green-600", img: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=400&auto=format&fit=crop" },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 160; 
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full h-screen max-w-[400px] mx-auto bg-white flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100">
      
      <img 
        src="https://plus.unsplash.com/premium_photo-1661818047684-17468f0ba93a?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Fondo Textura" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
      />

      {/* HEADER */}
      <div className="bg-[#389491]/55 backdrop-blur-md px-4 pt-5 pb-3 flex justify-between items-center shadow-sm z-20 sticky top-0 border-b border-white/10">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-white/20 text-white transition-colors">
           <ArrowLeft size={24} />
        </button>
        <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs mb-1 border-2 border-white/80">A</div>
            <span className="text-white font-bold text-sm drop-shadow-md">Hola, Alex</span>
        </div>
        <div className="p-2 text-white cursor-pointer hover:bg-white/20 rounded-full transition-colors">
            <Bell size={24} />
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="flex-1 overflow-y-auto pb-24 hide-scrollbar z-10">
        
        {/* RESUMEN */}
        <div className="px-6 mt-6">
          <div className="bg-white/30 backdrop-blur-lg p-5 rounded-3xl shadow-sm border border-white/20">
            <h3 className="font-bold text-gray-700 mb-1">Resumen de Cultivos</h3>
            <p className="text-orange-500 text-sm font-medium mb-4">3 de 5 cultivos necesitan cuidados</p>
            <button className="bg-[#3A7D44] text-white text-xs font-bold py-2 px-4 rounded-full flex items-center gap-1 hover:bg-[#2d6636] transition-colors border border-[#2d6636] shadow-sm">
              Ver detalles <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* CARRUSEL MIS CULTIVOS */}
        <div className="mt-8 relative group">
          <div className="flex justify-between items-end px-6 mb-4">
              <h2 className="text-xl font-bold text-gray-800 drop-shadow-sm">Mis Cultivos</h2>
              <span className="text-xs text-green-800 font-bold cursor-pointer hover:underline">Ver todos</span>
          </div>
          <button onClick={() => scroll('left')} className="absolute left-2 top-1/2 z-20 bg-white/90 p-2 rounded-full shadow-lg text-gray-700 hover:bg-white hidden group-hover:block"><ChevronLeft size={20} /></button>
          <button onClick={() => scroll('right')} className="absolute right-2 top-1/2 z-20 bg-white/90 p-2 rounded-full shadow-lg text-gray-700 hover:bg-white hidden group-hover:block"><ChevronRight size={20} /></button>
          <div ref={scrollContainerRef} className="flex overflow-x-auto px-6 gap-4 pb-4 hide-scrollbar snap-x scroll-smooth">
            {misCultivos.map((cultivo) => (
                <div key={cultivo.id} className="min-w-[140px] snap-center cursor-pointer hover:scale-95 transition-transform duration-300">
                  <div className="h-36 w-full rounded-2xl overflow-hidden mb-3 relative shadow-md border border-white/50">
                      <img src={cultivo.img} alt={cultivo.nombre} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">{cultivo.nombre}</h3>
                  <p className={`${cultivo.color} text-xs font-bold bg-white/60 inline-block px-2 py-0.5 rounded-md backdrop-blur-sm`}>{cultivo.estado}</p>
                </div>
            ))}
          </div>
        </div>

        {/* GUÍAS Y ARTÍCULOS */}
        <div className="px-6 mt-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4 drop-shadow-sm">Guías y Artículos</h2>
          <div className="flex flex-col gap-4">
            {/* CORRECCIÓN AQUÍ: Se agregó onClick para ir a Riego */}
            <div onClick={() => onNavigate('riego-detail')} className="bg-white/40 backdrop-blur-lg p-3 rounded-2xl shadow-sm border border-white/20 flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer active:scale-95">
               <img src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=150&auto=format&fit=crop" className="w-16 h-16 rounded-xl object-cover" alt="Riego" />
               <div className="flex-1">
                 <h4 className="font-bold text-gray-800 text-sm leading-tight mb-1">Guía de riego para novatos</h4>
                 <p className="text-xs text-gray-500">Aprende cuándo y cómo regar.</p>
               </div>
               <ChevronRight size={20} className="text-gray-400" />
            </div>

            {/* CORRECCIÓN AQUÍ: Se agregó onClick para ir a Guías general */}
            <div onClick={() => onNavigate('guides')} className="bg-white/40 backdrop-blur-lg p-3 rounded-2xl shadow-sm border border-white/20 flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer active:scale-95">
               <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=150&auto=format&fit=crop" className="w-16 h-16 rounded-xl object-cover" alt="Plagas" />
               <div className="flex-1">
                 <h4 className="font-bold text-gray-800 text-sm leading-tight mb-1">Identificar plagas comunes</h4>
                 <p className="text-xs text-gray-500">Las 5 plagas más frecuentes.</p>
               </div>
               <ChevronRight size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="absolute bottom-0 w-full bg-[#389491]/60 backdrop-blur-md border-t border-white/10 py-3 px-6 flex justify-between items-center z-20">
        <div className="flex flex-col items-center gap-1 cursor-pointer text-white">
          <Home size={24} strokeWidth={2.5} />
          <span className="text-[10px] font-bold">Inicio</span>
        </div>
        <div onClick={() => onNavigate('guides')} className="flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <BookOpen size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium">Guía</span>
        </div>
        <div onClick={() => onNavigate('diagnostico')} className="flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <Stethoscope size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium">Diagnóstico</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <User size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium">Perfil</span>
        </div>
      </div>
      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none !important; } .hide-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; } `}</style>
    </div>
  );
}