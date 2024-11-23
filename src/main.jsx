import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import Path from './Path.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Path />
  </React.StrictMode>
)
