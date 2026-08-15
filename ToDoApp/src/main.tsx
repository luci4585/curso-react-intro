import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App/App.tsx'
import { TodoProvider } from './Components/TodoContext/TodoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
    <App />
    </TodoProvider>
  </StrictMode>,
)
