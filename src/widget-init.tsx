import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Asume que ya has importado React, ReactDOM, y tu componente App

declare global {
    interface Window {
      initMyWidget: (containerId: string) => void;
    }
  }

window.initMyWidget = (containerId: string) => {
  ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById(containerId));
};
