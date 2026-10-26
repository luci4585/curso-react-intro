import ReactDOM from 'react-dom';
import './Portal.css';


export default function AgregarEditarCliente({ children }: { children: React.ReactNode }) {
  const portalNode = document.getElementById('portal');

  if (!portalNode) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="portal">{children}</div>,
    portalNode
  );
}
