import React from 'react';
import { Shrub } from 'lucide-react';

// Fíjate aquí: recibimos una orden llamada "onStart" para saber cuándo cambiar de pantalla
export default function Welcome({ onStart }) {
  return (
    <div className="relative w-full h-screen max-w-[400px] mx-auto bg-gray-900 flex flex-col justify-center items-center font-sans overflow-hidden shadow-2xl border-x border-gray-800">
      
      {/* IMAGEN DE FONDO */}
      <img 
        src="https://images.unsplash.com/photo-1570445997127-459affe1cc25?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Fondo Plantas" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90"></div>

      <div className="relative z-10 w-full px-8 flex flex-col items-center text-white py-8">
        
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center gap-3">
            <Shrub color="white" size={32} strokeWidth={2.5} className="-mt-1" />
            <span className="text-xl font-semibold tracking-wide">AgriGuía</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Tu huerto en tus <br/> manos
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            El compañero perfecto para jardineros principiantes. Obtén consejos de cuidado personalizados y detecta cualquier problema al instante.
          </p>
        </div>

        {/* ICONOS */}
        <div className="flex justify-center gap-6 mb-10 w-full">
          <div className="flex flex-col items-center text-center flex-1">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <h3 className="font-bold text-sm">Problemas</h3>
          </div>
          <div className="flex flex-col items-center text-center flex-1">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </div>
            <h3 className="font-bold text-sm">Cuidados</h3>
          </div>
        </div>

        {/* BOTÓN CON ACCIÓN */}
        {/* Aquí está la magia: Cuando haces click, avisa para cambiar pantalla */}
        <button 
          onClick={onStart}
          className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-2xl mb-5 transition-colors shadow-lg cursor-pointer">
          Comenzar
        </button>

        <div className="text-center">
          <p className="text-xs text-gray-400">
            ¿Ya tienes una cuenta? <span onClick={onStart} className="text-white font-bold ml-1 cursor-pointer">Inicia sesión</span>
          </p>
        </div>

      </div>
    </div>
  );
}
