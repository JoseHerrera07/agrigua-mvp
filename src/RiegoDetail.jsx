import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, Lightbulb, Droplets, CloudRain, Waves, ChevronDown, ChevronUp } from 'lucide-react';

export default function RiegoDetail({ onBack }) {
  
  // Estado para saber qué acordeón está abierto (por defecto el 1: Goteo)
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // URL de la imagen de fondo
  const bgImageUrl = "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    // --- CAMBIO PRINCIPAL AQUÍ ---
    // 1. Se eliminó el bg-gradient...
    // 2. Se añadieron bg-cover, bg-center, bg-no-repeat para que la imagen se ajuste bien.
    // 3. Se usó el estilo en línea (style={{...}}) para poner la imagen de fondo.
    <div 
      className="relative w-full h-screen max-w-[400px] mx-auto flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100 bg-cover bg-center bg-no-repeat z-0"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      
      {/* capa de oscurecimiento opcional si la imagen es muy clara, puedes quitarla si prefieres */}
       <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* --- CABECERA SUPERIOR --- */}
      {/* La cabecera ya tiene transparencia (bg-white/90) y blur, se verá bien sobre el fondo */}
      <div className="bg-white/90 backdrop-blur-md px-4 pt-5 pb-0 flex flex-col shadow-sm z-20 sticky top-0">
        
        {/* Fila de Título */}
        <div className="flex justify-between items-center mb-4">
            <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100/50 text-gray-700 transition-colors">
                <ArrowLeft size={24} />
            </button>
            <span className="text-gray-800 font-bold text-lg">Guía de Riego Inteligente</span>
            <HelpCircle size={24} className="text-gray-500" />
        </div>

        {/* Pestañas (Tabs) */}
        <div className="flex justify-between text-sm font-medium text-gray-600">
            <div className="pb-3 border-b-2 border-[#4A90E2] text-[#4A90E2] px-4 cursor-pointer font-bold">Tipos de Riego</div>
            <div className="pb-3 border-b-2 border-transparent hover:text-gray-800 px-4 cursor-pointer transition-colors">Necesidades</div>
            <div className="pb-3 border-b-2 border-transparent hover:text-gray-800 px-4 cursor-pointer transition-colors">Consejos</div>
        </div>
      </div>

      {/* --- CONTENIDO SCROLEABLE --- */}
      <div className="flex-1 overflow-y-auto pb-8 hide-scrollbar p-5 z-10">
        
        {/* TARJETA CONSEJO DEL DÍA (Le di un toque de transparencia también para que se integre) */}
        <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-orange-100/50 flex items-center gap-4 mb-6">
            <div className="flex-1">
                <h4 className="text-orange-500 font-bold text-sm mb-1">Consejo del Día</h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                    Riega tus plantas temprano en la mañana para reducir la evaporación y permitir que las hojas se sequen.
                </p>
            </div>
            <div className="w-12 h-12 bg-orange-50/80 rounded-full flex items-center justify-center flex-shrink-0 border border-orange-100/50">
                <Lightbulb size={24} className="text-orange-400" fill="currentColor" />
            </div>
        </div>

        {/* TÍTULO SECCIÓN */}
        <h3 className="text-lg font-bold text-white mb-4 drop-shadow-sm">Tipos de Riego</h3>

        {/* ACORDEÓN 1: GOTEO (Estos ya tienen el efecto borroso del paso anterior) */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm mb-3 overflow-hidden border border-white/40 relative z-10">
            <div onClick={() => toggleAccordion(1)} className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/40 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50/80 rounded-full flex items-center justify-center text-green-600">
                        <Droplets size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm">Riego por Goteo</span>
                </div>
                {openId === 1 ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
            </div>
            {openId === 1 && (
                <div className="px-4 pb-4 text-xs text-gray-700 font-medium leading-relaxed border-t border-white/30 pt-3 bg-white/20">
                    Este método aplica agua lentamente a las raíces, minimizando la evaporación. Es ideal para hortalizas y frutales, ahorrando hasta un 60% de agua.
                </div>
            )}
        </div>

        {/* ACORDEÓN 2: ASPERSIÓN */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm mb-3 overflow-hidden border border-white/40 relative z-10">
            <div onClick={() => toggleAccordion(2)} className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/40 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50/80 rounded-full flex items-center justify-center text-blue-600">
                        <CloudRain size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm">Riego por Aspersión</span>
                </div>
                {openId === 2 ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
            </div>
            {openId === 2 && (
                 <div className="px-4 pb-4 text-xs text-gray-700 font-medium leading-relaxed border-t border-white/30 pt-3 bg-white/20">
                    Simula la lluvia. Es útil para cubrir grandes áreas de césped o cultivos bajos, aunque puede favorecer hongos si no se controla adecuadamente.
                </div>
            )}
        </div>

        {/* ACORDEÓN 3: INUNDACIÓN */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm mb-8 overflow-hidden border border-white/40 relative z-10">
            <div onClick={() => toggleAccordion(3)} className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/40 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-50/80 rounded-full flex items-center justify-center text-cyan-600">
                        <Waves size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm">Riego por Inundación</span>
                </div>
                {openId === 3 ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
            </div>
            {openId === 3 && (
                 <div className="px-4 pb-4 text-xs text-gray-700 font-medium leading-relaxed border-t border-white/30 pt-3 bg-white/20">
                    Consiste en inundar el terreno. Es barato pero poco eficiente. Se usa en cultivos que requieren mucha agua como el arroz.
                </div>
            )}
        </div>

        {/* GRÁFICA DE EFICIENCIA (También le di un poco de transparencia para uniformidad) */}
        <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-gray-100/50 mb-6">
            <h3 className="font-bold text-gray-800 text-sm mb-4">Eficiencia de Agua Comparada</h3>
            
            {/* Barra 1 */}
            <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-gray-600 w-20 font-medium">Goteo</span>
                <div className="flex-1 h-2.5 bg-gray-100/80 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A90E2] w-[90%] rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-[#4A90E2] w-8 text-right">90%</span>
            </div>

            {/* Barra 2 */}
            <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-gray-600 w-20 font-medium">Aspersión</span>
                <div className="flex-1 h-2.5 bg-gray-100/80 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A90E2] w-[75%] rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-[#4A90E2] w-8 text-right">75%</span>
            </div>

            {/* Barra 3 */}
            <div className="flex items-center gap-3">
                <span className="text-xs text-gray-600 w-20 font-medium">Inundación</span>
                <div className="flex-1 h-2.5 bg-gray-100/80 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A90E2] w-[50%] rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-[#4A90E2] w-8 text-right">50%</span>
            </div>
        </div>

      </div>

      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
    </div>
  );
}