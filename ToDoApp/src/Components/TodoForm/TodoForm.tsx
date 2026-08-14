export default function TodoForm() {
  return (
    <>
        <form>
            <label htmlFor="todo">Nueva Tarea</label>
            <input type="text" id="todo" name="todo" 
                    placeholder="Escribe tu nueva tarea..."/>
            <button type="submit">Agregar</button>
        </form>
    </>
  )
}