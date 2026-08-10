import './TodoCreateButton.css';

function TodoCreateButton() {
  return (
    <button
      className="TodoCreateButton"
      onClick={
        (event) => {
          console.log('le diste click')
          console.log(event)
          console.log(event.target)
        }
      }
    >+</button>
  );
}

export { TodoCreateButton };