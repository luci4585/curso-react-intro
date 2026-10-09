import useClientesApi from "../../Hooks/useClientesApi";
import AgregarEditarCliente from "../AgregarEditarCliente/AgregarEditarCliente";
import Cliente from "../Cliente/Cliente";
import { useState } from "react";
import { Button, Card, CardContent, CardActions, CircularProgress } from "@mui/material";
import type ICliente from "../../Interfaces/ICliente";

export default function ClientesList() {
    const { clientes, 
            restaurarCliente, 
            agregarCliente, 
            editarCliente, 
            eliminarCliente, 
            obtenerClientes, 
            obtenerClientesEliminados } = useClientesApi();
    const [openModal, setOpenModal] = useState(false);
    const [verEliminados, setVerEliminados] = useState(false);
    const [clienteSeleccionado, setClienteSeleccionado] = useState<ICliente | null>(null);
    console.log(clientes);

        return (
        <div>
            <span className="fuente">Lista de Clientes</span>
            {clientes.length === 0 && <CircularProgress aria-label='Cargando...' />}
            <ul>
                {clientes.map((cliente) => (
                    <Cliente key={cliente.id} 
                    cliente={cliente} 
                    restaurarCliente={restaurarCliente}
                    eliminarCliente={eliminarCliente}
                    setOpenModal={setOpenModal}
                    setClienteSeleccionado={setClienteSeleccionado}
                    verEliminados= {verEliminados} />
                ))}
                {openModal && (
                    <AgregarEditarCliente>
                        <Card>
                        <CardContent>
                          <h2>Agregar/Editar Cliente</h2>
                          <label htmlFor="firstname">Nombre:</label>
                          <input type="text" id="firstname" name="firstname" defaultValue={clienteSeleccionado?.firstname ?? ""} />
                          <label htmlFor="lastname">Apellido:</label>
                          <input type="text" id="lastname" name="lastname" defaultValue={clienteSeleccionado?.lastname ?? ""} />
                          <label htmlFor="dni">DNI:</label>
                          <input type="text" id="dni" name="dni" defaultValue={clienteSeleccionado?.dni ?? ""} />
                          <label htmlFor="address">Dirección:</label>
                          <input type="text" id="address" name="address" defaultValue={clienteSeleccionado?.address ?? ""} />
                        </CardContent>
                        <CardActions sx={{ justifyContent: "center" }}>
                          <Button variant="contained" onClick={async () => {
                            const nuevoCliente = {
                              firstname: (document.getElementById("firstname") as HTMLInputElement).value,
                              lastname: (document.getElementById("lastname") as HTMLInputElement).value,
                              dni: (document.getElementById("dni") as HTMLInputElement).value,
                              address: (document.getElementById("address") as HTMLInputElement).value,
                              localidadId: 1,
                            };
                            if (clienteSeleccionado) {
                              const clienteEditado = await editarCliente(clienteSeleccionado.id, { ...nuevoCliente, id: clienteSeleccionado.id });
                              setClienteSeleccionado(null);
                            } else {
                              await agregarCliente(nuevoCliente);
                            }
                            setClienteSeleccionado(null);
                            setOpenModal(false);
                          }}>
                            Guardar
                          </Button>
                          <Button variant="outlined" onClick={() => setOpenModal(false)}>
                            Cerrar
                          </Button>
                        </CardActions>
                      </Card>
                    </AgregarEditarCliente>
                )}
                <Button variant="contained" onClick={() => setOpenModal(true)}>Agregar Cliente</Button>
                <Button onClick={async () => {
                  setVerEliminados(!verEliminados);
                  if (verEliminados === false) {
                    await obtenerClientesEliminados();
                  } 
                  else {
                    await obtenerClientes();
                  }
                }}>
                  {verEliminados ? "Ver Clientes Activos" : "Ver Clientes Eliminados"}
                </Button>
            </ul>
        </div>
    );
}