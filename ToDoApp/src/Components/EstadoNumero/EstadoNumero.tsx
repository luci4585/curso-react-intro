import { useState } from "react";

export default function EstadoNumero(props: {numero: number}) {
    const [numero, setNumero] = useState<number>(props.numero);
    const [mensaje, setMensaje] = useState<string>('');

    return (
        <>
            <h2>Estado del Número: {mensaje}</h2>
            <p>Número actual: {numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
            <button onClick={() => setNumero(numero - 1)}>Decrementar</button>
            <button onClick={() => setNumero(0)}>Reiniciar</button>
            <button onClick={() => setMensaje('El número ha sido actualizado')}>Actualizar Mensaje</button>
            <label htmlFor="mensaje">Mensaje:</label>
            <input type="text" id="mensaje" value={mensaje} 
            onChange={(e) => setMensaje(e.target.value)} />
            {numero < 0 && <p>El número es negativo</p>}
            {numero > 0 && <p>El número es positivo</p>}
            {numero === 0 && <p>El número es cero</p>}
        </>
    )
}