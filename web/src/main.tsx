import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "@picocss/pico"
import { loadTheme } from './ts/theme-switcher' 

loadTheme();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
