import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppClientes from './Components/AppClientes/AppClientes.tsx'
import { LocalidadProvider } from './Components/LocalidadContext/LocalidadContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalidadProvider>
      <AppClientes />
    </LocalidadProvider>
  </StrictMode>,
)
