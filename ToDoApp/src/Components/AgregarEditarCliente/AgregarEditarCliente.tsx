import ReactDOM from 'react-dom';
import './AgregarEditarCliente.css';


export default function AgregarEditarCliente({ children }: { children: React.ReactNode }) {
  const portalNode = document.getElementById('agregar-editar-cliente');

  if (!portalNode) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="agregar-editar-cliente">{children}</div>,
    portalNode
  );
}
