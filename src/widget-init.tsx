import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

declare global {
  interface Window {
    initMyWidget: (containerId: string) => void;
  }
}

window.initMyWidget = (containerId) => {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('El contenedor del widget no se encontró.');
    return;
  }

  // Leer el ID del cliente desde el atributo de datos
  const clientId = container.getAttribute('clientId');

  // Pasar el clientId como prop a tu aplicación React
  ReactDOM.render(<React.StrictMode><App clientId={clientId} /></React.StrictMode>, container);
};
