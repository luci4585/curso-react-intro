import React from "react";
import TodoCounter from "../TodoCounter/TodoCounter";


export type Todo = {
    texto: string;
    completado: boolean;
};

export type TodoContextType = {
    tareasFiltradas: Todo[];
    completadas: number;
    total: number;
    textoBusqueda: string;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    setTextoBusqueda: (texto: string) => void;
    addTodo: (text: string) => void;
    completeTodo: (text: string) => void;
    deleteTodo: (text: string) => void;
};

const TodoContext = React.createContext<TodoContextType | null>(null);

function TodoProvider({ children }: { children: React.ReactNode }) {
    const listaTareas = [
        { texto: 'Cambiar la garrafa', completado: false },
        { texto: 'Ir al padel', completado: false },
        { texto: 'actualizar el CV', completado: false },
    ];
    const [tareasApp, setTareasApp] = React.useState<Todo[]>(listaTareas);
    const [textoBusqueda, setTextoBusqueda] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completadas= tareasApp.filter(tarea => tarea.completado).length;
    const total = tareasApp.length;
    const tareasFiltradas = tareasApp.filter(
        tarea => tarea.texto.toLowerCase().includes(textoBusqueda.toLowerCase())
    );

    const completeTodo = (texto:string) => {
    const newTodos = [...tareasApp];
    const todoIndex = newTodos.findIndex((todo) => todo.texto === texto );
    newTodos[todoIndex].completado = !newTodos[todoIndex].completado    ;
    setTareasApp(newTodos); };

    const deleteTodo = (texto:string) => {
    const newTodos = [...tareasApp];
    const todoIndex = newTodos.findIndex((todo) => todo.texto === texto );
    newTodos.splice(todoIndex, 1);
    setTareasApp(newTodos); }

    const addTodo = (texto:string) => {
    const newTodos = [...tareasApp];
    newTodos.push({
        texto: texto,
        completado: false,
    });
    setTareasApp(newTodos);}  
    

   return (<TodoContext.Provider
      value={{
        tareasFiltradas,
        completadas,
        total,
        textoBusqueda,
        openModal,
        setOpenModal,
        setTextoBusqueda,
        addTodo,
        completeTodo,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>)
}

export { TodoContext, TodoProvider };
