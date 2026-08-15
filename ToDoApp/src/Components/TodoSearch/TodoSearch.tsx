import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

export default function TodoSearch() {
  const {textoBusqueda, setTextoBusqueda} = React.useContext(TodoContext)!;
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={textoBusqueda}
        onChange={(event) => setTextoBusqueda(event.target.value)
    }
    />
  );
}
