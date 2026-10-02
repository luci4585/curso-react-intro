 import DatosAlumno from '../DatosAlumno/DatosAlumno'
 import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'
 import AccionesAlumno from '../AccionesAlumno/AccionesAlumno'
 import EstadoNumero from '../EstadoNumero/EstadoNumero'

     function verAlumno() {
        alert('Ver Alumno');
    }
    function editarAlumno() {
        alert('Editar Alumno');
    }
    function eliminarAlumno() {
        alert('Eliminar Alumno');
    }

function AppEjercicio() {
  return (
    <>
      <Encabezado />
      <DatosAlumno 
        alumno="Juan Pérez" 
        curso="Ingeniería" 
        año="2023" 
        enlace="https://example.com/image.jpg" />
      <TarjetaProducto />
      <TarjetaProducto />
      <EstadoNumero numero={0} />
      <EstadoNumero numero={10} />
      <EstadoNumero numero={-5} />
      <EstadoNumero numero={0} />
      <Materias />
      <AccionesAlumno verAlumno={verAlumno} editarAlumno={editarAlumno} eliminarAlumno={eliminarAlumno} />
      <PieDePagina />
    </>
  )
}

function Encabezado() {
  return <h1>Perfil del alumno</h1>
}


function Materias() {
    return (
    <>
      <h2>Materias</h2>
      <ul>
        <li>Matemáticas</li>
        <li>Historia</li>
        <li>Geografía</li>
      </ul>
    </>
  )
}

function PieDePagina() {
    return (
        <>
            <footer>
                <p>© 2026 Mi Aplicación de Tareas. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}

export {Encabezado, AppEjercicio, Materias, PieDePagina}