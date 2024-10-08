import  React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';

const rootElement = document.getElementById('root');

// Use ReactDOM.createRoot correctly for React 18+
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);