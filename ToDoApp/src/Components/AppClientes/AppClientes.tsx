import ClientesList from "../ClientesList/ClientesList";
import { ClienteProvider } from "../ClienteContext/ClienteContext";
import { LocalidadProvider } from "../LocalidadContext/LocalidadContext";

export default function AppClientes() {
    return (
        <LocalidadProvider>
            <ClienteProvider>
                <ClientesList />
            </ClienteProvider>
        </LocalidadProvider>
    );
}