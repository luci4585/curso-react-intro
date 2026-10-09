import React from "react";
import type ICliente from "../../Interfaces/ICliente";
import useClientesApi from "../../Hooks/useClientesApi";

export type ClienteContextType = {
  clientes: ICliente[];
  cargando: boolean;
  error: string | null;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  verEliminados: boolean;
  setVerEliminados: (verEliminados: boolean) => void;
  clienteSeleccionado: ICliente | null;
  setClienteSeleccionado: (cliente: ICliente | null) => void;
  obtenerClientes: () => Promise<ICliente[] | undefined>;
  obtenerClientePorId: (id: number) => Promise<ICliente | undefined>;
  agregarCliente: (
    cliente: Omit<ICliente, "id">
  ) => Promise<ICliente | undefined>;
  editarCliente: (id: number, cliente: Partial<ICliente>) => Promise<void>;
  eliminarCliente: (id: number) => Promise<void>;
  restaurarCliente: (id: number) => Promise<void>;
  obtenerClientesEliminados: () => Promise<ICliente[] | undefined>;
};

const ClienteContext = React.createContext<ClienteContextType | null>(null);

export function ClienteProvider({ children }: { children: React.ReactNode }) {
  const clienteApi = useClientesApi();

  return (
    <ClienteContext.Provider value={clienteApi}>
      {children}
    </ClienteContext.Provider>
  );
}

export function useClienteContext() {
  const context = React.useContext(ClienteContext);

  if (!context) {
    throw new Error(
      "useClienteContext debe utilizarse dentro de un ClienteProvider"
    );
  }

  return context;
}

export { ClienteContext };