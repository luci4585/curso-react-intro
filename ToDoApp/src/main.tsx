import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App/App.tsx'
import { TodoProvider } from './Components/TodoContext/TodoContext.tsx'
import { AppEjercicio } from './Components/AppEjercicio/AppEjercicio.tsx'
import AppClientes from './Components/AppClientes/AppClientes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      {/*<App />*/}
      {/*<AppEjercicio />*/}
      <AppClientes />
    </TodoProvider>
  </StrictMode>,
)
