import TodoItem from "./TodoItem"

export default function TodoList () {
        const listaTareas = [
            { text: 'Cambiar la garrafa', completed:false},
            { text: 'Ir al padel', completed:false},
            { text: 'actualizar el CV', completed:false}
        ]
    return(
        <>
            {listaTareas.map(tarea=> (
                <TodoItem 
                    key={tarea.text} 
                    texto={tarea.text}
                    completed={tarea.completed}
                />))
            }
        </>
    )
}