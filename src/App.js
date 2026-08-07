import logo from './platzi.webp';
import './App.css';
import {TodoItem} from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { listaTareas } from './ListaTareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoCounter completed={2} total={5} />
        <TodoSearch />
        <TodoList>
        {listaTareas.map(tarea => (
          <TodoItem key={tarea.text} text={tarea.text} completed={tarea.completed} />
        ))}
        </TodoList>
        <CreateTodoButton />
      </header>
    </div>
  );
}

export default App;
