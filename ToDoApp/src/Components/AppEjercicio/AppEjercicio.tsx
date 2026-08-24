 import DatosAlumno from '../DatosAlumno/DatosAlumno'
 import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'

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
      <TarjetaProducto />
      <Materias />
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