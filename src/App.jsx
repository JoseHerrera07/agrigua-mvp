import React, { useState } from 'react';
import Welcome from './Welcome';
import Login from './Login';
import Home from './Home';
import Guides from './Guides'; 
import Diagnostico from './Diagnostico';
import RiegoDetail from './RiegoDetail'; 

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  // Función para navegar
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div>
      {/* 1. WELCOME */}
      {currentScreen === 'welcome' && <Welcome onStart={() => setCurrentScreen('login')} />}
      
      {/* 2. LOGIN */}
      {currentScreen === 'login' && <Login onBack={() => setCurrentScreen('welcome')} onLogin={() => setCurrentScreen('home')} />}

      {/* 3. HOME */}
      {currentScreen === 'home' && (
        <Home 
          onBack={() => setCurrentScreen('login')}
          // PASAMOS LA FUNCIÓN PARA NAVEGAR
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
          onBack={() => setCurrentScreen('home')} // Flecha de arriba va al Home
          onNavigate={navigateTo} // Barra de abajo navega
        />
      )}

      {/* 6. DETALLE RIEGO (¡ESTO FALTABA!) */}
      {currentScreen === 'riego-detail' && (
        <RiegoDetail 
          onBack={() => setCurrentScreen('guides')} // Al dar atrás, vuelve a la lista de guías
        />
      )}
      
    </div>
  );
}

export default App;