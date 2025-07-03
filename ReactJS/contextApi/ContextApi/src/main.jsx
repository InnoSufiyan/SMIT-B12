import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Context/Store.jsx'

createRoot(document.getElementById('root')).render(
  <Store>
    <App />
  </Store>
)
