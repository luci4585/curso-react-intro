import React from 'react'
import './App.css'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoItem from '../TodoItem/TodoItem'
import TodoCounter from '../TodoCounter/TodoCounter'
import TodoSearch from '../TodoSearch/TodoSearch'
import CreateTodoButton from '../CreateTodoButton/CreateTodoButton'
import TodoList from '../TodoList/TodoList'
import { TodoContext } from '../TodoContext/TodoContext'
import TodoAlumno from '../TodoAlumno/TodoAlumno'

export default function App() {
const {tareasFiltradas, completeTodo, deleteTodo} = React.useContext(TodoContext)!;
  return (
    <>
      <TodoHeader />
      <TodoCounter />
      <TodoSearch />
      <TodoList>{tareasFiltradas.map(tarea=> (
                <TodoItem 
                    key={tarea.texto}
                    texto={tarea.texto}
                    completado={tarea.completado}
                    onCompleteTodo={completeTodo}
                    onDeleteTodo={deleteTodo}
                />
            ))}
      </TodoList>
      <TodoAlumno />
      <CreateTodoButton />
    </>
  )
}
