import React, { useState } from 'react';
import { ArrowLeft, Sun, Thermometer, CloudRain, Wind, Cloud, Frown, Smile, Meh } from 'lucide-react';

export default function ClimaDetail({ onBack }) {
  // Estado para el deslizador de luz (0 a 100)
  const [lightLevel, setLightLevel] = useState(50);

  // Lógica para determinar qué cara mostrar según el nivel de luz
  const getFeedbackIcon = () => {
    if (lightLevel < 30) return <Frown size={32} className="text-gray-400" />; // Poca luz
    if (lightLevel > 70) return <Frown size={32} className="text-red-400" />;   // Mucha luz (quemadura)
    return <Smile size={32} className="text-green-500" />;                      // Óptimo
  };

  const bgImageUrl = "https://plus.unsplash.com/premium_photo-1727873945462-b924f74fc618?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div 
      className="relative w-full h-screen max-w-[400px] mx-auto flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      {/* Capa oscura para legibilidad */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* --- CABECERA --- */}
      <div className="bg-white/90 backdrop-blur-md px-4 pt-5 pb-3 flex items-center gap-4 shadow-sm z-20 sticky top-0">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100/50 text-gray-700 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <span className="text-gray-800 font-bold text-lg">El Poder del Sol y el Clima</span>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="flex-1 overflow-y-auto pb-8 hide-scrollbar p-5 z-10">
        
        {/* HERO IMAGE CARD */}
        <div className="relative w-full h-48 rounded-[30px] overflow-hidden shadow-lg mb-6 group">
            <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=500&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Campo soleado"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
                <h2 className="text-white font-extrabold text-2xl leading-tight mb-1">El Poder del Sol y el Clima</h2>
                <p className="text-white/90 text-xs font-medium">Descubre cómo la luz y el tiempo hacen prosperar tus cultivos.</p>
            </div>
        </div>

        {/* SECCIÓN 1: INTRO */}
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-md">¿Por qué es vital el sol?</h2>
            <div className="bg-white/80 backdrop-blur-md p-5 rounded-[25px] shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                    Una breve y visual explicación sobre la fotosíntesis, mostrando cómo la luz solar proporciona energía para el crecimiento y la salud de tus cultivos.
                </p>
            </div>
        </div>

        {/* SECCIÓN 2: GESTIONANDO LUZ */}
        <div className="bg-white/90 backdrop-blur-md rounded-[25px] overflow-hidden shadow-sm mb-6">
            <img 
                src="https://images.unsplash.com/photo-1552408304-86f79df32d33?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="w-full h-40 object-cover"
                alt="Planta en ventana"
            />
            <div className="p-5">
                <h3 className="font-bold text-gray-800 text-lg mb-2">Gestionando la luz como un experto</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                    Aprende la diferencia entre luz directa e indirecta y cómo afecta a tus plantas.
                </p>
            </div>
        </div>

        {/* SECCIÓN 3: SLIDER INTERACTIVO */}
        <div className="bg-[#F3F0E7]/95 backdrop-blur-sm p-6 rounded-[30px] shadow-lg mb-8 border border-white/40">
            <p className="text-center text-xs text-gray-600 mb-6 font-medium leading-relaxed">
                Usa el control deslizante para ver cómo reacciona una planta a diferentes niveles de exposición solar.
            </p>

            {/* Slider */}
            <div className="flex flex-col items-center gap-4">
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={lightLevel} 
                    onChange={(e) => setLightLevel(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
                
                <div className="flex justify-between w-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <span>Poca luz</span>
                    <span>Luz óptima</span>
                    <span>Mucha luz</span>
                </div>

                {/* Caritas de feedback */}
                <div className="flex justify-center items-center gap-8 mt-2 bg-white px-6 py-2 rounded-full shadow-inner">
                    <div className={`transition-opacity duration-300 ${lightLevel < 30 ? 'opacity-100 scale-110' : 'opacity-30 grayscale'}`}>
                        <Meh size={28} className="text-gray-500"/>
                    </div>
                    <div className={`transition-opacity duration-300 ${lightLevel >= 30 && lightLevel <= 70 ? 'opacity-100 scale-125' : 'opacity-30 grayscale'}`}>
                        <Smile size={32} className="text-green-500"/>
                    </div>
                    <div className={`transition-opacity duration-300 ${lightLevel > 70 ? 'opacity-100 scale-110' : 'opacity-30 grayscale'}`}>
                        <Frown size={28} className="text-red-400"/>
                    </div>
                </div>
            </div>
        </div>

        {/* SECCIÓN 4: EL CLIMA - GRID */}
        <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-md">El clima, tu gran aliado</h2>
        <p className="text-white/90 text-xs mb-6 font-medium drop-shadow-sm">
            La temperatura, la lluvia y el viento son factores clave. Aprende a observarlos.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Card Temperatura */}
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-[25px] flex flex-col items-center text-center shadow-sm">
                <Thermometer className="text-blue-500 mb-2" size={24} />
                <h4 className="font-bold text-gray-800 text-sm">Temperatura</h4>
                <p className="text-[10px] text-gray-500 mt-1">Cada planta tiene su rango ideal.</p>
            </div>

            {/* Card Lluvia */}
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-[25px] flex flex-col items-center text-center shadow-sm">
                <CloudRain className="text-blue-600 mb-2" size={24} />
                <h4 className="font-bold text-gray-800 text-sm">Lluvia</h4>
                <p className="text-[10px] text-gray-500 mt-1">Hidratación natural y limpieza.</p>
            </div>

            {/* Card Viento */}
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-[25px] flex flex-col items-center text-center shadow-sm">
                <Wind className="text-cyan-500 mb-2" size={24} />
                <h4 className="font-bold text-gray-800 text-sm">Viento</h4>
                <p className="text-[10px] text-gray-500 mt-1">Ayuda a fortalecer los tallos.</p>
            </div>

            {/* Card Nubes */}
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-[25px] flex flex-col items-center text-center shadow-sm">
                <Cloud className="text-gray-500 mb-2" size={24} />
                <h4 className="font-bold text-gray-800 text-sm">Nubes</h4>
                <p className="text-[10px] text-gray-500 mt-1">Sombra natural en días intensos.</p>
            </div>
        </div>

      </div>

      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
    </div>
  );
}
