import { useState, useEffect, useCallback } from "react";

const URL_BASE =
  "https://api-inventario-ale-fcdhb0brcahmb4dy.westus3-01.azurewebsites.net/api/Clientes";

export interface Cliente {
  id: number;
  firstname: string;
  lastname: string;
  // Agregá aquí las demás propiedades reales de tu entidad Cliente.
}

export default function useClientesApi() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const obtenerClientes = useCallback(async (): Promise<
    Cliente[] | undefined
  > => {
    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch(URL_BASE);

      if (!respuesta.ok) {
        throw new Error("Error al obtener los clientes");
      }

      const datos: Cliente[] = await respuesta.json();

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

  const obtenerClientePorId = useCallback(
    async (id: number): Promise<Cliente | undefined> => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(`${URL_BASE}/${id}`);

        if (!respuesta.ok) {
          throw new Error("Error al obtener el cliente");
        }

        const cliente: Cliente = await respuesta.json();

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

  const crearCliente = useCallback(
    async (cliente: Omit<Cliente, "id">): Promise<Cliente | undefined> => {
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

        const nuevoCliente: Cliente = await respuesta.json();

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

  const actualizarCliente = useCallback(
    async (
      id: number,
      cliente: Partial<Omit<Cliente, "id">>
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

  useEffect(() => {
    obtenerClientes();
  }, [obtenerClientes]);

  return {
    clientes,
    cargando,
    error,
    obtenerClientes,
    obtenerClientePorId,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
  };
}