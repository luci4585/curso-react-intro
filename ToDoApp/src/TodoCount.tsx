export default function TodoCount({ completadas, total }: { completadas: number; total: number }) {
    return (
        <h1>
            Completaste {completadas} de {total} tareas
        </h1>
    )
}