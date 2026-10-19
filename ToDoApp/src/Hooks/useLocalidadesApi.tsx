import { useCallback, useEffect, useState } from "react";
import type ILocalidad from "../Interfaces/ILocalidad";

const URL_BASE =
  "https://api-inventario-ale-fcdhb0brcahmb4dy.westus3-01.azurewebsites.net/api/Localidades";

export default function useLocalidadesApi() {
  const [openModal, setOpenModal] = useState(false);
  const [verEliminados, setVerEliminados] = useState(false);
  const [localidadSeleccionada, setLocalidadSeleccionada] =
    useState<ILocalidad | null>(null);
  const [localidades, setLocalidades] = useState<ILocalidad[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const obtenerLocalidades = useCallback(async (): Promise<
    ILocalidad[] | undefined
  > => {
    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch(URL_BASE);

      if (!respuesta.ok) {
        throw new Error("Error al obtener las localidades");
      }

      const datos: ILocalidad[] = await respuesta.json();
      setLocalidades(datos);
      return datos;
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error desconocido al obtener las localidades"
      );
    } finally {
      setCargando(false);
    }
  }, []);

  const obtenerLocalidadesEliminadas = useCallback(async (): Promise<
    ILocalidad[] | undefined
  > => {
    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch(`${URL_BASE}/deleteds`);

      if (!respuesta.ok) {
        throw new Error("Error al obtener las localidades eliminadas");
      }

      const datos: ILocalidad[] = await respuesta.json();
      setLocalidades(datos);
      return datos;
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error desconocido al obtener las localidades eliminadas"
      );
    } finally {
      setCargando(false);
    }
  }, []);

  const obtenerLocalidadPorId = useCallback(
    async (id: number): Promise<ILocalidad | undefined> => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(`${URL_BASE}/${id}`);

        if (!respuesta.ok) {
          throw new Error("Error al obtener la localidad");
        }

        const localidad: ILocalidad = await respuesta.json();
        return localidad;
      } catch (err: unknown) {
        setError(
          err instanceof Error
            ? err.message
            : "Ocurrió un error desconocido al obtener la localidad"
        );
      } finally {
        setCargando(false);
      }
    },
    []
  );

  const agregarLocalidad = useCallback(
    async (
      localidad: Omit<ILocalidad, "id">
    ): Promise<ILocalidad | undefined> => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(URL_BASE, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(localidad),
        });

        if (!respuesta.ok) {
          throw new Error("Error al crear la localidad");
        }

        const nuevaLocalidad: ILocalidad = await respuesta.json();
        setLocalidades((localidadesActuales) => [
          ...localidadesActuales,
          nuevaLocalidad,
        ]);
        return nuevaLocalidad;
      } catch (err: unknown) {
        setError(
          err instanceof Error
            ? err.message
            : "Ocurrió un error desconocido al crear la localidad"
        );
      } finally {
        setCargando(false);
      }
    },
    []
  );

  const editarLocalidad = useCallback(
    async (id: number, localidad: Partial<ILocalidad>): Promise<void> => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(`${URL_BASE}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(localidad),
        });

        if (!respuesta.ok) {
          throw new Error("Error al actualizar la localidad");
        }

        setLocalidades((localidadesActuales) =>
          localidadesActuales.map((l) =>
            l.id === id ? { ...l, ...localidad } : l
          )
        );
      } catch (err: unknown) {
        setError(
          err instanceof Error
            ? err.message
            : "Ocurrió un error desconocido al actualizar la localidad"
        );
      } finally {
        setCargando(false);
      }
    },
    []
  );

  const eliminarLocalidad = useCallback(async (id: number): Promise<void> => {
    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch(`${URL_BASE}/${id}`, { method: "DELETE" });

      if (!respuesta.ok) {
        throw new Error("Error al eliminar la localidad");
      }

      setLocalidades((localidadesActuales) =>
        localidadesActuales.filter((l) => l.id !== id)
      );
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error desconocido al eliminar la localidad"
      );
    } finally {
      setCargando(false);
    }
  }, []);

  const restaurarLocalidad = useCallback(async (id: number): Promise<void> => {
    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch(`${URL_BASE}/restore/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!respuesta.ok) {
        throw new Error("Error al restaurar la localidad");
      }

      setLocalidades((localidadesActuales) =>
        localidadesActuales.filter((l) => l.id !== id)
      );
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error desconocido al restaurar la localidad"
      );
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    obtenerLocalidades();
  }, [obtenerLocalidades]);

  return {
    localidades,
    cargando,
    error,
    obtenerLocalidades,
    obtenerLocalidadPorId,
    agregarLocalidad,
    editarLocalidad,
    eliminarLocalidad,
    restaurarLocalidad,
    obtenerLocalidadesEliminadas,
    openModal,
    setOpenModal,
    verEliminados,
    setVerEliminados,
    localidadSeleccionada,
    setLocalidadSeleccionada,
  };
}