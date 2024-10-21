import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Script from './Script.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Script/>

  </StrictMode>,
)
