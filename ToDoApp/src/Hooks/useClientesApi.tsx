import { useState, useEffect, useCallback } from "react";
import type ICliente from "../Interfaces/ICliente";

const URL_BASE =
  "https://api-inventario-ale-fcdhb0brcahmb4dy.westus3-01.azurewebsites.net/api/Clientes";


export default function useClientesApi() {
  const [openModal, setOpenModal] = useState(false);
  const [verEliminados, setVerEliminados] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] =
    useState<ICliente | null>(null);
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const obtenerClientes = useCallback(async (): Promise<
    ICliente[] | undefined
  > => {
    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch(URL_BASE);

      if (!respuesta.ok) {
        throw new Error("Error al obtener los clientes");
      }

      const datos: ICliente[] = await respuesta.json();

      setClientes(datos);

      return datos;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error desconocido");
      }
    } finally {
      setCargando(false);
    }
  }, []);

  const obtenerClientesEliminados = useCallback(async (): Promise<
    ICliente[] | undefined
  > => {
    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch(`${URL_BASE}/deleteds`);

      if (!respuesta.ok) {
        throw new Error("Error al obtener los clientes eliminados");
      }

      const datos: ICliente[] = await respuesta.json();

      setClientes(datos);

      return datos;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error desconocido al obtener los clientes eliminados");
      }
    } finally {
      setCargando(false);
    }
  }, []);

  const obtenerClientePorId = useCallback(
    async (id: number): Promise<ICliente | undefined> => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(`${URL_BASE}/${id}`);

        if (!respuesta.ok) {
          throw new Error("Error al obtener el cliente eliminado");
        }

        const cliente: ICliente = await respuesta.json();

        return cliente;
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido");
        }
      } finally {
        setCargando(false);
      }
    },
    []
  );

  const agregarCliente = useCallback(
    async (cliente: Omit<ICliente, "id">): Promise<ICliente | undefined> => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(URL_BASE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cliente),
        });

        if (!respuesta.ok) {
          throw new Error("Error al crear el cliente");
        }

        const nuevoCliente: ICliente = await respuesta.json();

        setClientes((clientesActuales) => [
          ...clientesActuales,
          nuevoCliente,
        ]);

        return nuevoCliente;
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido");
        }
      } finally {
        setCargando(false);
      }
    },
    []
  );

  const editarCliente = useCallback(
    async (
      id: number,
      cliente: Partial<ICliente>
    ): Promise<void> => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(`${URL_BASE}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cliente),
        });

        if (!respuesta.ok) {
          throw new Error("Error al actualizar el cliente");
        }

        setClientes((clientesActuales) =>
          clientesActuales.map((c) =>
            c.id === id ? { ...c, ...cliente } : c
          )
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido");
        }
      } finally {
        setCargando(false);
      }
    },
    []
  );

  const eliminarCliente = useCallback(
    async (id: number): Promise<void> => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(`${URL_BASE}/${id}`, {
          method: "DELETE",
        });

        if (!respuesta.ok) {
          throw new Error("Error al eliminar el cliente");
        }

        setClientes((clientesActuales) =>
          clientesActuales.filter((c) => c.id !== id)
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido");
        }
      } finally {
        setCargando(false);
      }
    },
    []
  );

  const restaurarCliente = useCallback(
    async (id: number): Promise<void> => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(`${URL_BASE}/restore/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (!respuesta.ok) {
          throw new Error("Error al restaurar el cliente");
        }

        setClientes((clientesActuales) =>
          clientesActuales.filter((c) => c.id !== id)
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido al restaurar el cliente");
        }
      } finally {
        setCargando(false);
      }
    },
    []
  );

  useEffect(() => {
    obtenerClientes();
  }, [obtenerClientes]);

  return {
    clientes,
    cargando,
    error,
    obtenerClientes,
    obtenerClientePorId,
    agregarCliente,
    editarCliente,
    eliminarCliente,
    restaurarCliente,
    obtenerClientesEliminados,
    openModal,
    setOpenModal,
    verEliminados,
    setVerEliminados,
    clienteSeleccionado,
    setClienteSeleccionado,
  };
}