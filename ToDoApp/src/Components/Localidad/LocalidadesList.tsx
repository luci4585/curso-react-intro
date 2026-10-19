import { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, CircularProgress } from "@mui/material";
import AgregarEditarCliente from "../AgregarEditarCliente/AgregarEditarCliente";
import Localidad from "./Localidad";
import { useLocalidadContext } from "../LocalidadContext/LocalidadContext";

export default function LocalidadesList() {
  const {
    localidades,
    agregarLocalidad,
    editarLocalidad,
    obtenerLocalidades,
    obtenerLocalidadesEliminadas,
    openModal,
    setOpenModal,
    verEliminados,
    setVerEliminados,
    localidadSeleccionada,
    setLocalidadSeleccionada,
    cargando,
    error,
  } = useLocalidadContext();
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    setNombre(localidadSeleccionada?.name ?? "");
  }, [localidadSeleccionada]);

  const abrirAgregar = () => {
    setLocalidadSeleccionada(null);
    setNombre("");
    setOpenModal(true);
  };

  const cerrar = () => {
    setLocalidadSeleccionada(null);
    setOpenModal(false);
    setNombre("");
  };

  return (
    <section>
      <h2>Lista de Localidades</h2>
      <Button variant="contained" onClick={abrirAgregar}>Agregar Localidad</Button>
      <Button onClick={async () => {
        const nextVerEliminados = !verEliminados;
        setVerEliminados(nextVerEliminados);
        if (nextVerEliminados) {
          await obtenerLocalidadesEliminadas();
        } else {
          await obtenerLocalidades();
        }
      }}>
        {verEliminados ? "Ver Localidades Activas" : "Ver Localidades Eliminadas"}
      </Button>
      {error && <p role="alert">{error}</p>}
      {cargando && <CircularProgress aria-label="Cargando localidades..." />}
      <ul>
        {localidades.map((localidad) => <Localidad key={localidad.id} localidad={localidad} />)}
      </ul>
      {openModal && (
        <AgregarEditarCliente>
          <Card>
            <form onSubmit={async (event) => {
              event.preventDefault();
              const valor = nombre.trim();
              if (!valor) return;
              if (localidadSeleccionada) {
                await editarLocalidad(localidadSeleccionada.id, { name: valor });
              } else {
                await agregarLocalidad({ name: valor });
              }
              cerrar();
            }}>
              <CardContent>
                <h2>{localidadSeleccionada ? "Editar Localidad" : "Agregar Localidad"}</h2>
                <label htmlFor="localidadNombre">Nombre:</label>
                <input
                  id="localidadNombre"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  required
                  autoFocus
                />
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button type="submit" variant="contained">Guardar</Button>
                <Button type="button" variant="outlined" onClick={cerrar}>Cerrar</Button>
              </CardActions>
            </form>
          </Card>
        </AgregarEditarCliente>
      )}
    </section>
  );
}
