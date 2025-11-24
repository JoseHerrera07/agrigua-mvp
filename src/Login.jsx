import React from 'react';
// 1. IMPORTAMOS LA FLECHA (ArrowLeft)
import { Shrub, Eye, ArrowLeft } from 'lucide-react';

// 2. RECIBIMOS LA ORDEN "onBack" AQUÍ
export default function Login({ onBack, onLogin }) { 
  return (
    <div className="relative w-full h-screen max-w-[400px] mx-auto bg-white flex flex-col font-sans overflow-hidden shadow-2xl border-x border-gray-100">
      
      {/* --- BOTÓN DE RETROCESO (NUEVO) --- */}
      {/* Lo ponemos con posición absoluta para que quede fijo arriba a la izquierda */}
      <button 
        onClick={onBack} 
        className="absolute top-6 left-6 z-20 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
      >
        <ArrowLeft size={24} />
      </button>

      {/* CONTENIDO SCROLEABLE */}
      <div className="flex-1 px-8 py-10 flex flex-col overflow-y-auto hide-scrollbar pt-16"> 
      {/* Nota: aumenté el pt (padding-top) a 16 para que el contenido no choque con la flecha */}
        
        {/* HEADER */}
        <div className="flex flex-col items-center mb-8">
          <Shrub color="#3f6212" size={48} strokeWidth={2} className="mb-4" />
          
          <h1 className="text-2xl font-bold text-gray-800 text-center leading-tight">
            Cuida tus plantas <br /> como un experto
          </h1>
          <p className="text-gray-400 text-sm mt-2 font-medium">
            Ingresa o crea tu cuenta para empezar
          </p>
        </div>

        {/* FORMULARIO */}
        <div className="flex flex-col gap-5 w-full">
          
          {/* Input Email */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="tuemail@ejemplo.com" 
              className="w-full bg-gray-50 border border-gray-200 text-gray-700 p-4 rounded-2xl outline-none focus:border-green-600 focus:bg-white transition-all text-sm font-medium"
            />
          </div>

          {/* Input Password */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 ml-1">Contrasena</label>
            <div className="relative">
              <input 
                type="password" 
                placeholder="Contrasena" 
                className="w-full bg-gray-50 border border-gray-200 text-gray-700 p-4 rounded-2xl outline-none focus:border-green-600 focus:bg-white transition-all text-sm font-medium pr-12"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Eye size={20} />
              </button>
            </div>
          </div>

          <p className="text-right text-xs text-gray-400 font-medium cursor-pointer hover:text-green-700 transition-colors">
            &lt;Olvidaste tu contrasena?
          </p>

          <button 
          onClick={onLogin}
          className="w-full bg-[#3A7D44] hover:bg-[#2e6536] text-white font-bold py-4 rounded-2xl mt-2 shadow-md transition-all text-sm">
            Continuar
          </button>

          <div className="flex items-center gap-4 my-2">
            <div className="h-[1px] bg-gray-200 flex-1"></div>
            <span className="text-gray-300 text-xs font-bold">o</span>
            <div className="h-[1px] bg-gray-200 flex-1"></div>
          </div>

          {/* Google */}
          <button className="w-full bg-gray-50 border border-gray-200 text-gray-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all text-sm">
             <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
             </svg>
             Continuar con Google
          </button>
          
          {/* Apple */}
          <button className="w-full bg-gray-50 border border-gray-200 text-gray-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all text-sm">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.02 3.65-.95.53.03 2.03.22 2.92 1.54-2.58 1.55-2.14 5.39.46 6.37-.58 1.48-1.3 2.93-2.1 4.19l-.01.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.17 2.5-2.58 4.41-3.74 4.25z"/></svg>
             Continuar con Apple
          </button>

        </div>

        <p className="text-[10px] text-gray-400 text-center mt-8 px-4 leading-relaxed font-medium">
          Al continuar, aceptas nuestros <span className="text-green-700 font-bold cursor-pointer">Terminos de Servicio</span> y <span className="text-green-700 font-bold cursor-pointer">Politica de Privacidad</span>.
        </p>

      </div>
    </div>
  );
}