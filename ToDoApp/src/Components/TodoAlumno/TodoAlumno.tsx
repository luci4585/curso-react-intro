import gato from '../../assets/gato.jpg'

export default function TodoAlumno() {
    const alumno= 'Lucia Lencina'
    const curso= '3er año'
    const año= new Date().getFullYear()
    const imgStyle = {margin: '0 auto', display: 'block', width: '200px', height: '200px'}
    const enlace= 'https://media.istockphoto.com/id/1325997570/photo/bengal-cat-lying-on-sofa-and-smiling.jpg?s=2048x2048&w=is&k=20&c=fVAbO6ILkMUBsHu2fwnUp6sJHG3TPSXZ1p9TCFVyHVw='
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