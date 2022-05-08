import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GunProvider from './GunProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <GunProvider>
    <App />
  </GunProvider>
  // </React.StrictMode>
);
