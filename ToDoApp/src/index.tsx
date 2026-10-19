import ReactDOM from 'react-dom/client';
import './index.css';
import AppClientes from './Components/AppClientes/AppClientes';
import { LocalidadProvider } from './Components/LocalidadContext/LocalidadContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <LocalidadProvider>
    <AppClientes />
  </LocalidadProvider>
);