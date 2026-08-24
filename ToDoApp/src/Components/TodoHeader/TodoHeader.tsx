import isp20 from '../../assets/isp20.png'

export default function TodoHeader() {
    const imgStyle = {margin: '0 auto', display: 'block', width: '200px', height: '200px'}
    return (
        <>
        <h3>Conociendo React</h3>
        <img src={isp20} style={imgStyle} className="isp20" alt="Logo Isp20" />
        </>
    )}