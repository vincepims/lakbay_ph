import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { MarketplaceProvider } from './context/MarketplaceContext';
import 'leaflet/dist/leaflet.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MarketplaceProvider><App /></MarketplaceProvider>
  </React.StrictMode>,
);
