import React from "react";

export type Todo = {
    text: string;
    completed: boolean;
};

export type TodoContextType = {
    TareasApp: Todo[];
    addTodo: (todo: Todo) => void;
    toggleTodo: (text: string) => void;
    deleteTodo: (text: string) => void;
};

const TodoContext = React.createContext<TodoContextType | null>(null);