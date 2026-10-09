import ClientesList from "../ClientesList/ClientesList";
import { ClienteProvider } from "../ClienteContext/ClienteContext";

export default function AppClientes() {
    return (
        <ClienteProvider>
            <ClientesList />
        </ClienteProvider>
    );
}