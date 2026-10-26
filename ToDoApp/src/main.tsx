import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppClientes from './Components/AppClientes/AppClientes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppClientes />
  </StrictMode>,
)
