import Card  from "@mui/material/Card";
import CardHeader  from "@mui/material/CardHeader";
import CardContent  from "@mui/material/CardContent";
import CardActions  from "@mui/material/CardActions";
import Button  from "@mui/material/Button";
import Typography  from "@mui/material/Typography";
import type ICliente from "../../Interfaces/ICliente";


export default function Cliente({ cliente }: { cliente: ICliente }) {
    return (
            <Card>
                <CardHeader>
                    <Typography variant="h5">{cliente.firstname} {cliente.lastname}</Typography>
                </CardHeader>
                <CardContent>
                    <p>DNI: {cliente.dni} </p>
                    <p>Dirección: {cliente.adress}</p>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button variant="contained">Editar</Button>
                    <Button variant="outlined">Eliminar</Button>
                </CardActions>
            </Card>
    );
}