import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import './Style/index.css'
import App from "./Pages/App/App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

