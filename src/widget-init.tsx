import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

declare global {
  interface Window {
    initMyWidget: () => void;
  }
}

const initMyWidgets = () => {
  // Busca todos los elementos que tienen un atributo 'data-client-id'
  const widgets = document.querySelectorAll('[data-client-id]');

  widgets.forEach(container => {
    const clientId = container.getAttribute('data-client-id');
    
    // Asegúrate de que App pueda manejar `clientId` como prop
    ReactDOM.render(<React.StrictMode><App clientId={clientId} /></React.StrictMode>, container);
  });
};

// Autoinicializa los widgets cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMyWidgets);
} else {
  initMyWidgets();
}

// Exponer la función de inicialización en window permite su uso manual si fuera necesario
window.initMyWidget = initMyWidgets;

