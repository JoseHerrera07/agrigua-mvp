import React from 'react';
import { Camera, Image as ImageIcon, ArrowLeft, Home, BookOpen, Stethoscope, User, Lightbulb, ScanLine, Layers, Flower2 } from 'lucide-react';

export default function DiagnosticoScreen({ onBack, onNavigate }) {

  return (
    <div className="relative w-full h-screen max-w-[400px] mx-auto bg-white flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100">
      
      {/* --- IMAGEN DE FONDO ORIGINAL --- */}
      <img 
        src="https://plus.unsplash.com/premium_photo-1680322474521-60fcadf0a416?q=80&w=387&auto=format&fit=crop" 
        alt="Fondo Textura" 
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
      />

      {/* --- CABECERA SUPERIOR --- */}
      <div className="bg-[#389491]/60 backdrop-blur-md px-4 pt-5 pb-3 flex items-center gap-4 shadow-sm z-20 sticky top-0 border-b border-white/10">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-white/20 text-white transition-colors">
           <ArrowLeft size={24} />
        </button>
        <span className="text-white font-bold text-lg drop-shadow-md">Analiza tu Cultivo</span>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="flex-1 overflow-y-auto pb-24 hide-scrollbar z-10 px-6 pt-6 flex flex-col items-center">
        
        {/* Texto descriptivo */}
        <p className="text-gray-600 text-center text-xs mb-6 px-4 font-medium leading-relaxed">
            Toma o sube una foto de la hoja o planta afectada para detectar problemas automáticamente.
        </p>

        {/* --- TARJETA PRINCIPAL --- */}
        <div className="bg-white/30 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm border border-white/20 flex flex-col items-center text-center mb-4 w-full relative overflow-hidden">
            
            <div className="mb-3 mt-1">
                <div className="w-14 h-14 border border-white/40 rounded-2xl flex items-center justify-center text-[#3A7D44] bg-white/60 shadow-sm">
                    <Flower2 size={30} />
                </div>
            </div>

            <h3 className="font-bold text-gray-800 mb-2 text-sm drop-shadow-sm">Sube una imagen de tu cultivo</h3>
            <p className="text-[10px] text-gray-600 mb-6 px-4 leading-relaxed font-medium">
                Arrastra y suelta una imagen o haz clic para seleccionarla desde tus archivos.
            </p>

            {/* BOTÓN TOMAR FOTO */}
            <button className="w-full bg-[#3A7D44] hover:bg-[#2d6636] text-white font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 text-sm border border-[#2d6636]/20">
                <Camera size={18} />
                Tomar Foto
            </button>
        </div>

        {/* BOTÓN SUBIR DESDE GALERÍA (AHORA ES VERDE) */}
        <button className="w-full bg-[#3A7D44] hover:bg-[#2d6636] text-white font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 mb-8 transition-all active:scale-95 text-sm border border-[#2d6636]/20">
            <ImageIcon size={18} />
            Subir desde Galería
        </button>

        {/* LISTA DE TIPS */}
        <div className="w-full flex flex-col gap-3">
            
            {/* Tip 1 */}
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/40 flex gap-4 items-center hover:bg-white/80 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100/50 flex items-center justify-center text-[#3A7D44]">
                    <Lightbulb size={16} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-700 text-xs">Asegura buena luz</h4>
                    <p className="text-[10px] text-gray-500">Evita las sombras para un mejor análisis.</p>
                </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/40 flex gap-4 items-center hover:bg-white/80 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100/50 flex items-center justify-center text-[#3A7D44]">
                    <ScanLine size={16} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-700 text-xs">Enfoca la zona afectada</h4>
                    <p className="text-[10px] text-gray-500">Asegúrate que la imagen sea nítida.</p>
                </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/40 flex gap-4 items-center hover:bg-white/80 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100/50 flex items-center justify-center text-[#3A7D44]">
                    <Layers size={16} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-700 text-xs">Una foto por planta</h4>
                    <p className="text-[10px] text-gray-500">Analiza una planta a la vez para precisión.</p>
                </div>
            </div>

        </div>

      </div>

      {/* --- BARRA INFERIOR --- */}
      <div className="absolute bottom-0 w-full bg-[#389491]/60 backdrop-blur-md border-t border-white/10 py-3 px-6 flex justify-between items-center z-20">
        
        {/* INICIO */}
        <div onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <Home size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium">Inicio</span>
        </div>

        {/* GUÍA */}
        <div onClick={() => onNavigate('guides')} className="flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <BookOpen size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium">Guía</span>
        </div>

        {/* DIAGNÓSTICO (Activo) */}
        <div className="flex flex-col items-center gap-1 cursor-pointer text-white">
          <Stethoscope size={24} strokeWidth={2.5} />
          <span className="text-[10px] font-bold">Diagnóstico</span>
        </div>

        {/* PERFIL */}
        <div className="flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <User size={24} strokeWidth={2} />
          <span className="text-[10px] font-medium">Perfil</span>
        </div>

      </div>

      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
    </div>
  );
}