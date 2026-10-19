import AgregarEditarCliente from "../AgregarEditarCliente/AgregarEditarCliente";
import Cliente from "../Cliente/Cliente";
import { Button, Card, CardContent, CardActions, CircularProgress } from "@mui/material";
import { useClienteContext } from "../ClienteContext/ClienteContext";
import { useLocalidadContext } from "../LocalidadContext/LocalidadContext";
import LocalidadesList from "../Localidad/LocalidadesList";

export default function ClientesList() {
    const { clientes, 
            agregarCliente, 
            editarCliente,
            obtenerClientes, 
            obtenerClientesEliminados,
            setOpenModal,
            openModal,
            setVerEliminados,
            clienteSeleccionado,
            setClienteSeleccionado,
            verEliminados,
            error,
        } = useClienteContext();
        const { localidades, cargando: cargandoLocalidades, error: errorLocalidades } =
          useLocalidadContext();

        const cerrarModal = () => {
          setClienteSeleccionado(null);
          setOpenModal(false);
        };

        return (
        <div>
            <span className="fuente">Lista de Clientes</span>
            <br />
                <Button variant="contained" onClick={() => setOpenModal(true)}>Agregar Cliente</Button>
                <Button onClick={async () => {
                  const nextVerEliminados = !verEliminados;
                  setVerEliminados(nextVerEliminados);
                  if (nextVerEliminados) {
                    await obtenerClientesEliminados();
                  } else {
                    await obtenerClientes();
                  }
                }}>
                  {verEliminados ? "Ver Clientes Activos" : "Ver Clientes Eliminados"}
                </Button>

            {error && <p role="alert">{error}</p>}
            {errorLocalidades && <p role="alert">{errorLocalidades}</p>}
            {clientes.length === 0 && <CircularProgress aria-label='Cargando...' />}
            <ul>
                {clientes.map((cliente) => (
                    <Cliente key={cliente.id} 
                    cliente={cliente} 
                    />
                ))}
                {openModal && (
                    <AgregarEditarCliente>
                        <Card>
                        <form onSubmit={async (event) => {
                            event.preventDefault();
                            const datos = new FormData(event.currentTarget);
                            const localidadId = Number(datos.get("localidadId"));
                            if (!localidadId) {
                              return;
                            }
                            const nuevoCliente = {
                              firstname: String(datos.get("firstname") ?? ""),
                              lastname: String(datos.get("lastname") ?? ""),
                              dni: String(datos.get("dni") ?? ""),
                              address: String(datos.get("address") ?? ""),
                              localidadId,
                            };
                            if (clienteSeleccionado) {
                              await editarCliente(clienteSeleccionado.id, { ...nuevoCliente, id: clienteSeleccionado.id });
                            } else {
                              await agregarCliente(nuevoCliente);
                            }
                            cerrarModal();
                          }}>
                          <CardContent>
                            <h2>{clienteSeleccionado ? "Editar Cliente" : "Agregar Cliente"}</h2>
                            <label htmlFor="firstname">Nombre:</label>
                            <input type="text" id="firstname" name="firstname" defaultValue={clienteSeleccionado?.firstname ?? ""} required />
                            <label htmlFor="lastname">Apellido:</label>
                            <input type="text" id="lastname" name="lastname" defaultValue={clienteSeleccionado?.lastname ?? ""} required />
                            <label htmlFor="dni">DNI:</label>
                            <input type="text" id="dni" name="dni" defaultValue={clienteSeleccionado?.dni ?? ""} required />
                            <label htmlFor="address">Dirección:</label>
                            <input type="text" id="address" name="address" defaultValue={clienteSeleccionado?.address ?? ""} required />
                            <label htmlFor="localidadId">Localidad:</label>
                            <select id="localidadId" name="localidadId" defaultValue={clienteSeleccionado?.localidadId ?? ""} required disabled={cargandoLocalidades}>
                              <option value="" disabled>
                                {cargandoLocalidades ? "Cargando localidades..." : "Seleccioná una localidad"}
                              </option>
                              {localidades.map((localidad) => (
                                <option key={localidad.id} value={localidad.id}>{localidad.name}</option>
                              ))}
                            </select>
                          </CardContent>
                          <CardActions sx={{ justifyContent: "center" }}>
                            <Button variant="contained" type="submit" disabled={cargandoLocalidades || localidades.length === 0}>
                              Guardar
                            </Button>
                            <Button variant="outlined" type="button" onClick={cerrarModal}>
                              Cerrar
                            </Button>
                          </CardActions>
                        </form>
                      </Card>
                    </AgregarEditarCliente>
                )}

            </ul>
            <LocalidadesList />
        </div>
    );
}