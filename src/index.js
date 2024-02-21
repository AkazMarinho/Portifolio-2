import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as RouterMain } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterMain>
      <App />
    </RouterMain>
  </React.StrictMode>
);
