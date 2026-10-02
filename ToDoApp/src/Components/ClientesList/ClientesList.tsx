import useClientesApi from "../../Hooks/useClientesApi";

export default function ClientesList() {
    const { clientes } = useClientesApi();
    console.log(clientes);

        return (
        <div>
            <span className="fuente">Lista de Clientes</span>
            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente.id}>{cliente.firstname} {cliente.lastname}</li>
                ))}
            </ul>
        </div>
    );
}