import "./TodoItem.css";

function TodoItem({text, completed}) { 
    return (
        <li className="TodoItem">
           <p className={completed ? "TodoItem-p TodoItem-p--complete" : "TodoItem-p"}>
            <span>✅</span>
            {text}
            <span>❌</span>
            </p>
        </li>
    );
}

export { TodoItem };