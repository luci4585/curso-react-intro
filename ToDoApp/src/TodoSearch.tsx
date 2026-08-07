import {useState} from 'react';

export default function TodoSearch () {
    const [searchValue, setSearchValue] = useState('');
    return(
        <>
            <label htmlFor="search">Buscar tarea:</label>
            <input id="search" placeholder="Buscar tarea..." value={searchValue} 
            onChange={(event) => setSearchValue(event.target.value)}
            />
            <p>Valor de busqueda: {searchValue}</p>
        </>
    )
}