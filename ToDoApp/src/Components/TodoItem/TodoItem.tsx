import './TodoItem.css';

export default function TodoItem({
  texto, 
  completado, 
  onCompleteTodo, 
  onDeleteTodo}: 
  { 
    texto: string; 
    completado: boolean; 
    onCompleteTodo: (text: string) => void; 
    onDeleteTodo: (text: string) => void }) 
  {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completado ? "Icon-check--active" : ""}`}
      onClick={() => onCompleteTodo(texto)}>V</span>
      <p className={`TodoItem-p ${completado ? "TodoItem-p--complete" : ""}`}>{texto}</p>
      <span className="Icon Icon-delete" onClick={() => onDeleteTodo(texto)}>X</span>
    </li>
  );
}

