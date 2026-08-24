import gato from '../../assets/gato.jpg'

export default function DatosAlumno({alumno, curso, año, enlace}: {alumno: String, curso: String, año: string, enlace: string}) {
    const imgStyle = {margin: '0 auto', display: 'block', width: '200px', height: '200px'}
  
    return (
    <>
    <h3>Soy: {alumno}</h3>
    <h3>Soy del curso: {curso}</h3>
    <h3>Año actual: {año}</h3>
    <img src={gato} style={imgStyle} className="gato" />
    <h3>La suma de 2 + 2 es: {2 + 2}</h3>
    <h3>Enlace de la imagen: <a href={enlace} target="_blank" rel="noopener noreferrer">Ver imagen</a></h3>
    </>
  )
}