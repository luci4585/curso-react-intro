export default function TodoItem({texto, completed}: {texto: string, completed?: boolean}) {
    return (
        <li>
            <span>V</span>
            <p>{texto}</p>
            <span>X</span>
        </li>
    )
}