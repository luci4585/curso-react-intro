import { useState } from "react";

export default function AccionesAlumno(props: {verAlumno: () => void, editarAlumno: () => void, eliminarAlumno: () => void}) {
    const [ultimaAccion, setUltimaAccion] = useState<string | null>('');
    const [showLastAction, setLastAction] = useState<boolean>(true);
    const [mensaje, setMensaje] = useState<string>('');

    const lista: string[] = ['Juan', 'María', 'Pedro', 'Ana', 'Luis'];

    const [listaAlumnos, setListaAlumnos] = useState<string[]>(lista);

    return (
        <>
            <h2>Acciones del Alumno: {mensaje}</h2>
            {showLastAction && <h3>Última acción realizada: {ultimaAccion}</h3>}
            <button onClick={ () => { setUltimaAccion('Ver Alumno'); props.verAlumno(); }}>Ver Alumno</button>
            <button onClick={ () => { setUltimaAccion('Editar Alumno'); props.editarAlumno(); }}>Editar Alumno</button>
            <button onClick={ () => { setListaAlumnos(listaAlumnos.filter((alumno) => alumno !== 'Javier')); }}>Eliminar Alumno</button>
            <button onClick={ () => {
                setLastAction(!showLastAction); }}>Mostrar/Ocultar última acción</button>
            <button onClick={() => setMensaje('Hola, este es un mensaje de prueba')}>Actualizar Mensaje</button>
            <p>Mensaje de prueba</p>
            <label htmlFor="mensaje">Mensaje:</label>
            <input type="text" id="mensaje" value={mensaje} 
            onChange={(e) => setMensaje(e.target.value)} />
            <h3>Lista de Alumnos:</h3>
            <ul>
                {listaAlumnos.map((alumno, index) => (
                    <li key={index}>{alumno}</li>
                ))}
            </ul>
            <button onClick={() => setListaAlumnos([...listaAlumnos, "Javier"])}
            >Agregar Alumno</button>
        </>
    )
}