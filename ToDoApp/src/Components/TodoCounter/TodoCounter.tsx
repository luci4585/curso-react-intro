import './TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

export default function TodoCounter() {
  const { completadas, total } = React.useContext(TodoContext)!;
  return (
    <h1 className="TodoCounter">
      {completadas === total ? (
      <span>¡Felicidades! Has completado todas las TODOs</span>
      ) : (
      <span> Has completado {completadas} de {total} TODOs</span>
      )}
    </h1>
  );
}
