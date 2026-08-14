import './CreateTodoButton.css';

export default function CreateTodoButton() {
  return (
    <button className="CreateTodoButton"
      onClick={() => { console.log('le diste click')}}>
      +</button>
  );
}
