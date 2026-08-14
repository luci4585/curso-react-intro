import React from 'react';
import { useState } from 'react';
import './TodoSearch.css';

export default function TodoSearch({ textoBusqueda, setTextoBusqueda }: 
  { textoBusqueda: string; setTextoBusqueda: (texto: string) => void }) {
    

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
