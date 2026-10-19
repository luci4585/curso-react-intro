import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import type ILocalidad from "../../Interfaces/ILocalidad";
import { useLocalidadContext } from "../LocalidadContext/LocalidadContext";

export default function Localidad({ localidad }: { localidad: ILocalidad }) {
  const {
    eliminarLocalidad,
    restaurarLocalidad,
    setLocalidadSeleccionada,
    setOpenModal,
    verEliminados,
  } = useLocalidadContext();

  const confirmar = async (accion: () => Promise<void>, mensaje: string) => {
    const resultado = await Swal.fire({
      title: "¿Estás seguro?",
      text: mensaje,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, continuar",
    });
    if (resultado.isConfirmed) {
      await accion();
    }
  };

  return (
    <Card>
      <CardHeader title={<Typography variant="h5">{localidad.name}</Typography>} />
      <CardContent>
        <Typography>ID: {localidad.id}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {verEliminados ? (
          <Button onClick={() => confirmar(() => restaurarLocalidad(localidad.id), "Deseas restaurar esta localidad")}>
            Restaurar
          </Button>
        ) : (
          <>
            <Button onClick={() => {
              setLocalidadSeleccionada(localidad);
              setOpenModal(true);
            }}>
              Editar
            </Button>
            <Button variant="outlined" onClick={() => confirmar(() => eliminarLocalidad(localidad.id), "No podrás revertir esto")}>
              Eliminar
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}
