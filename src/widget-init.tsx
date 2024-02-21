import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

declare global {
  interface Window {
    initMyWidget: (clientId: string) => void;
  }
}

const initMyWidget = (clientId: string) => {
  // Encuentra todos los elementos que tengan el atributo `data-client-id`
  const containers = document.querySelectorAll(`[data-client-id='${clientId}']`);

  containers.forEach(container => {
    // Ahora puedes pasar el clientId directamente a tu App
    ReactDOM.render(<React.StrictMode><App clientId={clientId} /></React.StrictMode>, container);
  });
};

// Ejecutar la función de inicialización automáticamente para todos los elementos encontrados
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-client-id]').forEach(container => {
    const clientId = container.getAttribute('data-client-id');
    if (clientId) {
      initMyWidget(clientId);
    }
  });
});

window.initMyWidget = initMyWidget; // Permite llamadas explícitas si es necesario
