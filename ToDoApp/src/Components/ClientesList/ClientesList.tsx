import useClientesApi from "../../Hooks/useClientesApi";
import Cliente from "../Cliente/Cliente";

export default function ClientesList() {
    const { clientes } = useClientesApi();
    console.log(clientes);

        return (
        <div>
            <span className="fuente">Lista de Clientes</span>
            <ul>
                {clientes.map((cliente) => (
                    <Cliente key={cliente.id} cliente={cliente} />
                ))}
            </ul>
        </div>
    );
}