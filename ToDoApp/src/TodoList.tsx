import TodoItem from './TodoItem'

interface Tarea {
    text: string
    completed: boolean
}

export default function TodoList ({ tareas, completeTodo, deleteTodo }: 
    { tareas: { text: string; completed: boolean }[], 
    completeTodo: (text: string) => void, deleteTodo: (text: string) => void }) {        
    return(
        <>
            {tareas.map(tarea=> (
                <TodoItem 
                    key={tarea.text} 
                    texto={tarea.text}
                    completado={tarea.completed}
                    onCompleteTodo={(text) => completeTodo(text)}
                    onDeleteTodo={(text) => deleteTodo(text)}
                />))
            }
        </>
    )
}