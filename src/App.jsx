import React, { useState } from 'react';
import Welcome from './Welcome';
import Login from './Login';
import Home from './Home';
import Guides from './Guides'; 
import Diagnostico from './Diagnostico';
import RiegoDetail from './RiegoDetail'; 
import SuelosDetail from './SuelosDetail'; // <--- Faltaba importar esto
import ClimaDetail from './ClimaDetail';
import NutrientesDetail from './NutrientesDetail';
import PlagasDetail from './PlagasDetail';
import HerramientasDetail from './HerramientasDetail';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  // Función para navegar entre pantallas
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      
      {/* 1. PANTALLA DE BIENVENIDA */}
      {currentScreen === 'welcome' && (
        <Welcome onStart={() => setCurrentScreen('login')} />
      )}
      
      {/* 2. LOGIN */}
      {currentScreen === 'login' && (
        <Login 
          onBack={() => setCurrentScreen('welcome')} 
          onLogin={() => setCurrentScreen('home')} 
        />
      )}

      {/* 3. HOME (INICIO) */}
      {currentScreen === 'home' && (
        <Home 
          onBack={() => setCurrentScreen('login')}
          onNavigate={navigateTo} 
        />
      )}
      
      {/* 4. GUÍAS */}
      {currentScreen === 'guides' && (
        <Guides 
          onBack={() => setCurrentScreen('home')}
          onNavigate={navigateTo}
        />
      )}

      {/* 5. DIAGNÓSTICO */}
      {currentScreen === 'diagnostico' && (
        <Diagnostico 
          onBack={() => setCurrentScreen('home')} // Flecha arriba vuelve a Home
          onNavigate={navigateTo} // Barra abajo navega
        />
      )}

      {/* 6. DETALLE DE RIEGO */}
      {currentScreen === 'riego-detail' && (
        <RiegoDetail 
          onBack={() => setCurrentScreen('guides')} 
        />
      )}

      {/* 7. DETALLE DE SUELOS (NUEVO) */}
      {currentScreen === 'suelos-detail' && (
        <SuelosDetail 
          onBack={() => setCurrentScreen('guides')} 
        />
      )}

      {/* --- 2. AGREGAR ESTA CONDICIÓN NUEVA --- */}
      {currentScreen === 'clima-detail' && (
        <ClimaDetail 
          onBack={() => setCurrentScreen('guides')} 
        />
      )}

      {/* 9. DETALLE DE NUTRIENTES (NUEVO) */}
      {currentScreen === 'nutrientes-detail' && (
        <NutrientesDetail 
          onBack={() => setCurrentScreen('guides')} 
        />
      )}

      {/* 10. DETALLE DE PLAGAS (NUEVO) */}
      {currentScreen === 'plagas-detail' && (
        <PlagasDetail 
          onBack={() => setCurrentScreen('guides')} 
        />
      )}

      {/* 11. DETALLE DE HERRAMIENTAS (NUEVO) */}
      {currentScreen === 'herramientas-detail' && (
        <HerramientasDetail 
          onBack={() => setCurrentScreen('guides')} 
        />
      )}
      
    </div>
  );
}

export default App;