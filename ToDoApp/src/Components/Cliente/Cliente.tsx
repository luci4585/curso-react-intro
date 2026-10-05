import Card  from "@mui/material/Card";
import CardHeader  from "@mui/material/CardHeader";
import CardContent  from "@mui/material/CardContent";
import CardActions  from "@mui/material/CardActions";
import Button  from "@mui/material/Button";
import Typography  from "@mui/material/Typography";
import type ICliente from "../../Interfaces/ICliente";
import Swal from "sweetalert2";
import type { SweetAlertOptions } from "sweetalert2";

const configurarDialogEliminar: SweetAlertOptions = {
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo!'
  };

export default function Cliente({ cliente, eliminarCliente, setOpenModal, setClienteSeleccionado }: 
    { cliente: ICliente; eliminarCliente: (id: number) => void; 
        setOpenModal: (open: boolean) => void;
        setClienteSeleccionado: (cliente: ICliente | null) => void }) {
    const onEliminar = (id: number) => {
        Swal.fire(configurarDialogEliminar).then((result) => {
            if (result.isConfirmed) {
                eliminarCliente(id);
                Swal.fire(
                    '¡Eliminado!',
                    'El cliente ha sido eliminado.',
                    'success'
                );
            }
        });
    };

    return (
            <Card>
                <CardHeader title={<Typography variant="h5">{cliente.firstname} {cliente.lastname}</Typography>} />
                <CardContent>
                    <p>DNI: {cliente.dni} </p>
                    <p>Dirección: {cliente.adress}</p>
                </CardContent>

                <CardActions sx={{ justifyContent: "center" }}>
                    <Button variant="contained" onClick={() => {
                        setClienteSeleccionado(cliente);
                        setOpenModal(true);
                    }}>
                        Editar
                    </Button>
                    <Button variant="outlined" onClick={() => onEliminar(cliente.id)}>
                        Eliminar</Button>
                </CardActions>
            </Card>
    );
}