import React from "react";
import type ILocalidad from "../../Interfaces/ILocalidad";
import useLocalidadesApi from "../../Hooks/useLocalidadesApi";

export type LocalidadContextType = {
  localidades: ILocalidad[];
  cargando: boolean;
  error: string | null;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  verEliminados: boolean;
  setVerEliminados: (verEliminados: boolean) => void;
  localidadSeleccionada: ILocalidad | null;
  setLocalidadSeleccionada: (localidad: ILocalidad | null) => void;
  obtenerLocalidades: () => Promise<ILocalidad[] | undefined>;
  obtenerLocalidadPorId: (id: number) => Promise<ILocalidad | undefined>;
  agregarLocalidad: (
    localidad: Omit<ILocalidad, "id">
  ) => Promise<ILocalidad | undefined>;
  editarLocalidad: (
    id: number,
    localidad: Partial<ILocalidad>
  ) => Promise<void>;
  eliminarLocalidad: (id: number) => Promise<void>;
  restaurarLocalidad: (id: number) => Promise<void>;
  obtenerLocalidadesEliminadas: () => Promise<ILocalidad[] | undefined>;
};

const LocalidadContext = React.createContext<LocalidadContextType | null>(null);

export function LocalidadProvider({ children }: { children: React.ReactNode }) {
  const localidadApi = useLocalidadesApi();

  return (
    <LocalidadContext.Provider value={localidadApi}>
      {children}
    </LocalidadContext.Provider>
  );
}

export function useLocalidadContext() {
  const context = React.useContext(LocalidadContext);

  if (!context) {
    throw new Error(
      "useLocalidadContext debe utilizarse dentro de un LocalidadProvider"
    );
  }

  return context;
}

export { LocalidadContext };