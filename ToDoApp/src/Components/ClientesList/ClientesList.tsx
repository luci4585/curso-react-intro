import useClientesApi from "../../Hooks/useClientesApi";
import Cliente from "../Cliente/Cliente";

export default function ClientesList() {
    const { clientes, eliminarCliente } = useClientesApi();
    console.log(clientes);

        return (
        <div>
            <span className="fuente">Lista de Clientes</span>
            <ul>
                {clientes.map((cliente) => (
                    <Cliente key={cliente.id} cliente={cliente} eliminarCliente={eliminarCliente} />
                ))}
            </ul>
        </div>
    );
}