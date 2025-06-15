import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import reactDOM from 'react-dom/client'
import Parcial from './Parcial.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Parcial />
  </React.StrictMode>,
)
